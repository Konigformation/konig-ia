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
  slug: "systeme-machine-a-clients-3-leviers",
  title:
    "La machine à clients complète : relier contenu, prospection et conversion en un seul système",
  description:
    "Système — La plupart des indépendants bricolent 3 leviers isolés. Voici comment les relier en une seule machine à clients qui attire, contacte et convertit.",
  date: "2026-08-31",
  dateLabel: "31 août 2026",
  readTime: "9 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-machine-a-clients-3-leviers.svg",
  imageAlt:
    "La machine à clients complète : contenu, prospection et conversion reliés en un seul système qui produit des clients — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "machine à clients",
    "système d'acquisition",
    "contenu prospection conversion",
    "automatiser son acquisition",
    "système d'acquisition IA",
    "les 3 leviers acquisition",
    "acquisition clients automatisée",
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
    q: "Pourquoi relier les 3 leviers plutôt que les traiter séparément ?",
    a: "Parce que pris isolément, chacun fuit : du contenu sans capture n'attire que de l'attention perdue ; de la prospection sans tunnel remplit l'agenda d'appels sans suite ; un tunnel sans trafic n'a rien à convertir. Reliés, ils se nourrissent et multiplient les résultats.",
  },
  {
    q: "Par quel levier faut-il commencer ?",
    a: "Par le point de capture et la conversion (le tunnel), car c'est là que fuit l'argent déjà généré. Ensuite la prospection pour alimenter en volume qualifié, puis le contenu pour attirer en continu et réchauffer. On répare la fuite avant d'ouvrir le robinet.",
  },
  {
    q: "Faut-il tout automatiser d'un coup ?",
    a: "Non. On connecte les briques une à une, en mesurant à chaque étape. L'objectif n'est pas d'empiler des outils, mais d'obtenir un flux continu : un lead entre, il est nourri, relancé et converti sans que tu pilotes chaque action à la main.",
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
        Trois leviers isolés, ou une seule machine qui tourne : tout se joue là.
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
                Tu postes du contenu. Tu envoies des messages. Tu as un formulaire
                quelque part. Mais ça ne signe pas. Le problème n&apos;est pas chaque
                levier pris séparément — c&apos;est qu&apos;ils ne sont{" "}
                <strong>pas reliés</strong>. Voici comment en faire une seule machine à
                clients.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le vrai problème : 3 leviers qui fuient chacun de leur côté
              </h2>
              <p>
                La plupart des indépendants bricolent les trois leviers en silos, et
                chacun fuit :
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li>du <strong>contenu</strong> qui attire de l&apos;attention… mais aucune capture derrière ;</li>
                <li>de la <strong>prospection</strong> qui décroche des réponses… mais aucune séquence pour les convertir ;</li>
                <li>un <strong>tunnel</strong> qui pourrait vendre… mais rien à se mettre sous la dent.</li>
              </ul>
              <p>
                Résultat : beaucoup d&apos;efforts, peu de clients. Une machine, à
                l&apos;inverse, connecte ces briques pour qu&apos;elles se nourrissent.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Levier 1 — Le contenu (attirer)
              </h2>
              <p>
                Le contenu réchauffe des inconnus avant même que tu les contactes. Mais
                il ne vaut que s&apos;il <strong>ramène vers un point de capture</strong>
                (lead magnet, audit). Un contenu qui n&apos;offre aucune porte
                d&apos;entrée est une fuite. (Détail dans notre{" "}
                <Link
                  href="/blog/systeme-contenu-ia-attirer-clients"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système de contenu
                </Link>
                .)
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Levier 2 — La prospection (contacter)
              </h2>
              <p>
                La prospection multicanale va chercher activement les bons prospects.
                Reliée au reste, elle envoie les réponses positives directement dans le
                tunnel — au lieu de les laisser mourir dans une boîte mail. Une séquence
                multicanale génère d&apos;ailleurs environ <strong>+40 %
                d&apos;engagement</strong> qu&apos;un canal isolé. (Voir la{" "}
                <Link
                  href="/blog/systeme-prospection-multicanale-automatisee"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  prospection multicanale
                </Link>
                .)
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Levier 3 — Le tunnel (convertir)
              </h2>
              <p>
                Le tunnel nourrit et relance jusqu&apos;à la vente. Rappel :{" "}
                <strong>80 % des ventes demandent 5 relances ou plus</strong>, et{" "}
                <strong>79 % des leads ne convertissent jamais</strong> faute de suivi.
                C&apos;est le levier qui récupère tout ce que les deux autres génèrent.
                (Détail dans le{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  tunnel de vente automatisé
                </Link>
                .)
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le liant : dans quel ordre les brancher
              </h2>
              <p>Ne construis pas dans l&apos;ordre « logique ». Construis dans l&apos;ordre rentable :</p>
              <ul className="ml-5 list-decimal space-y-1.5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li><strong>Le tunnel d&apos;abord</strong> : répare la fuite là où l&apos;argent passe déjà.</li>
                <li><strong>La prospection ensuite</strong> : alimente le tunnel en volume qualifié tout de suite.</li>
                <li><strong>Le contenu enfin</strong> : construit le flux entrant régulier qui réduit ta dépendance au démarchage.</li>
              </ul>
              <p>
                Entre chaque levier, un <strong>point de mesure</strong> : combien
                entrent, combien avancent, où ça bloque. C&apos;est ce qui transforme un
                empilement d&apos;outils en système pilotable.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le bricolage prend des mois. La machine se monte en 48 h.
              </h2>
              <p>
                Relier ces trois leviers à la main — outils, connexions, séquences,
                mesure — c&apos;est des semaines de tâtonnement, et la moindre rupture
                casse la chaîne. C&apos;est exactement ce que Konig IA installe{" "}
                <strong>clé en main en 48 h</strong> : ta propre machine à clients, où
                contenu, prospection et conversion travaillent ensemble.
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
                  <a className="underline hover:text-foreground" href="https://www.salesgenie.com/blog/lead-nurturing-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    Salesgenie — Lead Nurturing Statistics (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://expandi.io/blog/state-of-li-outreach-h1-2026/" target="_blank" rel="noopener noreferrer nofollow">
                    Expandi — State of LinkedIn Outreach (H1 2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux ta machine à clients complète, montée en 48 h ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on relie pour toi contenu, prospection et conversions
                automatisés — sans agence, même en partant de zéro. Teste ton éligibilité
                à l&apos;Audit IA offert : 30 minutes pour un plan d&apos;action clair.
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
