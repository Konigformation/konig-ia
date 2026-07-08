import { Check, X } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const agencyPoints = [
  "Vous payez chaque mois, à vie",
  "Vous dépendez entièrement d'eux",
  "Vous déléguez sans jamais apprendre",
  "S'ils s'arrêtent, tout s'arrête",
];

const systemPoints = [
  "Vous le construisez une fois, il est à vous",
  "Vous êtes 100 % autonome",
  "Vous maîtrisez votre acquisition de A à Z",
  "Il tourne pour vous, même sans personne",
];

export function WhySystem() {
  return (
    <section id="pourquoi" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="L'approche"
          title="Pourquoi bâtir votre propre système ?"
          description="Tant que quelqu'un d'autre contrôle votre acquisition, vous ne contrôlez pas votre business. Voici la différence."
        />

        {/* Comparatif Agence vs Votre système */}
        <Reveal className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-5">
          {/* Agence */}
          <div className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <X className="size-4.5" strokeWidth={2} />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-muted-foreground sm:text-lg">
                Passer par une agence
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {agencyPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground sm:text-[15px]"
                >
                  <X
                    className="mt-0.5 size-4 shrink-0 opacity-60"
                    strokeWidth={2.5}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Votre système */}
          <div className="rounded-2xl border border-[var(--accent-solid)]/35 bg-[var(--accent-solid)]/[0.04] p-6 shadow-[0_20px_50px_-30px_color-mix(in_oklch,var(--accent-solid)_60%,transparent)] sm:p-7">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-full bg-[var(--accent-solid)]/15 text-[var(--accent-solid)]">
                <Check className="size-4.5" strokeWidth={2.5} />
              </span>
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                Votre propre système
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {systemPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 text-sm font-medium sm:text-[15px]"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[var(--accent-solid)]"
                    strokeWidth={2.5}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
