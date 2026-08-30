export default function PartnersSection({ label, items }) {
  return (
    <div className="py-8">
      <p className="text-center font-display text-xs font-bold tracking-[0.3em] uppercase text-mist mb-8">
        {label}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
        {items.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100 transition-all hover:-translate-y-1"
          >
            {p.img ? (
              <img src={p.img} alt={p.name} className="h-10 md:h-12 w-auto object-contain" />
            ) : (
              <span className="font-display font-bold uppercase text-sm text-ink/70">{p.name}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
