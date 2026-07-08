"use client";

import { motion, type Variants } from "framer-motion";
import { Bot, CalendarCheck, Globe, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { GoogleRating } from "@/components/google-rating";
import { ClientLogosMarquee } from "@/components/client-logos-marquee";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { NETWORK_HUBS, NetworkBackground } from "@/components/network-background";
import { Eyebrow } from "@/components/section-heading";

const hubIcons = [Globe, LinkedinIcon, Mail, MessageCircle, Bot, CalendarCheck];

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
      <div className="bg-grid pointer-events-none absolute inset-0 -z-20 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-20 h-[480px] w-[880px] -translate-x-1/2 rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: "var(--accent-solid)" }}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden sm:block"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 30% 40%, transparent 0%, black 65%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 30% 40%, transparent 0%, black 65%)",
        }}
      >
        <NetworkBackground />
        {NETWORK_HUBS.map((hub, i) => {
          const Icon = hubIcons[i];
          return (
            <div
              key={i}
              className="motion-safe:animate-float absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground shadow-md backdrop-blur"
              style={{
                left: `${hub.x * 100}%`,
                top: `${hub.y * 100}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              <Icon className="size-4.5" strokeWidth={1.75} />
            </div>
          );
        })}
      </div>

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
            className="max-w-xl text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-6xl"
          >
            Apprenez à bâtir votre machine à clients{" "}
            <span className="text-gradient">grâce à l&apos;IA</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1.5}
            className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-muted-foreground sm:text-base"
          >
            <span>LinkedIn</span>
            <span className="text-[var(--accent-solid)]">·</span>
            <span>Mailing</span>
            <span className="text-[var(--accent-solid)]">·</span>
            <span>WhatsApp</span>
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-lg text-lg text-muted-foreground text-balance sm:text-xl"
          >
            Les nouveaux leviers du marketing et de l&apos;IA, réunis en un
            seul système. En 2 jours :{" "}
            <strong className="font-semibold text-foreground">contenu</strong>,{" "}
            <strong className="font-semibold text-foreground">
              prospection IA
            </strong>{" "}
            et{" "}
            <strong className="font-semibold text-foreground">
              tunnel de vente
            </strong>
            .
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2.5}
            className="mt-8"
          >
            <CtaButton href="#formation">Découvrir la formation</CtaButton>
          </motion.div>

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
