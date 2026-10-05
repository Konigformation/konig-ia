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
  slug: "systeme-lead-scoring-ia",
  title:
    "Le système de lead scoring IA : ne parle plus qu'aux prospects prêts à acheter",
  description:
    "Système — 85 % des leads ne mènent nulle part. Le système de lead scoring IA en 4 étapes pour noter, trier et ne traiter que les prospects qui vont signer.",
  date: "2026-10-05",
  dateLabel: "5 octobre 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-lead-scoring-ia.svg",
  imageAlt:
    "Le système de lead scoring : des prospects notés et triés en chaud, tiède, froid pour ne parler qu'aux bons — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "lead scoring",
    "lead scoring IA",
    "qualification des leads",
    "prioriser ses prospects",
    "scoring de prospects",
    "ne parler qu'aux bons leads",
    "qualification automatique",
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
    q: "C'est quoi le lead scoring ?",
    a: "C'est noter chaque prospect selon deux dimensions : à quel point il correspond à ton client idéal (le « fit ») et à quel point il montre une intention d'achat (l'« intent »). Le score te dit sur qui concentrer ton énergie — et qui laisser mûrir ou écarter.",
  },
  {
    q: "Pourquoi j'en ai besoin si j'ai peu de leads ?",
    a: "Justement parce que ton temps est limité : traiter tous les leads pareil, c'est en gaspiller l'essentiel. Le taux de conversion moyen d'un MQL vers un lead qualifié est d'environ 15 %, et seuls 25 % des leads sont réellement prêts à acheter. Le scoring t'évite de courir après les 85 % qui ne signeront pas maintenant.",
  },
  {
    q: "L'IA peut-elle vraiment scorer mes leads ?",
    a: "Oui, à partir de critères que TU définis : l'IA applique la grille de façon constante, instantanée, sur tous tes leads — là où tu le ferais au feeling et de façon irrégulière. Toi tu fixes les règles, elle les applique à l'échelle.",
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
        Trier avant d&apos;appeler : ton temps aux prospects qui comptent.
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
                Tu traites tous tes prospects de la même façon — et tu passes autant de
                temps sur celui qui ne signera jamais que sur celui prêt à acheter demain.
                C&apos;est le meilleur moyen de t&apos;épuiser pour rien. Le lead scoring
                règle ça.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi trier change tout
              </h2>
              <p>
                Les données sont sans appel : le taux de conversion moyen d&apos;un MQL
                vers un lead qualifié tourne autour de <strong>15 %</strong>, et seuls{" "}
                <strong>25 % des leads</strong> sont réellement prêts à acheter quand ils
                arrivent. Sans tri, tu gaspilles ton énergie sur les 85 % qui ne
                convertiront pas maintenant. Avec un score, tu concentres ton temps là où
                il rapporte.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Note le « fit » (correspond-il à ton client idéal ?)
              </h2>
              <p>
                Reprends ton{" "}
                <Link
                  href="/blog/hack-definir-client-ideal-ia"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  client idéal (ICP)
                </Link>{" "}
                et transforme-le en critères notés : secteur, taille, budget, problème.
                Chaque critère rapporte des points. Un prospect qui coche tout = fit élevé.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Note l&apos;« intent » (montre-t-il une intention d&apos;achat ?)
              </h2>
              <p>
                Le fit ne suffit pas : un client parfait sans urgence ne signe pas. Ajoute
                des points pour les <strong>signaux d&apos;intention</strong> : il a
                demandé un devis, ouvert tes emails, posé une question précise, mentionné
                une échéance. Fit + intent = ta vraie priorité.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Fais scorer par l&apos;IA
              </h2>
              <p>Donne ta grille à l&apos;IA et laisse-la appliquer, à l&apos;échelle :</p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Voici ma grille de scoring (critères de fit + signaux d&apos;intention,
                avec leurs points). Pour chaque lead de cette liste, calcule le score,
                classe-le en chaud / tiède / froid, et justifie en une phrase. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Route chaque score vers la bonne action
              </h2>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li><strong>Chaud</strong> → contact direct, rendez-vous proposé tout de suite.</li>
                <li><strong>Tiède</strong> → séquence de nurturing pour le réchauffer.</li>
                <li><strong>Froid</strong> → écarté ou mis en veille (pas de temps gaspillé).</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le scoring n&apos;a de sens que branché au reste
              </h2>
              <p>
                Un score dans un tableau ne vaut rien s&apos;il ne déclenche pas
                d&apos;action. Sa puissance vient quand il <strong>pilote
                automatiquement</strong> la suite : les chauds filent vers ton{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  tunnel de vente
                </Link>
                , les tièdes vers ta newsletter de nurturing. C&apos;est exactement ce
                qu&apos;orchestre une machine à clients bien reliée.
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
                    Shno — Lead Quality Statistics 2026 (MQL, SQL, conversion)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.landbase.com/blog/lead-scoring-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Landbase — Lead Scoring Statistics (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système qui trie et route tes leads tout seul ?
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
