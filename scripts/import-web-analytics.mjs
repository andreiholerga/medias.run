// Descarcă vizitele zilnice din Cloudflare Web Analytics și generează un fișier SQL pentru D1.
//
// Rulare (Node 18+), din folderul proiectului:
//   CF_API_TOKEN=... CF_ACCOUNT_ID=... CF_SITE_TAG=... node scripts/import-web-analytics.mjs [DE_LA] [PÂNĂ_LA]
// Exemplu:
//   node scripts/import-web-analytics.mjs 2026-01-01 2026-11-11
//
// Tokenul NU se pune în cod și nu se dă commit. Se trimite doar ca variabilă de mediu.

const { CF_API_TOKEN, CF_ACCOUNT_ID, CF_SITE_TAG } = process.env;
const FROM = process.argv[2] || "2026-01-01";
const TO = process.argv[3] || "2026-11-11"; // ziua dinaintea startului dashboard-ului

if (!CF_API_TOKEN || !CF_ACCOUNT_ID || !CF_SITE_TAG) {
  console.error("Lipsesc variabilele CF_API_TOKEN, CF_ACCOUNT_ID sau CF_SITE_TAG.");
  process.exit(1);
}

const query = `
query ($acc: String!, $site: String!, $from: Time!, $to: Time!) {
  viewer {
    accounts(filter: { accountTag: $acc }) {
      rumPageloadEventsAdaptiveGroups(
        limit: 5000
        filter: { siteTag: $site, datetime_geq: $from, datetime_leq: $to }
        orderBy: [date_ASC]
      ) {
        count
        dimensions { date }
      }
    }
  }
}`;

// Cloudflare nu acceptă intervale mai late de 13 săptămâni și 2 zile, deci cerem datele în bucăți de 90 de zile.
const DAY = 86400000;
const addDays = (d, n) => new Date(new Date(d + "T00:00:00Z").getTime() + n * DAY).toISOString().slice(0, 10);
const perDay = new Map();

for (let start = FROM; start <= TO; ) {
  const end = addDays(start, 89) < TO ? addDays(start, 89) : TO;
  const res = await fetch("https://api.cloudflare.com/client/v4/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${CF_API_TOKEN}`, "content-type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { acc: CF_ACCOUNT_ID, site: CF_SITE_TAG, from: `${start}T00:00:00Z`, to: `${end}T23:59:59Z` },
    }),
  });
  const json = await res.json();
  if (!res.ok || json.errors) {
    console.error(`Eroare de la Cloudflare pentru ${start} .. ${end}:\n` + JSON.stringify(json.errors ?? json, null, 2));
    process.exit(1);
  }
  const groups = json.data?.viewer?.accounts?.[0]?.rumPageloadEventsAdaptiveGroups ?? [];
  for (const g of groups) {
    const day = g.dimensions.date;
    perDay.set(day, (perDay.get(day) || 0) + g.count);
  }
  console.log(`  ${start} .. ${end}: ${groups.length} grupuri`);
  start = addDays(end, 1);
}

const days = [...perDay.entries()].sort(([a], [b]) => a.localeCompare(b));
if (!days.length) {
  console.error("Nu am primit nicio zi de date. Verifică site tag-ul și intervalul.");
  process.exit(1);
}

const total = days.reduce((s, [, v]) => s + v, 0);
const sql = [
  `-- Web Analytics importat pentru ${FROM} .. ${TO}`,
  `-- Șterge valorile vechi/estimate din acest interval, apoi inserează cele reale.`,
  `DELETE FROM daily_views WHERE day >= '${FROM}' AND day <= '${TO}';`,
  `INSERT INTO daily_views (day, views) VALUES`,
  days.map(([d, v]) => `  ('${d}', ${v})`).join(",\n") + `;`,
  ``,
].join("\n");

await (await import("node:fs/promises")).writeFile("istoric.sql", sql);
console.log(`Gata: ${days.length} zile (${days[0][0]} .. ${days.at(-1)[0]}), ${total} vizite în total.`);
console.log("Fișier generat: istoric.sql");
