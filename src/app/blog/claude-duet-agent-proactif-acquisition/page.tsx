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
  slug: "claude-duet-agent-proactif-acquisition",
  title:
    "Claude Duet : l'agent IA qui agit avant que tu demandes — ce que ça change pour ton acquisition",
  description:
    "Actualité IA — Anthropic lance Claude Duet, un agent IA proactif qui anticipe et propose des actions. Ce que l'ère des agents proactifs change pour ton acquisition.",
  date: "2026-10-28",
  dateLabel: "28 octobre 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/claude-duet-agent-proactif-acquisition.svg",
  imageAlt:
    "Claude Duet, l'agent IA proactif qui anticipe et propose des actions avant qu'on les demande — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "Claude Duet",
    "agent IA proactif",
    "agent personnel IA",
    "automatiser son acquisition",
    "IA qui anticipe",
    "Anthropic agent 2026",
    "assistant IA proactif",
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
    q: "Qu'est-ce que Claude Duet ?",
    a: "C'est un agent IA « proactif » d'Anthropic, lancé en aperçu de recherche (research preview) et bâti sur Claude Opus 5.5. Au lieu d'attendre tes questions, il anticipe et propose des actions. Il reste sous contrôle : les actions sensibles (envoyer un message, payer) demandent ton approbation. L'accès est pour l'instant limité (liste d'attente).",
  },
  {
    q: "En quoi un agent « proactif » est différent ?",
    a: "Un assistant classique répond quand tu demandes. Un agent proactif regarde ton contexte et suggère : « tu devrais relancer ces 3 prospects », « prépare-t-on le rendez-vous de 14 h ? ». Il passe de l'outil que tu actionnes à l'assistant qui te pousse à agir au bon moment.",
  },
  {
    q: "Est-ce que ça remplace un système d'acquisition ?",
    a: "Non. Un agent proactif ne sert à rien s'il n'a pas de process clair à exécuter. Il amplifie un système bien conçu ; sur du bricolage, il ne fait qu'accélérer le chaos. La proactivité utile vient d'un cadre, pas d'un gadget.",
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
        De l&apos;assistant qui répond à l&apos;agent qui anticipe — à condition d&apos;avoir un cadre.
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
                Jusqu&apos;ici, l&apos;IA attendait tes ordres. Avec Claude Duet, elle
                commence à <strong>anticiper</strong> : elle regarde ton contexte et te
                suggère quoi faire, avant même que tu y penses. Pour ton acquisition,
                c&apos;est un virage à comprendre maintenant.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de sortir
              </h2>
              <p>
                Anthropic a lancé <strong>Claude Duet</strong>, un agent IA{" "}
                <strong>proactif</strong>, en aperçu de recherche, bâti sur Claude Opus
                5.5. Son principe : au lieu de répondre quand tu demandes, il{" "}
                <strong>propose</strong> des actions pertinentes. Rassurant côté
                contrôle : les actions sensibles (envoyer, payer) demandent ton
                approbation. L&apos;accès est encore limité (liste d&apos;attente), mais
                la direction est claire.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi la « proactivité » change la donne
              </h2>
              <p>
                Le vrai frein de l&apos;acquisition, ce n&apos;est pas le manque
                d&apos;outils — c&apos;est le <strong>passage à l&apos;action</strong>.
                On sait qu&apos;il faut relancer, publier, suivre… et on ne le fait pas.
                Un agent proactif attaque exactement ce point : il te dit{" "}
                <strong>quoi faire, quand</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3 façons d&apos;en tirer parti (dès aujourd&apos;hui)
              </h2>
              <p>
                <strong>1. Définis tes routines.</strong> Un agent ne peut te rappeler de
                relancer que si « relancer » est un process clair. Écris tes routines
                d&apos;acquisition (qui, quand, comment).
              </p>
              <p>
                <strong>2. Garde la main sur le sensible.</strong> Laisse l&apos;IA
                préparer et proposer ; valide toi-même les envois et les décisions. Vitesse
                + contrôle.
              </p>
              <p>
                <strong>3. Pense « déclencheurs ».</strong> La vraie valeur d&apos;un agent
                proactif, c&apos;est de réagir à des signaux (un lead chaud, un rendez-vous
                qui approche). Identifie ces déclencheurs dans ton acquisition.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Un agent proactif a besoin d&apos;un système, pas l&apos;inverse
              </h2>
              <p>
                Un agent qui « anticipe » sur un business sans process ne fait
                qu&apos;accélérer la confusion. Sa puissance vient quand il s&apos;appuie
                sur un <strong>système</strong> clair — routines, déclencheurs, enchaînements.
                C&apos;est précisément ce que construit notre{" "}
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
                  <a className="underline hover:text-foreground" href="https://www.cbsnews.com/news/anthropic-claude-duet-personal-ai-agentsuggest-a-e" target="_blank" rel="noopener noreferrer nofollow">
                    CBS News — Anthropic debuts Claude Duet personal AI agent
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://releasebot.io/updates/anthropic" target="_blank" rel="noopener noreferrer nofollow">
                    Releasebot — Anthropic Release Notes (octobre 2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système clair qu&apos;un agent IA pourra piloter ?
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
