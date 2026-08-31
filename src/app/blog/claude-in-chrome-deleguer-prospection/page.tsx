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
  slug: "claude-in-chrome-deleguer-prospection",
  title:
    "Claude s'installe dans ton Chrome : 3 tâches de prospection à lui déléguer dès aujourd'hui",
  description:
    "Actualité IA — Claude in Chrome est désormais dispo sur tous les plans payants. Ce que ça change et 3 tâches d'acquisition à déléguer à l'IA dans ton navigateur.",
  date: "2026-09-02",
  dateLabel: "2 septembre 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/claude-in-chrome-deleguer-prospection.svg",
  imageAlt:
    "Claude in Chrome : un assistant IA dans le navigateur exécute des tâches de prospection — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "Claude in Chrome",
    "Claude navigateur",
    "agent IA navigateur",
    "automatiser la prospection",
    "assistant IA Chrome",
    "IA pour indépendants",
    "Anthropic Claude 2026",
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
    q: "Qu'est-ce que Claude in Chrome ?",
    a: "C'est l'assistant Claude qui agit directement dans ton navigateur : il lit une page, clique, remplit des champs et exécute des tâches web à ta place, avec des garde-fous contre les injections de requête. Anthropic l'a rendu disponible sur ses plans payants.",
  },
  {
    q: "Est-ce risqué de laisser une IA agir dans mon navigateur ?",
    a: "Anthropic a intégré des protections (actions vérifiées, défenses contre le prompt injection). La règle de bon sens reste la tienne : ne lui délègue pas d'action irréversible ou sensible sans validation, et garde un œil sur ce qu'elle fait.",
  },
  {
    q: "Est-ce que ça remplace un vrai système d'acquisition ?",
    a: "Non. Un assistant qui exécute des tâches te fait gagner du temps, mais il ne pilote pas ta stratégie. Ce qui remplit ton agenda, c'est un système qui enchaîne contenu, prospection et conversion — l'assistant n'en est qu'un exécutant.",
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
        Un assistant qui agit dans ton navigateur — à mettre au service d&apos;un système.
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
                Tu passes des heures dans ton navigateur à faire des tâches que tu
                détestes : chercher des infos sur un prospect, remplir ton CRM, préparer
                des messages. Bonne nouvelle : <strong>Claude peut désormais le faire à
                ta place, directement dans Chrome</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de sortir
              </h2>
              <p>
                Anthropic vient de rendre <strong>Claude in Chrome</strong> disponible
                sur tous ses plans payants. Concrètement, l&apos;assistant agit dans ton
                navigateur : il lit une page, clique, tape, remplit des formulaires et
                enchaîne des actions web — avec des garde-fous contre les injections de
                requête et des <strong>actions vérifiées</strong>. Un built-in browser a
                aussi été ajouté à l&apos;app desktop.
              </p>
              <p>
                Pour un indépendant, la nouveauté n&apos;est pas « une IA de plus » :
                c&apos;est une IA qui <strong>fait</strong> au lieu de seulement
                répondre. Voici 3 tâches d&apos;acquisition à lui confier dès aujourd&apos;hui.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                1. La recherche de prospects (le pré-appel)
              </h2>
              <p>
                Avant un rendez-vous, tu perds 15 minutes à fouiller le site et les
                profils d&apos;un prospect. Délègue :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Ouvre cette page entreprise, résume ce qu&apos;ils font, repère un
                déclencheur récent pertinent pour [mon offre], et prépare 2 questions à
                poser en rendez-vous. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                2. Le remplissage et la mise à jour du CRM
              </h2>
              <p>
                La saisie, c&apos;est le tue-l&apos;amour de la prospection. Un assistant
                qui agit dans le navigateur peut reporter les infos d&apos;un échange
                dans ta fiche, taguer le statut, planifier la relance — pendant que tu
                passes à l&apos;appel suivant.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3. La préparation de messages personnalisés
              </h2>
              <p>
                À partir de la page que Claude vient de lire, demande-lui un premier jet
                d&apos;email ou de message LinkedIn ancré sur un détail réel. Tu passes de
                la page blanche à un brouillon à ajuster — pas à un copier-coller
                générique (qui, lui, ne convertit plus).
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Un exécutant n&apos;est pas une stratégie
              </h2>
              <p>
                Ces délégations te font gagner un temps fou. Mais attention au mirage :
                un assistant qui exécute des tâches ne <strong>décide</strong> pas qui
                contacter, avec quel message, dans quelle séquence. Sans système autour,
                tu automatises… du bricolage. La vraie bascule, c&apos;est quand ces
                tâches s&apos;emboîtent dans une machine — contenu, prospection,
                conversion — qui tourne pour toi. Vois notre{" "}
                <Link
                  href="/blog/systeme-machine-a-clients-3-leviers"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  machine à clients complète
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
                  <a className="underline hover:text-foreground" href="https://releasebot.io/updates/anthropic/claude" target="_blank" rel="noopener noreferrer nofollow">
                    Releasebot — Claude Updates by Anthropic (août 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://releasebot.io/updates/anthropic" target="_blank" rel="noopener noreferrer nofollow">
                    Releasebot — Anthropic Release Notes (août 2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux transformer ces gains de temps en machine à clients ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h. Teste ton éligibilité à
                l&apos;Audit IA offert : 30 minutes, sans jargon, sans engagement.
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
