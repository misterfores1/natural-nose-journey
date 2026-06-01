import { createFileRoute, Link } from "@tanstack/react-router";
import { ShortForm } from "@/components/landing/ShortForm";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Test · ¿Eres candidata a Lipoescultura 360º?" },
      {
        name: "description",
        content: "Responde 6 preguntas y obtén tu resultado al instante.",
      },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  return (
    <main className="min-h-screen bg-gradient-hero text-foreground">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5 sm:px-8">
        <Link to="/" className="font-serif text-base tracking-wide sm:text-lg">
          <span className="text-gradient-gold font-bold">Dr. Leonardo Carrillo</span>
        </Link>
        <Link
          to="/"
          className="text-xs text-muted-foreground transition hover:text-foreground"
        >
          ← Salir
        </Link>
      </header>

      <section className="mx-auto max-w-2xl px-5 pb-20 pt-6 sm:px-8">
        <ShortForm />
      </section>
    </main>
  );
}
