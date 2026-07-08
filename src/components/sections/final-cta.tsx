import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section id="diagnostic" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: "var(--accent-solid)" }}
      />
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Chaque mois sans système, c&apos;est un mois d&apos;opportunités et
            de chiffre d&apos;affaires en moins.
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground text-balance sm:text-lg">
            Ne laissez pas filer un mois de plus. Vérifiez en 30 secondes si
            votre activité est éligible à l&apos;Audit IA offert.
          </p>
          <div className="mt-8">
            <CtaButton href="#diagnostic-ia">Tester mon éligibilité</CtaButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
