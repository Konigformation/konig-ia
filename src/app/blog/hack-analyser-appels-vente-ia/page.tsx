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
  slug: "hack-analyser-appels-vente-ia",
  title:
    "Le hack pour transformer tes appels de vente en script qui close (avec l'IA)",
  description:
    "Hack — Tes appels de vente sont une mine d'or. Comment les analyser avec l'IA pour bâtir une banque d'objections et un script qui close. Pas à pas, prompts inclus.",
  date: "2026-09-15",
  dateLabel: "15 septembre 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-analyser-appels-vente-ia.svg",
  imageAlt:
    "Analyser ses appels de vente avec l'IA : un appel transcrit devient un script de closing et une banque d'objections — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "analyser ses appels de vente",
    "script de closing IA",
    "banque d'objections",
    "closing avec l'IA",
    "traiter les objections",
    "améliorer son taux de closing",
    "vente IA",
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
    q: "Ai-je le droit d'enregistrer mes appels de vente ?",
    a: "Oui, à condition de prévenir ton interlocuteur et d'obtenir son accord au début de l'appel (RGPD). Une phrase suffit : « Ça t'ennuie si j'enregistre pour ne rien rater et te faire un récap ? ». La plupart des gens acceptent sans problème.",
  },
  {
    q: "Faut-il un outil payant pour transcrire ?",
    a: "Non pour commencer : de nombreux outils de visio proposent une transcription, et tu peux coller le texte dans Claude ou ChatGPT. L'important n'est pas l'outil, c'est ce que tu fais dire à l'IA de ta transcription.",
  },
  {
    q: "En quoi c'est mieux que d'improviser ?",
    a: "Parce que tu arrêtes de deviner. Analyser tes vrais appels te montre où tu perds le prospect, quelles objections reviennent et quelles formulations closent. Tu remplaces l'intuition par des données issues de tes propres ventes.",
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
        Chaque appel raté contient la clé du prochain « oui ».
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
                Tu enchaînes les appels de vente, tu entends les mêmes objections, et tu
                improvises à chaque fois les mêmes réponses bancales. Pendant ce temps, la
                solution est dans tes appels eux-mêmes. Voici comment l&apos;IA en extrait
                un script qui close.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi tes appels valent de l&apos;or
              </h2>
              <p>
                Chaque appel contient la vérité que les formations vendent cher : les mots
                exacts de tes prospects, leurs objections réelles, le moment précis où ils
                décrochent. La plupart des indépendants laissent tout ça s&apos;évaporer.
                Les analyser, c&apos;est remplacer l&apos;intuition par des données issues
                de <strong>tes propres ventes</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Enregistre et transcris (avec accord)
              </h2>
              <p>
                Préviens en début d&apos;appel (« ça t&apos;ennuie si j&apos;enregistre
                pour te faire un récap ? »), puis récupère la transcription via ton outil
                de visio. Objectif : 5 à 10 appels, gagnés comme perdus.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Fais ressortir les objections
              </h2>
              <p>Colle la transcription dans Claude ou ChatGPT :</p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Voici la transcription d&apos;un appel de vente. Liste toutes les
                objections et hésitations du prospect, même implicites. Pour chacune,
                indique à quel moment elle apparaît et ce qui l&apos;a déclenchée. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Construis ta banque d&apos;objections
              </h2>
              <p>
                Regroupe les objections récurrentes sur plusieurs appels, puis :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Pour chaque objection récurrente, propose 2 réponses : une qui rassure
                (preuve, cas client), une qui recadre (fait réfléchir le prospect
                autrement). Ton direct, pas de jargon. »
              </blockquote>
              <p>
                Tu obtiens un document que tu gardes sous les yeux à chaque appel. Fini
                l&apos;improvisation.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Repère ce qui fait décrocher (et ce qui close)
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Compare cet appel gagné et cet appel perdu. Qu&apos;est-ce qui diffère
                dans ma façon de mener l&apos;échange ? Où est-ce que je parle trop, où
                est-ce que je rate un signal d&apos;achat ? »
              </blockquote>
              <p>
                L&apos;IA te renvoie un miroir que tu n&apos;as jamais eu : ton propre
                comportement en vente, analysé froidement.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Du script isolé au closing systématique
              </h2>
              <p>
                Un bon script améliore tes appels. Mais le closing n&apos;est que la
                dernière marche : il ne sert à rien si tes prospects arrivent mal
                qualifiés ou pas assez réchauffés. C&apos;est quand ton script s&apos;insère
                dans un <strong>tunnel</strong> qui amène des prospects mûrs qu&apos;il
                donne sa pleine puissance. (Vois notre{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  tunnel de vente automatisé
                </Link>
                .)
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
                  <a className="underline hover:text-foreground" href="https://www.amraandelma.com/lead-to-sale-conversion-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    Amra &amp; Elma — Lead-to-Sale Conversion Statistics (2026)
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
                Tu veux des prospects déjà mûrs quand tu décroches ?
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
