import { createFileRoute, Link } from "@tanstack/react-router";
import doctorHero from "@/assets/doctor-hero.jpg";
import { StickyCTA } from "@/components/landing/StickyCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Test de Lipoescultura 360º · Dr. Leonardo Carrillo" },
      {
        name: "description",
        content:
          "Responde 6 preguntas y descubre si eres candidata ideal a una Lipoescultura 360º con el Dr. Leonardo Carrillo. Resultado inmediato y confidencial.",
      },
      { property: "og:title", content: "¿Eres candidata a una Lipoescultura 360º?" },
      {
        property: "og:description",
        content: "Test gratuito de 2 minutos. Resultado inmediato.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="font-serif text-lg tracking-wide sm:text-xl">
            <span className="text-gradient-gold font-bold">Dr. Leonardo Carrillo</span>
          </Link>
          <Link
            to="/quiz"
            className="hidden rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground sm:inline-block"
          >
            Iniciar Quiz
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate min-h-screen bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-36">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Test de valoración · 2 minutos
            </span>
            <h1 className="font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
              ¿Eres candidata a una{" "}
              <span className="text-gradient-gold">Lipoescultura 360º</span>?
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Responde 6 preguntas y descubre si tu cuerpo puede beneficiarse de la técnica
              <strong className="text-foreground"> VASER + MicroAire + Renuvion</strong>.
              Resultados inmediatos y confidenciales.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-gold px-7 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
              >
                👉 ¡Tomar el quiz ahora!
              </Link>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Más de 1.200 pacientes han tomado el test este mes.
            </p>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-gold opacity-20 blur-3xl" />
              <img
                src={doctorHero}
                alt="Dr. Leonardo Carrillo — Cirujano plástico"
                width={1080}
                height={1620}
                className="relative w-full rounded-[2rem] border border-border object-cover shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOY EL DOCTOR */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-25 blur-3xl" />
              <img
                src={doctorHero}
                alt="Retrato del Dr. Leonardo Carrillo"
                width={1080}
                height={1350}
                loading="lazy"
                className="relative w-full rounded-[2rem] border border-border object-cover shadow-elegant"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>Quién soy</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
              Hola, soy el <span className="text-gradient-gold">Dr. Leonardo Carrillo</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Cirujano plástico, estético y reconstructivo con más de una década dedicada a la
              lipoescultura 360º con tecnología VASER, MicroAire y Renuvion. He acompañado a cientos
              de pacientes que querían una figura natural, armónica y duradera.
            </p>
            <p className="mt-4 text-muted-foreground">
              Este test fue creado junto a mi equipo médico para ayudarte a entender, en pocos
              minutos, si tu caso es candidato a una lipoescultura y cuáles son los siguientes pasos.
            </p>
          </div>
        </div>
      </Section>

      {/* POR QUÉ ESTE QUIZ */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow center>¿Por qué este quiz?</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
            Una valoración rápida, profesional y{" "}
            <span className="text-gradient-gold">sin compromiso</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3">
          {[
            {
              icon: "⏱",
              title: "2 minutos",
              desc: "6 preguntas claras sobre tu cuerpo, salud y expectativas.",
            },
            {
              icon: "🩺",
              title: "Criterios médicos",
              desc: "Diseñado por el Dr. Carrillo en base a evaluaciones reales de consulta.",
            },
            {
              icon: "🎯",
              title: "Resultado inmediato",
              desc: "Sabrás al instante si eres candidata y cuál es el siguiente paso.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-surface p-6 text-center transition hover:border-primary/40 hover:shadow-gold"
            >
              <div className="mb-3 text-3xl">{c.icon}</div>
              <h3 className="font-serif text-xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-primary/30 bg-surface p-10 text-center shadow-elegant sm:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
          <h2 className="relative font-serif text-3xl sm:text-4xl">
            ¿Lista para <span className="text-gradient-gold">descubrirlo</span>?
          </h2>
          <p className="relative mt-4 text-muted-foreground">
            Más de 1.200 personas ya tomaron el quiz este mes.
          </p>
          <Link
            to="/quiz"
            className="relative mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
          >
            👉 Tomar el Quiz
          </Link>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
          <p className="font-serif text-base text-foreground">Dr. Leonardo Carrillo</p>
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p className="text-xs">Cirujano plástico · Miembro SCCP</p>
        </div>
      </footer>

      <StickyCTA />
    </main>
  );
}

/* ---------- Helpers ---------- */

function Section({
  id,
  children,
  dark = false,
  compact = false,
}: {
  id?: string;
  children: React.ReactNode;
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-surface/40" : "bg-background"} ${compact ? "py-14" : "py-20 sm:py-28"}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary ${center ? "" : ""}`}
    >
      <span className="h-1 w-1 rounded-full bg-primary" /> {children}
    </span>
  );
}
