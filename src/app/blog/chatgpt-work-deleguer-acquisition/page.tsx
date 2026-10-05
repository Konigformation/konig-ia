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
  slug: "chatgpt-work-deleguer-acquisition",
  title:
    "L'IA ne te répond plus, elle travaille : comment déléguer une tâche d'acquisition entière à ChatGPT Work",
  description:
    "Actualité IA — ChatGPT Work tourne désormais sur GPT-6.1 Sol. Comment lui déléguer une tâche d'acquisition complète, de bout en bout, pendant que tu fais autre chose.",
  date: "2026-10-07",
  dateLabel: "7 octobre 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/chatgpt-work-deleguer-acquisition.svg",
  imageAlt:
    "ChatGPT Work : un agent IA qui exécute une tâche d'acquisition complète en plusieurs étapes, en autonomie — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "ChatGPT Work",
    "agent IA autonome",
    "GPT-6.1 Sol",
    "déléguer à l'IA",
    "automatiser son acquisition",
    "agent IA travail",
    "IA qui exécute des tâches",
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
    q: "Qu'est-ce que ChatGPT Work ?",
    a: "C'est l'agent d'OpenAI pensé pour exécuter des tâches complètes en plusieurs étapes, de façon autonome, au lieu de simplement répondre. Il tourne désormais sur GPT-6.1 Sol — plus performant et à un cinquième du prix des tokens standard, disponible dans ChatGPT Work, Codex et l'API.",
  },
  {
    q: "La différence avec un prompt classique ?",
    a: "Un prompt classique te donne une réponse. Un agent de travail enchaîne les étapes : il cherche, compile, rédige, organise, et revient avec un livrable. Tu délègues un résultat, pas une phrase — mais tu dois cadrer et vérifier.",
  },
  {
    q: "Est-ce que ça remplace mon système d'acquisition ?",
    a: "Non. Un agent exécute des tâches ; il ne décide pas de ta stratégie ni n'enchaîne tes leviers tout seul. Ce qui remplit ton agenda, c'est un système qui orchestre contenu, prospection et conversion — l'agent n'en est qu'un exécutant très rapide.",
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
        Déléguer un livrable entier — à condition de savoir quoi, et comment vérifier.
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
                Pendant deux ans, tu as discuté avec l&apos;IA. Désormais, elle{" "}
                <strong>exécute</strong> : elle enchaîne les étapes d&apos;une tâche
                entière et te rend un livrable. Et pour ton acquisition, c&apos;est une
                bascule à ne pas rater.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de sortir
              </h2>
              <p>
                <strong>ChatGPT Work</strong> — l&apos;agent d&apos;OpenAI conçu pour
                mener des tâches complexes de bout en bout — tourne maintenant sur{" "}
                <strong>GPT-6.1 Sol</strong> : plus performant, et à <strong>un cinquième
                du prix</strong> des tokens standard. On passe d&apos;un assistant qui
                suggère à un exécutant qui <strong>livre</strong>.
              </p>
              <p>
                Pour un indépendant, l&apos;enjeu n&apos;est pas « une IA de plus » :
                c&apos;est de pouvoir déléguer des blocs entiers de ton acquisition. À
                condition de bien cadrer.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                1. Délègue un livrable, pas une phrase
              </h2>
              <p>
                Au lieu de « écris-moi un message », demande un résultat complet :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « À partir de cette liste de 20 prospects, prépare pour chacun : un mini-
                dossier (activité, déclencheur), un score de priorité, et un brouillon
                d&apos;email personnalisé. Rends le tout dans un tableau. »
              </blockquote>
              <p>Tu récupères un livrable exploitable, pas 20 copier-coller à faire.</p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                2. Donne-lui un cadre et des garde-fous
              </h2>
              <p>
                Un agent autonome a besoin de règles claires : la source à utiliser, le
                format attendu, ce qu&apos;il ne doit <strong>pas</strong> faire (pas
                d&apos;envoi automatique, pas d&apos;info inventée). Tu gardes la main sur
                les actions sensibles — l&apos;agent prépare, tu valides.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3. Vérifie, puis réutilise la recette
              </h2>
              <p>
                Relis le premier livrable, corrige le cadrage, puis <strong>garde le
                prompt</strong> comme une procédure. La prochaine fois, tu relances la
                même recette en 10 secondes. C&apos;est ça, transformer un outil en gain
                de temps récurrent.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                L&apos;exécutant est bluffant. Mais il lui faut un chef d&apos;orchestre.
              </h2>
              <p>
                Un agent qui prépare 20 dossiers, c&apos;est spectaculaire — mais si
                personne n&apos;enchaîne derrière (envoi, relances, conversion), ça reste
                un livrable qui dort. La vraie puissance vient quand cet exécutant
                s&apos;insère dans un <strong>système</strong> qui relie contenu,
                prospection et conversion. Vois notre{" "}
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
                  <a className="underline hover:text-foreground" href="https://llm-stats.com/llm-updates" target="_blank" rel="noopener noreferrer nofollow">
                    LLM-Stats — AI Updates Today (octobre 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://releasebot.io/updates/anthropic" target="_blank" rel="noopener noreferrer nofollow">
                    Releasebot — Release Notes (octobre 2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un chef d&apos;orchestre pour tous ces exécutants IA ?
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
