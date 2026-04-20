import { useState, type FormEvent } from "react";

export function ShortForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-surface p-8 text-center shadow-elegant">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold">¡Gracias!</h3>
        <p className="mt-2 text-muted-foreground">
          Tu caso preliminar fue recibido. Continúa abajo y agenda tu valoración personalizada.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-6 shadow-elegant sm:p-8"
    >
      <div className="space-y-4">
        <Field label="Nombre" name="nombre" type="text" required />
        <Field label="Edad" name="edad" type="number" min={16} max={90} required />
        <Field
          label="¿Qué te gustaría mejorar de tu nariz?"
          name="objetivo"
          type="text"
          placeholder="Ej. giba dorsal, punta caída, respiración…"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-gradient-gold px-6 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]"
      >
        👉 EVALUAR MI CASO
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Tus datos son confidenciales y solo serán usados para tu valoración.
      </p>
    </form>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground/90">{label}</span>
      <input
        {...props}
        className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}
