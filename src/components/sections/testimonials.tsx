import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const testimonials = [
  {
    quote:
      "L'Audit IA m'a ouvert les yeux en 30 minutes sur tout ce que je pouvais automatiser. Deux jours de formation plus tard, mon système de prospection tournait déjà seul.",
    name: "Julien Marchand",
    role: "Fondateur, cabinet de conseil en stratégie",
    initials: "JM",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    result: "Système opérationnel dès la sortie de formation",
  },
  {
    quote:
      "Ce qui m'a convaincue : repartir avec un système que je comprends, pas une boîte noire qu'une agence me facturerait chaque mois indéfiniment.",
    name: "Camille Bertrand",
    role: "Associée, agence marketing B2B",
    initials: "CB",
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    result: "Zéro dépendance après la formation",
  },
  {
    quote:
      "Mon agent IA qualifie mes leads avant même que je les voie. Je l'ai configuré moi-même pendant la formation — ça change tout sur ma confiance dans l'outil.",
    name: "Sophie Lambert",
    role: "Coach indépendante",
    initials: "SL",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    result: "Leads pré-qualifiés avant chaque appel",
  },
  {
    quote:
      "La formation était finançable via mon OPCO, ce qui a fini de me convaincre. Deux jours intenses, mais on repart avec un système en marche, pas des slides.",
    name: "Thomas Girard",
    role: "Dirigeant, PME industrielle",
    initials: "TG",
    photo: "https://randomuser.me/api/portraits/men/62.jpg",
    result: "Formation prise en charge par l'OPCO",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Ils ont pris leur Audit IA"
          title="Des dirigeants devenus autonomes sur leur acquisition"
        />

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="mb-4 flex items-center gap-0.5 text-[var(--accent-solid)]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="size-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <div className="mt-8">
                <div className="mb-4 inline-block rounded-full bg-[var(--accent-solid)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-solid)]">
                  {t.result}
                </div>
                <figcaption className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarImage src={t.photo} alt={t.name} />
                    <AvatarFallback className="bg-muted text-xs font-medium">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
