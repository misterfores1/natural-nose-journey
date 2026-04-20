import { useState } from "react";

interface Slide {
  src: string;
  alt: string;
}

export function BeforeAfterCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-elegant">
      <div className="relative aspect-square w-full sm:aspect-[16/10]">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading="lazy"
            width={1024}
            height={1024}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur">
          Antes / Después
        </div>
      </div>

      <button
        type="button"
        aria-label="Anterior"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/60 p-2 text-foreground backdrop-blur transition hover:bg-background/90"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Siguiente"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/60 p-2 text-foreground backdrop-blur transition hover:bg-background/90"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir a slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-primary" : "w-1.5 bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
