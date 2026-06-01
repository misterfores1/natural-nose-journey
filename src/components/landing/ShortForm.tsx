import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

type Option = { emoji: string; label: string; score: number };
type Question = { id: string; label: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    id: "edad",
    label: "¿Cuál es tu rango de edad?",
    options: [
      { emoji: "🙋‍♀️", label: "Menos de 18", score: 0 },
      { emoji: "✨", label: "18 – 30", score: 3 },
      { emoji: "💪", label: "31 – 45", score: 3 },
      { emoji: "🌸", label: "46 – 60", score: 2 },
      { emoji: "🌟", label: "Más de 60", score: 1 },
    ],
  },
  {
    id: "imc",
    label: "¿Cómo describirías tu peso actual?",
    options: [
      { emoji: "✅", label: "Estoy en mi peso ideal", score: 3 },
      { emoji: "⚖️", label: "Tengo entre 5 y 10 kg de más", score: 3 },
      { emoji: "📈", label: "Tengo más de 10 kg de más", score: 1 },
      { emoji: "📉", label: "Estoy por debajo de mi peso", score: 1 },
    ],
  },
  {
    id: "zonas",
    label: "¿Qué zonas te gustaría esculpir?",
    options: [
      { emoji: "🎯", label: "Abdomen y cintura", score: 3 },
      { emoji: "🔥", label: "Espalda y flancos", score: 3 },
      { emoji: "💪", label: "Brazos o piernas", score: 2 },
      { emoji: "🌀", label: "Todo el cuerpo (360°)", score: 3 },
    ],
  },
  {
    id: "salud",
    label: "¿Tienes alguna condición médica relevante?",
    options: [
      { emoji: "💚", label: "Ninguna, estoy sana", score: 3 },
      { emoji: "🩺", label: "Controlada con tratamiento", score: 2 },
      { emoji: "⚠️", label: "Sí, sin tratamiento", score: 1 },
      { emoji: "🤔", label: "Prefiero consultarlo en la asesoría", score: 2 },
    ],
  },
  {
    id: "expectativa",
    label: "¿Qué esperas del resultado?",
    options: [
      { emoji: "🌿", label: "Una figura natural y armónica", score: 3 },
      { emoji: "🏋️‍♀️", label: "Definición marcada estilo fitness", score: 3 },
      { emoji: "💥", label: "Cambio radical de mi cuerpo", score: 1 },
      { emoji: "🤷‍♀️", label: "Aún no lo tengo claro", score: 2 },
    ],
  },
  {
    id: "tiempo",
    label: "¿Cuándo te gustaría realizar tu cirugía?",
    options: [
      { emoji: "🚀", label: "Lo antes posible", score: 3 },
      { emoji: "📅", label: "En los próximos 3 meses", score: 3 },
      { emoji: "🗓️", label: "En 6 meses o más", score: 2 },
      { emoji: "🔍", label: "Solo estoy investigando", score: 1 },
    ],
  },
];

const MAX = QUESTIONS.length * 3;

export function ShortForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const total = QUESTIONS.length;
  const isLast = step === total - 1;
  const current = QUESTIONS[step];
  const progress = Math.round((step / total) * 100);

  const handleSelect = (score: number) => {
    const next = { ...answers, [current.id]: score };
    setAnswers(next);
    if (isLast) {
      const total = Object.values(next).reduce((a, b) => a + b, 0);
      const percent = Math.round((total / MAX) * 100);
      try {
        sessionStorage.setItem("quiz_percent", String(percent));
      } catch {}
      navigate({ to: "/gracias" });
    } else {
      setTimeout(() => setStep((s) => s + 1), 180);
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-elegant sm:p-8">
      <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Pregunta <span className="font-semibold text-foreground">{step + 1}</span> de {total}
        </span>
        <span>{progress}%</span>
      </div>
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-background/60">
        <div
          className="h-full rounded-full bg-gradient-gold transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h3 className="font-serif text-xl leading-snug sm:text-2xl">{current.label}</h3>

      <div className="mt-5 grid gap-2.5">
        {current.options.map((opt) => {
          const selected = answers[current.id] === opt.score;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => handleSelect(opt.score)}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition ${
                selected
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-background/40 text-foreground/85 hover:border-primary/40 hover:bg-background/60"
              }`}
            >
              <span className="text-xl">{opt.emoji}</span>
              <span className="flex-1">{opt.label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
        <button
          type="button"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Atrás
        </button>
        <span>Selecciona una opción para continuar</span>
      </div>
    </div>
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
