import { useEffect, useState } from "react";

function getRemaining(targetDate) {
  const distance = targetDate.getTime() - Date.now();
  if (distance <= 0) return null;
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

// targetDate: JS Date. accent: tailwind color class for the digits.
export default function CountdownTimer({ targetDate, accent = "text-trail" }) {
  const [remaining, setRemaining] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!remaining) {
    return (
      <p className={`font-display text-3xl md:text-4xl font-black uppercase ${accent}`}>
        Finalizat
      </p>
    );
  }

  const units = [
    { label: "zile", value: remaining.days },
    { label: "ore", value: remaining.hours },
    { label: "min", value: remaining.minutes },
    { label: "sec", value: remaining.seconds },
  ];

  return (
    <div className="flex items-end justify-center gap-4 md:gap-8">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <span className={`font-mono text-3xl md:text-5xl font-bold tabular-nums ${accent}`}>
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-ink/50 mt-1">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
