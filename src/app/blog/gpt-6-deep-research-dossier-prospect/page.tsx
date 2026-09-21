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
  slug: "gpt-6-deep-research-dossier-prospect",
  title:
    "GPT-6 vient de sortir : le prompt « deep research » qui te fait un dossier prospect complet en 5 minutes",
  description:
    "Actualité IA — OpenAI a lancé GPT-6 Astra. Comment utiliser sa puissance de raisonnement pour préparer un dossier prospect complet en 5 minutes. Prompt inclus.",
  date: "2026-09-23",
  dateLabel: "23 septembre 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/gpt-6-deep-research-dossier-prospect.svg",
  imageAlt:
    "GPT-6 et le deep research : une loupe analyse un dossier prospect rempli de données en quelques minutes — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "GPT-6",
    "deep research IA",
    "dossier prospect",
    "recherche prospect IA",
    "préparer un rendez-vous commercial",
    "GPT-6 Astra",
    "prospection avec l'IA",
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
    q: "Qu'est-ce que GPT-6 change concrètement ?",
    a: "OpenAI a lancé GPT-6 Astra, qui ouvre la génération GPT-6 avec un raisonnement nettement plus poussé sur les tâches complexes en plusieurs étapes. Pour l'acquisition, l'intérêt n'est pas le modèle en soi, mais ce que tu peux enfin lui déléguer : des analyses fouillées, pas juste des phrases.",
  },
  {
    q: "Ai-je besoin de la dernière version pour ce prompt ?",
    a: "Non. La méthode « deep research » fonctionne avec les modèles récents de ChatGPT comme de Claude. Les nouvelles générations la rendent juste plus fiable sur les recherches longues et le croisement d'informations.",
  },
  {
    q: "Un dossier IA remplace-t-il ma préparation d'appel ?",
    a: "Il fait le gros du travail de collecte et de synthèse. À toi d'ajouter ton jugement et ta relation. Un bon dossier te fait gagner 15 minutes par prospect — un système, lui, te fait gagner l'étape entière, en la déclenchant tout seul.",
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
        La recherche prospect qui prenait 20 minutes tient désormais en 5.
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
                Tu passes 20 minutes à fouiller le web avant chaque rendez-vous — et tu
                arrives quand même à moitié préparé. GPT-6 vient de sortir, et il rend un
                vieux hack enfin fiable : le <strong>dossier prospect</strong> complet, en
                5 minutes.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de sortir
              </h2>
              <p>
                OpenAI a lancé <strong>GPT-6 Astra</strong>, qui ouvre la génération
                GPT-6. Au-delà du bruit, ce qui compte pour toi tient en un mot :{" "}
                <strong>raisonnement</strong>. Les nouveaux modèles tiennent mieux les
                tâches longues en plusieurs étapes — exactement ce qu&apos;il faut pour
                faire de la <strong>recherche fouillée</strong> plutôt que de recracher
                un paragraphe.
              </p>
              <p>
                Traduit pour ton acquisition : tu peux enfin lui confier la préparation
                d&apos;un rendez-vous de bout en bout.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le prompt « deep research » pour ton dossier prospect
              </h2>
              <p>
                Donne à l&apos;IA le nom de l&apos;entreprise et de ton contact, puis ce
                prompt :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Fais-moi un dossier de préparation de rendez-vous sur [entreprise] et
                [contact]. Structure : (1) ce qu&apos;ils font, en une phrase ; (2) 3
                enjeux ou priorités probables cette année ; (3) un déclencheur récent
                pertinent pour [mon offre] ; (4) 2 questions à poser en rendez-vous ; (5)
                une accroche d&apos;ouverture personnalisée. Sois précis, pas générique. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Affine en 2 relances
              </h2>
              <p>Ne t&apos;arrête pas au premier jet. Enchaîne :</p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li>« Quelle est l&apos;objection n°1 que ce profil va probablement m&apos;opposer, et comment y répondre ? »</li>
                <li>« Reformule l&apos;accroche en 2 lignes, ton direct, sans flatterie ni jargon. »</li>
              </ul>
              <p>
                En trois échanges, tu as un dossier plus complet que 90 % des commerciaux
                qui improvisent.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le hack te fait gagner 15 min. Le système te fait gagner l&apos;étape.
              </h2>
              <p>
                Ce prompt est excellent — mais tu le lances encore <strong>à la main</strong>,
                prospect par prospect. La vraie bascule, c&apos;est quand la préparation
                se déclenche automatiquement dès qu&apos;un rendez-vous entre dans ton
                agenda, dossier prêt à ton réveil. C&apos;est ce qu&apos;un système
                d&apos;acquisition orchestre — vois notre{" "}
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
                  <a className="underline hover:text-foreground" href="https://aiweekly.co/ai-news-today" target="_blank" rel="noopener noreferrer nofollow">
                    AI Weekly — AI News Today (septembre 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://llm-stats.com/ai-news" target="_blank" rel="noopener noreferrer nofollow">
                    LLM-Stats — LLM News Today (septembre 2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux que ces gains de temps se déclenchent tout seuls ?
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
