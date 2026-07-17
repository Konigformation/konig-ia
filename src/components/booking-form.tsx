"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Landmark,
  Laptop,
  Loader2,
  MoreHorizontal,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const situations = [
  { value: "Consultant / indépendant", icon: Briefcase },
  { value: "Agence", icon: Building2 },
  { value: "Freelance", icon: Laptop },
  { value: "PME", icon: Store },
  { value: "Coach", icon: Users },
  { value: "Cabinet", icon: Landmark },
  { value: "Autre", icon: MoreHorizontal },
];

const goals = [
  { value: "Générer plus de leads", icon: Target },
  { value: "Gagner du temps sur la prospection", icon: Clock3 },
  { value: "Automatiser mes relances", icon: Bot },
  { value: "Structurer mon acquisition", icon: Workflow },
  { value: "Autre", icon: MoreHorizontal },
];

const TOTAL_STEPS = 4;

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  situation: string;
  goal: string;
  comment: string;
}

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  situation: "",
  goal: "",
  comment: "",
};

const inputClass =
  "h-12 w-full rounded-lg border border-border bg-background px-4 text-[15px] outline-none placeholder:text-muted-foreground/70 focus-visible:ring-3 focus-visible:ring-[var(--accent-solid)]/40";

const stepVariants = {
  enter: { opacity: 0, x: 16 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
};

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Retour"
      className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-muted"
    >
      <ArrowLeft className="size-3.5" />
    </button>
  );
}

function StepLabel({
  step,
  children,
  onBack,
}: {
  step: number;
  children: React.ReactNode;
  onBack?: () => void;
}) {
  return (
    <div className="mb-5 flex items-center gap-2">
      {onBack && <BackButton onClick={onBack} />}
      <div>
        <p className="text-[11px] font-medium tracking-wide text-[var(--accent-solid)] uppercase">
          Étape {step}/{TOTAL_STEPS}
        </p>
        <p className="mt-0.5 text-base font-medium">{children}</p>
      </div>
    </div>
  );
}

function ChoiceCard({
  label,
  icon: Icon,
  selected,
  onClick,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-full min-h-[96px] flex-col items-center justify-center gap-2 rounded-xl border px-3 py-4 text-center transition-all duration-200",
        selected
          ? "border-[var(--accent-solid)] bg-[var(--accent-solid)]/10 text-foreground shadow-sm"
          : "border-border bg-background text-muted-foreground hover:-translate-y-0.5 hover:border-[var(--accent-solid)]/40 hover:text-foreground hover:shadow-sm"
      )}
    >
      <Icon className={cn("size-5", selected && "text-[var(--accent-solid)]")} />
      <span className="text-xs leading-snug font-medium sm:text-[13px]">{label}</span>
    </button>
  );
}

