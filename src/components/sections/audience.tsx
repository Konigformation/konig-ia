import {
  Laptop,
  Briefcase,
  PhoneCall,
  Clapperboard,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Profile = {
  icon: LucideIcon;
  title: string;
  pain: string;
  description: string;
  result: string;
};

const profiles: Profile[] = [
  {
    icon: Laptop,
    title: "Les freelances",
    pain: "Prospecter à la main, tous les jours",
    description:
      "On remplace vos heures de recherche par un système qui trouve vos clients à votre place.",
    result: "Un agenda qui se remplit tout seul",
  },
  {
    icon: Briefcase,
    title: "Les dirigeants",
    pain: "Des clients qui tombent au hasard",
    description:
      "On transforme votre façon de trouver des clients en une machine structurée, prévisible et pilotable.",
    result: "Une croissance prévisible",
  },
  {
    icon: PhoneCall,
    title: "Les commerciaux",
    pain: "Un agenda à moitié vide",
    description:
      "L'IA cible et engage les bons prospects pour vous — sans spammer, sans relancer à la main.",
    result: "Des rendez-vous qualifiés chaque semaine",
  },
  {
    icon: Clapperboard,
    title: "Les créateurs",
    pain: "Une audience qui ne rapporte pas",
    description:
      "Comprenez enfin comment l'IA s'applique concrètement à la vente — les mains dans le cambouis, pas juste la théorie.",
    result: "Une audience qui se transforme en clients",
  },
  {
    icon: Rocket,
    title: "Les futurs entrepreneurs",
    pain: "L'envie de se lancer, sans la méthode",
    description:
      "On vous donne la méthode et le système complet, étape par étape, même en partant de zéro.",
    result: "Un lancement clé en main",
  },
];

export function Audience() {
  return (
    <section id="pour-qui" className="relative py-24 sm:py-32">
      {/* Halo d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-[var(--accent-solid)]/[0.07] blur-3xl"
      />
      <Container>
        <SectionHeading
          eyebrow="Pour qui"
          title={
            <>
              À qui s&apos;adresse cette <em>formation</em> ?
            </>
          }
          description="Cinq profils, un même déclic : arrêter de courir après les clients pour enfin les attirer en automatique."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:items-start">
          {profiles.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal
                key={p.title}
                delay={i * 0.09}
                className={cn(i % 2 === 1 && "lg:mt-10")}
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent-solid)]/40 hover:shadow-[0_28px_56px_-28px_color-mix(in_oklch,var(--accent-solid)_60%,transparent)]">
                  {/* Halo décoratif en coin, révélé au survol */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-[radial-gradient(circle,var(--accent-solid),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                  />

                  {/* Numéro filigrane */}
                  <span className="pointer-events-none absolute -top-4 right-1 text-7xl font-bold text-[var(--accent-solid)]/[0.07] tabular-nums transition-colors duration-300 group-hover:text-[var(--accent-solid)]/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Accent haut animé */}
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--accent-solid)] to-transparent transition-transform duration-300 group-hover:scale-x-100" />

                  {/* Tuile d'icône en dégradé */}
                  <span className="relative flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-solid)] to-[color-mix(in_oklch,var(--accent-solid)_60%,black)] text-white shadow-[0_10px_20px_-8px_color-mix(in_oklch,var(--accent-solid)_70%,transparent)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>

                  <h3 className="relative mt-4 text-base font-semibold tracking-tight sm:text-lg">
                    {p.title}
                  </h3>

                  {/* Situation actuelle (le déclencheur) */}
                  <p className="relative mt-2 text-[13px] font-medium text-[var(--accent-solid)]/80">
                    {p.pain}
                  </p>

                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  {/* Résultat visé */}
                  <div className="relative mt-auto pt-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-solid)]/10 px-3 py-1.5 text-[13px] font-semibold text-[var(--accent-solid)]">
                      <ArrowRight className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                      {p.result}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
