import { createFileRoute } from "@tanstack/react-router";
import doctorHero from "@/assets/doctor-hero.jpg";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import videoPoster1 from "@/assets/video-poster-1.jpg";
import videoPoster2 from "@/assets/video-poster-2.jpg";
import videoPoster3 from "@/assets/video-poster-3.jpg";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { VideoBlock } from "@/components/landing/VideoBlock";
import { BeforeAfterCarousel } from "@/components/landing/BeforeAfterCarousel";
import { ShortForm } from "@/components/landing/ShortForm";
import { LongForm } from "@/components/landing/LongForm";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/573000000000?text=" +
  encodeURIComponent("Hola, ya vi la información sobre lipoescultura y quiero más detalles");

function Index() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="font-serif text-lg tracking-wide sm:text-xl">
            <span className="text-gradient-gold font-bold">Dr. Leonardo Carrillo</span>
          </a>
          <a
            href="#agendar"
            className="hidden rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground sm:inline-block"
          >
            Agendar asesoría
          </a>
        </div>
      </header>

      {/* 1. HERO */}
      <section id="top" className="relative isolate min-h-screen bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-36">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Lipoescultura #La360º
            </span>
            <h1 className="font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
              La figura que siempre <span className="gold-underline">soñaste</span> con resultados{" "}
              <span className="text-gradient-gold">naturales y armónicos</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Asesoría sin costo con el <strong className="text-foreground">Dr. Leonardo Carrillo</strong>{" "}
              — cirujano plástico certificado, miembro activo de la Sociedad Colombiana de Cirugía
              Plástica. Tecnología VASER + MicroAire + Renuvion.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#candidato"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-gold px-7 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
              >
                👉 AGENDAR MI ASESORÍA GRATUITA
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-border px-7 py-4 text-base font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <Trust>Miembro SCCP</Trust>
              <Trust>Tecnología VASER + Renuvion</Trust>
              <Trust>Formación internacional</Trust>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-gold opacity-20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-elegant">
                <VideoBlock
                  poster={doctorHero}
                  caption="Conoce la técnica Lipo 360º en 60 segundos"
                  label="Reproducir video introductorio"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-primary/30 bg-surface/95 px-5 py-4 backdrop-blur sm:block animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Resultados armónicos</p>
                    <p className="text-xs text-muted-foreground">Verificados por pacientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT FORM */}
      <Section id="candidato">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Micro compromiso</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
              Descubre si eres candidata en <span className="text-gradient-gold">menos de 1 minuto</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Una evaluación inicial breve para entender tu caso y orientarte hacia la mejor
              alternativa de lipoescultura para tu cuerpo.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <Bullet>Asesoría sin costo y sin compromiso</Bullet>
              <Bullet>Respuesta en menos de 24 horas</Bullet>
              <Bullet>Atención directa del equipo médico</Bullet>
            </ul>
          </div>
          <ShortForm />
        </div>
      </Section>

      {/* 3. VIDEO 2 - PRUEBA SOCIAL */}
      <Section dark>
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow center>Historias reales</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
            Pacientes felices, <span className="text-gradient-gold">transformaciones reales</span>
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <VideoBlock
            poster={videoPoster1}
            caption="Pacientes cuentan su experiencia con lipoescultura 360º"
            label="Reproducir testimonios"
          />
        </div>
      </Section>

      {/* 4. PRUEBA SOCIAL FUERTE */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow center>Casos de éxito</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
            Pacientes reales, <span className="text-gradient-gold">resultados armónicos</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BeforeAfterCarousel
              slides={[
                { src: beforeAfter1, alt: "Antes y después lipoescultura paciente 1" },
                { src: beforeAfter2, alt: "Antes y después lipoescultura paciente 2" },
              ]}
            />
          </div>
          <div className="space-y-5 lg:col-span-2">
            <Testimonial
              quote="Quedé encantada con mi nuevo cuerpo, amé los resultados, recomendadísimo mi doc."
              author="Angie Lorenna"
              location="@angielorennaoficial"
            />
            <Testimonial
              quote="Si me preguntan si recomendaría al doctor, les diría que sin miedo se operen con él, es una persona muy profesional y nos deja hermosas."
              author="Valentina Marín"
              location="@valenmarin15"
            />
            <Testimonial
              quote="El mejor Doc, muy atento y profesional, mejoró mi figura espectacular."
              author="Sara Blonde"
              location="@sarablonde888"
            />
          </div>
        </div>
      </Section>

      {/* 5. DIFERENCIACIÓN */}
      <Section dark>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>La diferencia</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
              ¿Por qué <span className="text-gradient-gold">Lipo 360º</span> con tecnología avanzada?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Combinamos VASER (ondas ultrasónicas), MicroAire (succión asistida) y Renuvion
              (retracción de piel) para esculpir cada zona en 360° con precisión, definición y una
              recuperación más amable.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Definición 360°", d: "Esculpido completo: abdomen, cintura, espalda y flancos." },
              { t: "Tecnología VASER", d: "Emulsión precisa de la grasa con menos trauma." },
              { t: "Piel firme", d: "Renuvion ayuda a retraer y tensar la piel." },
              { t: "Recuperación amable", d: "Menos moretones e inflamación postoperatoria." },
            ].map((b) => (
              <div
                key={b.t}
                className="rounded-2xl border border-border bg-surface p-5 transition hover:border-primary/40 hover:shadow-gold"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg">{b.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. AUTORIDAD */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-25 blur-3xl" />
              <img
                src={doctorHero}
                alt="Dr. Leonardo Carrillo — Cirujano plástico"
                width={1080}
                height={1620}
                loading="lazy"
                className="relative w-full rounded-[2rem] border border-border object-cover shadow-elegant"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>Autoridad médica</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
              Tu cirugía en <span className="text-gradient-gold">manos expertas</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              El <strong className="text-foreground">Dr. Leonardo Carrillo</strong> es médico
              cirujano de la Universidad Nacional de Bogotá, especializado en Cirugía Plástica,
              Estética y Reconstructiva en Argentina.
            </p>
            <p className="mt-4 text-muted-foreground">
              Realizó subespecialidades en Cirugía Craneofacial y Plástica Pediátrica en EE. UU. y
              Microcirugía en Taiwán. Miembro activo de la Sociedad Colombiana de Cirugía Plástica.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "+10", l: "Años de experiencia" },
                { n: "2.000+", l: "Casos realizados" },
                { n: "98%", l: "Satisfacción" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-surface p-4 text-center">
                  <div className="text-gradient-gold font-serif text-2xl font-bold sm:text-3xl">
                    {s.n}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 7. VIDEO 3 - CIERRE */}
      <Section dark>
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow center>El siguiente paso</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
            Toma la decisión con <span className="text-gradient-gold">confianza</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Mira este último video antes de agendar tu asesoría gratuita.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <VideoBlock
            poster={videoPoster3}
            caption="Un mensaje del Dr. Leonardo Carrillo para ti"
            label="Reproducir mensaje del doctor"
          />
        </div>
      </Section>

      {/* 8. LONG FORM */}
      <Section id="agendar">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow center>Agenda</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
            Agenda tu <span className="text-gradient-gold">asesoría gratuita</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Completa el formulario con tus datos y nos pondremos en contacto contigo.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <LongForm />
        </div>
      </Section>

      {/* 9. URGENCIA SUAVE */}
      <Section dark compact>
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-surface p-8 text-center shadow-elegant sm:p-10">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="font-serif text-xl sm:text-2xl">
            Solo quedan <span className="text-gradient-gold">7 cupos quirúrgicos disponibles</span> esta semana.
          </p>
        </div>
      </Section>

      {/* 10. WHATSAPP */}
      <Section>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center shadow-elegant sm:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
          <Eyebrow center>Atención inmediata</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            ¿Prefieres <span className="text-gradient-gold">atención directa</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escríbenos por WhatsApp y resolvemos tus dudas al instante.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l-.999 3.648 3.973-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414z" />
            </svg>
            👉 HABLAR POR WHATSAPP
          </a>
          <p className="mt-4 text-xs italic text-muted-foreground">
            Mensaje automático: “Hola, ya vi la información sobre lipoescultura y quiero más detalles”
          </p>
        </div>
      </Section>

      {/* 11. CONFIANZA FINAL */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Tu <span className="text-gradient-gold">transformación</span> en manos seguras
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Atención personalizada",
            "Tecnología VASER + Renuvion",
            "Resultados naturales y armónicos",
            "Acompañamiento en todo el proceso",
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-border bg-surface p-6 text-center transition hover:border-primary/40"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm font-medium">{t}</p>
            </div>
          ))}
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

      {/* Hidden poster preload to avoid unused warning when desired */}
      <img src={videoPoster2} alt="" className="hidden" aria-hidden="true" />
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
        <svg viewBox="0 0 24 24" className="h-3 w-3 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth={4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-foreground/90">{children}</span>
    </li>
  );
}

function Trust({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="currentColor" aria-hidden="true">
        <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z" />
      </svg>
      {children}
    </span>
  );
}

function Testimonial({
  quote,
  author,
  location,
}: {
  quote: string;
  author: string;
  location: string;
}) {
  return (
    <figure className="rounded-2xl border border-border bg-surface p-6 shadow-elegant transition hover:border-primary/40">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="currentColor" aria-hidden="true">
        <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6v-6.83H4.83A2.34 2.34 0 017.17 8.83V6zm10 0a5.17 5.17 0 00-5.17 5.17V18h6v-6.83h-3.17A2.34 2.34 0 0117.17 8.83V6z" />
      </svg>
      <blockquote className="mt-3 font-serif text-lg italic text-foreground/95">
        “{quote}”
      </blockquote>
      <figcaption className="mt-4 text-sm text-muted-foreground">
        — <span className="text-foreground">{author}</span>, {location}
      </figcaption>
    </figure>
  );
}
