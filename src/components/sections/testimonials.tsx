import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "L'Audit IA m'a ouvert les yeux en 30 minutes sur tout ce que je pouvais automatiser. Deux jours d'accompagnement plus tard, mon système de prospection tournait déjà seul.",
    name: "Julien Marchand",
    role: "Fondateur, cabinet de conseil en stratégie",
    initials: "JM",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    result: "Système opérationnel dès la fin de l'accompagnement",
  },
  {
    quote:
      "Ce qui m'a convaincue : repartir avec un système que je comprends, pas une boîte noire qu'une agence me facturerait chaque mois indéfiniment.",
    name: "Camille Bertrand",
    role: "Associée, agence marketing B2B",
    initials: "CB",
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    result: "Zéro dépendance après l'accompagnement",
  },
  {
    quote:
      "Mon agent IA qualifie mes leads avant même que je les voie. Je l'ai configuré moi-même pendant l'accompagnement — ça change tout sur ma confiance dans l'outil.",
    name: "Sophie Lambert",
    role: "Coach indépendante",
    initials: "SL",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    result: "Leads pré-qualifiés avant chaque appel",
  },
  {
    quote:
      "L'accompagnement était finançable via mon OPCO, ce qui a fini de me convaincre. Deux jours intenses, mais on repart avec un système en marche, pas des slides.",
    name: "Thomas Girard",
    role: "Dirigeant, PME industrielle",
    initials: "TG",
    photo: "https://randomuser.me/api/portraits/men/62.jpg",
    result: "Accompagnement pris en charge par l'OPCO",
  },
  {
    quote:
      "Fini de prospecter à froid le soir. Mon contenu attire les bons profils et mon système les relance tout seul — mon agenda se remplit sans que j'y pense.",
    name: "Marie Dubois",
    role: "Consultante RH indépendante",
    initials: "MD",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    result: "Agenda rempli sans prospection à froid",
  },
  {
    quote:
      "On a arrêté de dépendre de notre agence. Aujourd'hui l'équipe pilote elle-même la prospection multicanale — plus rapide, moins cher, et on garde la main.",
    name: "Karim Benali",
    role: "Directeur commercial, SaaS B2B",
    initials: "KB",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    result: "Prospection internalisée, agence remerciée",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex w-[280px] shrink-0 flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm sm:w-[336px]">
      <div>
        <div className="mb-4 flex items-center gap-0.5 text-[var(--accent-solid)]">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="size-4 fill-current" strokeWidth={0} />
          ))}
        </div>
        <blockquote className="text-sm leading-relaxed text-foreground/90">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
      </div>
      <div className="mt-6">
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
  );
}

export function Testimonials() {
  return (
    <section id="temoignages" className="overflow-hidden pt-2 pb-14 sm:pt-2 sm:pb-16">
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="flex w-max animate-marquee items-stretch gap-6 pl-6 [animation-duration:52s] group-hover:[animation-play-state:paused]">
          {testimonials.map((t) => (
            <TestimonialCard key={`a-${t.name}`} t={t} />
          ))}
          {testimonials.map((t) => (
            <TestimonialCard key={`b-${t.name}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
