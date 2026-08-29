// A contour-line motif, echoing the elevation lines on the club's GPX routes.
// Used sparingly as a section signature rather than a decorative repeat.
export default function TopoDivider({ tone = "ink", className = "" }) {
  const stroke = tone === "paper" ? "#F1EEE6" : "#161A17";
  return (
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      className={`w-full h-8 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 20 C 100 5, 180 35, 280 18 S 460 2, 560 22 S 740 38, 840 16 S 1020 4, 1120 24 S 1200 20, 1200 20"
        fill="none"
        stroke={stroke}
        strokeOpacity="0.16"
        strokeWidth="1.5"
      />
      <path
        d="M0 26 C 120 12, 200 30, 300 24 S 480 10, 580 28 S 760 32, 860 22 S 1040 12, 1140 26 S 1200 24, 1200 24"
        fill="none"
        stroke={stroke}
        strokeOpacity="0.1"
        strokeWidth="1"
      />
    </svg>
  );
}

// A tiny elevation-profile squiggle used on route cards, derived from a
// distance + elevation-gain pair so every card's line is a little different.
export function ElevationSpark({ gain = 50, seed = 1, className = "" }) {
  const amp = Math.max(4, Math.min(16, gain / 12));
  const points = Array.from({ length: 7 }, (_, i) => {
    const x = (i / 6) * 100;
    const wobble = Math.sin(i * seed * 1.7) * amp;
    const y = 20 - wobble - (i / 6) * amp * 0.6;
    return `${x},${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 100 24" className={className} aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
