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
  slug: "guerre-des-prix-ia-automatiser-moins-cher",
  title:
    "Claude Opus 5.5 et GPT-6 : la guerre des prix de l'IA rend l'automatisation 2× moins chère — comment en profiter",
  description:
    "Actualité IA — Opus 5.5 et GPT-6 ont fait chuter les prix de l'IA de 40 à 50 %. Ce que cette guerre des prix change pour automatiser ton acquisition, concrètement.",
  date: "2026-09-30",
  dateLabel: "30 septembre 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/guerre-des-prix-ia-automatiser-moins-cher.svg",
  imageAlt:
    "La guerre des prix de l'IA : les tarifs des modèles chutent, automatiser son acquisition coûte deux fois moins cher — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "guerre des prix IA",
    "Claude Opus 5.5",
    "GPT-6 prix",
    "automatiser son acquisition",
    "coût de l'IA 2026",
    "IA moins chère",
    "automatisation IA",
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
    q: "Qu'est-ce qui a fait chuter les prix de l'IA ?",
    a: "La concurrence entre labos. Le 22 septembre 2026, Anthropic a sorti Claude Opus 5.5 — plus intelligent et 20 % moins cher qu'Opus 5, avec des charges de travail environ 40 % moins coûteuses. OpenAI a répondu quelques heures après avec GPT-6 Sol et Luna en divisant ses prix d'API par deux. Résultat : automatiser coûte bien moins cher qu'il y a un mois.",
  },
  {
    q: "Est-ce que ça me concerne si j'utilise ChatGPT ou Claude en abonnement ?",
    a: "Oui, indirectement : la baisse du coût des modèles rend tous les outils qui reposent dessus moins chers et plus performants. Automatiser ta prospection, ton contenu ou tes relances devient plus accessible, même avec un petit budget.",
  },
  {
    q: "Faut-il changer d'outil à chaque baisse de prix ?",
    a: "Non. Ce qui compte, ce n'est pas de courir après le modèle le moins cher, mais d'avoir un système qui met cette puissance au travail. La baisse des prix supprime juste une excuse de plus pour ne pas t'y mettre.",
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
        Le coût n&apos;est plus l&apos;obstacle. L&apos;absence de système, si.
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
                Tu repousses l&apos;automatisation de ton acquisition en te disant « ça
                doit coûter cher » ? Cette excuse vient de tomber. En une journée, le prix
                de l&apos;IA a chuté de 40 à 50 %. Voici ce que ça change pour toi.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de se passer
              </h2>
              <p>
                Le 22 septembre 2026, Anthropic a sorti <strong>Claude Opus 5.5</strong> :
                le meilleur score d&apos;intelligence du marché, <strong>20 % moins cher
                qu&apos;Opus 5</strong>, avec des charges de travail typiques environ{" "}
                <strong>40 % moins coûteuses</strong>. Quatre-vingt-dix minutes plus tard,
                OpenAI ripostait avec <strong>GPT-6 Sol et Luna</strong> en{" "}
                <strong>divisant ses prix par deux</strong>.
              </p>
              <p>
                Traduction : la matière première de ton automatisation — l&apos;IA — n&apos;a
                jamais été aussi puissante <strong>ni aussi bon marché</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que ça débloque pour ton acquisition
              </h2>
              <p>
                Quand le coût s&apos;effondre, ce qui était « pas rentable » devient
                évident :
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>Personnaliser à l&apos;échelle</strong> : générer un message unique par prospect ne coûte plus rien.</li>
                <li><strong>Automatiser plus d&apos;étapes</strong> : qualification, relances, contenu — tout ce que tu hésitais à déléguer à l&apos;IA.</li>
                <li><strong>Traiter du volume</strong> : analyser 500 prospects ou 50 appels devient une formalité.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le piège : croire que « moins cher » suffit
              </h2>
              <p>
                Attention au faux raisonnement. Une IA moins chère ne te ramène pas de
                clients toute seule — elle rend juste chaque brique moins coûteuse. Si tu
                n&apos;as pas de <strong>système</strong> pour enchaîner ces briques, tu
                automatises du vide, moins cher. Le prix qui baisse est une opportunité{" "}
                <em>seulement</em> si tu as où le mettre au travail.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La vraie question n&apos;est plus « combien ça coûte »
              </h2>
              <p>
                C&apos;est « qu&apos;est-ce que j&apos;automatise, et dans quel ordre ».
                La baisse des prix supprime la dernière excuse : monter ta machine à
                clients n&apos;a jamais été aussi accessible. Reste à la construire — c&apos;est
                exactement ce que fait notre{" "}
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
                  <a className="underline hover:text-foreground" href="https://local-ai-zone.github.io/blog/September_2026_AI_Model_Updates.html" target="_blank" rel="noopener noreferrer nofollow">
                    Local AI Zone — September 2026 AI Model Updates (prix &amp; sorties)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://releasebot.io/updates/anthropic" target="_blank" rel="noopener noreferrer nofollow">
                    Releasebot — Anthropic Release Notes (septembre 2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                L&apos;IA n&apos;a jamais été aussi accessible. Ton système, lui, reste à monter ?
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
