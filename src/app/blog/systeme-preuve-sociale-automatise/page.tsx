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
  slug: "systeme-preuve-sociale-automatise",
  title:
    "Le système de preuve sociale automatisé : collecte des témoignages en continu et laisse-les vendre pour toi",
  description:
    "Système — 92 % des acheteurs B2B lisent un avis avant d'acheter, et la preuve peut booster les conversions de +270 %. Le système en 4 étapes pour la collecter et la diffuser.",
  date: "2026-11-02",
  dateLabel: "2 novembre 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-preuve-sociale-automatise.svg",
  imageAlt:
    "Le système de preuve sociale automatisé : collecter des avis et témoignages en continu et les diffuser dans tout le tunnel — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "preuve sociale",
    "système de témoignages",
    "collecter des avis clients",
    "social proof automatisé",
    "témoignages clients",
    "avis clients conversion",
    "preuve sociale B2B",
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
    q: "Pourquoi la preuve sociale pèse autant dans la décision ?",
    a: "Parce qu'elle réduit le risque perçu. 92 % des acheteurs B2B lisent un avis avant d'acheter, et afficher des témoignages peut augmenter les conversions de 15 à 30 % (jusqu'à +270 % sur certaines pages). Un prospect qui hésite a surtout peur de se tromper : la preuve des autres le rassure.",
  },
  {
    q: "La différence entre récolter un témoignage de temps en temps et un système ?",
    a: "Un témoignage ponctuel, c'est de la chance. Un système, c'est une machine : chaque client satisfait déclenche automatiquement une demande, le retour est rangé, décliné et diffusé partout où un prospect doute. Tu passes de « j'en ai deux quelque part » à « j'en ai partout, tout le temps ».",
  },
  {
    q: "Quel format de preuve est le plus efficace ?",
    a: "Les études de cas et les vidéos dominent : une vidéo témoignage est jusqu'à 2× plus crédible qu'un avis écrit, et les cas clients influencent fortement les décisions. Mais même une citation précise et chiffrée vaut mieux qu'un « super, merci ! » vague.",
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
        Tes clients satisfaits sont tes meilleurs commerciaux — si tu les fais parler.
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
                Tes clients sont contents… et ça reste entre vous. Pendant ce temps, tes
                prospects hésitent, faute de preuve. La preuve sociale est ton meilleur
                commercial — à condition de la récolter en continu, pas par hasard. Voici
                le système.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi en faire un système (et pas un one-shot)
              </h2>
              <p>
                La preuve sociale n&apos;est pas un « plus » : c&apos;est le déclencheur
                d&apos;achat. <strong>92 % des acheteurs B2B</strong> lisent un avis avant
                de décider, et afficher des témoignages peut augmenter les conversions de{" "}
                <strong>15 à 30 %</strong> (bien plus sur certaines pages). Le problème,
                c&apos;est que la plupart récoltent un témoignage « quand ils y pensent ».
                Un système, lui, en produit <strong>en continu</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Collecter au bon moment (automatiquement)
              </h2>
              <p>
                Le meilleur moment pour demander un avis, c&apos;est le <strong>pic de
                satisfaction</strong> : juste après un résultat, un compliment, une
                livraison réussie. Fais-en une règle déclenchée automatiquement, avec une
                demande simple et une question précise (« Quel résultat concret as-tu
                obtenu ? ») plutôt qu&apos;un vague « un petit avis ? ».
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Transformer chaque retour en plusieurs preuves
              </h2>
              <p>
                Un seul témoignage contient plusieurs angles. Avec l&apos;IA, décline-le :
                une citation forte, une mini étude de cas, un post « avant / après », une
                réponse à objection. Priorise les formats qui convertissent le plus —{" "}
                <strong>vidéo et études de cas</strong> en tête. (Vois notre{" "}
                <Link
                  href="/blog/hack-1-temoignage-10-preuves-ia"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  hack 1 témoignage → 10 preuves
                </Link>
                .)
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Diffuser partout où le doute surgit
              </h2>
              <p>
                Une preuve rangée dans un dossier ne vend rien. Place-la <strong>là où le
                prospect hésite</strong> : près de ton bouton de réservation, dans tes
                séquences de prospection, dans tes posts, sur ta page de vente. La bonne
                preuve, au bon endroit, au bon moment.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Automatiser et renouveler
              </h2>
              <ul className="ml-5 list-decimal space-y-1.5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li><strong>déclenche</strong> la demande d&apos;avis à chaque jalon « client satisfait » ;</li>
                <li><strong>range</strong> chaque retour dans une bibliothèque de preuves ;</li>
                <li><strong>décline</strong> et <strong>diffuse</strong> automatiquement sur tes canaux ;</li>
                <li><strong>renouvelle</strong> : des preuves récentes rassurent plus que des avis de 2023.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La preuve n&apos;agit qu&apos;intégrée à ton tunnel
              </h2>
              <p>
                Une bibliothèque de témoignages ne sert à rien si elle n&apos;apparaît pas
                au moment de la décision. Sa puissance vient quand elle est{" "}
                <strong>branchée à ton système</strong> : elle rassure dans ton contenu,
                lève les objections dans ta prospection, et fait basculer le « oui » dans
                ton{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  tunnel de vente
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
