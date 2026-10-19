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
  slug: "systeme-webinaire-automatise",
  title:
    "Le système de masterclass automatisée : un webinaire qui attire, éduque et vend à ta place",
  description:
    "Système — Un bon webinaire convertit jusqu'à 38 % des inscrits. Le système de masterclass automatisée en 4 étapes pour attirer, éduquer et vendre en une session.",
  date: "2026-10-19",
  dateLabel: "19 octobre 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-webinaire-automatise.svg",
  imageAlt:
    "Le système de webinaire automatisé : une masterclass qui attire une audience, l'éduque et la convertit en clients — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "webinaire automatisé",
    "masterclass",
    "webinaire qui convertit",
    "vendre avec un webinaire",
    "système de webinaire",
    "atelier en ligne acquisition",
    "evergreen webinar",
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
    q: "Un webinaire, ça convertit vraiment ?",
    a: "Oui, c'est l'un des formats les plus puissants pour vendre une offre un peu complexe : un bon webinaire convertit jusqu'à 38 % des inscrits en action suivante. La raison : en une session, tu attires, tu démontres ta valeur et tu lèves les objections — avant même de parler prix.",
  },
  {
    q: "Faut-il le faire en direct à chaque fois ?",
    a: "Non. Tu le lances en direct pour l'affiner, puis tu l'automatises : une version enregistrée qui tourne en continu (evergreen), déclenchée à l'inscription. Tu enregistres une fois, ça vend des mois.",
  },
  {
    q: "Je n'ai pas une grosse audience, ça vaut le coup ?",
    a: "Justement : un webinaire convertit fort, donc même une petite audience ciblée peut générer des rendez-vous. Mieux vaut 30 inscrits qualifiés qu'un live vide devant 500 curieux non concernés.",
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
        Une session bien pensée fait le travail de dix appels de vente.
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
                Tu enchaînes les appels de vente un par un, en répétant toujours les mêmes
                explications. Et si une seule session pouvait convaincre 30 prospects à la
                fois, puis tourner toute seule ? C&apos;est le système de la masterclass
                automatisée.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi le webinaire convertit si fort
              </h2>
              <p>
                Un bon webinaire convertit jusqu&apos;à <strong>38 % des inscrits</strong>{" "}
                en action suivante. La raison est simple : en une session, tu fais tout le
                travail d&apos;un cycle de vente — <strong>attirer, démontrer ta valeur,
                lever les objections</strong> — avant même de parler prix. C&apos;est le
                format idéal pour une offre un peu complexe (comme un accompagnement).
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Une promesse qui donne envie de s&apos;inscrire
              </h2>
              <p>
                Le titre de ta masterclass fait tout. Pas « Présentation de mes services »,
                mais une promesse précise : « Comment [cible] obtient [résultat] en [délai]
                sans [douleur] ». Fais-en générer plusieurs par l&apos;IA et garde la plus
                concrète. C&apos;est elle qui remplit la salle.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Un contenu qui prouve (pas qui vend)
              </h2>
              <p>
                Pendant la session, <strong>donne de la vraie valeur</strong> : une
                méthode, un cadre, des exemples. Plus tu démontres que tu sais résoudre le
                problème, plus l&apos;offre finale coule de source. Structure simple :
                le problème → pourquoi les solutions habituelles échouent → ta méthode en
                3 étapes → la preuve.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — La transition vers l&apos;offre
              </h2>
              <p>
                À la fin, propose la suite logique : « Si tu veux qu&apos;on le fasse
                ensemble, voici comment ». Un seul appel à l&apos;action clair — réserver
                un audit, un appel. Les 15 dernières minutes d&apos;un webinaire valent
                souvent plus que 10 pages de vente.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Automatise de A à Z
              </h2>
              <p>Le système :</p>
              <ul className="ml-5 list-decimal space-y-1.5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li><strong>attire</strong> les inscrits (contenu, prospection, lead magnet) vers une page d&apos;inscription ;</li>
                <li><strong>relance</strong> automatiquement les inscrits avant la session (les no-show tuent les webinaires) ;</li>
                <li><strong>diffuse</strong> la masterclass en evergreen (enregistrée, déclenchée à l&apos;inscription) ;</li>
                <li><strong>relance</strong> après : replay, offre à durée limitée, prise de rendez-vous.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le webinaire n&apos;est puissant que branché au reste
              </h2>
              <p>
                Une masterclass sans trafic en amont, c&apos;est une salle vide ; sans
                relance en aval, c&apos;est des inscrits qui s&apos;évaporent. Sa force
                vient quand elle s&apos;insère dans un système : du{" "}
                <Link
                  href="/blog/systeme-contenu-ia-attirer-clients"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  contenu
                </Link>{" "}
                qui remplit la salle, et un{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  tunnel
                </Link>{" "}
                qui convertit ceux qui n&apos;ont pas dit oui tout de suite.
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
                  <a className="underline hover:text-foreground" href="https://www.shno.co/marketing-statistics/lead-magnet-conversion-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Shno — Lead Magnet &amp; Webinar Conversion Statistics 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.salesgenie.com/blog/lead-nurturing-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    Salesgenie — Lead Nurturing Statistics (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux une masterclass branchée à un vrai système d&apos;acquisition ?
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
