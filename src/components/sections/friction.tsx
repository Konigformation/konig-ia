import { TrendingDown, Hourglass, Timer, type LucideIcon } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

type Friction = {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
};

const frictions: Friction[] = [
  {
    icon: TrendingDown,
    title: "L'absence de moteur de croissance",
    description:
      "Votre prospection repose sur le bouche-à-oreille ou le hasard, sans système prévisible pour générer des rendez-vous. Résultat : un chiffre d'affaires qui stagne et zéro visibilité sur les mois à venir.",
  },
  {
    icon: Hourglass,
    title: "Une création de contenu qui vous dévore",
    description:
      "E-mails, relances, templates, publications… produire votre marketing vous prend des heures chaque semaine — autant de temps en moins pour vendre et pour livrer.",
  },
  {
    icon: Timer,
    title: "Une réactivité commerciale limitée",
    description: (
      <>
        <span className="font-semibold text-foreground">
          80 % des clients achètent à celui qui répond en premier.
        </span>{" "}
        Mais vous ne pouvez pas être partout : sans système pour répondre à
        l'instant, les opportunités filent à la concurrence.
      </>
    ),
  },
];

export function Friction() {
  return (
    <section id="freins" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Les freins"
          title="Qu'est-ce qui freine votre activité aujourd'hui ?"
          description="Trois blocages qui vous coûtent des clients — souvent sans même que vous le remarquiez."
        />

        <div className="mt-16 grid gap-4 sm:gap-5 md:grid-cols-3">
          {frictions.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-400/40 hover:shadow-[0_24px_48px_-24px_rgba(225,29,72,0.3)]">
                  {/* Numéro filigrane */}
                  <span className="pointer-events-none absolute -top-4 right-1 text-7xl font-bold text-rose-500/[0.07] tabular-nums transition-colors duration-300 group-hover:text-rose-500/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Accent haut animé */}
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-rose-500 to-transparent transition-transform duration-300 group-hover:scale-x-100" />

                  <span className="relative flex size-11 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5.5" strokeWidth={1.75} />
                  </span>

                  <h3 className="relative mt-4 text-base font-semibold tracking-tight sm:text-lg">
                    {f.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
