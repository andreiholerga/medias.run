import { useEffect, useRef, useState } from "react";
import { useLightbox } from "./Lightbox.jsx";

const TOTAL_IMAGES = 122;
const images = Array.from(
  { length: TOTAL_IMAGES },
  (_, i) => `/images/image (${i + 1}).webp`,
);

export default function GallerySlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const { openImage } = useLightbox();

  function show(i) {
    setIndex((i + images.length) % images.length);
  }

  function resetAuto() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      5000,
    );
  }

  useEffect(() => {
    resetAuto();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="relative max-w-xl mx-auto aspect-[4/3] overflow-hidden bg-ink">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Binderbubi Backyard Running - Imagine ${i + 1}`}
          loading={i < 6 ? "eager" : "lazy"}
          onClick={() => openImage(src, `Imagine ${i + 1}`)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 cursor-zoom-in ${
            i === index
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        />
      ))}
      <button
        onClick={() => {
          show(index - 1);
          resetAuto();
        }}
        aria-label="Imaginea anterioară"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-trail text-paper text-xl hover:bg-ink transition-colors"
      >
        &#10094;
      </button>
      <button
        onClick={() => {
          show(index + 1);
          resetAuto();
        }}
        aria-label="Imaginea următoare"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-trail text-paper text-xl hover:bg-ink transition-colors"
      >
        &#10095;
      </button>
    </div>
  );
}
