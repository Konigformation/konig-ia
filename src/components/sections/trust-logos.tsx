import { Container } from "@/components/container";

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

export function TrustLogos() {
  return (
    <section className="border-y border-border py-10">
      <Container className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {badges.map((b) => {
          const content = (
            <span
              className="flex items-center justify-center opacity-90 transition-opacity hover:opacity-100"
              style={{ width: b.width, height: b.height }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt={b.alt} className="h-full w-full object-contain" />
            </span>
          );
          return b.href ? (
            <a
              key={b.alt}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${b.alt} — voir le certificat`}
              title="Voir le certificat"
            >
              {content}
            </a>
          ) : (
            <span key={b.alt}>{content}</span>
          );
        })}
      </Container>
    </section>
  );
}
