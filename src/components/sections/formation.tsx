import { GraduationCap } from "lucide-react";
import { Container } from "@/components/container";

export function Formation() {
  return (
    <section id="formation" className="py-16">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-card/30 p-8 text-center sm:p-10">
          <span className="flex size-10 items-center justify-center rounded-full bg-[var(--accent-solid)]/10 text-[var(--accent-solid)]">
            <GraduationCap className="size-5" strokeWidth={1.75} />
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
            Et si le besoin est confirmé ?
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Si votre Audit IA confirme un vrai besoin, nous vous proposons de le
            mettre en place vous-même, avec nous, lors d&apos;une formation
            intensive de 2 jours certifiée Qualiopi et potentiellement finançable
            (CPF, OPCO, France Travail, FAF). L&apos;objectif : que vous sachiez le
            faire seul, sans jamais dépendre d&apos;une agence marketing. Mais
            commençons d&apos;abord par l&apos;audit.
          </p>
        </div>
      </Container>
    </section>
  );
}
