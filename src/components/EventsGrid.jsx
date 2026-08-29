import { useState } from "react";
import { Link } from "react-router-dom";
import events from "../data/events.js";

function CardInner({ event }) {
  return (
    <>
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-mono text-[11px] tracking-widest uppercase text-trail">{event.eyebrow}</span>
      </div>
      <h3 className="font-display font-bold text-lg leading-tight mb-3 truncate">{event.title}</h3>
      <div className="relative overflow-hidden rounded-sm aspect-[11/14] bg-ink/5">
        <img
          src={event.img}
          alt={event.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-3 text-center font-mono text-xs tracking-wide text-trail">{event.date}</p>
    </>
  );
}

export default function EventsGrid() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? events : events.slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {visible.map((event) =>
          event.external ? (
            <a
              key={event.title}
              href={event.href}
              target="_blank"
              rel="noreferrer"
              className="group border border-ink/10 bg-paper p-3 hover:border-trail hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <CardInner event={event} />
            </a>
          ) : (
            <Link
              key={event.title}
              to={event.href}
              className="group border border-ink/10 bg-paper p-3 hover:border-trail hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <CardInner event={event} />
            </Link>
          ),
        )}
      </div>
      {events.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-trail text-paper font-display font-bold uppercase tracking-wide text-sm hover:bg-ink transition-colors"
          >
            {expanded ? "Vezi mai puține" : "Vezi mai multe"}
          </button>
        </div>
      )}
    </div>
  );
}
