import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import doctorHero from "@/assets/doctor-hero.jpg";
import videoPoster3 from "@/assets/video-poster-3.jpg";
import { VideoBlock } from "@/components/landing/VideoBlock";

export const Route = createFileRoute("/gracias")({
  head: () => ({
    meta: [
      { title: "Gracias por tomar el Quiz · Dr. Leonardo Carrillo" },
      {
        name: "description",
        content:
          "Tu resultado del test de Lipoescultura 360º. Agenda tu valoración personalizada con el Dr. Leonardo Carrillo.",
      },
    ],
  }),
  component: GraciasPage,
});

const WHATSAPP_URL =
  "https://wa.me/573000000000?text=" +
  encodeURIComponent(
    "Hola Dr. Carrillo, acabo de tomar el quiz y quiero agendar mi valoración."
  );

function getVerdict(percent: number) {
  if (percent >= 80) {
    return {
      label: "Candidata Ideal",
      message:
        "Tu perfil indica que la Lipoescultura 360º puede ayudarte a lograr la figura natural y armónica que buscas.",
    };
  }
  if (percent >= 60) {
    return {
      label: "Muy Buena Candidata",
      message:
        "Tienes un perfil favorable. Una valoración personalizada confirmará la mejor técnica para ti.",
    };
  }
  if (percent >= 40) {
    return {
      label: "Candidata con Consideraciones",
      message:
        "Hay aspectos importantes a evaluar. Una asesoría personalizada definirá tu mejor alternativa.",
    };
  }
  return {
    label: "Requiere Valoración",
    message:
      "Antes de avanzar, una valoración médica completa es el paso correcto. Te orientamos sin compromiso.",
  };
}

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function GraciasPage() {
  const [percent, setPercent] = useState<number | null>(null);
  const countdown = useCountdown(15 * 60);

  useEffect(() => {
    const raw = sessionStorage.getItem("quiz_percent");
    setPercent(raw ? Number(raw) : 80);
  }, []);

  const verdict = getVerdict(percent ?? 80);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* URGENCIA TOP */}
      <div className="bg-gradient-gold text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 px-5 py-3 text-center text-xs font-medium sm:flex-row sm:gap-4 sm:text-sm">
          <span>
            <strong>TIEMPO LIMITADO:</strong> Tu cupo de valoración prioritaria expira en los
            próximos 15 minutos.
          </span>
          <span className="rounded-full bg-background/15 px-3 py-1 font-mono tabular-nums">
            Te quedan {countdown}
          </span>
        </div>
      </div>

      {/* HEADER */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link to="/" className="font-serif text-lg tracking-wide sm:text-xl">
          <span className="text-gradient-gold font-bold">Dr. Leonardo Carrillo</span>
        </Link>
      </header>

      {/* RESULTADO */}
      <section className="mx-auto max-w-3xl px-5 pb-12 pt-6 text-center sm:px-8">
        <h1 className="font-serif text-3xl leading-tight sm:text-5xl">
          Gracias por tomar el Quiz 🎉
        </h1>
        <p className="mt-4 text-muted-foreground">Tu resultado indica que eres una</p>
        <div className="mt-5 inline-block rounded-2xl border border-primary/40 bg-surface px-8 py-5 shadow-gold">
          <div className="text-gradient-gold font-serif text-3xl font-bold sm:text-4xl">
            {verdict.label}
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">{verdict.message}</p>
      </section>

      {/* VIDEO + CTA */}
      <section className="bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1 w-1 rounded-full bg-primary" /> Hablemos de tu resultado
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Un mensaje del <span className="text-gradient-gold">Dr. Leonardo Carrillo</span>
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-border shadow-elegant">
            <VideoBlock
              poster={videoPoster3}
              caption="Si estás pensando en una lipoescultura, hay algo que debes saber."
              label="Reproducir mensaje del doctor"
            />
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/30 bg-surface p-8 text-center shadow-elegant sm:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-primary">Siguiente paso</p>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
              Agenda tu valoración 1 a 1
            </h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l-.999 3.648 3.973-1.607z" />
              </svg>
              Reservar mi llamada
            </a>
          </div>
        </div>
      </section>

      {/* SIGUIENTE PASO */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-25 blur-3xl" />
              <img
                src={doctorHero}
                alt="Dr. Leonardo Carrillo"
                width={1080}
                height={1350}
                loading="lazy"
                className="relative w-full rounded-[2rem] border border-border object-cover shadow-elegant"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl">
              ¿Y ahora cuál es el <span className="text-gradient-gold">siguiente paso</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              El quiz te dio claridad sobre tu perfil. Lo siguiente es una valoración personalizada
              con el Dr. Leonardo Carrillo — sin compromiso — donde revisaremos:
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Tu anatomía y zonas a tratar en detalle (abdomen, cintura, espalda, flancos).",
                "Si eres candidata a Lipoescultura 360º o a un plan complementario.",
                "Tiempos, recuperación y plan personalizado.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={4}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs italic text-muted-foreground">
              Te contactaremos por WhatsApp en los próximos minutos para confirmar.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
          <p className="font-serif text-base text-foreground">Dr. Leonardo Carrillo</p>
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p className="text-xs">Cirujano plástico · Miembro SCCP</p>
        </div>
      </footer>
    </main>
  );
}
