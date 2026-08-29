import { Link } from "react-router-dom";
import TopoDivider from "./TopoDivider";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/80 mt-20">
      <TopoDivider tone="paper" className="opacity-40" />
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-body">&copy; 2026 Binderbubi Backyard Running.</p>
        <div className="flex items-center gap-3 font-body">
          <Link to="/politica-confidentialitate" className="hover:text-trail-light transition-colors">
            Politică de Confidențialitate
          </Link>
          <span className="text-paper/30">|</span>
          <a
            href="https://www.facebook.com/people/Binderbubi-Backyard-Running/61571813673482/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-trail-light transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-paper/10 py-4 text-center">
        <a
          href="https://github.com/andreiholerga"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-paper/40 hover:text-trail-light transition-colors"
        >
          Developed by Andrei Holerga
        </a>
      </div>
    </footer>
  );
}
