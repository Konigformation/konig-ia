import {
  BookOpen,
  Radar,
  Megaphone,
  Send,
  Filter,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { RotatingArrow } from "@/components/rotating-arrow";
import { cn } from "@/lib/utils";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
  highlight?: boolean;
};

const steps: Step[] = [
  {
    number: "01",
    icon: Radar,
    title: "Diagnostic & audit IA",
    tag: "Le point de départ",
    description:
      "On commence par un diagnostic de 30 minutes pour faire l'état des lieux de votre situation : comment vous trouvez vos clients aujourd'hui, ce qui freine votre croissance, et où l'IA peut vraiment vous faire gagner du temps et des clients. À la fin, on sait exactement quoi construire — et pourquoi.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Les fondations IA",
    description:
      "Vous prenez en main les outils et la logique de l'IA — la base pour piloter votre système vous-même, même en partant de zéro.",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Le contenu qui attire",
    tag: "Levier 1",
    description:
      "Vous créez du contenu automatisé par l'IA qui attire les bonnes personnes et vous rend visible — sans y passer vos journées.",
  },
  {
    number: "04",
    icon: Send,
    title: "La prospection automatisée",
    tag: "Levier 2",
    description:
      "Vous laissez l'IA aller au-devant de vos futurs clients sur LinkedIn, e-mail et WhatsApp — des conversations engagées en continu, à votre place.",
  },
  {
    number: "05",
    icon: Filter,
    title: "Le tunnel de vente",
    tag: "Levier 3",
    highlight: true,
    description:
      "Vous branchez un tunnel de vente optimisé, avec des séquences d'automatisation IA qui transforment vos prospects en clients.",
  },
];

export function Method() {
  return (
    <section id="methode" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Le programme"
          title={
            <>
              Ce que vous <em>apprendrez</em>
            </>
          }
          description="Construire et maîtriser un système qui tourne en pilote automatique."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative">
            {/* Ligne verticale continue */}
            <span
              className="absolute top-7 bottom-7 left-[27px] w-px bg-gradient-to-b from-border via-border to-transparent sm:left-[31px]"
              aria-hidden="true"
            />

            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.number}>
                    <Reveal delay={i * 0.1}>
                      <div className="relative flex gap-5 sm:gap-6">
                      {/* Nœud (icône) */}
                      <div
                        className={cn(
                          "relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border shadow-sm sm:size-16",
                          step.highlight
                            ? "border-[var(--accent-solid)]/40 bg-[var(--accent-solid)]/10 text-[var(--accent-solid)]"
                            : "border-border bg-card text-muted-foreground"
                        )}
                      >
                        <Icon
                          className="size-6 sm:size-7"
                          strokeWidth={1.75}
                        />
                      </div>

                      {/* Contenu */}
                      <div
                        className={cn(
                          "flex-1 rounded-2xl transition-colors",
                          step.highlight
                            ? "border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.04] p-5 sm:p-6"
                            : "pt-1.5 sm:pt-2"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-[var(--accent-solid)]/50 tabular-nums">
                            {step.number}
                          </span>
                          {step.tag && (
                            <span className="inline-flex items-center rounded-full bg-[var(--accent-solid)]/12 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-[var(--accent-solid)] uppercase">
                              {step.tag}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    </Reveal>
                    {i < steps.length - 1 && (
                      <div className="flex gap-5 py-2 sm:gap-6">
                        <div className="flex w-14 justify-center sm:w-16">
                          <RotatingArrow />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
