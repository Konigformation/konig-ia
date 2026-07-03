import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { TrustLogos } from "@/components/sections/trust-logos";
import { Problem } from "@/components/sections/problem";
import { MidForm } from "@/components/sections/mid-form";
import { Formation } from "@/components/sections/formation";
import { Benefits } from "@/components/sections/benefits";
import { WhyUs } from "@/components/sections/why-us";
import { UseCases } from "@/components/sections/use-cases";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ExitIntent } from "@/components/exit-intent";
import { InlineCtaBanner } from "@/components/inline-cta-banner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <TrustLogos />
        <Problem />
        <MidForm />
        <Formation />
        <Benefits />
        <WhyUs />
        <UseCases />
        <HowItWorks />
        <Testimonials />
        <InlineCtaBanner title="Convaincu par ces retours ? Découvrez votre propre potentiel d'automatisation." />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
      <ExitIntent />
    </>
  );
}
