import { useState } from "react";

interface VideoBlockProps {
  poster: string;
  caption?: string;
  label?: string;
}

export function VideoBlock({ poster, caption, label = "Reproducir video" }: VideoBlockProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-elegant">
      <div className="relative aspect-video w-full">
        {!playing ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={label}
            className="relative block h-full w-full"
          >
            <img
              src={poster}
              alt={caption ?? label}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-gold shadow-gold transition-transform duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-8 w-8 fill-primary-foreground"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            {caption && (
              <span className="absolute bottom-4 left-4 right-4 text-left text-sm font-medium text-foreground/90 sm:text-base">
                {caption}
              </span>
            )}
          </button>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-black text-sm text-muted-foreground">
            <p className="px-6 text-center">
              Espacio reservado para el video. Reemplaza este componente con tu &lt;video&gt; o
              embed (YouTube, Vimeo) — recuerda activar subtítulos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
