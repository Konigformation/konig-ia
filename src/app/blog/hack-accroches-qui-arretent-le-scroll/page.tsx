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
  slug: "hack-accroches-qui-arretent-le-scroll",
  title:
    "Le hack pour écrire des accroches qui arrêtent le scroll (avec l'IA) — et faire lire ton contenu",
  description:
    "Hack — Ton contenu n'est pas mauvais : il n'est jamais lu, faute d'accroche. 5 mécaniques et des prompts pour écrire des accroches qui stoppent le pouce.",
  date: "2026-11-03",
  dateLabel: "3 novembre 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-accroches-qui-arretent-le-scroll.svg",
  imageAlt:
    "Des accroches qui arrêtent le scroll : dans un fil d'actualité, un post accroche et stoppe le défilement — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "accroche",
    "hook qui arrête le scroll",
    "première ligne de post",
    "accroche LinkedIn",
    "écrire une accroche avec l'IA",
    "copywriting accroche",
    "arrêter le scroll",
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
    q: "Pourquoi l'accroche est-elle si décisive ?",
    a: "Parce que c'est la seule chose qui décide si on te lit ou si on te scrolle. La première ligne (ou les deux premières secondes d'une vidéo) détermine si le reste existe. Tu peux avoir le meilleur contenu du monde : sans accroche, personne ne le verra.",
  },
  {
    q: "Une bonne accroche, c'est du clickbait ?",
    a: "Non. Le clickbait promet et ne tient pas — il détruit la confiance. Une bonne accroche crée une tension légitime (curiosité, enjeu, surprise) que le contenu résout vraiment. Provoquer le clic, oui ; mentir, jamais.",
  },
  {
    q: "L'IA peut-elle écrire mes accroches ?",
    a: "Très bien, à condition de lui donner des mécaniques précises et ta matière. Lui demander « une accroche » donne du tiède. Lui demander 10 accroches selon 5 mécaniques, à partir de ton idée, donne de l'or à trier.",
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
        Pas d&apos;accroche, pas de lecture : tout se joue sur la première ligne.
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
                Tu passes une heure sur un post, et… trois likes. Le problème n&apos;est
                presque jamais le fond : c&apos;est que personne ne dépasse ta première
                ligne. Voici comment écrire des accroches qui arrêtent le pouce, avec
                l&apos;IA.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La première ligne décide de tout le reste
              </h2>
              <p>
                Sur un fil, l&apos;utilisateur scrolle vite et ne lit qu&apos;une chose :
                ta <strong>première ligne</strong> (ou tes deux premières secondes en
                vidéo). Si elle n&apos;accroche pas, le reste de ton contenu n&apos;existe
                pas. L&apos;accroche n&apos;est pas un détail : c&apos;est 80 % du
                résultat.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Les 5 mécaniques qui arrêtent le scroll
              </h2>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li><strong>La curiosité</strong> : une info incomplète qu&apos;on veut résoudre (« Personne ne te dit ça sur… »).</li>
                <li><strong>Le contre-pied</strong> : attaquer une croyance (« Arrête de… »).</li>
                <li><strong>Le bénéfice chiffré</strong> : un résultat concret et précis (« …en 20 minutes »).</li>
                <li><strong>La peur de rater</strong> : ce que les autres font et pas toi.</li>
                <li><strong>L&apos;histoire</strong> : entrer directement dans une scène (« J&apos;ai perdu un client hier parce que… »).</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Fais générer 10 accroches par mécanique
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Voici l&apos;idée de mon post : [idée]. Écris 10 accroches (1re ligne)
                en variant 5 mécaniques : curiosité, contre-pied, bénéfice chiffré, peur
                de rater, histoire. Court, concret, ton direct, tutoiement. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Passe-les au test des 3 secondes
              </h2>
              <p>
                Lis chaque accroche comme si tu scrollais. Garde seulement celles qui te
                font vouloir lire la suite. Astuce : demande à l&apos;IA de noter chaque
                accroche de 1 à 10 sur « donne envie de lire la suite » et de garder le
                top 3.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Vérifie la promesse (zéro clickbait)
              </h2>
              <p>
                Une accroche puissante crée une attente — ton contenu doit la tenir. Si
                l&apos;accroche promet et que le post déçoit, tu gagnes un clic et tu perds
                une confiance. Chaque accroche doit être une <strong>promesse que tu
                tiens</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Une bonne accroche n&apos;est rien sans système derrière
              </h2>
              <p>
                Arrêter le scroll, c&apos;est gagner l&apos;attention — mais
                l&apos;attention ne paie pas tes factures. Elle ne devient client que si
                elle est <strong>captée et relancée</strong> : un contenu qui accroche,
                branché à un système de capture et de conversion. Sans ça, tu collectes
                des likes ; avec, tu collectes des rendez-vous. Vois notre{" "}
                <Link
                  href="/blog/systeme-contenu-ia-attirer-clients"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système de contenu
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
                  <a className="underline hover:text-foreground" href="https://buffer.com/resources/how-often-to-post-on-linkedin/" target="_blank" rel="noopener noreferrer nofollow">
                    Buffer — LinkedIn engagement &amp; dwell time (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.teract.ai/resources/linkedin-algorithm-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Teract.ai — LinkedIn Algorithm 2026 (dwell time)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux transformer l&apos;attention captée en rendez-vous ?
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
