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
  slug: "agents-ia-securite-automatiser-sans-risque",
  title:
    "Des hackers ont détourné des centaines d'agents IA : 3 règles pour automatiser ton acquisition sans te faire pirater",
  description:
    "Actualité IA — Une attaque de la semaine a utilisé des agents IA pour compromettre 440 systèmes. Ce que ça t'apprend, et 3 règles pour automatiser sans risque.",
  date: "2026-09-16",
  dateLabel: "16 septembre 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/agents-ia-securite-automatiser-sans-risque.svg",
  imageAlt:
    "Sécuriser ses agents IA : un flux d'automatisation protégé par un bouclier face à une menace — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "sécurité agents IA",
    "automatiser sans risque",
    "agents IA 2026",
    "sécurité automatisation",
    "prospection automatisée sécurisée",
    "risques IA entreprise",
    "IA pour indépendants",
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
    q: "Que s'est-il passé exactement ?",
    a: "Un acteur malveillant a utilisé des centaines d'agents IA pour exploiter des failles connues et compromettre au moins 440 systèmes dans près de 400 organisations, en atteignant le premier accès en moins de quatre heures. En parallèle, des vulnérabilités de « bac à sable » ont été révélées sur plusieurs outils d'agents pour développeurs.",
  },
  {
    q: "Suis-je concerné si j'utilise juste ChatGPT ou Claude pour ma prospection ?",
    a: "Le risque augmente dès que tu donnes à une IA des accès (boîte mail, CRM, comptes, fichiers) et la laisses agir seule. Pour un usage simple en conversation, le risque est faible ; c'est l'automatisation mal cadrée qui expose. D'où l'intérêt de règles claires.",
  },
  {
    q: "Faut-il renoncer à automatiser ?",
    a: "Non — l'automatisation reste un avantage énorme. Il faut juste l'encadrer : accès minimum, validation humaine sur les actions sensibles, et outils fiables. Un système bien conçu est plus sûr qu'un bricolage d'outils empilés à la va-vite.",
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
        Automatiser, oui — mais avec des garde-fous. C&apos;est là qu&apos;un vrai système protège.
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
                Tu automatises ta prospection avec l&apos;IA — bien. Mais tu lui donnes
                peut-être les clés de ta maison sans t&apos;en rendre compte.
                L&apos;actu sécurité de la semaine est un signal d&apos;alarme utile — et
                une leçon simple à appliquer.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de se passer
              </h2>
              <p>
                Cette semaine, un acteur malveillant a utilisé <strong>des centaines
                d&apos;agents IA</strong> pour exploiter des failles connues et
                compromettre <strong>au moins 440 systèmes</strong> dans près de 400
                organisations — avec un premier accès obtenu en{" "}
                <strong>moins de quatre heures</strong>. En parallèle, des chercheurs ont
                révélé des vulnérabilités de « bac à sable » sur plusieurs outils
                d&apos;agents pour développeurs.
              </p>
              <p>
                La leçon n&apos;est pas « l&apos;IA est dangereuse ». C&apos;est que{" "}
                <strong>l&apos;automatisation sans garde-fous</strong> l&apos;est. Et ça
                vaut aussi pour ton acquisition, dès que tu connectes des agents à ta
                boîte mail, ton CRM ou tes comptes.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Règle n°1 — Le principe du moindre accès
              </h2>
              <p>
                Ne donne à une IA que les accès strictement nécessaires à sa tâche. Un
                agent qui rédige des messages n&apos;a pas besoin d&apos;un accès complet
                à ta facturation. Crée des accès dédiés, révocables, et coupe ce qui ne
                sert pas.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Règle n°2 — L&apos;humain valide les actions sensibles
              </h2>
              <p>
                Automatise la préparation, garde la main sur l&apos;irréversible. Laisse
                l&apos;IA <strong>rédiger</strong> l&apos;email, <strong>proposer</strong>{" "}
                la relance, <strong>préparer</strong> la facture — mais garde une
                validation humaine avant l&apos;envoi ou le paiement. C&apos;est 10
                secondes de contrôle contre des heures de dégâts.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Règle n°3 — Des outils fiables, pas un empilement bricolé
              </h2>
              <p>
                La plupart des incidents viennent de connexions mal configurées entre dix
                outils branchés à la va-vite. Moins de briques, mieux choisies et bien
                reliées, c&apos;est moins de surface d&apos;attaque. La sécurité est aussi
                une affaire d&apos;architecture.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le bricolage t&apos;expose. Le système te protège.
              </h2>
              <p>
                Empiler des automatisations trouvées sur YouTube, c&apos;est pratique…
                jusqu&apos;à la fuite. Un <strong>système pensé</strong> applique ces
                règles par défaut : accès minimum, validation aux bons endroits,
                architecture propre. Tu gagnes le temps de l&apos;automatisation sans en
                prendre les risques. (Vois comment on relie tout proprement dans notre{" "}
                <Link
                  href="/blog/systeme-machine-a-clients-3-leviers"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  machine à clients complète
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
                  <a className="underline hover:text-foreground" href="https://aiweekly.co/ai-news-today" target="_blank" rel="noopener noreferrer nofollow">
                    AI Weekly — AI News Today (14 septembre 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://releasebot.io/updates/anthropic" target="_blank" rel="noopener noreferrer nofollow">
                    Releasebot — Anthropic Release Notes (septembre 2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux automatiser ton acquisition — proprement et sans risque ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h, avec les bons garde-fous.
                Teste ton éligibilité à l&apos;Audit IA offert : 30 minutes, sans engagement.
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
