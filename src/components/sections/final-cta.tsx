import { Container } from "@/components/container";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section id="diagnostic" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: "var(--accent-solid)" }}
      />
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 className="max-w-lg text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Chaque mois sans le savoir, c&apos;est un mois de plus payé à une
            agence marketing
          </h2>
          <p className="mt-5 max-w-lg text-base text-muted-foreground text-balance sm:text-lg">
            Réservez votre Audit IA gratuit de 30 minutes : nous évaluons si
            l&apos;automatisation a du sens pour votre activité, et ce que ça
            changerait concrètement — sans engagement d&apos;aucune sorte.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            Nous limitons volontairement le nombre d&apos;audits chaque semaine
            pour garantir un échange de qualité avec chaque dirigeant.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <BookingForm />
        </Reveal>
      </Container>
    </section>
  );
}
