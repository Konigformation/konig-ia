import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Logo } from "@/components/logo";
import { Footer } from "@/components/sections/footer";
import { siteConfig } from "@/lib/site-config";

const article = {
  slug: "systeme-prise-rdv-qualifiee-automatisee",
  title:
    "Le système de prise de rendez-vous qualifiée : du lead au créneau réservé, sans un seul aller-retour",
  description:
    "Répondre en 5 min, c'est jusqu'à 21× plus de chances de qualifier un lead. Le système en 4 étapes pour capter, qualifier et réserver tes RDV automatiquement — pendant que tu bosses.",
  date: "2026-11-11",
  dateLabel: "11 novembre 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-prise-rdv-qualifiee-automatisee.svg",
  imageAlt:
    "Le système de prise de rendez-vous qualifiée automatisée : du lead au créneau réservé sans allers-retours, lead qualifié puis agenda rempli — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "prise de rendez-vous automatisée",
    "système de qualification de leads",
    "prendre des RDV automatiquement",
    "speed to lead",
    "qualifier ses prospects",
    "agenda commercial automatisé",
    "réserver des appels de vente",
  ],
  authors: [{ name: article.author }],
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    title: article.title,
    description: article.description,
    url,
    siteName: "Konig IA",
    locale: "fr_FR",
    publishedTime: article.date,
    authors: [article.author],
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: article.imageAlt,
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.description,
    images: [imageUrl],
  },
};

const faq = [
  {
    q: "Pourquoi la vitesse de réponse compte autant ?",
    a: "Parce qu'un prospect est le plus chaud dans les minutes qui suivent sa demande. Les études sur le « speed to lead » (MIT / InsideSales) montrent qu'un contact dans les 5 minutes multiplie fortement les chances de qualifier le lead — de l'ordre de 21× par rapport à une réponse 30 minutes plus tard. Passé quelques heures, l'intérêt s'effondre.",
  },
  {
    q: "Qualifier automatiquement, ça ne filtre pas trop ?",
    a: "Au contraire, ça te protège. Le but n'est pas de refuser des gens, mais de n'amener en appel que ceux pour qui tu peux vraiment créer de la valeur — et de rediriger les autres. Tu arrêtes de brûler ton agenda en rendez-vous qui ne mènent nulle part.",
  },
  {
    q: "Il faut beaucoup d'outils pour monter ce système ?",
    a: "Non. Il faut surtout un enchaînement clair : un formulaire/chat de qualification, une logique de tri, un agenda connecté, et des relances automatiques. L'important n'est pas d'empiler les outils, mais que chaque maillon parle au suivant sans intervention manuelle.",
  },
];

