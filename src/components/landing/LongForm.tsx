import { useState, type FormEvent } from "react";

export function LongForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-primary/40 bg-surface p-10 text-center shadow-gold">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-semibold">Solicitud recibida</h3>
        <p className="mt-3 text-muted-foreground">
          Te contactaremos por WhatsApp en menos de 24 horas para confirmar tu valoración personalizada.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-6 shadow-elegant sm:p-10"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre completo" name="nombre" required />
        <Field label="WhatsApp" name="whatsapp" type="tel" required placeholder="+57 300 000 0000" />
        <Field label="Ciudad" name="ciudad" required />
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground/90">
            ¿Has tenido cirugía previa?
          </span>
          <select
            name="previa"
            required
            className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Selecciona…</option>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-foreground/90">
            Fotos (opcional)
          </span>
          <input
            type="file"
            name="fotos"
            multiple
            accept="image/*"
            className="block w-full rounded-xl border border-dashed border-input bg-background/30 px-4 py-3 text-sm text-muted-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground hover:file:bg-primary-glow"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-8 w-full rounded-xl bg-gradient-gold px-6 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]"
      >
        👉 AGENDAR MI VALORACIÓN
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Información protegida. Solo el equipo del Dr. Hernán Bautista accederá a tus datos.
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
