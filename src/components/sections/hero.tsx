"use client";

import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { GoogleRating } from "@/components/google-rating";
import { ClientLogosMarquee } from "@/components/client-logos-marquee";
import { RingsBackground } from "@/components/rings-background";
import { Eyebrow } from "@/components/section-heading";
import { ctaCopy, siteConfig } from "@/lib/site-config";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-12 sm:pt-44 sm:pb-16">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-20 h-[480px] w-[880px] -translate-x-1/2 rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: "var(--accent-solid)" }}
      />

      {/* Anneaux : carré, centré sur le titre, débordant hors du viewport comme dans la refonte. */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 aspect-square w-[min(1300px,160vw)] -translate-x-1/2 -translate-y-1/2">
        <RingsBackground variant="hero" />
      </div>

      {/* Voile radial par-dessus les anneaux : les estompe derrière le texte,
          sans quoi ils rentrent en concurrence avec le titre. Cf. .hero::after. */}
      <div
        className="pointer-events-none absolute inset-0 -z-[5]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(120,148,246,.28), transparent 70%)",
        }}
      />

      <Container className="flex flex-col items-center">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <GoogleRating className="mb-5" />

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Eyebrow>Certifié Qualiopi</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-heading max-w-xl text-[clamp(2.25rem,5.6vw,3.75rem)] leading-[1.08] font-normal text-balance"
          >
            Apprenez à bâtir votre{" "}
            <em className="text-[var(--accent-solid)] italic">machine à clients</em>{" "}
            grâce à l&apos;IA
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1.5}
            className="mt-6 max-w-xl text-lg text-muted-foreground text-balance sm:text-xl"
          >
            Le nouveau système IA tout-en-un pour automatiser votre{" "}
            <strong className="font-semibold text-foreground">contenu</strong>,
            votre{" "}
            <strong className="font-semibold text-foreground">
              prospection
            </strong>{" "}
            et vos{" "}
            <strong className="font-semibold text-foreground">
              conversions
            </strong>{" "}
            en seulement 48 heures.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-muted-foreground sm:text-base"
          >
            <span>LinkedIn</span>
            <span className="text-[var(--accent-solid)]">·</span>
            <span>Mailing</span>
            <span className="text-[var(--accent-solid)]">·</span>
            <span>WhatsApp</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2.5}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <CtaButton href={siteConfig.bookingUrl}>{ctaCopy.primaryShort}</CtaButton>
            <CtaButton href="#formation" variant="outline" showArrow={false}>
              Découvrir la formation
            </CtaButton>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2.8}
            className="mt-6 text-[11px] font-bold tracking-[0.22em] text-[var(--dim)] uppercase"
          >
            Audit offert · 30 minutes ·{" "}
            <span className="text-[var(--accent-solid)]">Sans engagement</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 w-full max-w-xl"
          >
            <ClientLogosMarquee />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
