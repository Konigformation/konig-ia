import { Clock, HelpCircle, MailX, Unlock } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const pains = [
  {
    icon: Clock,
    title: "Des journées perdues en prospection manuelle",
    description:
      "Vous passez plus de temps à chercher des contacts et écrire des messages qu'à vendre. Chaque heure de prospection est une heure de moins sur vos clients.",
  },
  {
    icon: MailX,
    title: "Des relances oubliées, des leads qui dorment",
    description:
      "Un prospect chaud sur trois n'est jamais recontacté. Sans système, le suivi dépend de votre mémoire — et votre mémoire a mieux à faire.",
  },
  {
    icon: HelpCircle,
    title: "Vous ne savez pas ce qui est réellement automatisable",
    description:
      "Entre les promesses marketing et la réalité technique, difficile de savoir ce qui vaut vraiment le coup d'automatiser dans votre activité précise.",
  },
  {
    icon: Unlock,
    title: "Dépendant d'une agence marketing hors de prix",
    description:
      "Chaque mois, vous payez pour un système que vous ne maîtrisez pas et que vous ne pouvez pas faire évoluer seul dès que vos besoins changent.",
  },
];

export function Problem() {
  return (
    <section id="probleme" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Le constat"
          title="Vous n'avez pas besoin d'une agence de plus. Vous avez besoin de savoir faire."
          description="Si vous vous reconnaissez dans au moins deux de ces situations, un audit clair changera votre façon de voir votre activité."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
          {pains.map((pain) => (
            <div key={pain.title} className="bg-background p-8 sm:p-10">
              <pain.icon className="size-6 text-muted-foreground" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{pain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
