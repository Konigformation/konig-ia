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
  slug: "hack-offre-irresistible-ia",
  title:
    "Le hack pour écrire une offre irrésistible avec l'IA (celle qu'on n'a pas envie de refuser)",
  description:
    "Hack — Ton problème n'est pas ton prix, c'est ton offre. Comment construire une offre irrésistible avec l'IA grâce à l'équation de valeur. Méthode + prompts.",
  date: "2026-10-06",
  dateLabel: "6 octobre 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-offre-irresistible-ia.svg",
  imageAlt:
    "Écrire une offre irrésistible avec l'IA : une offre à forte valeur et faible effort, prête à convertir — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "offre irrésistible",
    "créer une offre avec l'IA",
    "équation de valeur",
    "proposition de valeur",
    "offre qui convertit",
    "construire son offre",
    "value proposition IA",
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
    q: "C'est quoi une offre « irrésistible » ?",
    a: "Une offre dont la valeur perçue écrase tellement le prix que dire non paraît absurde. Elle repose sur quatre leviers : un résultat désiré fort, une forte probabilité de l'atteindre, un délai court et un effort minimal pour le client. Plus tu montes les deux premiers et baisses les deux derniers, plus l'offre devient irrésistible.",
  },
  {
    q: "Pourquoi travailler mon offre plutôt que mon prix ?",
    a: "Parce que « c'est trop cher » veut presque toujours dire « je ne perçois pas assez de valeur ». Renforcer l'offre augmente la valeur perçue — et te permet de vendre plus cher, pas moins. Les entreprises au pricing basé sur la valeur génèrent 20 à 30 % de revenus en plus.",
  },
  {
    q: "L'IA peut-elle créer mon offre à ma place ?",
    a: "Elle structure, reformule et fait émerger des angles — mais elle part de TA réalité : ce que tu sais faire, le résultat que tu obtiens, pour qui. Toi tu apportes la substance, elle apporte la clarté et la force de formulation.",
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
        Monte la valeur, baisse l&apos;effort : l&apos;offre devient évidente.
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
                Tes prospects « réfléchissent », comparent, puis disparaissent ? Neuf fois
                sur dix, le problème n&apos;est pas ton prix ni ton message — c&apos;est
                ton <strong>offre</strong>. Voici comment en construire une qu&apos;on
                n&apos;a pas envie de refuser, avec l&apos;IA.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Les 4 leviers d&apos;une offre irrésistible
              </h2>
              <p>
                Une offre devient irrésistible quand sa valeur perçue écrase le prix.
                Quatre leviers la pilotent :
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li><strong>Le résultat désiré</strong> (plus il est fort, mieux c&apos;est) ;</li>
                <li><strong>La probabilité de l&apos;atteindre</strong> (preuves, garantie) ;</li>
                <li><strong>Le délai</strong> (plus c&apos;est rapide, mieux c&apos;est) ;</li>
                <li><strong>L&apos;effort</strong> demandé au client (le moins possible).</li>
              </ul>
              <p>
                Monte les deux premiers, baisse les deux derniers : l&apos;offre devient
                évidente.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Pose les 4 leviers avec l&apos;IA
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Voici mon offre actuelle : [décris]. Aide-moi à la renforcer sur 4
                axes : (1) rendre le résultat plus désirable, (2) augmenter la probabilité
                perçue de l&apos;atteindre, (3) réduire le délai, (4) réduire l&apos;effort
                demandé au client. Donne 3 idées concrètes par axe. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Lève le risque (le vrai frein)
              </h2>
              <p>
                Ce qui bloque rarement, c&apos;est le prix ; ce qui bloque, c&apos;est{" "}
                <strong>la peur de se tromper</strong>. Demande :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Quelles garanties ou preuves puis-je ajouter pour lever le risque perçu
                de mon offre, sans me mettre en danger ? Propose 3 formulations de
                garantie crédibles. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Nomme et formule l&apos;offre
              </h2>
              <p>
                Une offre floue ne se vend pas. Fais-la nommer et résumer :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Donne 5 noms d&apos;offre clairs et 1 phrase de promesse (résultat +
                délai + sans [douleur]). Exemple de structure : "Ta machine à clients, en
                48 h, sans agence." »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Teste sur de vrais prospects
              </h2>
              <p>
                Une offre se valide sur le terrain, pas dans ta tête. Présente-la à 5
                prospects, écoute les objections, et réinjecte-les dans l&apos;IA pour
                affiner. En deux boucles, tu as une offre nettement plus forte.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Une offre forte mérite un système pour la porter
              </h2>
              <p>
                Même la meilleure offre ne vend pas si personne ne la voit, ou si elle
                arrive au mauvais moment. Sa puissance se révèle quand elle est{" "}
                <strong>portée par un système</strong> : un contenu qui installe la
                valeur, une prospection qui l&apos;amène aux bons prospects (voir notre{" "}
                <Link
                  href="/blog/hack-definir-client-ideal-ia"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  méthode pour définir ton client idéal
                </Link>
                ), un tunnel qui la présente au bon instant.
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
                  <a className="underline hover:text-foreground" href="https://improvado.io/blog/value-based-pricing" target="_blank" rel="noopener noreferrer nofollow">
                    Improvado — Value-Based Pricing in 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://productive.io/blog/value-based-pricing/" target="_blank" rel="noopener noreferrer nofollow">
                    Productive — What Is Value-Based Pricing (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux une offre forte, portée par un vrai système ?
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
