import { useState } from "react";
import { useLightbox } from "./Lightbox.jsx";
import { ElevationSpark } from "./TopoDivider.jsx";

const SURFACE_LABEL = { trail: "Trail", road: "Șosea", mixt: "Mixt" };

export default function RouteCard({ route }) {
  const [slide, setSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const { openImage } = useLightbox();

  function nextSlide(dir) {
    setSlide((s) => (s + dir + route.images.length) % route.images.length);
  }

  return (
    <div className="group flex flex-col bg-white border border-ink/10 hover:border-trail transition-colors">
      <div className="relative h-56 overflow-hidden bg-ink/10">
        {route.images.map((img, i) => (
          <img
            key={img}
            src={img}
            alt={route.name}
            onClick={() => openImage(img, route.name)}
            className={`absolute inset-0 w-full h-full object-cover cursor-zoom-in transition-opacity duration-500 ${
              i === slide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
        {route.images.length > 1 && (
          <>
            <button
              onClick={() => nextSlide(-1)}
              aria-label="Poza anterioară"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-ink/50 text-paper hover:bg-trail transition-colors"
            >
              &#10094;
            </button>
            <button
              onClick={() => nextSlide(1)}
              aria-label="Poza următoare"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-ink/50 text-paper hover:bg-trail transition-colors"
            >
              &#10095;
            </button>
          </>
        )}
        <span className="absolute bottom-2 left-2 bg-ink/70 text-paper text-[11px] font-mono px-2 py-1 uppercase tracking-wide">
          {SURFACE_LABEL[route.surface]}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-xs text-trail tracking-wide">{route.tag}</span>
          <ElevationSpark gain={route.elevation} seed={route.id} className="w-16 h-5 text-moss" />
        </div>
        <h3 className="font-display font-bold text-2xl mb-1">{route.name}</h3>
        <p className="text-xs text-mist font-mono mb-3">+{route.elevation} m diferență de nivel</p>

        <div className="relative mb-2">
          <p
            className={`text-sm text-ink/70 whitespace-pre-line leading-relaxed transition-all ${
              expanded ? "" : "max-h-[4.8em] overflow-hidden"
            }`}
          >
            {route.description}
          </p>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-1 text-trail font-semibold text-sm hover:underline"
          >
            {expanded ? "Arată mai puțin" : "Citește mai mult..."}
          </button>
        </div>

        {route.gpx && (
          <a
            href={route.gpx}
            download
            className="mt-auto inline-flex items-center gap-2 self-start bg-ink text-paper text-xs font-display font-bold uppercase tracking-wide px-5 py-3 hover:bg-trail transition-colors"
          >
            <span>⬇</span> Descarcă GPX
          </a>
        )}
      </div>
    </div>
  );
}
