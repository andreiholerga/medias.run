import { useCallback, useEffect, useMemo, useState } from "react";
import { buildSeries, bucketize, computeStats, movingAverage, periodEnd, START } from "../lib/stats.js";

// ---------- formatting ----------
const nf = (n, d = 1) => Number(n).toLocaleString("ro-RO", { maximumFractionDigits: d });
const D = (k) => new Date(k + "T00:00:00Z");
const fDay = (k) => new Intl.DateTimeFormat("ro-RO", { day: "numeric", month: "short", timeZone: "UTC" }).format(D(k));
const fDayLong = (k) =>
  new Intl.DateTimeFormat("ro-RO", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(D(k));
const fMonthLong = (k) => new Intl.DateTimeFormat("ro-RO", { month: "long", year: "numeric", timeZone: "UTC" }).format(D(k));
const fMonthShort = (k) => new Intl.DateTimeFormat("ro-RO", { month: "short", year: "2-digit", timeZone: "UTC" }).format(D(k));
const WEEKDAYS = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];

const KINDS = [
  { id: "day", label: "Zile" },
  { id: "week", label: "Săptămâni" },
  { id: "month", label: "Luni" },
  { id: "year", label: "Ani" },
];

function shortLabel(kind, k) {
  if (kind === "day") return fDay(k);
  if (kind === "week") return fDay(k);
  if (kind === "month") return fMonthShort(k);
  return k.slice(0, 4);
}
function longLabel(kind, k) {
  if (kind === "day") return fDayLong(k);
  if (kind === "week") return `${fDay(k)} – ${fDay(periodEnd("week", k))}`;
  if (kind === "month") return fMonthLong(k);
  return k.slice(0, 4);
}

function dayFraction() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Bucharest",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour").value) % 24;
  const m = Number(parts.find((p) => p.type === "minute").value);
  return (h * 60 + m) / 1440;
}

// ---------- chart ----------
function niceStep(maxV) {
  const raw = Math.max(maxV, 5) / 5;
  const p = 10 ** Math.floor(Math.log10(raw));
  for (const m of [1, 2, 2.5, 5, 10]) {
    if (m === 2.5 && p < 10) continue;
    if (m * p >= raw) return m * p;
  }
  return 10 * p;
}

