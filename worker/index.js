const TZ = "Europe/Bucharest";
const BOT_RE = /bot|crawler|spider|crawling|headless|preview|facebookexternalhit|slurp/i;

// "YYYY-MM-DD" în ora României (nu UTC), ca "azi" să se schimbe la miezul nopții local
function todayKey() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date());
}

function startOfWeek(dayStr) {
  const d = new Date(dayStr + "T00:00:00Z");
  const back = (d.getUTCDay() + 6) % 7; // săptămâna începe luni
  d.setUTCDate(d.getUTCDate() - back);
  return d.toISOString().slice(0, 10);
}

async function getStats(env, today) {
  const row = await env.DB.prepare(
    `SELECT
       COALESCE(SUM(views), 0)                                    AS total,
       COALESCE(SUM(CASE WHEN day = ?1  THEN views END), 0)       AS today,
       COALESCE(SUM(CASE WHEN day >= ?2 THEN views END), 0)       AS week,
       COALESCE(SUM(CASE WHEN day >= ?3 THEN views END), 0)       AS month,
       COALESCE(SUM(CASE WHEN day >= ?4 THEN views END), 0)       AS year
     FROM daily_views`,
  )
    .bind(today, startOfWeek(today), today.slice(0, 7) + "-01", today.slice(0, 4) + "-01-01")
    .first();
  return row;
}

const json = (data, init = {}) =>
  new Response(JSON.stringify(data), {
    ...init,
    headers: { "content-type": "application/json", ...(init.headers || {}) },
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (!url.pathname.startsWith("/api/")) {
      return env.ASSETS.fetch(request);
    }

    const today = todayKey();

    // Înregistrează o vizită și întoarce statisticile actualizate
    if (url.pathname === "/api/hit" && request.method === "POST") {
      const origin = request.headers.get("Origin");
      if (origin && new URL(origin).host !== url.host) {
        return json({ error: "forbidden" }, { status: 403 });
      }
      const ua = request.headers.get("User-Agent") || "";
      if (!ua || BOT_RE.test(ua)) {
        return json(await getStats(env, today), { headers: { "cache-control": "no-store" } });
      }
      await env.DB.prepare(
        `INSERT INTO daily_views (day, views) VALUES (?1, 1)
         ON CONFLICT(day) DO UPDATE SET views = views + 1`,
      )
        .bind(today)
        .run();
      return json(await getStats(env, today), { headers: { "cache-control": "no-store" } });
    }

    // Doar citire
    if (url.pathname === "/api/stats" && request.method === "GET") {
      return json(await getStats(env, today), { headers: { "cache-control": "public, max-age=60" } });
    }

    return json({ error: "not found" }, { status: 404 });
  },
};
