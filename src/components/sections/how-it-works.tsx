import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    number: "01",
    title: "Audit IA offert",
    description:
      "30 minutes pour cartographier votre activité et identifier ce qui peut réellement être automatisé chez vous.",
  },
  {
    number: "02",
    title: "Analyse personnalisée",
    description:
      "Un compte-rendu clair et chiffré : temps récupérable, opportunités manquées, impact estimé sur votre chiffre d'affaires.",
  },
  {
    number: "03",
    title: "Accompagnement intensif (2 jours)",
    description:
      "Si le potentiel est là, nous vous accompagnons pour construire votre système : prospection, agents IA, relances, workflows.",
  },
  {
    number: "04",
    title: "Autonomie totale",
    description:
      "Vous repartez avec un système opérationnel que vous comprenez, maîtrisez et pouvez faire évoluer seul.",
  },
  {
    number: "05",
    title: "Support si besoin",
    description:
      "Nous restons disponibles pour vous accompagner ponctuellement, sans jamais redevenir indispensables.",
  },
];

export function HowItWorks() {
  return (
    <section id="parcours" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Le parcours"
          title="De la découverte à l'autonomie totale, en 5 étapes"
          description="Comprendre. Construire. Automatiser. Maîtriser. Être autonome — c'est notre seule promesse."
        />

        <Reveal className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0">
                <span className="text-4xl font-bold text-[var(--accent-solid)]/25 tabular-nums">
                  {step.number}
                </span>
                <h3 className="font-semibold tracking-tight lg:mt-3">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <span className="absolute top-4 -right-3 hidden h-px w-6 bg-border lg:block" />
              )}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
