import { useLightbox } from "./Lightbox.jsx";

export default function MiniRouteCard({ route, accent = "text-trail" }) {
  const { openImage } = useLightbox();
  return (
    <div className="bg-white border border-ink/10 hover:border-trail transition-colors flex flex-col">
      <button onClick={() => openImage(route.img, route.name)} className="block overflow-hidden aspect-[4/3]">
        <img
          src={route.img}
          alt={route.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in"
        />
      </button>
      <div className="p-4 flex flex-col flex-1">
        <span className={`font-mono text-xs tracking-wide ${accent}`}>{route.tag}</span>
        <h3 className="font-display font-bold text-lg mb-2">{route.name}</h3>
        {route.gpx ? (
          <a
            href={route.gpx}
            download
            className="mt-auto inline-flex items-center gap-2 self-start bg-ink text-paper text-xs font-display font-bold uppercase tracking-wide px-4 py-2.5 hover:bg-trail transition-colors"
          >
            <span>⬇</span> Descarcă GPX
          </a>
        ) : (
          route.note && <p className="mt-auto text-xs text-mist">{route.note}</p>
        )}
      </div>
    </div>
  );
}
