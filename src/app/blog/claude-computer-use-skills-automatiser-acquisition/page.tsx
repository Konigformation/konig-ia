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
  slug: "claude-computer-use-skills-automatiser-acquisition",
  title:
    "Claude peut maintenant piloter ton navigateur : comment l'utiliser pour automatiser ton acquisition",
  description:
    "Actualité IA — Anthropic a rendu le « computer use », la Skills API et la Files API accessibles à tous. Ce que ça change, et 3 façons d'en faire un levier de clients.",
  date: "2026-08-21",
  dateLabel: "21 août 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/claude-computer-use-skills-automatiser-acquisition.svg",
  imageAlt:
    "Claude computer use : un agent IA qui pilote un navigateur et des fichiers pour automatiser l'acquisition — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "Claude computer use",
    "agents IA 2026",
    "Skills API Claude",
    "automatiser l'acquisition",
    "agent IA navigateur",
    "automatisation IA prospection",
    "Anthropic Claude",
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
    q: "Qu'est-ce que le « computer use » de Claude ?",
    a: "C'est la capacité pour Claude de piloter un ordinateur comme un humain : ouvrir un navigateur, cliquer, remplir des champs, lire des fichiers. Anthropic l'a rendu accessible à tous (accès général), avec la Skills API et la Files API, pour construire des agents qui exécutent des tâches de bout en bout.",
  },
  {
    q: "Faut-il savoir coder pour en profiter ?",
    a: "Pour brancher ces API directement, oui. Mais tu peux déjà utiliser l'esprit de cette nouveauté sans code : déléguer à l'IA des tâches répétitives de ton acquisition (qualification, rédaction, tri) et t'appuyer sur un système qui, lui, exploite ces briques pour toi.",
  },
  {
    q: "Est-ce que ça remplace un commercial ou une agence ?",
    a: "Non. Ces briques exécutent des tâches ; elles ne remplacent ni la stratégie ni le jugement. Ce qui produit des clients, c'est un système qui orchestre l'IA au service d'un objectif — pas une fonctionnalité isolée.",
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
        Des agents qui utilisent tes outils — à intégrer dans un vrai système.
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
                Depuis deux ans, l&apos;IA te répond. Cette semaine, elle passe un cap :
                elle peut désormais <strong>utiliser ton ordinateur à ta place</strong>.
                Anthropic vient de rendre le « computer use » de Claude accessible à
                tous — et pour ton acquisition, c&apos;est plus qu&apos;un détail
                technique.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de sortir
              </h2>
              <p>
                Anthropic a fait passer en <strong>accès général</strong> trois briques
                clés de sa plateforme : le <strong>« computer use »</strong> (Claude
                pilote un navigateur, clique, remplit des champs), la{" "}
                <strong>Skills API</strong> (lui donner des compétences réutilisables) et
                la <strong>Files API</strong> (lire et manipuler tes fichiers). En clair :
                on passe d&apos;un assistant qui suggère à un <strong>agent qui
                exécute</strong> des tâches entières.
              </p>
              <p>
                Le mouvement dépasse Anthropic : la même semaine, le protocole A2A de
                Google a rejoint la fondation qui gouverne déjà le MCP, signe que les
                agents IA se standardisent pour de bon.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3 usages concrets pour ramener des clients
              </h2>

              <h3 className="pt-2 text-xl font-semibold tracking-tight">
                1. Déléguer la qualification à un agent
              </h3>
              <p>
                Un agent capable de naviguer peut aller lire un profil, croiser
                plusieurs pages et te sortir une fiche de qualification — pendant que tu
                fais autre chose. Tu récupères des prospects priorisés, pas une liste
                brute. (Notre{" "}
                <Link
                  href="/blog/hack-listes-prospects-qualifies-claude"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  méthode de listes qualifiées
                </Link>{" "}
                s&apos;en trouve démultipliée.)
              </p>

              <h3 className="pt-2 text-xl font-semibold tracking-tight">
                2. Automatiser les tâches répétitives de ton tunnel
              </h3>
              <p>
                Remplir un CRM, préparer un devis, trier des réponses : autant de micro-
                tâches qui te bouffent des heures. Ce sont exactement celles qu&apos;un
                agent « computer use » peut prendre en charge.
              </p>

              <h3 className="pt-2 text-xl font-semibold tracking-tight">
                3. Transformer ton expertise en compétences réutilisables
              </h3>
              <p>
                La logique des « Skills », c&apos;est d&apos;encapsuler une façon de
                faire pour la rejouer à l&apos;infini. Traduit pour toi : ta méthode de
                prospection ou de contenu devient un actif que l&apos;IA applique de
                façon constante, sans que tu réexpliques tout à chaque fois.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Une brique n&apos;est pas une machine
              </h2>
              <p>
                Ces nouveautés sont puissantes. Mais une fonctionnalité isolée ne
                remplit pas ton agenda : un agent qui qualifie sans séquence pour
                relancer, ou qui rédige sans tunnel pour convertir, ne produit rien.
                C&apos;est la différence entre « tester l&apos;IA » et{" "}
                <strong>avoir un système</strong> où contenu, prospection et conversion
                s&apos;enchaînent. Vois notre{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système de tunnel de vente automatisé
                </Link>
                .
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
                  <a className="underline hover:text-foreground" href="https://releasebot.io/updates/anthropic" target="_blank" rel="noopener noreferrer nofollow">
                    Releasebot — Notes de version Anthropic (août 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://aiagentstore.ai/ai-agent-news/this-week" target="_blank" rel="noopener noreferrer nofollow">
                    AI Agents News — Semaine du 24 août 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux transformer ces briques en machine à clients ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h. Teste ton éligibilité à
                l&apos;Audit IA offert : 30 minutes, sans jargon, sans engagement.
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
