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
  slug: "systeme-tableau-de-bord-acquisition",
  title:
    "Le système de pilotage : les 5 chiffres d'acquisition à suivre chaque semaine (et comment les automatiser)",
  description:
    "Système — Sans chiffres, tu subis ton acquisition. Les 5 métriques à suivre chaque semaine pour repérer où ça fuit et piloter ta machine à clients.",
  date: "2026-09-21",
  dateLabel: "21 septembre 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-tableau-de-bord-acquisition.svg",
  imageAlt:
    "Le tableau de bord d'acquisition : cinq métriques clés suivies pour piloter son acquisition — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "tableau de bord acquisition",
    "métriques d'acquisition",
    "KPI acquisition clients",
    "piloter son acquisition",
    "taux de conversion",
    "coût d'acquisition client",
    "suivi commercial",
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
    q: "Pourquoi suivre des chiffres si je vends déjà un peu ?",
    a: "Parce que sans chiffres, tu ne sais pas POURQUOI ça marche ou pas — donc tu ne peux pas répéter ni réparer. Suivre 5 métriques simples te montre exactement où ton acquisition fuit, au lieu de tout changer au hasard.",
  },
  {
    q: "Ça ne va pas me prendre un temps fou ?",
    a: "Non : l'idée n'est pas de tout mesurer, mais de suivre 5 chiffres, une fois par semaine, 15 minutes. Et une fois ton système en place, ces chiffres se remplissent tout seuls dans un tableau de bord.",
  },
  {
    q: "Par quel chiffre commencer si je débute ?",
    a: "Par le nombre de rendez-vous obtenus par semaine et par le taux de closing. Ce sont les deux qui touchent le plus directement ton chiffre d'affaires. Le reste vient ensuite.",
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
        Ce que tu ne mesures pas, tu le subis. Ce que tu suis, tu le pilotes.
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
                Certaines semaines ça signe, d&apos;autres non, et tu ne sais jamais
                pourquoi. Tu changes de canal, de message, d&apos;offre… au hasard.
                Résultat : tu subis ton acquisition au lieu de la piloter. Cinq chiffres
                suffisent à reprendre la main.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi 5 chiffres, pas 50
              </h2>
              <p>
                Mesurer trop, c&apos;est ne rien piloter. L&apos;objectif n&apos;est pas
                un rapport d&apos;agence de 40 pages, mais un <strong>tableau de bord de 5
                lignes</strong> que tu regardes 15 minutes par semaine. Ces 5 chiffres
                suivent le parcours complet : d&apos;un inconnu à un client fidèle.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                1. Le nombre de nouveaux contacts (le carburant)
              </h2>
              <p>
                Combien de nouvelles personnes entrent dans ton monde chaque semaine
                (leads, prises de contact, abonnés qualifiés) ? S&apos;il stagne, ton
                problème est en haut du tunnel : contenu et prospection.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                2. Le taux de prise de rendez-vous (l&apos;intérêt)
              </h2>
              <p>
                Sur ces contacts, combien acceptent un rendez-vous ou un audit ? Un taux
                faible signale un problème de <strong>ciblage ou d&apos;offre</strong> :
                tu attires les mauvaises personnes, ou ta proposition ne donne pas envie.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3. Le taux de closing (la conversion)
              </h2>
              <p>
                Sur les rendez-vous, combien deviennent clients ? C&apos;est le chiffre le
                plus lié à ton chiffre d&apos;affaires. S&apos;il est bas, travaille ton
                closing (vois notre{" "}
                <Link
                  href="/blog/hack-analyser-appels-vente-ia"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  hack d&apos;analyse d&apos;appels
                </Link>
                ) ou la qualité de tes rendez-vous.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                4. Le panier moyen (la valeur)
              </h2>
              <p>
                Combien te rapporte un client en moyenne ? C&apos;est le levier le plus
                sous-estimé : augmenter ton panier (offre, upsell) fait grimper tout le
                reste sans un lead de plus.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                5. Le coût et le temps par client (l&apos;efficacité)
              </h2>
              <p>
                Combien te coûte — en euros et en heures — un nouveau client ? C&apos;est
                ce qui dit si ton acquisition est <strong>tenable</strong>. Un système qui
                signe beaucoup mais t&apos;épuise n&apos;est pas un bon système.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le tableau de bord qui se remplit tout seul
              </h2>
              <p>
                Suivre ces chiffres à la main, chaque semaine, tu le feras deux fois puis
                tu lâcheras. La vraie force d&apos;un <strong>système</strong>, c&apos;est
                que ces métriques se remplissent automatiquement : chaque lead, rendez-vous
                et vente est tracé, et tu vois d&apos;un coup d&apos;œil où réparer.
                C&apos;est la différence entre bricoler et{" "}
                <Link
                  href="/blog/systeme-machine-a-clients-3-leviers"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  piloter une vraie machine à clients
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
                  <a className="underline hover:text-foreground" href="https://www.amraandelma.com/marketing-funnel-conversion-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    Amra &amp; Elma — Marketing Funnel Conversion Statistics (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://martal.ca/b2b-customer-acquisition-cost-lb/" target="_blank" rel="noopener noreferrer nofollow">
                    Martal — B2B Customer Acquisition Cost Insights (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un tableau de bord qui se remplit tout seul ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés, avec le suivi intégré — en 48 h.
                Teste ton éligibilité à l&apos;Audit IA offert : 30 minutes pour un plan clair.
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