function Chart({ data, type = "bar", line = null, height = 260, color = "#E85A3D" }) {
  const [hover, setHover] = useState(null);
  const W = 800;
  const H = height;
  const L = 46;
  const R = 12;
  const T = 14;
  const B = 30;
  const plotW = W - L - R;
  const plotH = H - T - B;
  const n = data.length;
  const maxV = Math.max(1, ...data.map((d) => d.value), ...(line || [0]));
  const step = niceStep(maxV);
  const top = Math.max(step, Math.ceil(maxV / step) * step);
  const ticks = [];
  for (let v = 0; v <= top + 1e-9; v += step) ticks.push(v);
  const slot = plotW / Math.max(n, 1);
  const x = (i) => L + slot * i + slot / 2;
  const y = (v) => T + plotH - (v / top) * plotH;
  const barW = Math.max(1.5, Math.min(44, slot * 0.72));
  const every = Math.max(1, Math.ceil(n / 8));
  const active = hover ?? n - 1;
  const cur = data[active];

  const path = data.map((d, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(d.value).toFixed(1)}`).join(" ");
  const linePath = line ? line.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ") : null;

  return (
    <div>
      <p className="min-h-[2.5rem] text-sm text-paper/70 mb-2">
        {cur ? (
          <>
            <span className="font-display font-bold uppercase text-paper">{cur.title}</span>{" "}
            <span className="font-mono text-trail-light">{cur.valueText}</span>{" "}
            <span className="text-paper/50">{cur.detail}</span>
          </>
        ) : (
          "—"
        )}
      </p>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto select-none"
        role="img"
        aria-label="Grafic vizite"
        onPointerLeave={() => setHover(null)}
      >
        {ticks.map((t) => (
          <g key={t}>
            <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="#F1EEE6" strokeOpacity="0.08" />
            <text x={L - 8} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#F1EEE6" fillOpacity="0.45" fontFamily="JetBrains Mono, monospace">
              {nf(t)}
            </text>
          </g>
        ))}

        {type === "bar" &&
          data.map((d, i) => (
            <rect
              key={d.key}
              x={x(i) - barW / 2}
              y={y(d.value)}
              width={barW}
              height={Math.max(0, T + plotH - y(d.value))}
              rx="1.5"
              fill={color}
              fillOpacity={i === active ? 1 : d.faded ? 0.45 : 0.78}
            />
          ))}

        {type === "line" && n > 0 && (
          <>
            <path d={`${path} L${x(n - 1)} ${T + plotH} L${x(0)} ${T + plotH} Z`} fill={color} fillOpacity="0.12" />
            <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            <circle cx={x(active)} cy={y(data[active].value)} r="4.5" fill={color} />
          </>
        )}

        {linePath && <path d={linePath} fill="none" stroke="#D9A441" strokeWidth="2" strokeLinejoin="round" />}

        {data.map((d, i) =>
          i % every === 0 ? (
            <text key={d.key} x={x(i)} y={H - 9} textAnchor="middle" fontSize="11" fill="#F1EEE6" fillOpacity="0.5" fontFamily="JetBrains Mono, monospace">
              {d.label}
            </text>
          ) : null,
        )}

        {data.map((d, i) => (
          <rect
            key={"hit" + d.key}
            x={L + slot * i}
            y={T}
            width={slot}
            height={plotH}
            fill="transparent"
            onPointerEnter={() => setHover(i)}
            onPointerDown={() => setHover(i)}
          />
        ))}
      </svg>
    </div>
  );
}

// ---------- small UI pieces ----------
function Card({ title, children, className = "" }) {
  return (
    <section className={`bg-ink-light border border-paper/10 p-5 md:p-6 ${className}`}>
      {title && (
        <h2 className="font-display text-sm font-bold tracking-[0.2em] uppercase text-paper/50 mb-4">{title}</h2>
      )}
      {children}
    </section>
  );
}

function Delta({ pct, label }) {
  if (pct === null || pct === undefined) return <p className="text-xs text-paper/35 mt-1">{label}: —</p>;
  const up = pct >= 0;
  return (
    <p className="text-xs mt-1">
      <span className={up ? "text-moss-light" : "text-trail-light"}>
        {up ? "▲" : "▼"} {nf(Math.abs(pct))}%
      </span>{" "}
      <span className="text-paper/40">{label}</span>
    </p>
  );
}

function Kpi({ label, value, sub, delta }) {
  return (
    <div className="bg-ink-light border border-paper/10 p-5">
      <p className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-paper/45 mb-2">{label}</p>
      <p className="font-mono text-3xl font-bold tabular-nums">{value}</p>
      {sub && <p className="text-xs text-paper/40 mt-1">{sub}</p>}
      {delta}
    </div>
  );
}

function Fact({ label, value, hint }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3 border-b border-paper/10 last:border-0">
      <div>
        <p className="text-sm">{label}</p>
        {hint && <p className="text-xs text-paper/40">{hint}</p>}
      </div>
      <p className="font-mono text-right font-bold shrink-0">{value}</p>
    </div>
  );
}

// ---------- dashboard ----------
export function Dashboard({ data }) {
  const [kind, setKind] = useState("day");

  const series = useMemo(() => buildSeries(data.rows, data.start, data.today), [data]);
  const stats = useMemo(() => computeStats(series, data.today, dayFraction()), [series, data.today]);
  const buckets = useMemo(() => (series.length ? bucketize(series, kind, data.today) : []), [series, kind, data.today]);

  if (!stats) return <p className="text-paper/60">Nu există date încă.</p>;

  const chartData = buckets.map((b) => ({
    key: b.key,
    label: shortLabel(kind, b.key),
    title: longLabel(kind, b.key),
    value: b.views,
    valueText: `${nf(b.views, 0)} vizite`,
    detail: `· ${nf(b.avg)}/zi${b.days > 1 ? ` · ${b.days} zile` : ""}${b.ongoing ? " · în curs" : ""}${b.startsEarly ? " · parțial" : ""}`,
    faded: b.ongoing,
  }));

  let acc = 0;
  const cumulative = series.map((p) => {
    acc += p.views;
    return {
      key: p.day,
      label: fDay(p.day),
      title: fDayLong(p.day),
      value: acc,
      valueText: `${nf(acc, 0)} total`,
      detail: `· +${nf(p.views, 0)} în ziua aceea`,
    };
  });

  const weekdayData = stats.weekdays.map((w) => ({
    key: "wd" + w.idx,
    label: WEEKDAYS[w.idx].slice(0, 3),
    title: WEEKDAYS[w.idx],
    value: w.avg,
    valueText: `${nf(w.avg)} vizite/zi`,
    detail: `· medie din ${w.count} ${w.count === 1 ? "zi" : "zile"}`,
  }));

  const tableRows = [...buckets].reverse().map((b, idx, arr) => {
    const prev = arr[idx + 1];
    const comparable = prev && !prev.startsEarly && !b.ongoing && prev.views > 0;
    return { ...b, pct: comparable ? ((b.views - prev.views) / prev.views) * 100 : null };
  });

  const bestBucket = (k) => {
    const list = bucketize(series, k, data.today);
    return list.length ? list.reduce((a, b) => (b.views > a.views ? b : a)) : null;
  };
  const bestWeek = bestBucket("week");
  const bestMonth = bestBucket("month");

  return (
    <div className="space-y-6">
      {/* KPI */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <Kpi label="Total vizite" value={nf(stats.total, 0)} sub={`în ${stats.days} ${stats.days === 1 ? "zi" : "zile"} de la ${fDay(START)}`} />
        <Kpi
          label="Azi"
          value={nf(stats.todayViews, 0)}
          sub={stats.todayEstimate !== null ? `estimat azi: ~${nf(stats.todayEstimate, 0)}` : "ziua abia a început"}
          delta={<Delta pct={stats.today.pct} label={`față de ieri (${stats.today.prev === null ? "—" : nf(stats.today.prev, 0)})`} />}
        />
        <Kpi
          label="Săptămâna aceasta"
          value={nf(stats.week.cur, 0)}
          sub="de luni până acum"
          delta={<Delta pct={stats.week.pct} label="față de aceleași zile, săpt. trecută" />}
        />
        <Kpi
          label="Luna aceasta"
          value={nf(stats.month.cur, 0)}
          sub={stats.monthProjection !== null ? `estimat la final de lună: ~${nf(stats.monthProjection, 0)}` : null}
          delta={<Delta pct={stats.month.pct} label="față de aceleași zile, luna trecută" />}
        />
      </div>

      {/* Evolution */}
      <Card title="Evoluția vizitelor">
        <div className="flex flex-wrap gap-2 mb-5">
          {KINDS.map((k) => (
            <button
              key={k.id}
              onClick={() => setKind(k.id)}
              className={`px-4 py-2 font-display font-bold uppercase tracking-wide text-sm transition-colors ${
                kind === k.id ? "bg-trail text-paper" : "bg-paper/10 text-paper/70 hover:bg-paper/20"
              }`}
            >
              {k.label}
            </button>
          ))}
        </div>
        <Chart data={chartData} line={kind === "day" ? movingAverage(series, 7) : null} />
        {kind === "day" && (
          <p className="text-xs text-paper/40 mt-2">
            <span className="inline-block w-3 h-[3px] bg-gold align-middle mr-2" />
            media mobilă pe 7 zile · barele estompate = perioadă în curs
          </p>
        )}
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card title="Creștere cumulată">
          <Chart data={cumulative} type="line" color="#6E8A63" />
        </Card>
        <Card title="Vizite pe zilele săptămânii (medie)">
          <Chart data={weekdayData} color="#D9A441" />
        </Card>
      </div>

      {/* Facts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card title="Statistici derivate">
          <Fact label="Medie pe zi" value={nf(stats.avg)} hint="zilele încheiate, fără azi" />
          <Fact label="Mediană pe zi" value={nf(stats.median)} hint="valoarea de mijloc; mai puțin sensibilă la zilele neobișnuite" />
          <Fact label="Abatere standard" value={nf(stats.stdDev)} hint="cât variază zilele față de medie" />
          <Fact
            label="Cea mai bună zi"
            value={`${nf(stats.best.views, 0)}`}
            hint={fDayLong(stats.best.day)}
          />
          <Fact
            label="Cea mai slabă zi încheiată"
            value={`${nf(stats.worst.views, 0)}`}
            hint={fDayLong(stats.worst.day)}
          />
          <Fact label="Zile fără nicio vizită" value={nf(stats.zeroDays, 0)} />
          <Fact label="Serie curentă cu vizite" value={`${stats.currentStreak} zile`} hint="zile consecutive cu cel puțin o vizită" />
          <Fact label="Cea mai lungă serie" value={`${stats.longestStreak} zile`} />
        </Card>

        <Card title="Tendințe și estimări">
          <Fact
            label="Ultimele 7 zile vs cele 7 dinainte"
            value={
              stats.trend
                ? stats.trend.pct === null
                  ? "—"
                  : `${stats.trend.pct >= 0 ? "▲" : "▼"} ${nf(Math.abs(stats.trend.pct))}%`
                : "—"
            }
            hint={stats.trend ? `${nf(stats.trend.last, 0)} vs ${nf(stats.trend.prev, 0)} vizite` : "apare după 14 zile complete de date"}
          />
          <Fact
            label="Ziua săptămânii cea mai activă"
            value={stats.bestWeekday ? WEEKDAYS[stats.bestWeekday.idx] : "—"}
            hint={stats.bestWeekday ? `medie ${nf(stats.bestWeekday.avg)} vizite` : null}
          />
          <Fact label="Pondere weekend" value={`${nf(stats.weekendShare)}%`} hint="sâmbătă + duminică din total" />
          <Fact label="Cea mai bună săptămână" value={bestWeek ? nf(bestWeek.views, 0) : "—"} hint={bestWeek ? longLabel("week", bestWeek.key) : null} />
          <Fact label="Cea mai bună lună" value={bestMonth ? nf(bestMonth.views, 0) : "—"} hint={bestMonth ? longLabel("month", bestMonth.key) : null} />
          <Fact label="Medie ultimele 7 zile" value={stats.recentAvg !== null ? nf(stats.recentAvg) : "—"} hint="vizite pe zi" />
          <Fact
            label="Estimare total anul acesta"
            value={stats.yearProjection !== null ? `~${nf(stats.yearProjection, 0)}` : "—"}
            hint="dacă ritmul din ultimele 7 zile se menține până la 31 dec"
          />
          <Fact label="Total anul acesta (până acum)" value={nf(stats.yearTotal, 0)} />
        </Card>
      </div>

      {/* Table */}
      <Card title={`Tabel · ${KINDS.find((k) => k.id === kind).label.toLowerCase()}`}>
        <div className="overflow-x-auto max-h-[28rem] overflow-y-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-ink-light text-paper/45 text-xs uppercase tracking-wider">
              <tr>
                <th className="text-left py-2 pr-4 font-bold">Perioadă</th>
                <th className="text-right py-2 px-3 font-bold">Vizite</th>
                <th className="text-right py-2 px-3 font-bold">Zile</th>
                <th className="text-right py-2 px-3 font-bold">Medie/zi</th>
                <th className="text-right py-2 pl-3 font-bold">Δ față de anterior</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {tableRows.map((r) => (
                <tr key={r.key} className="border-t border-paper/10">
                  <td className="py-2 pr-4 font-body capitalize">
                    {longLabel(kind, r.key)}
                    {r.ongoing && <span className="ml-2 text-xs text-gold normal-case">în curs</span>}
                    {r.startsEarly && <span className="ml-2 text-xs text-paper/40 normal-case">parțial</span>}
                  </td>
                  <td className="text-right py-2 px-3 font-bold">{nf(r.views, 0)}</td>
                  <td className="text-right py-2 px-3 text-paper/60">{r.days}</td>
                  <td className="text-right py-2 px-3 text-paper/60">{nf(r.avg)}</td>
                  <td
                    className={`text-right py-2 pl-3 ${
                      r.pct === null ? "text-paper/30" : r.pct >= 0 ? "text-moss-light" : "text-trail-light"
                    }`}
                  >
                    {r.pct === null ? "—" : `${r.pct >= 0 ? "▲" : "▼"} ${nf(Math.abs(r.pct))}%`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

// ---------- page ----------
const PW_KEY = "stats-pw";
const readPw = () => {
  try {
    return sessionStorage.getItem(PW_KEY) || "";
  } catch {
    return "";
  }
};

export default function Statistici() {
  const [password, setPassword] = useState(readPw);
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [wrong, setWrong] = useState(false);

  const logout = useCallback(() => {
    try {
      sessionStorage.removeItem(PW_KEY);
    } catch {}
    setPassword("");
    setData(null);
  }, []);

  const load = useCallback(() => {
    if (!password) return;
    fetch("/api/history", { headers: { Authorization: `Bearer ${password}` } })
      .then((r) => {
        if (r.status === 401) throw new Error("auth");
        return r.ok ? r.json() : Promise.reject(new Error("api"));
      })
      .then((d) => {
        setData(d);
        setError(false);
        setWrong(false);
      })
      .catch((e) => {
        if (e.message === "auth") {
          logout();
          setWrong(true);
        } else setError(true);
      });
  }, [password, logout]);

  useEffect(() => {
    document.title = "Statistici vizite";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  useEffect(() => {
    load();
    if (!password) return;
    const id = setInterval(load, 60000);
    return () => clearInterval(id);
  }, [load, password]);

  function submit(e) {
    e.preventDefault();
    if (!input) return;
    try {
      sessionStorage.setItem(PW_KEY, input);
    } catch {}
    setWrong(false);
    setPassword(input);
    setInput("");
  }

  if (!password) {
    return (
      <main className="bg-ink text-paper min-h-[70vh] flex items-center justify-center px-5">
        <form onSubmit={submit} className="w-full max-w-sm bg-ink-light border border-paper/10 p-8">
          <h1 className="font-display text-3xl font-black uppercase mb-6">
            Statistici <span className="text-trail-light">vizite</span>
          </h1>
          <label htmlFor="pw" className="block text-xs font-display font-bold tracking-[0.2em] uppercase text-paper/50 mb-2">
            Parolă
          </label>
          <input
            id="pw"
            type="password"
            autoFocus
            autoComplete="current-password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-ink border border-paper/20 px-4 py-3 text-paper focus:border-trail-light outline-none mb-4"
          />
          {wrong && <p className="text-sm text-trail-light mb-4">Parolă greșită.</p>}
          <button
            type="submit"
            className="w-full bg-trail text-paper font-display font-bold uppercase tracking-wide py-3 hover:bg-trail-light transition-colors"
          >
            Intră
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="bg-ink text-paper min-h-screen">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase leading-[1.05]">
              Statistici <span className="text-trail-light">vizite</span>
            </h1>
            <p className="text-paper/50 mt-2 text-sm">
              Din {fDayLong(START)} · se actualizează automat la 60 de secunde
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={load}
              className="px-5 py-2.5 bg-paper/10 hover:bg-trail text-paper font-display font-bold uppercase tracking-wide text-sm transition-colors"
            >
              Reîmprospătează
            </button>
            <button
              onClick={logout}
              className="px-5 py-2.5 bg-paper/10 hover:bg-paper/20 text-paper font-display font-bold uppercase tracking-wide text-sm transition-colors"
            >
              Ieșire
            </button>
          </div>
        </div>

        {error && (
          <p className="bg-trail/20 border border-trail p-4 text-sm mb-6">
            Nu am putut încărca datele. API-ul există doar pe Cloudflare sau local în <code>wrangler dev</code>.
          </p>
        )}
        {!data && !error && <p className="text-paper/50">Se încarcă…</p>}
        {data && <Dashboard data={data} />}
      </div>
    </main>
  );
}
