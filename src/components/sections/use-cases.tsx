"use client";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cases = [
  {
    value: "consultant",
    label: "Consultant",
    title: "Remplissez votre agenda sans y penser",
    pain: "Entre les missions clients, vous n'avez plus le temps de prospecter.",
    outcome:
      "Vous construisez un système qui identifie les décideurs correspondant à votre positionnement, les contacte sur LinkedIn, et ne vous laisse gérer que les appels.",
  },
  {
    value: "agence",
    label: "Agence",
    title: "Scalez l'acquisition sans recruter un SDR",
    pain: "Votre pipeline dépend d'un ou deux commerciaux et de leur charge du moment.",
    outcome:
      "Votre équipe maîtrise un système de prospection multicanale à volume constant, pour se concentrer sur la conversion et la livraison.",
  },
  {
    value: "freelance",
    label: "Freelance",
    title: "Sécurisez vos revenus entre deux missions",
    pain: "Chaque fin de mission redémarre le stress de trouver le prochain client.",
    outcome:
      "Un flux continu de prospects qualifiés tourne en tâche de fond, sans jamais repartir de zéro entre deux missions.",
  },
  {
    value: "saas",
    label: "SaaS",
    title: "Générez des démos qualifiées en continu",
    pain: "L'acquisition outbound est chronophage à construire et difficile à maintenir en interne.",
    outcome:
      "Votre équipe apprend à cibler par ICP et à automatiser email, LinkedIn et qualification IA avant chaque démo.",
  },
  {
    value: "pme",
    label: "PME",
    title: "Structurez une acquisition qui ne dépend de personne",
    pain: "Votre acquisition repose sur le bouche-à-oreille ou une seule personne clé.",
    outcome:
      "Vous documentez et automatisez un système qui continue de produire des rendez-vous même en votre absence.",
  },
  {
    value: "coach",
    label: "Coach",
    title: "Convertissez votre audience en clients",
    pain: "Vous générez de l'attention mais peu de prises de rendez-vous concrètes.",
    outcome:
      "Un agent IA que vous configurez vous-même qualifie vos leads entrants et programme les appels découverte.",
  },
  {
    value: "cabinet",
    label: "Cabinet",
    title: "Automatisez la prise de rendez-vous clients",
    pain: "La prospection et le suivi administratif prennent le pas sur le temps facturable.",
    outcome:
      "Prospection, relances et prise de rendez-vous automatisées par votre propre système, pour vous concentrer sur vos dossiers.",
  },
  {
    value: "salarie",
    label: "Salarié",
    title: "Automatisez vos tâches répétitives et gagnez en valeur",
    pain: "Reporting, relances, suivi administratif : une grande partie de votre journée part dans des tâches à faible valeur ajoutée.",
    outcome:
      "Vous apprenez à automatiser ces tâches avec l'IA grâce à une formation éligible CPF, et devenez la personne de référence sur l'automatisation dans votre entreprise.",
  },
];

export function UseCases() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pour qui"
          title="Indépendants, dirigeants ou salariés : conçu pour ceux qui veulent reprendre la main sur leur temps"
        />

        <Tabs defaultValue="consultant" className="mt-14">
          <TabsList className="mx-auto h-11 flex-wrap gap-1 bg-muted/60 p-1.5">
            {cases.map((c) => (
              <TabsTrigger key={c.value} value={c.value} className="px-4">
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {cases.map((c) => (
            <TabsContent key={c.value} value={c.value} className="mt-8">
              <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
                <h3 className="text-xl font-semibold tracking-tight">{c.title}</h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      La situation
                    </p>
                    <p className="mt-3 text-base text-foreground/90">{c.pain}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-[var(--accent-solid)] uppercase">
                      Ce que vous construisez
                    </p>
                    <p className="mt-3 text-base font-medium text-foreground">{c.outcome}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}