function HeroVisual() {
  return (
    <figure className="mt-8">
      <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-border">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted-foreground">
        Pendant que tu travailles, ton agenda se remplit de bons rendez-vous.
      </figcaption>
    </figure>
  );
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.date,
        author: { "@type": "Organization", name: article.author },
        publisher: { "@type": "Organization", name: "Konig IA", url: siteConfig.url },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        articleSection: article.category,
        inLanguage: "fr-FR",
        image: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
          caption: article.imageAlt,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
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
          <article className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> Retour au blog
            </Link>

            <div className="mt-6">
              <span className="inline-flex items-center rounded-full bg-[var(--accent-solid)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-solid)]">
                {article.category}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {article.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" /> {article.dateLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" /> {article.readTime} de lecture
              </span>
              <span>Par {article.author}</span>
            </div>

            <HeroVisual />

            <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
              <p className="text-lg font-medium text-foreground">
                Un prospect te contacte, motivé. Toi, tu es en rendez-vous. Tu réponds trois
                heures plus tard… il a déjà signé ailleurs. Ce n&apos;est pas un problème de
                leads — c&apos;est un problème de système. Voici celui qui transforme chaque
                demande en RDV qualifié, sans que tu lèves le petit doigt.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi la vitesse décide (presque) tout
              </h2>
              <p>
                Un prospect n&apos;est jamais aussi chaud que dans les minutes qui suivent
                sa demande. Les études sur le <strong>« speed to lead »</strong> (MIT /
                InsideSales) sont sans appel : répondre dans les <strong>5 minutes</strong>{" "}
                peut multiplier par ~21 les chances de qualifier le lead par rapport à une
                réponse 30 minutes plus tard. Le hic : seul un petit pourcentage
                d&apos;entreprises y arrivent, car un humain ne peut pas être disponible en
                permanence. Un système, si.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Capter la demande, instantanément
              </h2>
              <p>
                Chaque point de contact (page, pub, DM, formulaire) doit déboucher sur{" "}
                <strong>une seule action claire</strong> : laisser sa demande. Pas de « on
                vous rappelle un jour » : une réponse immédiate (accusé de réception, premier
                message) qui confirme au prospect qu&apos;il est pris en charge — tout de
                suite.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Qualifier avant l&apos;appel
              </h2>
              <p>
                C&apos;est le cœur du système. Quelques questions bien pensées (besoin,
                contexte, moyens, délai) trient automatiquement : qui est prêt pour un appel,
                qui a besoin d&apos;être nourri encore un peu, qui n&apos;est pas pour toi.
                Tu protèges ton temps et tu n&apos;amènes en RDV que des gens pour qui tu peux
                vraiment faire la différence. L&apos;IA peut mener cet échange de
                qualification de façon naturelle, façon{" "}
                <Link
                  href="/blog/systeme-lead-scoring-ia"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  lead scoring
                </Link>
                .
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Réserver le créneau, sans aller-retour
              </h2>
              <p>
                Fini le ping-pong « vous êtes dispo quand ? ». Le prospect qualifié choisit
                directement un créneau dans ton agenda connecté. Confirmation automatique,
                ajout au calendrier, tout est fait. Tu ouvres ton agenda le matin : les bons
                rendez-vous sont déjà là.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Relancer les absents (et les no-show)
              </h2>
              <p>
                Un prospect qui ne réserve pas, ou qui ne vient pas, n&apos;est pas perdu —
                sauf si tu l&apos;oublies. Des rappels automatiques (avant le RDV) et des
                relances (pour ceux qui n&apos;ont pas réservé) récupèrent une part des RDV
                qui te filaient entre les doigts. C&apos;est le prolongement naturel d&apos;une
                bonne{" "}
                <Link
                  href="/blog/hack-relances-automatisees-ia"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  séquence de relance
                </Link>
                .
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le système complet, en une phrase
              </h2>
              <p>
                <strong>Capter → qualifier → réserver → relancer</strong>, en continu, sans
                toi dans la boucle. Ce n&apos;est pas un gadget de plus : c&apos;est le maillon
                qui relie ta prospection à tes ventes. Branché à ton{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  tunnel de vente
                </Link>
                , il transforme l&apos;attention que tu génères en rendez-vous réels — la
                seule métrique qui paie.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Questions fréquentes
              </h2>
              <div className="space-y-5">
                {faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-semibold text-foreground">{f.q}</h3>
                    <p className="mt-1.5 text-muted-foreground">{f.a}</p>
                  </div>
                ))}
              </div>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">Sources</h2>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>
                  <a className="underline hover:text-foreground" href="https://www.leadsigma.com/resources/blog/five-minute-lead-response-stat" target="_blank" rel="noopener noreferrer nofollow">
                    LeadSigma — The 5-Minute Lead Response Rule (MIT / InsideSales)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.getviva.ai/lead-response-time-statistics-dental-2026/" target="_blank" rel="noopener noreferrer nofollow">
                    Viva — Lead Response Time Statistics 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un agenda qui se remplit tout seul de rendez-vous qualifiés ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h, prise de RDV comprise.
                Teste ton éligibilité à l&apos;Audit IA offert : 30 minutes pour un plan
                clair.
              </p>
              <div className="mt-6 flex justify-center">
                <CtaButton href="/#diagnostic-ia">Tester mon éligibilité</CtaButton>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Formation certifiée Qualiopi — finançable OPCO / CPF / France Travail.
              </p>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
