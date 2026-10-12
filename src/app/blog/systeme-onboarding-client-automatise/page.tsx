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
  slug: "systeme-onboarding-client-automatise",
  title:
    "Le système d'onboarding client automatisé : les 30 premiers jours qui font revenir (et recommander)",
  description:
    "Système — Un client bien accueilli reste, dépense plus et te recommande. Le système d'onboarding automatisé en 4 étapes pour transformer les 30 premiers jours.",
  date: "2026-10-12",
  dateLabel: "12 octobre 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-onboarding-client-automatise.svg",
  imageAlt:
    "Le système d'onboarding client automatisé : les 30 premiers jours menant un nouveau client à un premier résultat, la fidélité et la recommandation — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "onboarding client",
    "onboarding automatisé",
    "accueil client",
    "expérience client",
    "fidélisation",
    "premiers jours client",
    "activation client",
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
    q: "Pourquoi les 30 premiers jours sont-ils si décisifs ?",
    a: "Parce que c'est là que le client décide, souvent inconsciemment, s'il a bien fait de te choisir. Un onboarding qui amène vite un premier résultat installe la confiance, réduit les remords d'achat et prépare la fidélité. À l'inverse, un début flou mène au désengagement — et au départ.",
  },
  {
    q: "Fidéliser, ça vaut vraiment le coup par rapport à acquérir ?",
    a: "Largement : garder un client coûte 5 à 25× moins cher que d'en acquérir un, et augmenter la rétention de 5 % peut faire grimper les profits de 25 à 95 %. Un bon onboarding est l'investissement le plus rentable de ton business.",
  },
  {
    q: "Automatiser l'onboarding, ce n'est pas froid ?",
    a: "Au contraire, bien fait, c'est plus chaleureux : des messages pertinents au bon moment, un suivi qui ne t'oublie jamais. L'automatisation gère le timing et la régularité ; toi, tu gardes les moments humains qui comptent.",
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
        La vente n&apos;est pas la fin : c&apos;est le début de la relation.
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
                Tu décroches un client, tu livres… et tu passes déjà au suivant. Erreur :
                c&apos;est dans les 30 premiers jours que se joue tout le reste —
                fidélité, bouche-à-oreille, ventes futures. Voici le système pour ne plus
                laisser ce moment au hasard.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi l&apos;onboarding est ton meilleur investissement
              </h2>
              <p>
                Un client bien accueilli reste, dépense plus et te recommande. Et les
                chiffres plaident pour toi : garder un client coûte <strong>5 à 25× moins
                cher</strong> que d&apos;en acquérir un, et augmenter la rétention de 5 %
                peut faire grimper les profits de <strong>25 à 95 %</strong>. L&apos;onboarding,
                c&apos;est là que cette rétention se gagne — ou se perd.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — L&apos;accueil : rassure immédiatement (Jour 1)
              </h2>
              <p>
                Juste après l&apos;achat, le client doute toujours un peu (« ai-je bien
                fait ? »). Un message de bienvenue clair — ce qui va se passer, quand, et
                un premier geste concret — <strong>supprime ce doute</strong>. C&apos;est
                simple, et presque personne ne le fait bien.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Le premier résultat rapide (la « quick win »)
              </h2>
              <p>
                Le facteur n°1 de fidélité : amener le client à un <strong>premier
                résultat concret, vite</strong>. Identifie la plus petite victoire que tu
                peux lui faire vivre dans les premiers jours, et conçois ton onboarding
                pour l&apos;y mener en priorité. Un client qui a déjà gagné quelque chose
                ne part plus.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Le suivi qui montre que tu es là
              </h2>
              <p>
                Un point d&apos;étape au bon moment (« comment ça se passe ? »), un conseil
                utile, une ressource : ça vaut plus que n&apos;importe quelle promesse. La
                plupart des clients partent par <strong>sentiment d&apos;abandon</strong>,
                pas par mécontentement. Un suivi régulier tue ce sentiment.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Automatise et déclenche la suite
              </h2>
              <p>Le système :</p>
              <ul className="ml-5 list-decimal space-y-1.5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li><strong>déclenche</strong> la séquence d&apos;accueil dès la signature ;</li>
                <li><strong>guide</strong> vers le premier résultat, étape par étape ;</li>
                <li><strong>relance</strong> aux bons jalons (J3, J7, J30) avec un ton humain ;</li>
                <li><strong>enchaîne</strong> sur la demande d&apos;avis, puis de recommandation.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le levier qui referme la boucle
              </h2>
              <p>
                Un bon onboarding ne s&apos;arrête pas au client content : il le transforme
                en <strong>source de nouveaux clients</strong>. Couplé à ta{" "}
                <Link
                  href="/blog/systeme-recommandation-client-automatise"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  recommandation automatisée
                </Link>{" "}
                et à ta{" "}
                <Link
                  href="/blog/systeme-fidelisation-upsell-valeur-client"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  fidélisation
                </Link>
                , il referme la boucle : chaque client en amène d&apos;autres. C&apos;est ce
                qui fait qu&apos;une machine à clients s&apos;auto-alimente.
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
                  <a className="underline hover:text-foreground" href="https://stealthagents.com/research/customer-retention-cost-statistics-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Stealth Agents — Customer Retention Cost Statistics 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.rivo.io/blog/b2b-customer-retention-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Rivo — B2B Customer Retention Statistics (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux une machine à clients qui fidélise et se recommande toute seule ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection, conversion et fidélisation automatisés — en 48 h, sans agence.
                Teste ton éligibilité à l&apos;Audit IA offert : 30 minutes pour un plan clair.
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
