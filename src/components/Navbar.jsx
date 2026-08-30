import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Acasă" },
  { to: "/#evenimente", label: "Evenimente" },
  { to: "/#despre-noi", label: "Despre Noi" },
  { to: "/#activitate", label: "Activitate" },
  { to: "/trasee", label: "Trasee" },
  { to: "/faq", label: "FAQ" },
  { to: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "auto";
  }, [location]);

  function toggle() {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "auto";
  }

  return (
    <header
      className={`sticky top-0 z-[1000] transition-colors duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur border-b border-ink/10"
          : "bg-paper/70 backdrop-blur border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 md:px-10 py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo/logo.webp" alt="Binderbubi Backyard Running" className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="relative font-display font-bold uppercase tracking-wide text-sm text-ink hover:text-trail transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-trail after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-[1100]"
          onClick={toggle}
          aria-label="Deschide meniul"
          aria-expanded={open}
        >
          <span
            className={`block h-[2.5px] w-7 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-[2.5px] w-7 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-[2.5px] w-7 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-ink/40 transition-opacity duration-300 z-[1040] ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggle}
      />
      <nav
        className={`md:hidden fixed top-0 right-0 h-screen w-[78%] max-w-xs bg-paper z-[1050] shadow-2xl transition-transform duration-300 flex flex-col items-center pt-24 gap-2 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="w-full text-center py-4 border-b border-ink/10 font-display font-bold uppercase tracking-wide text-lg text-ink hover:text-trail hover:bg-ink/5 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
