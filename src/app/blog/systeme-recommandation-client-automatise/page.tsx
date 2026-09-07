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
  slug: "systeme-recommandation-client-automatise",
  title:
    "Le système pour transformer chaque client en 2 nouveaux : la recommandation automatisée",
  description:
    "Système — 84 % des acheteurs B2B démarrent par une recommandation. Le système en 4 étapes pour transformer tes clients satisfaits en machine à recommandations.",
  date: "2026-09-07",
  dateLabel: "7 septembre 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-recommandation-client-automatise.svg",
  imageAlt:
    "Le système de recommandation client automatisé : un client satisfait en amène deux, puis quatre, en chaîne — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "recommandation client",
    "référral marketing",
    "bouche-à-oreille B2B",
    "système de recommandation",
    "parrainage client",
    "acquisition par recommandation",
    "referral automatisé",
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
    q: "La recommandation, ça ne se décrète pas — comment la « systématiser » ?",
    a: "En arrêtant d'attendre qu'elle arrive par hasard. Un système de recommandation, c'est un moment déclencheur défini (juste après un résultat), une demande formulée simplement, et un suivi. Rien de forcé : tu rends juste facile et naturel ce qui, sinon, n'arrive presque jamais.",
  },
  {
    q: "Pourquoi les leads recommandés valent-ils tellement plus ?",
    a: "Parce qu'ils arrivent avec la confiance déjà installée. Les données 2026 montrent des taux de closing de 50-70 % (contre 10-20 % pour un lead froid), une conversion 70 % supérieure, une rétention +37 % et une valeur vie +16 %. C'est le canal d'acquisition le plus rentable qui existe.",
  },
  {
    q: "Faut-il un programme de parrainage compliqué ?",
    a: "Non. Pour un indépendant, ça commence par une demande bien placée et un petit incitatif clair. L'automatisation vient ensuite : déclencher la demande au bon moment et relancer, sans que tu y penses.",
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
        Chaque client satisfait peut en amener deux — si tu le systématises.
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
                Tu cherches des clients à froid alors que les plus faciles à signer sont
                à un message de tes clients actuels. La <strong>recommandation</strong>
                est le canal le plus rentable qui existe — et presque personne ne
                l&apos;organise. Voici le système pour le faire tourner.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi la recommandation écrase tout le reste
              </h2>
              <p>
                Les données 2026 sont spectaculaires : <strong>84 % des acheteurs B2B
                démarrent leur processus d&apos;achat par une recommandation</strong>, et
                le bouche-à-oreille influence 91 % des décisions. Un lead recommandé se
                close à <strong>50-70 %</strong> (contre 10-20 % à froid), il est fidèle
                plus longtemps (<strong>+37 % de rétention</strong>) et vaut plus
                (<strong>+16 % de valeur vie</strong>).
              </p>
              <p>
                Mieux : les entreprises avec un programme de recommandation formalisé
                voient <strong>86 % de croissance de revenus en plus sur deux ans</strong>.
                Le problème ? La plupart attendent que ça tombe du ciel. Un système, lui,
                le provoque.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Déclenche au pic de satisfaction
              </h2>
              <p>
                La recommandation se demande à un moment précis : <strong>juste après un
                résultat</strong> (une livraison réussie, un compliment, un objectif
                atteint). Repère ce déclencheur et fais-en une règle : « quand un client
                exprime sa satisfaction, je demande dans les 48 h ».
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Formule une demande simple et précise
              </h2>
              <p>
                « Tu connais quelqu&apos;un ? » ne marche pas : trop vague. Sois
                spécifique. Fais rédiger la demande par l&apos;IA :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Rédige un message court pour demander une recommandation à un client
                satisfait. Précise le type de personne que j&apos;aide le mieux
                ([profil]), rends le partage facile (un texte prêt à transférer), ton
                chaleureux, sans pression. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Facilite et incite
              </h2>
              <p>
                Plus c&apos;est simple, plus ça circule. Fournis un message «
                prêt-à-transférer », un lien vers ton audit, et un petit incitatif clair
                (un bonus pour le client, un avantage pour le filleul). L&apos;objectif :
                que recommander te demande <strong>10 secondes d&apos;effort</strong> à
                ton client.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Automatise le déclenchement et le suivi
              </h2>
              <p>Le système :</p>
              <ul className="ml-5 list-decimal space-y-1.5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li><strong>déclenche</strong> la demande automatiquement après le jalon « client satisfait » ;</li>
                <li><strong>envoie</strong> le message prêt-à-transférer via le bon canal ;</li>
                <li><strong>relance</strong> une fois, avec tact, si pas de réponse ;</li>
                <li><strong>route</strong> chaque filleul directement dans ton tunnel de conversion.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le levier qui relie tout le reste
              </h2>
              <p>
                La recommandation ne remplace pas tes autres leviers : elle les
                démultiplie. Un client bien converti par ton{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  tunnel
                </Link>{" "}
                devient une source de nouveaux leads chauds. C&apos;est la boucle qui
                fait qu&apos;une{" "}
                <Link
                  href="/blog/systeme-machine-a-clients-3-leviers"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  machine à clients
                </Link>{" "}
                s&apos;auto-alimente au lieu de tourner à vide.
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
                  <a className="underline hover:text-foreground" href="https://growsurf.com/statistics/b2b-referral-marketing-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    GrowSurf — B2B Referral Marketing Statistics (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.shno.co/marketing-statistics/referral-marketing-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Shno — Referral Marketing Statistics 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux une machine à clients qui s&apos;auto-alimente par la recommandation ?
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
