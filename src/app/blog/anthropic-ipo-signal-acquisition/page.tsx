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
  slug: "anthropic-ipo-signal-acquisition",
  title:
    "Anthropic entre en bourse (47 Md$) : le signal que l'IA n'est plus une option pour ton acquisition",
  description:
    "Actualité IA — Anthropic a déposé son dossier d'entrée en bourse avec un run-rate de 47 Md$. Ce que ce signal te dit, et 3 façons d'en profiter avant tout le monde.",
  date: "2026-11-04",
  dateLabel: "4 novembre 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/anthropic-ipo-signal-acquisition.svg",
  imageAlt:
    "Anthropic entre en bourse à 47 milliards de dollars : le signal que l'IA est devenue une infrastructure incontournable — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "Anthropic entrée en bourse",
    "Anthropic IPO",
    "IA infrastructure 2026",
    "adoption IA entreprise",
    "automatiser son acquisition",
    "tendance IA acquisition",
    "IA pour indépendants",
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
    q: "Que s'est-il passé exactement ?",
    a: "Anthropic (l'entreprise derrière Claude) a rendu public son dossier d'entrée en bourse (S-1), en vue d'une cotation au Nasdaq, avec un rythme de revenus annualisé autour de 47 milliards de dollars. Au-delà du chiffre, c'est un signal : l'IA passe du statut de nouveauté à celui d'infrastructure.",
  },
  {
    q: "En quoi ça me concerne, moi indépendant ?",
    a: "Parce que quand une technologie devient une infrastructure, elle cesse d'être un avantage pour devenir un prérequis. Ceux qui l'intègrent tôt prennent une avance ; les autres rattrapent leur retard plus tard, plus cher. La fenêtre où l'IA est encore un vrai edge se referme.",
  },
  {
    q: "Faut-il se précipiter sur le dernier outil ?",
    a: "Non. Le signal n'est pas « cours après chaque modèle », c'est « structure ton acquisition autour de l'IA maintenant ». Un système pensé vaut mille outils testés au hasard.",
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
        Quand l&apos;IA devient une infrastructure, l&apos;attendre devient un retard.
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
                Tu te dis « l&apos;IA, je m&apos;y mettrai plus tard » ? Cette semaine,
                l&apos;actu t&apos;envoie un signal clair : plus tard, ce sera trop tard.
                Anthropic entre en bourse, et ce que ça raconte vaut pour TON acquisition.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de se passer
              </h2>
              <p>
                Anthropic — l&apos;entreprise derrière Claude — a rendu public son dossier
                d&apos;<strong>entrée en bourse</strong> (cotation visée au Nasdaq), avec
                un rythme de revenus annualisé autour de <strong>47 milliards de
                dollars</strong>. Peu importe que tu investisses ou non : le message est
                ailleurs. Quand une techno atteint ce niveau, elle n&apos;est plus une
                mode — c&apos;est devenu une <strong>infrastructure</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le vrai signal : la fenêtre se referme
              </h2>
              <p>
                Une techno suit toujours le même chemin : d&apos;abord un{" "}
                <strong>avantage</strong> pour les early adopters, puis un{" "}
                <strong>prérequis</strong> pour tout le monde. L&apos;IA est en train de
                passer de l&apos;un à l&apos;autre. Aujourd&apos;hui, l&apos;automatiser te
                donne encore une avance. Demain, ce sera juste la norme — et ton retard
                coûtera plus cher à rattraper.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3 façons d&apos;en profiter avant tout le monde
              </h2>
              <p>
                <strong>1. Automatise ton point le plus douloureux.</strong> Ne cherche pas
                à tout automatiser : prends la tâche qui te coûte le plus de temps
                (prospection, contenu, relances) et confie-la à l&apos;IA en premier.
              </p>
              <p>
                <strong>2. Transforme tes façons de faire en process.</strong> Ton avance
                ne vient pas de l&apos;outil (tout le monde l&apos;aura), mais de la
                méthode que tu encapsules autour. Écris tes process pendant que c&apos;est
                encore un edge.
              </p>
              <p>
                <strong>3. Pense système, pas gadget.</strong> Un outil isolé se copie en
                un clic. Un système qui relie contenu, prospection et conversion, lui, met
                des mois à se construire — et c&apos;est ça, ton vrai avantage durable.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                L&apos;outil se démocratise. Le système fait la différence.
              </h2>
              <p>
                Quand tout le monde a accès à la même IA, l&apos;avantage ne vient plus de
                l&apos;avoir — mais de ce que tu en fais. Ceux qui gagneront sont ceux qui
                auront bâti, tôt, un <strong>système</strong> pendant que les autres
                hésitaient. C&apos;est exactement ce que construit notre{" "}
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
                  <a className="underline hover:text-foreground" href="https://trewknowledge.com/2026/10/30/ai-this-week-anthropic-goes-public-openai-goes-offline/" target="_blank" rel="noopener noreferrer nofollow">
                    Trew Knowledge — AI This Week: Anthropic Goes Public (oct. 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://releasebot.io/updates/anthropic" target="_blank" rel="noopener noreferrer nofollow">
                    Releasebot — Anthropic Release Notes (novembre 2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux prendre ton avance pendant que l&apos;IA est encore un edge ?
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
