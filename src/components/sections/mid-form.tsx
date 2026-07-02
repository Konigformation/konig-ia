import { Container } from "@/components/container";
import { BookingForm } from "@/components/booking-form";
import { Eyebrow } from "@/components/section-heading";

export function MidForm() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center">
        <div className="mb-10 text-center">
          <Eyebrow>Prêt à savoir où vous en êtes ?</Eyebrow>
          <h2 className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Répondez en 30 secondes, découvrez votre potentiel en 30 minutes
          </h2>
        </div>
        <div className="w-full max-w-xl">
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
