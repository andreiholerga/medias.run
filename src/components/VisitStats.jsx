import { useEffect, useState } from "react";

const fmt = (n) => Number(n).toLocaleString("ro-RO");

export default function VisitStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let counted = false;
    try {
      counted = sessionStorage.getItem("visit-counted") === "1";
    } catch {}

    // prima pagină din sesiune = o vizită; restul doar citesc
    fetch("/api/" + (counted ? "stats" : "hit"), { method: counted ? "GET" : "POST" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        setStats(data);
        try {
          sessionStorage.setItem("visit-counted", "1");
        } catch {}
      })
      .catch(() => {}); // în `npm run dev` API-ul nu există: componenta pur și simplu nu apare
  }, []);

  if (!stats) return null;

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
