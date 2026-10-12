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
  slug: "claude-haiku-5-5-automatiser-masse",
  title:
    "Claude Haiku 5.5 vient de sortir : le petit modèle qui automatise les tâches de masse de ton acquisition (pour presque rien)",
  description:
    "Actualité IA — Claude Haiku 5.5 est ~75 % moins cher que Haiku 4.5. Comment l'utiliser pour trier, qualifier et personnaliser en masse, à un coût quasi nul.",
  date: "2026-10-14",
  dateLabel: "14 octobre 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/claude-haiku-5-5-automatiser-masse.svg",
  imageAlt:
    "Claude Haiku 5.5 : un petit modèle rapide et bon marché qui traite des tâches d'acquisition en masse pour presque rien — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "Claude Haiku 5.5",
    "modèle IA pas cher",
    "automatiser en masse",
    "traitement de masse IA",
    "qualifier des leads IA",
    "personnalisation à l'échelle",
    "Anthropic Haiku",
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
    q: "C'est quoi Claude Haiku 5.5 ?",
    a: "C'est le petit modèle rapide et économique d'Anthropic, sorti début octobre 2026, pensé pour les tâches répétitives à fort volume (tri, classification, routage). Il est annoncé environ 75 % moins cher que Haiku 4.5 — idéal pour traiter beaucoup de données pour presque rien.",
  },
  {
    q: "Pourquoi un petit modèle plutôt qu'un gros ?",
    a: "Parce que pour trier 1 000 leads ou classer 500 emails, tu n'as pas besoin du modèle le plus intelligent — tu as besoin du plus rapide et du moins cher. Réserver un gros modèle à ces tâches, c'est payer une Ferrari pour aller chercher le pain.",
  },
  {
    q: "Est-ce que ça remplace mon travail de prospection ?",
    a: "Non : ça automatise la partie répétitive (trier, qualifier, préparer), pas la stratégie ni la relation. Un modèle rapide exécute des micro-tâches en masse ; c'est un système qui transforme ce travail brut en rendez-vous.",
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
        Le bon modèle pour la bonne tâche : rapide et bon marché, pour le volume.
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
                Tu as des centaines de leads, d&apos;emails, de contacts à trier — et tu
                le fais à la main, un par un. Claude Haiku 5.5 vient de rendre ce
                travail de fourmi quasi gratuit. Voici comment t&apos;en servir.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de sortir
              </h2>
              <p>
                Début octobre 2026, Anthropic a sorti <strong>Claude Haiku 5.5</strong> :
                son petit modèle rapide, pensé pour les tâches à fort volume (tri,
                classification, routage), annoncé environ <strong>75 % moins cher que
                Haiku 4.5</strong>. L&apos;info clé n&apos;est pas « un modèle de plus » :
                c&apos;est que traiter de la <strong>masse</strong> ne coûte presque plus
                rien.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La bonne logique : le bon modèle pour la bonne tâche
              </h2>
              <p>
                Pour écrire ton offre ou ta stratégie, utilise un gros modèle. Mais pour{" "}
                <strong>trier 1 000 leads</strong> ou <strong>classer 500 emails</strong>,
                tu veux le plus rapide et le moins cher — pas le plus intelligent. C&apos;est
                exactement le rôle d&apos;un petit modèle comme Haiku 5.5.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3 tâches de masse à lui confier dès aujourd&apos;hui
              </h2>
              <p>
                <strong>1. Trier et scorer ta base.</strong> Donne-lui ta grille et ta
                liste : il classe chaque prospect en chaud / tiède / froid en quelques
                secondes (vois notre{" "}
                <Link
                  href="/blog/systeme-lead-scoring-ia"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système de lead scoring
                </Link>
                ).
              </p>
              <p>
                <strong>2. Nettoyer et structurer.</strong> Déduplique, normalise, extrais
                les infos clés d&apos;un export brut. Le genre de corvée qui te prend des
                heures, faite en une passe.
              </p>
              <p>
                <strong>3. Générer des variantes en masse.</strong> Une première ligne
                personnalisée par prospect, une accroche par segment : ce qui était trop
                coûteux à faire un par un devient trivial.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Attention : traiter vite ≠ convertir
              </h2>
              <p>
                Un modèle qui trie 1 000 leads pour 2 centimes, c&apos;est génial — mais
                si rien ne se passe ensuite (séquence, relance, rendez-vous), tu as juste
                une belle liste triée qui dort. La puissance vient quand ce traitement de
                masse <strong>alimente un système</strong> qui enchaîne derrière. C&apos;est
                tout l&apos;objet d&apos;une{" "}
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
                Tu veux un système qui transforme ce travail de masse en clients ?
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
