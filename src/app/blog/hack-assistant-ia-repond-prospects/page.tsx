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
  slug: "hack-assistant-ia-repond-prospects",
  title:
    "Le hack pour créer un assistant IA qui répond à tes prospects (et prend des RDV) pendant que tu dors",
  description:
    "Hack — Suivre un lead en 5 min multiplie par 9 tes chances de le convertir. Comment monter un assistant IA qui répond 24/7 et prend des RDV. Pas à pas.",
  date: "2026-09-22",
  dateLabel: "22 septembre 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-assistant-ia-repond-prospects.svg",
  imageAlt:
    "Un assistant IA qui répond aux prospects et prend des rendez-vous 24 heures sur 24 — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "assistant IA",
    "chatbot IA prospects",
    "GPT personnalisé",
    "répondre aux prospects 24/7",
    "prendre des rendez-vous automatiquement",
    "assistant IA conversion",
    "IA service client",
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
    q: "Pourquoi un assistant IA change quelque chose à mon taux de conversion ?",
    a: "Parce que la vitesse de réponse est décisive : suivre un lead dans les 5 minutes multiplie par 9 les chances de le convertir. Un humain ne peut pas répondre à 3 h du matin ; un assistant IA, si. Il capte l'intérêt au moment exact où il est le plus chaud.",
  },
  {
    q: "Faut-il savoir coder pour en monter un ?",
    a: "Non. Tu peux créer un « GPT personnalisé » ou utiliser un outil de chatbot sans code, en lui donnant tes réponses aux questions fréquentes, ton offre et ton lien de réservation. L'important n'est pas la technique, c'est ce que tu lui fais dire et faire.",
  },
  {
    q: "L'assistant ne risque-t-il pas de dire n'importe quoi ?",
    a: "Si tu le cadres bien, non. Tu lui donnes un périmètre clair (répondre aux questions courantes, qualifier, orienter vers un rendez-vous), une règle de repli (« je fais suivre à un humain ») et tes informations exactes. Le cadrage, c'est 80 % du résultat.",
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
        Ton meilleur commercial ne dort jamais — s&apos;il est fait d&apos;IA.
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
                Un prospect visite ton site à 22 h, a une question, ne trouve pas la
                réponse… et s&apos;en va. Tu ne le sauras jamais. Chaque jour, tu perds
                des clients faute d&apos;être là au bon moment. Un assistant IA, lui, y
                est toujours.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi la vitesse de réponse change tout
              </h2>
              <p>
                Le chiffre qui devrait te faire réagir : suivre un lead{" "}
                <strong>dans les 5 minutes multiplie par 9</strong> les chances de le
                convertir. Le problème, c&apos;est que tu ne peux pas être disponible
                24/7. Un assistant IA capte l&apos;intérêt <strong>à l&apos;instant où il
                est le plus chaud</strong> — nuit et week-end compris.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Rassemble ta matière
              </h2>
              <p>
                Un bon assistant ne s&apos;improvise pas : il se nourrit de tes infos.
                Réunis : tes 15 questions les plus fréquentes + réponses, ton offre, tes
                tarifs (ou fourchettes), tes cas clients, et ton lien de réservation.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Crée l&apos;assistant (sans code)
              </h2>
              <p>
                Crée un « GPT personnalisé » ou utilise un outil de chatbot sans code.
                Donne-lui ce cadre :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Tu es l&apos;assistant de [ton activité]. Ton rôle : répondre aux
                questions des prospects à partir des infos fournies, les rassurer, et les
                orienter vers la réservation d&apos;un audit gratuit. Reste chaleureux et
                bref. Si tu ne sais pas, propose de faire suivre à un humain. Ne promets
                jamais un prix ou un délai qui n&apos;est pas dans mes infos. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Donne-lui un seul objectif : le rendez-vous
              </h2>
              <p>
                Un assistant qui « informe » ne sert à rien s&apos;il ne convertit pas.
                Chaque conversation doit tendre vers une action : réserver l&apos;audit,
                laisser un email, prendre un créneau. Termine ses réponses par une
                proposition claire de prochaine étape.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Teste, corrige, branche-le
              </h2>
              <p>
                Pose-lui tes vraies questions de prospect, repère les réponses faibles,
                complète ses infos. Puis mets-le là où tes prospects arrivent : ton site,
                ton lien en bio, tes messages. Tu viens de recruter un commercial qui ne
                dort jamais.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Un assistant isolé répond. Un système convertit.
              </h2>
              <p>
                Répondre, c&apos;est bien. Mais l&apos;assistant ne donne sa pleine
                puissance que branché au reste : il qualifie, route le lead vers la bonne
                séquence, déclenche les relances. Seul, c&apos;est un gadget ; dans un{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  tunnel de vente
                </Link>
                , c&apos;est une machine à rendez-vous.
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
                  <a className="underline hover:text-foreground" href="https://www.amraandelma.com/lead-to-sale-conversion-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    Amra &amp; Elma — Lead-to-Sale Conversion Statistics (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un assistant branché à un vrai système d&apos;acquisition ?
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
