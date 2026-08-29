import { useState } from "react";
import { useLightbox } from "./Lightbox.jsx";

const PREVIEW_COUNT = 0;

export default function RunnerGrid({ team, runners }) {
  const [expanded, setExpanded] = useState(false);
  const { openImage } = useLightbox();
  const visible = expanded ? runners : runners.slice(0, PREVIEW_COUNT);

  return (
    <div className="mb-14">
      <h3 className="text-center font-display text-2xl font-black uppercase mb-6">
        {team.name} <span className="text-trail">{team.suffix}</span>
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
        {visible.map((r) => (
          <button
            key={r.img}
            onClick={() => openImage(r.img, r.name)}
            className="aspect-square overflow-hidden bg-ink/5 cursor-zoom-in group"
          >
            <img
              src={r.img}
              alt={r.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </button>
        ))}
      </div>
      {runners.length > PREVIEW_COUNT && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="px-7 py-2.5 bg-trail text-paper font-display font-bold uppercase tracking-wide text-sm hover:bg-ink transition-colors"
          >
            {expanded ? "Închide" : "Vezi alergătorii"}
          </button>
        </div>
      )}
    </div>
  );
}
