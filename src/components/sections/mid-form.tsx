import { Container } from "@/components/container";
import { BookingForm } from "@/components/booking-form";
import { Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function MidForm() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center">
        <Reveal className="mb-10 text-center">
          <Eyebrow>Prêt à savoir où vous en êtes ?</Eyebrow>
          <h2 className="mt-3 max-w-lg text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            Répondez en 30 secondes, découvrez votre potentiel en 30 minutes
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="w-full max-w-xl">
          <BookingForm />
        </Reveal>
      </Container>
    </section>
  );
}
