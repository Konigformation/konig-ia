import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/container";
import { BookingForm } from "@/components/booking-form";
import { Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function MidForm() {
  return (
    <section id="diagnostic-ia" className="py-20 sm:py-28">
      <Container className="flex flex-col items-center">
        <Reveal className="mb-6 text-center">
          <Eyebrow>Prêt à savoir où vous en êtes ?</Eyebrow>
          <h2 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            Découvrez tout de suite votre éligibilité
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mb-8 max-w-md">
          <p className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/[0.06] px-4 py-3 text-sm text-muted-foreground">
            <AlertTriangle
              className="mt-0.5 size-4 shrink-0 text-amber-500"
              strokeWidth={2}
            />
            <span>
              <span className="font-medium text-foreground">
                Attention : ce système n&apos;est pas recommandé à tous les
                profils.
              </span>{" "}
              C&apos;est précisément l&apos;objet de l&apos;audit — évaluer
              ensemble sa pertinence pour votre activité.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.1} className="w-full max-w-xl">
          <BookingForm title="Tester votre éligibilité à l'audit offert" />
        </Reveal>
      </Container>
    </section>
  );
}
