import { Handshake } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function Formation() {
  return (
    <section id="formation" className="py-16">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-muted/40 p-8 text-center sm:p-10">
          <span className="flex size-10 items-center justify-center rounded-full bg-[var(--accent-solid)]/10 text-[var(--accent-solid)]">
            <Handshake className="size-5" strokeWidth={1.75} />
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
            Et si le besoin est confirmé ?
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Si votre Audit IA confirme un vrai besoin, nous vous accompagnons
            pour le mettre en place, à vos côtés, lors d&apos;un accompagnement
            intensif de 2 jours certifié Qualiopi et potentiellement finançable
            (CPF, OPCO, France Travail, FAF). L&apos;objectif : construire votre
            système avec notre soutien, sans jamais dépendre d&apos;une agence
            marketing. Mais commençons d&apos;abord par l&apos;audit.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