export function BookingForm({
  className,
  title = "Réservez votre Audit IA offert",
}: {
  className?: string;
  title?: string;
}) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function selectAndAdvance(key: "situation" | "goal", value: string, nextStep: 2 | 3) {
    update(key, value);
    setTimeout(() => setStep(nextStep), 200);
  }

  const step3Valid = form.firstName.trim().length > 0 && form.lastName.trim().length > 0;
  const step4Valid = form.email.includes("@") && form.phone.trim().length >= 6;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!step4Valid) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-4 rounded-3xl border border-[var(--accent-solid)]/25 bg-[var(--accent-solid)]/5 p-10 text-center shadow-sm",
          className
        )}
      >
        <CheckCircle2 className="size-10 text-[var(--accent-solid)]" />
        <div>
          <p className="text-lg font-semibold">Votre demande d&apos;Audit est envoyée !</p>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Réservez dès maintenant votre créneau de 30&nbsp;minutes, ou nous
            revenons vers vous sous 24&nbsp;h. Vérifiez aussi vos spams par
            précaution.
          </p>
        </div>
        <a
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 border border-transparent bg-[var(--accent-solid)] px-8 pt-[17px] pb-[15px] text-xs font-bold tracking-[0.22em] text-[var(--accent-solid-foreground)] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground"
        >
          <CalendarCheck className="size-4" />
          Réserver mon créneau
        </a>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card p-6 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04),0_32px_64px_-24px_rgba(0,0,0,0.14)] sm:p-8",
        className
      )}
    >
      <div className="mb-2 flex items-center gap-2">
        <Sparkles className="size-4 text-[var(--accent-solid)]" />
        <p className="text-sm font-semibold tracking-tight">{title}</p>
      </div>
      <p className="mb-5 text-xs text-muted-foreground">
        30 secondes pour répondre, 30 minutes pour tout comprendre. Sans engagement.
      </p>

      <div className="mb-6 flex items-center gap-2">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((s) => (
          <div
            key={s}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              s <= step ? "bg-[var(--accent-solid)]" : "bg-border"
            )}
          />
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {step === 1 && (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <StepLabel step={1}>Quelle est votre situation professionnelle ?</StepLabel>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {situations.map((s) => (
                <ChoiceCard
                  key={s.value}
                  label={s.value}
                  icon={s.icon}
                  selected={form.situation === s.value}
                  onClick={() => selectAndAdvance("situation", s.value, 2)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <StepLabel step={2} onBack={() => setStep(1)}>
              Quel est votre objectif principal ?
            </StepLabel>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {goals.map((g) => (
                <ChoiceCard
                  key={g.value}
                  label={g.value}
                  icon={g.icon}
                  selected={form.goal === g.value}
                  onClick={() => selectAndAdvance("goal", g.value, 3)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <StepLabel step={3} onBack={() => setStep(2)}>
              Comment devons-nous vous appeler ?
            </StepLabel>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className={inputClass}
                placeholder="Prénom"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                autoComplete="given-name"
                autoFocus
              />
              <input
                className={inputClass}
                placeholder="Nom"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                autoComplete="family-name"
              />
            </div>
            <button
              type="button"
              disabled={!step3Valid}
              onClick={() => setStep(4)}
              className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--accent-solid)] px-5 text-sm font-medium text-[var(--accent-solid-foreground)] shadow-[0_8px_20px_-8px_color-mix(in_oklch,var(--accent-solid)_70%,transparent)] transition hover:-translate-y-0.5 hover:brightness-105 disabled:translate-y-0 disabled:opacity-40 disabled:shadow-none"
            >
              Continuer
              <ArrowRight className="size-4" />
            </button>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <StepLabel step={4} onBack={() => setStep(3)}>
              Où envoyer votre Audit ?
            </StepLabel>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                className={inputClass}
                placeholder="Email professionnel"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                autoComplete="email"
                autoFocus
              />
              <input
                type="tel"
                className={inputClass}
                placeholder="Téléphone"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                autoComplete="tel"
              />
              <textarea
                className={cn(inputClass, "h-20 resize-none py-3")}
                placeholder="Un commentaire à ajouter ? (optionnel)"
                value={form.comment}
                onChange={(e) => update("comment", e.target.value)}
              />

              <button
                type="submit"
                disabled={!step4Valid || status === "loading"}
                className="mt-1 flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent-solid)] px-5 text-sm font-semibold text-[var(--accent-solid-foreground)] shadow-[0_8px_20px_-8px_color-mix(in_oklch,var(--accent-solid)_70%,transparent)] transition hover:-translate-y-0.5 hover:brightness-105 disabled:translate-y-0 disabled:opacity-40 disabled:shadow-none"
              >
                {status === "loading" ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Zap className="size-4" />
                )}
                Réserver mon Audit IA offert
              </button>
              {status === "error" && (
                <p className="text-xs text-destructive">
                  Une erreur est survenue, réessayez dans un instant.
                </p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <ShieldCheck className="size-3.5" />
        Réponse sous 24&nbsp;h · Données confidentielles, jamais partagées.
      </p>
    </div>
  );
}
