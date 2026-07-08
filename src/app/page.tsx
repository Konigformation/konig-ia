import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Friction } from "@/components/sections/friction";
import { WhySystem } from "@/components/sections/why-system";
import { Method } from "@/components/sections/method";
import { Audience } from "@/components/sections/audience";
import { TrustLogos } from "@/components/sections/trust-logos";
import { MidForm } from "@/components/sections/mid-form";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Blog } from "@/components/sections/blog";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ExitIntent } from "@/components/exit-intent";
import { WhatsAppWidget } from "@/components/whatsapp-widget";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Testimonials />
        <Friction />
        <WhySystem />
        <Method />
        <Audience />
        <MidForm />
        <TrustLogos />
        <Faq />
        <Blog />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
      <ExitIntent />
      <WhatsAppWidget />
    </>
  );
}
