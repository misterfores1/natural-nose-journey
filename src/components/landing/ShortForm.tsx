import { useState } from "react";

type Question = {
  id: string;
  label: string;
  options: { label: string; score: number }[];
};

const QUESTIONS: Question[] = [
  {
    id: "edad",
    label: "¿Cuál es tu rango de edad?",
    options: [
      { label: "Menos de 18", score: 0 },
      { label: "18 – 30", score: 3 },
      { label: "31 – 45", score: 3 },
      { label: "46 – 60", score: 2 },
      { label: "Más de 60", score: 1 },
    ],
  },
  {
    id: "imc",
    label: "¿Cómo describirías tu peso actual?",
    options: [
      { label: "Estoy en mi peso ideal", score: 3 },
      { label: "Tengo entre 5 y 10 kg de más", score: 3 },
      { label: "Tengo más de 10 kg de más", score: 1 },
      { label: "Estoy por debajo de mi peso", score: 1 },
    ],
  },
  {
    id: "zonas",
    label: "¿Qué zonas te gustaría esculpir?",
    options: [
      { label: "Abdomen y cintura", score: 3 },
      { label: "Espalda y flancos", score: 3 },
      { label: "Brazos o piernas", score: 2 },
      { label: "Todo el cuerpo (360°)", score: 3 },
    ],
  },
  {
    id: "salud",
    label: "¿Tienes alguna condición médica relevante?",
    options: [
      { label: "Ninguna, estoy sana", score: 3 },
      { label: "Controlada con tratamiento", score: 2 },
      { label: "Sí, sin tratamiento", score: 1 },
      { label: "Prefiero consultarlo en la asesoría", score: 2 },
    ],
  },
  {
    id: "expectativa",
    label: "¿Qué esperas del resultado?",
    options: [
      { label: "Una figura natural y armónica", score: 3 },
      { label: "Definición marcada estilo fitness", score: 3 },
      { label: "Cambio radical de mi cuerpo", score: 1 },
      { label: "Aún no lo tengo claro", score: 2 },
    ],
  },
  {
    id: "tiempo",
    label: "¿Cuándo te gustaría realizar tu cirugía?",
    options: [
      { label: "Lo antes posible", score: 3 },
      { label: "En los próximos 3 meses", score: 3 },
      { label: "En 6 meses o más", score: 2 },
      { label: "Solo estoy investigando", score: 1 },
    ],
  },
];

const MAX = QUESTIONS.length * 3;

export function ShortForm() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined);
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const percent = Math.round((score / MAX) * 100);

  const verdict = getVerdict(percent);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-surface p-8 shadow-elegant">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            Tu resultado
          </span>
          <div className="mt-5 text-gradient-gold font-serif text-5xl font-bold sm:text-6xl">
            {percent}%
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {score} / {MAX} puntos de compatibilidad
          </p>

          <div className="mx-auto mt-5 h-2.5 w-full max-w-sm overflow-hidden rounded-full bg-background/60">
            <div
              className="h-full rounded-full bg-gradient-gold transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>

          <h3 className="mt-6 font-serif text-2xl sm:text-3xl">{verdict.title}</h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            {verdict.message}
          </p>

          <a
            href="#agendar"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03] sm:text-base"
          >
            👉 Agendar mi asesoría gratuita
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setAnswers({});
            }}
            className="mt-3 block w-full text-xs text-muted-foreground underline-offset-4 hover:underline"
          >
            Volver a responder
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (allAnswered) setSubmitted(true);
      }}
      className="rounded-2xl border border-border bg-surface p-6 shadow-elegant sm:p-8"
    >
      <div className="mb-5 flex items-center justify-between text-xs text-muted-foreground">
        <span>Test rápido</span>
        <span>
          {Object.keys(answers).length} / {QUESTIONS.length}
        </span>
      </div>

      <div className="space-y-6">
        {QUESTIONS.map((q, i) => (
          <fieldset key={q.id}>
            <legend className="mb-2 block text-sm font-medium text-foreground/90">
              <span className="text-primary">{i + 1}.</span> {q.label}
            </legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt.score;
                return (
                  <label
                    key={opt.label}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition ${
                      selected
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-background/40 text-foreground/80 hover:border-primary/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      className="sr-only"
                      checked={selected}
                      onChange={() => setAnswers({ ...answers, [q.id]: opt.score })}
                    />
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                        selected ? "border-primary bg-primary" : "border-border"
                      }`}
                    >
                      {selected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                      )}
                    </span>
                    {opt.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <button
        type="submit"
        disabled={!allAnswered}
        className="mt-6 w-full rounded-xl bg-gradient-gold px-6 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
      >
        👉 VER MI PUNTAJE
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Tus respuestas son confidenciales y solo se usan para orientar tu asesoría.
      </p>
    </form>
  );
}

function getVerdict(percent: number) {
  if (percent >= 80) {
    return {
      title: "Eres candidata ideal 🎯",
      message:
        "Tu perfil es altamente compatible con la Lipoescultura 360º. Agenda tu asesoría gratuita y diseñemos juntos tu plan personalizado.",
    };
  }
  if (percent >= 60) {
    return {
      title: "Muy buena candidata ✨",
      message:
        "Tienes un perfil favorable. Con una valoración personalizada podemos confirmar la mejor técnica para ti.",
    };
  }
  if (percent >= 40) {
    return {
      title: "Candidata con consideraciones",
      message:
        "Hay aspectos a evaluar a profundidad. Una asesoría con el Dr. Leonardo Carrillo es el siguiente paso para definir tu mejor alternativa.",
    };
  }
  return {
    title: "Necesitamos conocerte mejor",
    message:
      "Antes de avanzar es importante una valoración médica completa. Agenda tu asesoría gratuita y te orientamos sin compromiso.",
  };
}
