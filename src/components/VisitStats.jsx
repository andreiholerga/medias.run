import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const fmt = (n) => Number(n).toLocaleString("ro-RO");

// Variabila de modul se resetează la fiecare încărcare completă a paginii (refresh,
// link nou, tab nou), dar rămâne la navigarea între pagini din site, deci:
// refresh = +1 vizită, schimbarea paginii în site = nu se numără.
// Pagina /statistici nu se numără: dacă încărcarea începe pe ea, marcăm vizita ca "deja trimisă".
const isStatsPath = (p) => p.startsWith("/statistici");
let hitSent = typeof window !== "undefined" && isStatsPath(window.location.pathname);

export default function VisitStats() {
  const { pathname } = useLocation();
  const hidden = isStatsPath(pathname);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (hidden) return; // pe /statistici nu apelăm API-ul de contorizare
    const url = hitSent ? "/api/stats" : "/api/hit";
    const method = hitSent ? "GET" : "POST";
    hitSent = true;

    fetch(url, { method })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setStats)
      .catch(() => {}); // în `npm run dev` API-ul nu există: componenta pur și simplu nu apare
  }, [hidden]);

  if (hidden || !stats) return null;

  const items = [
    ["Azi", stats.today],
    ["Săptămâna aceasta", stats.week],
    ["Luna aceasta", stats.month],
    ["Anul acesta", stats.year],
    ["Total", stats.total],
  ];

  return (
    <div className="border-t border-paper/10 py-6 px-6">
      <p className="text-center font-display text-[11px] font-bold tracking-[0.3em] uppercase text-paper/40 mb-4">
        Vizite
      </p>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        {items.map(([label, value]) => (
          <div key={label} className="text-center">
            <div className="font-mono text-xl font-bold text-paper tabular-nums">{fmt(value)}</div>
            <div className="text-[10px] tracking-widest uppercase text-paper/40">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
