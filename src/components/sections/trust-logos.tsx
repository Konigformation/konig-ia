import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

const badges = [
  {
    src: "/partners/qualiopi.png?v=4",
    alt: "Qualiopi — processus certifié",
    href: "/partners/qualiopi-certificat.jpg",
    width: 120,
    height: 40,
  },
  {
    src: "/partners/opco.png?v=4",
    alt: "OPCO — opérateurs de compétences",
    width: 90,
    height: 52,
  },
  {
    src: "/partners/france-travail.png?v=4",
    alt: "France Travail",
    width: 130,
    height: 62,
  },
  {
    src: "/partners/faf.png?v=4",
    alt: "FAF — Fonds d'Assurance Formation",
    width: 70,
    height: 52,
  },
];

function Badge({ b }: { b: (typeof badges)[number] }) {
  const content = (
    <span
      className="flex shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
      style={{ width: b.width, height: b.height }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={b.src} alt={b.alt} className="h-full w-full object-contain" />
    </span>
  );
  return b.href ? (
    <a
      href={b.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${b.alt} — voir le certificat`}
      title="Voir le certificat"
    >
      {content}
    </a>
  ) : (
    content
  );
}

export function TrustLogos() {
  return (
    <section className="border-y border-border bg-muted/20 py-10">
      {/* Bandeau de confiance en trois temps — cf. .trust de la refonte. */}
      <Container className="mb-8">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left">
          <span className="text-[10px] font-bold tracking-[0.22em] text-[var(--dim)] uppercase">
            Ils nous font confiance
          </span>
          <span className="text-sm text-muted-foreground">
            <em className="font-heading text-lg text-[var(--accent-solid)] not-italic">+100</em>{" "}
            commerciaux, dirigeants et équipes dans toute la France
          </span>
          <span className="text-[10px] font-bold tracking-[0.22em] text-[var(--dim)] uppercase">
            Formation certifiante · Finançable
          </span>
        </div>
      </Container>
      <Container
        className={cn(
          "group overflow-hidden",
          "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        )}
      >
        <div className="animate-marquee flex w-max items-center gap-16 group-hover:[animation-play-state:paused]">
          {badges.map((b) => (
            <Badge key={`a-${b.alt}`} b={b} />
          ))}
          {badges.map((b) => (
            <Badge key={`b-${b.alt}`} b={b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
