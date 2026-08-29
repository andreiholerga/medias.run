import { createContext, useContext, useState, useCallback, useEffect } from "react";

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [image, setImage] = useState(null); // { src, caption }

  const openImage = useCallback((src, caption = "") => {
    setImage({ src, caption });
  }, []);

  const close = useCallback(() => setImage(null), []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = image ? "hidden" : "auto";
    return () => document.removeEventListener("keydown", onKey);
  }, [image, close]);

  return (
    <LightboxContext.Provider value={{ openImage }}>
      {children}
      {image && (
        <div
          className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-ink/95 px-4 py-10 cursor-zoom-out animate-fadein"
          onClick={close}
        >
          <button
            className="absolute top-5 right-6 text-paper text-4xl font-bold leading-none hover:text-trail transition-colors"
            onClick={close}
            aria-label="Închide"
          >
            &times;
          </button>
          <img
            src={image.src}
            alt={image.caption}
            className="max-w-[90vw] max-h-[80vh] object-contain border border-paper/20"
            onClick={(e) => e.stopPropagation()}
          />
          {image.caption && (
            <p className="mt-4 text-paper/80 font-body text-sm text-center max-w-xl">
              {image.caption}
            </p>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}
