"use client";

import { motion, type Variants } from "framer-motion";
import { Bot, CalendarCheck, Globe, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { BookingForm } from "@/components/booking-form";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { LeadMagnetTrigger } from "@/components/lead-magnet-trigger";
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
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
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

      <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Eyebrow>Audit IA gratuit · Formation certifiée Qualiopi</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="max-w-xl text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-6xl"
          >
            L&apos;écosystème qui automatise votre prospection clients{" "}
            <span className="text-gradient">grâce à l&apos;IA</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1.5}
            className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-muted-foreground lg:justify-start sm:text-base"
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
            Réservez un Audit IA gratuit de 30 minutes : nous évaluons si
            l&apos;automatisation a du sens pour votre activité, et ce que ça
            changerait concrètement pour vous. Si oui, vous apprenez à tout
            construire vous-même, en 2 jours de formation.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-5 text-xs text-muted-foreground"
          >
            30 min · 100% gratuit · sans engagement · réponse sous 24h
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3.5} className="mt-4">
            <LeadMagnetTrigger />
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="w-full"
        >
          <BookingForm />
        </motion.div>
      </Container>
    </section>
  );
}
