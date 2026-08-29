import { useRef, useState } from "react";
import { useLightbox } from "./Lightbox.jsx";
import { binderbubiProjects, beanRoastersProjects, allAutismProjects } from "../data/autismProjects.js";

function TeamColumn({ headerImg, headerAlt, projects, activeId, onSelect }) {
  return (
    <div className="bg-paper-dim bg-white/60 border border-ink/10 rounded-sm p-5 flex flex-col items-center gap-5">
      <div className="h-16 flex items-center justify-center">
        <img src={headerImg} alt={headerAlt} className="h-full object-contain" />
      </div>
      <div className="grid grid-cols-5 gap-2 w-full">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            aria-label={p.title}
            className={`aspect-square rounded-sm overflow-hidden border-2 transition-all bg-white ${
              activeId === p.id ? "border-trail -translate-y-0.5 shadow-md" : "border-transparent hover:border-trail/50"
            }`}
          >
            <img src={p.logo} alt={p.title} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  const [activeId, setActiveId] = useState("b5");
  const galleryRef = useRef(null);
  const { openImage } = useLightbox();

  const active = allAutismProjects.find((p) => p.id === activeId) ?? allAutismProjects[0];

  function scrollGallery(dir) {
    const el = galleryRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  }

  function handleSelect(id) {
    setActiveId(id);
    if (galleryRef.current) galleryRef.current.scrollLeft = 0;
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <TeamColumn
          headerImg="/images/logo-bbr.webp"
          headerAlt="Binderbubi Running Mediaș"
          projects={binderbubiProjects}
          activeId={activeId}
          onSelect={handleSelect}
        />
        <TeamColumn
          headerImg="/images/bean_roasters_running.webp"
          headerAlt="Bean Roasters Running Mediaș"
          projects={beanRoastersProjects}
          activeId={activeId}
          onSelect={handleSelect}
        />
      </div>

      <div className="bg-white border border-ink/10 border-t-4 border-t-trail p-6 md:p-8 rounded-sm shadow-sm">
        <h3 className="font-display text-2xl md:text-3xl font-black uppercase mb-3">{active.title}</h3>
        <p className="text-ink/70 whitespace-pre-line leading-relaxed mb-6">{active.text}</p>

        <div className="relative flex items-center gap-3 max-w-xl mx-auto">
          {active.images.length > 1 && (
            <button
              onClick={() => scrollGallery(-1)}
              aria-label="Poza anterioară"
              className="shrink-0 w-11 h-11 rounded-full bg-trail text-paper flex items-center justify-center hover:bg-ink transition-colors"
            >
              &#10094;
            </button>
          )}
          <div
            ref={galleryRef}
            className="flex overflow-x-hidden no-scrollbar w-full snap-x snap-mandatory"
          >
            {active.images.map((img, i) => (
              <img
                key={img + i}
                src={img}
                alt={active.title}
                onClick={() => openImage(img, active.title)}
                className="shrink-0 w-full aspect-[4/3] object-contain bg-ink cursor-zoom-in snap-start"
              />
            ))}
          </div>
          {active.images.length > 1 && (
            <button
              onClick={() => scrollGallery(1)}
              aria-label="Poza următoare"
              className="shrink-0 w-11 h-11 rounded-full bg-trail text-paper flex items-center justify-center hover:bg-ink transition-colors"
            >
              &#10095;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
