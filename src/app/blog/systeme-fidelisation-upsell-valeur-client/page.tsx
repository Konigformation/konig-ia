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
  slug: "systeme-fidelisation-upsell-valeur-client",
  title:
    "Le système pour doubler la valeur de chaque client : fidélisation et upsell automatisés",
  description:
    "Système — Acquérir coûte 5 à 25× plus que fidéliser. Le système en 4 étapes pour fidéliser et faire de l'upsell en automatique, et doubler la valeur de chaque client.",
  date: "2026-09-14",
  dateLabel: "14 septembre 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-fidelisation-upsell-valeur-client.svg",
  imageAlt:
    "Le système de fidélisation et d'upsell : un même client dont la valeur augmente dans le temps grâce aux relances automatisées — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "fidélisation client",
    "upsell automatisé",
    "valeur vie client",
    "LTV",
    "rétention client B2B",
    "maximiser la valeur client",
    "système de fidélisation",
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
    q: "Pourquoi se concentrer sur les clients existants plutôt que d'en trouver de nouveaux ?",
    a: "Parce que c'est bien plus rentable : acquérir un client coûte 5 à 25× plus cher que d'en garder un, et la probabilité de vendre à un client actuel est de 60-70 % contre 5-20 % pour un prospect froid. Augmenter la rétention de 5 % peut faire grimper les profits de 25 à 95 %.",
  },
  {
    q: "L'upsell, ce n'est pas juste « vendre plus » de force ?",
    a: "Non — bien fait, c'est proposer la suite logique au bon moment, quand le client a obtenu un premier résultat. L'upsell représente une part énorme de la croissance des entreprises qui le systématisent (jusqu'à 70-95 % de la croissance chez les meilleures).",
  },
  {
    q: "Comment automatiser sans devenir impersonnel ?",
    a: "En déclenchant les bons messages aux bons jalons (fin de mission, résultat atteint, anniversaire de collaboration) avec un ton humain. L'automatisation gère le timing et la régularité ; toi, tu gardes la relation.",
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
        Le client le plus rentable est celui que tu as déjà.
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
                Tu passes 90 % de ton énergie à chercher de nouveaux clients… et tu
                oublies les seuls qui te font déjà confiance. C&apos;est l&apos;angle mort
                le plus coûteux de ton business. Voici le système pour doubler la valeur
                de chaque client, en automatique.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le calcul que personne ne fait
              </h2>
              <p>
                Les données 2026 sont sans appel : acquérir un client coûte <strong>5 à
                25× plus cher</strong> que d&apos;en garder un (environ 1 000 € contre
                200 € en B2B). La probabilité de vendre à un client actuel est de{" "}
                <strong>60-70 %</strong>, contre 5-20 % pour un prospect froid. Et une
                hausse de rétention de seulement <strong>5 % peut booster les profits de
                25 à 95 %</strong>.
              </p>
              <p>
                Autrement dit : ta prochaine vente la plus facile est déjà dans ton
                fichier clients. Encore faut-il un système pour la déclencher.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Livre un premier résultat visible (le socle)
              </h2>
              <p>
                Pas de fidélité sans résultat. Rends le premier gain de ton client{" "}
                <strong>concret et daté</strong> : un livrable, un chiffre, un avant/après.
                C&apos;est ce résultat qui rend légitime tout ce qui suit.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Reste présent entre deux ventes (la rétention)
              </h2>
              <p>
                La plupart des clients partent par <strong>oubli</strong>, pas par
                mécontentement. Mets en place une présence régulière et utile : un point
                d&apos;étape, un conseil personnalisé, une ressource. L&apos;IA rédige,
                tu gardes la relation. Un client entretenu <strong>dépense en moyenne 3×
                plus</strong> qu&apos;un client one-shot.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Propose la suite logique (l&apos;upsell)
              </h2>
              <p>
                L&apos;upsell n&apos;est pas « vendre plus de force » : c&apos;est
                proposer la prochaine étape au bon moment — juste après un résultat.
                Identifie, pour chaque offre, ce qui vient logiquement après, et prépare
                la proposition à l&apos;avance :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Mon client vient d&apos;obtenir [résultat] avec [offre A]. Propose 3
                offres de suite logique (upsell) et, pour chacune, le bon moment et le
                message pour la présenter sans forcer. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Automatise les déclencheurs (le moteur)
              </h2>
              <p>Le système :</p>
              <ul className="ml-5 list-decimal space-y-1.5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li><strong>déclenche</strong> les messages aux bons jalons (fin de mission, résultat, anniversaire) ;</li>
                <li><strong>personnalise</strong> chaque relation avec l&apos;IA ;</li>
                <li><strong>propose</strong> l&apos;upsell au moment de la satisfaction ;</li>
                <li><strong>mesure</strong> la valeur vie par client pour savoir où investir.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le levier qui rend tout le reste rentable
              </h2>
              <p>
                Plus tes clients valent cher dans la durée, plus tu peux investir pour en
                acquérir de nouveaux. La fidélisation n&apos;est pas séparée de
                l&apos;acquisition : c&apos;est ce qui la <strong>finance</strong>. Couplée
                à la{" "}
                <Link
                  href="/blog/systeme-recommandation-client-automatise"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  recommandation
                </Link>
                , elle transforme ta{" "}
                <Link
                  href="/blog/systeme-machine-a-clients-3-leviers"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  machine à clients
                </Link>{" "}
                en machine qui s&apos;auto-finance.
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
                  <a className="underline hover:text-foreground" href="https://www.rivo.io/blog/b2b-customer-retention-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Rivo — 27 B2B Customer Retention Statistics (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://stealthagents.com/research/customer-retention-cost-statistics-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Stealth Agents — Customer Retention Cost Statistics 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux une machine à clients qui maximise chaque relation ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection, conversion et fidélisation automatisés — en 48 h, sans agence.
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
