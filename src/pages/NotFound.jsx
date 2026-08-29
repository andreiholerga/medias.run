import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="max-w-xl mx-auto px-6 py-32 text-center">
      <h1 className="font-display text-6xl font-black uppercase mb-4">
        404<span className="text-trail">.</span>
      </h1>
      <p className="text-ink/70 mb-8">Ai ieșit de pe traseu — pagina asta nu există.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-trail text-paper font-display font-bold uppercase tracking-wide px-8 py-4 hover:bg-ink transition-colors"
      >
        Înapoi acasă
      </Link>
    </main>
  );
}
