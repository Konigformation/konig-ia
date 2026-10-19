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
  slug: "claude-google-workspace-acquisition",
  title:
    "Claude débarque dans Google Docs, Sheets et Slides : 3 façons d'en faire un levier d'acquisition",
  description:
    "Actualité IA — Claude est désormais intégré à Google Docs, Sheets et Slides. 3 usages concrets pour accélérer ton acquisition, là où tu travailles déjà.",
  date: "2026-10-21",
  dateLabel: "21 octobre 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/claude-google-workspace-acquisition.svg",
  imageAlt:
    "Claude dans Google Workspace : un assistant IA aide à rédiger un document, analyser une feuille de calcul et monter une présentation — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "Claude Google Workspace",
    "Claude Google Docs",
    "IA dans Google Sheets",
    "automatiser son acquisition",
    "Claude Slides",
    "IA pour indépendants",
    "Anthropic Claude 2026",
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
    q: "Qu'est-ce qui change avec Claude dans Google Workspace ?",
    a: "Anthropic a intégré Claude directement dans Google Docs, Sheets et Slides. Tu n'as plus à copier-coller entre une fenêtre d'IA et tes documents : Claude t'aide à rédiger, analyser et mettre en forme là où tu travailles déjà. Moins de friction, plus de vitesse.",
  },
  {
    q: "Faut-il un abonnement particulier ?",
    a: "L'intégration s'adresse aux utilisateurs de Claude et de Google Workspace ; les modalités dépendent de ton offre. Mais l'essentiel n'est pas l'outil : c'est ce que tu lui fais faire pour ton acquisition.",
  },
  {
    q: "Est-ce que ça remplace mon système ?",
    a: "Non. Travailler plus vite dans tes docs te fait gagner du temps, mais ça n'enchaîne pas tes leviers pour autant. Ce qui remplit ton agenda, c'est un système qui relie contenu, prospection et conversion — pas un assistant dans un document isolé.",
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
        L&apos;IA là où tu travailles déjà — à mettre au service d&apos;un système.
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
                Tu passes tes journées dans Google Docs, Sheets et Slides — et tu fais
                des allers-retours sans fin avec une fenêtre d&apos;IA à côté. C&apos;est
                fini : Claude s&apos;installe directement dans tes documents. Voici
                comment en profiter pour ton acquisition.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de sortir
              </h2>
              <p>
                Anthropic a intégré <strong>Claude dans Google Docs, Sheets et
                Slides</strong>. Plus besoin de copier-coller entre une app d&apos;IA et
                ton travail : tu rédiges, analyses et mets en forme <strong>là où tu es
                déjà</strong>. La friction disparaît — et c&apos;est souvent la friction
                qui t&apos;empêche d&apos;être régulier.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                1. Docs : ton contenu et ta prospection, plus vite
              </h2>
              <p>
                Rédige directement dans ton document : un mois de posts à partir
                d&apos;un compte-rendu d&apos;appel, une séquence d&apos;emails, une page
                de vente. Demande à Claude de reformuler, raccourcir, ou adapter le ton
                sans quitter ta page.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                2. Sheets : qualifie et score ta base
              </h2>
              <p>
                Ta liste de prospects est dans un tableur ? Fais-la analyser sur place :
                nettoyage, scoring, repérage des bons signaux. C&apos;est exactement le
                genre de tâche où l&apos;IA brille (vois notre{" "}
                <Link
                  href="/blog/systeme-lead-scoring-ia"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système de lead scoring
                </Link>
                ).
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3. Slides : des supports de vente en minutes
              </h2>
              <p>
                Prépare une proposition, une mini-présentation d&apos;offre ou un support
                de rendez-vous directement dans Slides. Ce qui te prenait une soirée tient
                en quelques minutes.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Gagner du temps ≠ gagner des clients
              </h2>
              <p>
                Travailler plus vite dans tes docs, c&apos;est précieux — mais ça ne
                remplit pas ton agenda tout seul. Un document bien rédigé qui ne mène à
                aucune action reste un document. La vraie bascule, c&apos;est quand ce gain
                de temps <strong>alimente un système</strong> qui enchaîne derrière :
                contenu, prospection, conversion. C&apos;est ce que construit notre{" "}
                <Link
                  href="/blog/systeme-machine-a-clients-3-leviers"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  machine à clients complète
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
                    Releasebot — Anthropic Release Notes (octobre 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://aiweekly.co/ai-news-today" target="_blank" rel="noopener noreferrer nofollow">
                    AI Weekly — AI News Today (octobre 2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux transformer ces gains de temps en machine à clients ?
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
