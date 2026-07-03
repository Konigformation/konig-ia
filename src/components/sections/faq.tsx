import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const faqs = [
  {
    question: "À quoi sert exactement l'Audit IA ?",
    answer:
      "À évaluer, avec vous, si l'automatisation a du sens pour votre activité et ce que ça lui apporterait concrètement (temps, opportunités, chiffre d'affaires). Ce n'est pas un rendez-vous commercial déguisé : si la réponse est non, nous vous le disons.",
  },
  {
    question: "L'Audit IA est-il vraiment gratuit ?",
    answer:
      "Oui, entièrement offert et sans engagement. Nous analysons votre activité et vous montrons concrètement votre potentiel d'automatisation, que vous poursuiviez avec nous ou non.",
  },
  {
    question: "L'accompagnement est-il finançable ?",
    answer:
      "Notre organisme est certifié Qualiopi. Selon votre statut, votre accompagnement peut être éligible à un financement via le CPF, votre OPCO, France Travail ou le FAF. Nous faisons le point sur votre éligibilité pendant l'Audit.",
  },
  {
    question: "Repart-on vraiment avec un système concret ?",
    answer:
      "Oui. Ce n'est pas de la théorie : à l'issue des 2 jours d'accompagnement, vous repartez avec votre prospection automatisée, vos agents IA configurés et vos séquences de relance opérationnelles sur vos propres outils.",
  },
  {
    question: "Faut-il savoir coder ?",
    answer:
      "Non. Notre accompagnement est conçu pour des dirigeants et indépendants sans compétence technique préalable. Vous êtes accompagné pas à pas pour construire votre système de A à Z.",
  },
  {
    question: "Puis-je garder mes outils actuels (CRM, emailing...) ?",
    answer:
      "Dans la grande majorité des cas, oui. Nous vous apprenons à connecter votre système à vos outils existants via API plutôt que d'imposer une nouvelle plateforme fermée.",
  },
  {
    question: "Peut-on être banni de LinkedIn en automatisant sa prospection ?",
    answer:
      "Le risque existe avec des outils mal configurés ou des volumes agressifs. Pendant votre accompagnement, nous vous enseignons les quotas raisonnables et les bonnes pratiques pour automatiser sans mettre votre compte en danger.",
  },
  {
    question: "Et si l'Audit montre que ce n'est pas pertinent pour moi ?",
    answer:
      "Alors nous vous le disons clairement, sans détour. L'Audit sert à établir un état des lieux honnête — pas à vous convaincre à tout prix de vous engager avec nous.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Questions fréquentes" title="Tout ce qu'il faut savoir avant de réserver" />

        <Reveal>
          <Accordion
            className="mt-14 rounded-2xl border border-border bg-card px-6 shadow-sm"
            defaultValue={[faqs[0].question]}
          >
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
