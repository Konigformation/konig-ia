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
  slug: "plus-de-leads-nest-pas-mieux",
  title:
    "« Plus de leads = mieux » ? Non — courir après le volume est en train de tuer ton acquisition",
  description:
    "Contre-tendance — 85 % des leads ne convertissent jamais. Pourquoi la course au volume te ruine en temps et en argent, et ce qui marche vraiment à la place.",
  date: "2026-08-21",
  dateLabel: "21 août 2026",
  readTime: "9 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/plus-de-leads-nest-pas-mieux.svg",
  imageAlt:
    "Plus de leads n'est pas mieux : une masse de leads barrés face à quelques leads qualifiés en or — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "plus de leads",
    "qualité vs quantité leads",
    "MQL SQL conversion",
    "générer des leads qualifiés",
    "lead scoring 2026",
    "pipeline de vente",
    "acquisition clients qualité",
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
    q: "Pourquoi « plus de leads » n'est pas forcément mieux ?",
    a: "Parce que le volume brut coûte cher et pollue ton pipeline : le taux de conversion MQL vers SQL moyen est de 15 %, soit 85 leads sur 100 qui ne mènent nulle part. Chaque lead non qualifié te prend 8-12 minutes et de l'argent à traiter, pour rien.",
  },
  {
    q: "La qualité change-t-elle vraiment les résultats ?",
    a: "Oui, massivement : les leads de haute qualité closent 3 à 5× plus que les leads de faible qualité. 150 leads à 30 % de conversion battent 500 leads à 5 % sur presque tous les indicateurs qui comptent.",
  },
  {
    q: "Comment obtenir des leads plus qualifiés ?",
    a: "En remplaçant l'usine à volume par un système : un contenu qui attire les bonnes personnes, une qualification par signal, et un tunnel qui nourrit les leads pas encore prêts au lieu de les jeter.",
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
        Le volume brut coûte cher. La qualité close 3 à 5× plus.
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
                « Il me faut plus de leads. » C&apos;est la phrase que tout indépendant
                se répète quand ça ne signe pas assez. Alors tu achètes des listes, tu
                lances des pubs larges, tu ratisses. Et si le volume était justement le
                problème — pas la solution ?
              </p>
              <p>
                Je ne dis pas « génère moins ». Je dis que <strong>viser le volume comme
                objectif</strong> te fait courir dans la mauvaise direction. Les données
                2026 sont sans pitié.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que tout le monde croit (et pourquoi)
              </h2>
              <p>
                <strong>Ce que ta cible fait :</strong> elle empile les leads, persuadée
                que « plus il y en a, plus il y aura de ventes ». <strong>Pourquoi elle
                y croit :</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>C&apos;est une métrique de vanité facile.</strong> Un gros chiffre de leads rassure, même s&apos;il ne veut rien dire.</li>
                <li><strong>Les agences y ont intérêt.</strong> Beaucoup sont payées au volume de leads livrés — pas aux clients que tu signes.</li>
                <li><strong>La peur du pipeline vide.</strong> Remplir le haut de l&apos;entonnoir donne l&apos;illusion de la sécurité.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La faille : le volume coûte, il ne rapporte pas
              </h2>
              <p>
                Voici ce que le gros chiffre cache. Le taux de conversion moyen d&apos;un
                MQL vers un lead qualifié par les ventes est de <strong>15 %</strong> :
                sur 100 leads, <strong>85 ne mènent nulle part</strong>. Et seulement{" "}
                <strong>25 % des leads</strong> transmis aux ventes sont réellement prêts
                à acheter.
              </p>
              <p>Le coût de ce déchet est bien réel :</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  Chaque lead non qualifié prend <strong>8 à 12 minutes</strong> à
                  traiter, pour <strong>5 à 10 € de coût</strong> — jetés.
                </li>
                <li>
                  Une équipe qui traite 2 000 leads par trimestre en{" "}
                  <strong>gaspille 1 700</strong> sur des impasses.
                </li>
                <li>
                  Les leads de haute qualité closent <strong>3 à 5× plus</strong> que les
                  leads faibles.
                </li>
              </ul>
              <p>
                Fais le calcul : <strong>500 leads à 5 % de conversion sont battus par
                150 leads à 30 %</strong> — moins de volume, plus de clients, et une
                fraction du temps perdu. Pas étonnant que 60 % des organisations
                abandonnent le volume de MQL comme indicateur principal au profit du
                revenu réel.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui marche vraiment à la place
              </h2>
              <p>
                L&apos;objectif n&apos;est pas « plus de leads », c&apos;est <strong>plus
                de bons leads, mieux traités</strong>. Ça repose sur trois choses :
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  <strong>Attirer les bonnes personnes</strong> avec un contenu ciblé
                  plutôt qu&apos;un ratissage large (voir notre{" "}
                  <Link
                    href="/blog/systeme-contenu-ia-attirer-clients"
                    className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                  >
                    système de contenu
                  </Link>
                  ).
                </li>
                <li>
                  <strong>Qualifier par signal</strong> pour concentrer ton énergie sur
                  les prospects mûrs.
                </li>
                <li>
                  <strong>Nourrir les « pas encore prêts »</strong> au lieu de les jeter :
                  bien relancés, une grande partie finit par acheter.
                </li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La conclusion qui dérange
              </h2>
              <p>
                « Plus de leads = mieux » est le genre de croyance qui fait vivre les
                usines à volume — et qui te laisse épuisé, à courir après des contacts
                qui ne signeront jamais. Le vrai levier n&apos;est pas d&apos;ouvrir le
                robinet en grand. C&apos;est un <strong>système</strong> qui attire,
                qualifie et convertit les bons — pendant que les autres croulent sous le
                déchet. Le bricolage au volume perd. Le système ciblé gagne.
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
                  <a className="underline hover:text-foreground" href="https://prospeo.io/s/lead-quality-vs-quantity" target="_blank" rel="noopener noreferrer nofollow">
                    Prospeo — Lead Quality vs Quantity : Data-Driven Framework (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système qui attire les bons clients, pas du volume à traiter ?
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
