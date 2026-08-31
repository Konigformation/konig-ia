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
  slug: "hack-1-temoignage-10-preuves-ia",
  title:
    "Le hack pour transformer 1 témoignage client en 10 preuves qui vendent (avec l'IA)",
  description:
    "Hack — 92 % des acheteurs B2B lisent un avis avant d'acheter. Comment transformer un seul témoignage en 10 preuves qui convertissent, avec l'IA. Pas à pas.",
  date: "2026-09-01",
  dateLabel: "1er septembre 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-1-temoignage-10-preuves-ia.svg",
  imageAlt:
    "Transformer un témoignage client en dix preuves qui vendent avec l'IA : une citation se décline en post, étude de cas, badge et vidéo — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "preuve sociale",
    "témoignage client",
    "social proof B2B",
    "transformer un témoignage",
    "étude de cas IA",
    "convertir avec la preuve sociale",
    "avis clients conversion",
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
    q: "Pourquoi la preuve sociale est-elle si importante en B2B ?",
    a: "Parce qu'elle lève le risque perçu. 92 % des acheteurs B2B sont plus enclins à acheter après avoir lu un avis de confiance, et afficher des témoignages peut augmenter les conversions de 15 à 30 % (jusqu'à beaucoup plus sur certaines pages). Sans preuve, la plupart des acheteurs hésitent.",
  },
  {
    q: "Un seul témoignage suffit-il vraiment ?",
    a: "Un témoignage brut, non. Mais un bon témoignage contient plusieurs angles (problème de départ, résultat chiffré, objection levée, citation forte). L'IA t'aide à en extraire chacun et à le décliner en formats différents — post, étude de cas, accroche, script vidéo.",
  },
  {
    q: "Faut-il inventer ou enjoliver les témoignages ?",
    a: "Jamais. Tu pars uniquement des mots réels de ton client. L'IA reformate et met en valeur ; elle n'invente pas. Un faux témoignage se repère et détruit la confiance — l'inverse de l'effet recherché.",
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
        Un seul témoignage contient assez de matière pour dix preuves.
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
                Tes clients sont contents, ils te le disent… et ça reste dans un mail que
                personne ne verra jamais. Erreur : tu jettes ta meilleure arme de vente.
                Voici comment transformer <strong>un seul témoignage en 10 preuves qui
                vendent</strong>, avec l&apos;IA.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi c&apos;est ton meilleur investissement
              </h2>
              <p>
                La preuve sociale n&apos;est pas un « plus », c&apos;est le déclencheur
                d&apos;achat. <strong>92 % des acheteurs B2B</strong> sont plus enclins à
                acheter après avoir lu un avis de confiance, et afficher des témoignages
                augmente les conversions de <strong>15 à 30 %</strong> en moyenne (bien
                plus sur certaines pages). À l&apos;inverse, la plupart des gens{" "}
                <strong>hésitent à acheter s&apos;il n&apos;y a aucun avis</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Récupère la matière brute
              </h2>
              <p>
                Prends un retour client réel (mail, message, compte-rendu d&apos;appel).
                Colle-le dans Claude ou ChatGPT :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Voici le retour d&apos;un client. Extrais : le problème de départ, le
                déclic, le résultat (chiffré si possible), l&apos;objection qu&apos;il
                avait avant, et la phrase la plus forte à citer telle quelle. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Décline en 10 formats
              </h2>
              <p>
                Chaque angle devient une preuve différente. Demande à l&apos;IA de
                produire, à partir de la même matière :
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li>un <strong>post « avant / après »</strong> (le problème, puis le résultat) ;</li>
                <li>une <strong>mini étude de cas</strong> en 5 lignes ;</li>
                <li>une <strong>citation visuelle</strong> (la phrase forte) ;</li>
                <li>un <strong>encart preuve</strong> pour ta page de vente ou ton audit ;</li>
                <li>une <strong>réponse à objection</strong> à réutiliser en prospection ;</li>
                <li>un <strong>script de vidéo témoignage</strong> de 30 secondes.</li>
              </ul>
              <p>
                Astuce format : les <strong>études de cas et logos clients influencent
                78 %</strong> des décisions d&apos;achat en B2B, et une{" "}
                <strong>vidéo témoignage est jusqu&apos;à 2× plus crédible</strong>
                qu&apos;un avis écrit. Priorise ces formats.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Place chaque preuve au bon endroit
              </h2>
              <p>
                Une preuve rangée dans un dossier ne vend rien. Distribue : le post sur
                tes réseaux, l&apos;étude de cas sur ta page, la réponse à objection dans
                tes séquences de prospection, la citation près de ton bouton de
                réservation. La preuve doit apparaître <strong>là où le doute
                surgit</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Du coup ponctuel au réflexe systématique
              </h2>
              <p>
                Ce hack marche une fois. Sa vraie puissance vient quand il devient un{" "}
                <strong>réflexe intégré à ton système</strong> : chaque client satisfait
                déclenche automatiquement la collecte d&apos;un témoignage, sa déclinaison
                et sa mise en place dans ton contenu et ton tunnel. La preuve sociale
                alimente alors ta{" "}
                <Link
                  href="/blog/systeme-machine-a-clients-3-leviers"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  machine à clients
                </Link>{" "}
                en continu.
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
                  <a className="underline hover:text-foreground" href="https://provesrc.com/blog/social-proof-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    ProveSource — 75 Social Proof Statistics (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://wisernotify.com/blog/testimonial-stats/" target="_blank" rel="noopener noreferrer nofollow">
                    WiserNotify — Testimonial Statistics 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système qui capitalise chaque client satisfait ?
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
