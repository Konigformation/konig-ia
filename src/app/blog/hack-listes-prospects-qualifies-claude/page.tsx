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
  slug: "hack-listes-prospects-qualifies-claude",
  title:
    "Le hack ultime pour sortir des listes de prospects qualifiés avec Claude (en 15 min)",
  description:
    "Hack — La méthode « signal-based » pour sortir des listes de prospects qualifiés avec Claude et passer de 2 % à 15 % de réponses. Tuto pas à pas, prompts inclus.",
  date: "2026-08-04",
  dateLabel: "4 août 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-listes-prospects-qualifies-claude.svg",
  imageAlt:
    "Le hack pour sortir des listes de prospects qualifiés avec Claude : une liste brute filtrée par signal ressort en prospects prioritaires — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "prospects qualifiés",
    "prospection avec Claude",
    "cold email 2026",
    "signal-based outreach",
    "personnalisation à l'échelle",
    "générer des leads avec l'IA",
    "taux de réponse cold email",
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
    q: "C'est quoi un « signal » en prospection ?",
    a: "Un événement récent chez le prospect qui rend ta prise de contact logique maintenant : une levée de fonds, un recrutement, un changement de poste, un nouveau lancement, un post viral. Le signal transforme un « t'es qui, toi ? » en « ah, il a remarqué un truc précis chez moi ».",
  },
  {
    q: "Pourquoi le cold email générique ne marche plus ?",
    a: "Les données 2026 sont nettes : un cold email générique plafonne à 1 à 3 % de réponse, quand un email basé sur un signal atteint 5 à 18 %. Même liste, même produit — l'écart tient à une seule variable : la pertinence du timing et du message.",
  },
  {
    q: "Faut-il un outil payant pour appliquer ce hack ?",
    a: "Non pour tester : une conversation Claude et un tableur suffisent à sortir ta première liste qualifiée. L'outillage devient utile quand tu veux industrialiser la collecte du signal, l'envoi multicanal et les relances dans un système qui tourne sans toi.",
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
        D&apos;une liste brute à une liste priorisée par signal, avec Claude.
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
                Tu envoies 100 messages, tu obtiens 2 réponses, tu conclus que « le
                cold ne marche plus ». Faux. Ce qui ne marche plus, c&apos;est le
                message générique envoyé à une liste achetée.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ta liste n&apos;est pas le problème. Ta façon de la construire, si.
              </h2>
              <p>
                La donnée 2026 est brutale : un cold email générique plafonne à{" "}
                <strong>1 à 3 % de réponse</strong>. Un email basé sur un{" "}
                <strong>signal</strong> (un déclencheur récent chez le prospect) grimpe
                à <strong>5 à 18 %</strong>. Même liste, même produit — 5× l&apos;écart
                tient à une seule variable. Voici comment sortir une liste qualifiée
                par signaux, avec Claude, en 15 minutes.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Définis ton signal d&apos;achat
              </h2>
              <p>
                Demande-toi : <em>quel événement rend quelqu&apos;un mûr pour mon
                offre ?</em> Un consultant qui recrute son 1<sup>er</sup> commercial =
                mûr pour de l&apos;automatisation. Une PME qui lance un nouveau produit =
                mûre pour du contenu. Note 2 à 3 signaux, pas plus.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Récupère la matière brute
              </h2>
              <p>
                Rassemble tes prospects (export LinkedIn, base existante) avec leur nom,
                poste, entreprise et <strong>un champ « actu récente »</strong> : un
                post, une news, une info trouvée en 30 secondes. C&apos;est ce champ qui
                fait toute la différence.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Fais qualifier par Claude
              </h2>
              <p>Colle 10 à 20 lignes et lance :</p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Pour chaque prospect, dis-moi s&apos;il présente l&apos;un de ces
                signaux : [tes signaux]. Note de 1 à 5 la pertinence de le contacter
                cette semaine. Justifie en 1 phrase. Écarte ceux sous 3. »
              </blockquote>
              <p>Tu obtiens une liste priorisée, pas un annuaire.</p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Génère l&apos;accroche « signal-based »
              </h2>
              <p>Pour chaque prospect retenu :</p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Rédige une première ligne d&apos;accroche qui mentionne [son actu] et
                la relie à [le problème que je résous]. Interdits : "j&apos;espère que
                vous allez bien", "je me permets de", tout compliment vide. Ton direct,
                2 lignes max. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 5 — Teste, mesure, ajuste
              </h2>
              <p>
                Envoie par petits lots de 15 à 20. Mesure le taux de réponse. Garde les
                accroches qui dépassent 8 %, jette le reste. L&apos;IA te fait gagner du
                temps ; <strong>c&apos;est la mesure qui te fait gagner des clients.</strong>
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le piège du hack isolé
              </h2>
              <p>
                Tu viens de voir la logique. Le souci ? Fait à la main, ça tient une
                semaine, puis tu lâches — parce que copier-coller-mesurer chaque jour,
                c&apos;est un job à plein temps. Un hack isolé ne devient un flux de
                clients que lorsqu&apos;il est <strong>branché dans un système</strong> :
                collecte du signal, scoring, rédaction, envoi multicanal et relance, en
                automatique. C&apos;est précisément l&apos;objet de{" "}
                <Link
                  href="/blog/systeme-prospection-multicanale-automatisee"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  notre système de prospection multicanale en 3 étapes
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
                  <a className="underline hover:text-foreground" href="https://martal.ca/b2b-cold-email-statistics-lb/" target="_blank" rel="noopener noreferrer nofollow">
                    Martal — B2B Cold Email Statistics 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.sendr.ai/blog/high-reply-rate-cold-email-data-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Sendr.ai — High reply rate cold email data (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux brancher ce hack dans un vrai système d&apos;acquisition ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h. Teste ton éligibilité
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
