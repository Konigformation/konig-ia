import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Logo } from "@/components/logo";
import { Footer } from "@/components/sections/footer";
import { siteConfig } from "@/lib/site-config";

const url = `${siteConfig.url}/autres`;
const title = "Nos autres services & formations";
const description =
  "Au-delà de l'accompagnement à l'automatisation, découvrez les autres outils et services de l'écosystème Konig pour développer votre activité — à commencer par Post Everyday, la publication multi-réseaux.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    title: `${title} | Konig IA`,
    description,
    url,
    siteName: "Konig IA",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Konig IA`,
    description,
  },
};

const networks = ["LinkedIn", "Facebook", "Instagram", "TikTok", "YouTube"];

const postEverydayBenefits = [
  "Un seul post, publié partout à la fois",
  "Un calendrier pour planifier des semaines à l'avance",
  "Toutes vos statistiques réunies sur un tableau de bord",
];

export default function AutresPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: `${title} | Konig IA`,
        description,
        url,
        inLanguage: "fr-FR",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: "Post Everyday",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Le tableau de bord tout-en-un pour planifier, publier et suivre votre contenu sur tous vos réseaux : LinkedIn, Facebook, Instagram, TikTok et YouTube.",
        url: "https://posteveryday.konigia.com",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Autres", item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Retour à l'accueil">
            <Logo className="h-10" />
          </Link>
          <CtaButton href="/#diagnostic-ia" size="default" showArrow={false}>
            Tester mon éligibilité
          </CtaButton>
        </Container>
      </header>

      <main className="py-14 sm:py-20">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Retour à l&apos;accueil
          </Link>

          <div className="mt-6 max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-[var(--accent-solid)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-solid)]">
              L&apos;écosystème Konig
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
              Nos autres services &amp; formations
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Au-delà de l&apos;accompagnement à l&apos;automatisation, découvrez
              les autres outils que nous développons pour faire grandir votre
              activité.
            </p>
          </div>

          {/* Produit vedette : Post Everyday */}
          <a
            href="https://posteveryday.konigia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-solid)]/40 hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] bg-[#14182B]">
              <Image
                src="/autres/post-everyday.svg"
                alt="Post Everyday — publiez partout, en une seule fois"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-contain"
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-[var(--accent-solid)] shadow-sm backdrop-blur">
                <Sparkles className="size-3.5" /> Nouveau
              </span>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Outil · Réseaux sociaux
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                Construire son écosystème IA qui publie sur les réseaux sociaux
              </h2>
              <p className="mt-1 text-lg font-medium text-[var(--accent-solid)]">
                Publiez partout, en une seule fois.
              </p>
              <p className="mt-4 text-muted-foreground">
                Le tableau de bord tout-en-un pour planifier, publier et suivre
                votre contenu sur tous vos réseaux — sans jongler entre dix
                applications.
              </p>

              <ul className="mt-6 space-y-2.5">
                {postEverydayBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--accent-solid)]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {networks.map((network) => (
                  <span
                    key={network}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {network}
                  </span>
                ))}
              </div>

              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-solid)]">
                Découvrir Post Everyday
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>

          {/* CTA bas de page */}
          <div className="mt-16 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
            <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
              Envie de bâtir votre propre machine à clients avec l&apos;IA ?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Testez votre éligibilité à l&apos;Audit IA offert : 30 minutes pour
              un état des lieux clair, sans jargon et sans engagement.
            </p>
            <div className="mt-6 flex justify-center">
              <CtaButton href="/#diagnostic-ia">Tester mon éligibilité</CtaButton>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
