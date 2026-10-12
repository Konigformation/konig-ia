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
  slug: "hack-analyser-concurrent-ia",
  title:
    "Le hack pour analyser tes concurrents avec l'IA et te démarquer en 20 minutes",
  description:
    "Hack — Tes concurrents t'ont déjà montré ce qui marche. Comment analyser leur positionnement et leurs failles avec l'IA pour te démarquer. Prompts inclus.",
  date: "2026-10-13",
  dateLabel: "13 octobre 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-analyser-concurrent-ia.svg",
  imageAlt:
    "Analyser son concurrent avec l'IA : une loupe révèle le positionnement, les offres et les failles d'un concurrent — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "analyser ses concurrents",
    "analyse concurrentielle IA",
    "se démarquer de la concurrence",
    "positionnement",
    "veille concurrentielle",
    "trouver son angle",
    "différenciation",
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
    q: "Analyser ses concurrents, est-ce copier ?",
    a: "Non. L'objectif n'est pas de copier, c'est de comprendre ce qui est déjà pris (pour ne pas t'y noyer) et ce qui est libre (pour t'y positionner). Les concurrents ont déjà testé des angles à ta place : autant en tirer les leçons, puis faire différent et mieux.",
  },
  {
    q: "Je n'ai pas de 'vrais' concurrents, c'est utile quand même ?",
    a: "Oui. Même des acteurs proches ou des références de ton secteur révèlent les attentes du marché, les messages qui reviennent et les angles saturés. Ça t'évite de réinventer la roue et de tomber dans les mêmes formulations que tout le monde.",
  },
  {
    q: "L'IA peut-elle vraiment analyser un concurrent ?",
    a: "Elle structure et met en lumière ce que tu lui donnes : page de vente, posts, offres, avis clients. Elle fait ressortir des angles, des failles et des opportunités que tu ne verrais pas à l'œil nu — à toi de décider quoi en faire.",
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
        Comprends ce qui est pris, trouve ce qui est libre.
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
                Tu rames à trouver ton angle, ton message, ta différence — alors que tes
                concurrents t&apos;ont déjà montré, gratuitement, ce qui marche et ce qui
                manque. Il suffit de regarder au bon endroit. Voici le hack, en 20 minutes.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi commencer par eux (et pas par toi)
              </h2>
              <p>
                Tes concurrents ont dépensé du temps et de l&apos;argent à tester des
                positionnements, des offres, des accroches. C&apos;est une mine
                d&apos;informations. L&apos;idée n&apos;est pas de copier — c&apos;est de
                repérer <strong>ce qui est saturé</strong> (pour l&apos;éviter) et{" "}
                <strong>ce qui est libre</strong> (pour t&apos;y installer).
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Rassemble la matière brute
              </h2>
              <p>
                Choisis 3 concurrents. Copie leur page d&apos;accueil, leur page de vente,
                quelques posts, et surtout leurs <strong>avis clients</strong> (une mine
                d&apos;or). Colle le tout dans l&apos;IA.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Décortique leur positionnement
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Voici les pages de 3 concurrents. Pour chacun : quelle est sa promesse
                principale, sa cible, son offre, son prix (si visible), et son angle de
                différenciation ? Résume en un tableau. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Trouve les failles et les angles libres
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « À partir de ces 3 concurrents : quels sont les points communs qui
                saturent le marché ? Quelles promesses personne ne fait ? Quelles
                objections ou frustrations reviennent dans leurs avis clients ? Déduis 3
                angles de différenciation que je pourrais occuper. »
              </blockquote>
              <p>
                Les avis négatifs de tes concurrents sont ton meilleur brief :
                chaque frustration est une promesse que tu peux tenir.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Transforme-le en positionnement
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « À partir de l&apos;angle libre "[X]", écris ma phrase de positionnement
                (pour qui, quel résultat, en quoi je suis différent) et 3 accroches qui
                attaquent frontalement ce que mes concurrents ne disent pas. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Un bon angle ne vaut que s&apos;il est diffusé partout
              </h2>
              <p>
                Trouver ta différence, c&apos;est la moitié du chemin. L&apos;autre
                moitié, c&apos;est de la marteler <strong>partout, de façon cohérente</strong> :
                dans ton contenu, ta prospection, ton offre. Un bon positionnement éparpillé
                se dilue ; branché dans un système cohérent, il devient ta signature. Vois
                comment l&apos;intégrer à ton{" "}
                <Link
                  href="/blog/hack-offre-irresistible-ia"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  offre irrésistible
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
                  <a className="underline hover:text-foreground" href="https://www.shno.co/marketing-statistics/lead-quality-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Shno — Lead Quality Statistics 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://prospeo.io/s/lead-quality-vs-quantity" target="_blank" rel="noopener noreferrer nofollow">
                    Prospeo — Lead Quality vs Quantity (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système qui diffuse ton positionnement partout, tout seul ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h, sans agence. Teste ton
                éligibilité à l&apos;Audit IA offert : 30 minutes pour un plan clair.
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
