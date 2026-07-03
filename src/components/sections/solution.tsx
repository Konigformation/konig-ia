import { Check } from "lucide-react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Eyebrow } from "@/components/section-heading";
import { Pipeline } from "@/components/sections/pipeline";
import { Reveal } from "@/components/reveal";
import { ctaCopy, siteConfig } from "@/lib/site-config";

const checklist = [
  "Si l'automatisation a réellement du sens pour votre activité",
  "Ce que ça apporterait concrètement à votre structure : temps, opportunités, chiffre d'affaires",
  "Les tâches de prospection que vous pourriez déléguer à l'IA dès demain",
  "Un avis honnête, même si la réponse est non",
  "Si c'est pertinent, comment construire ce système vous-même en formation",
  "Aucun engagement : un état des lieux clair, pas un argumentaire de vente",
];

export function Solution() {
  return (
    <section id="diagnostic-ia" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>L&apos;Audit IA</Eyebrow>
            <h2 className="max-w-lg text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              30 minutes pour savoir si l&apos;automatisation a du sens pour vous
            </h2>
            <p className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
              Pas un argumentaire commercial. Un échange concret où nous regardons
              ensemble votre activité pour déterminer si vous en avez besoin, et ce
              que ça changerait concrètement pour votre structure.
            </p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-solid)]/10 text-[var(--accent-solid)]">
                    <Check className="size-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-foreground/90 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CtaButton href={siteConfig.bookingUrl}>{ctaCopy.primary}</CtaButton>
              <CtaButton href={siteConfig.bookingUrl} variant="outline" showArrow={false}>
                {ctaCopy.secondary}
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Pipeline />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
