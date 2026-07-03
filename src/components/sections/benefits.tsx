import { Clock3, Gauge, LineChart, Repeat, Target, Wallet } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const benefits = [
  {
    icon: Clock3,
    title: "Récupérez vos journées",
    description:
      "Des dizaines d'heures de prospection manuelle rendues chaque mois pour vous concentrer sur la vente et la livraison.",
  },
  {
    icon: Target,
    title: "Plus de rendez-vous qualifiés",
    description:
      "Votre agenda se remplit avec des prospects déjà intéressés et qualifiés — plus de temps perdu avec les mauvais contacts.",
  },
  {
    icon: LineChart,
    title: "Une acquisition prévisible",
    description:
      "Un flux constant de nouveaux prospects, indépendant de votre motivation du jour ou de votre charge de travail.",
  },
  {
    icon: Wallet,
    title: "Fini les abonnements agence à vie",
    description:
      "Votre système tourne sur des outils ouverts, à ~20€/mois. Vous ne payez plus indéfiniment pour un service que vous pourriez faire vous-même.",
  },
  {
    icon: Repeat,
    title: "Aucun lead perdu",
    description:
      "Chaque prospect est relancé au bon moment, automatiquement, sans dépendre de votre mémoire ou de votre organisation.",
  },
  {
    icon: Gauge,
    title: "Une croissance scalable",
    description:
      "Le même système peut absorber 10 ou 500 prospects par semaine sans recruter une seule personne de plus.",
  },
];

export function Benefits() {
  return (
    <section id="benefices" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Ce que vous obtenez"
          title="Pas une prestation. Une compétence que vous gardez pour toujours."
          description="Nous ne vendons pas des automatisations à distance. Nous vous transmettons un système que vous maîtrisez, et les résultats qui vont avec."
        />

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-solid)]/30 hover:shadow-lg"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-[var(--accent-solid)]/10 text-[var(--accent-solid)]">
                <benefit.icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-semibold tracking-tight">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
