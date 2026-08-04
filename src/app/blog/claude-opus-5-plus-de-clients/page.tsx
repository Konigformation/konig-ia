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
  slug: "claude-opus-5-plus-de-clients",
  title:
    "Claude Opus 5 vient de sortir : voici comment l'utiliser pour ramener plus de clients",
  description:
    "Actualité IA — Anthropic a sorti Claude Opus 5 le 24 juillet 2026. Trois usages concrets pour transformer cette mise à jour en clients, sans agence et même en partant de zéro.",
  date: "2026-08-04",
  dateLabel: "4 août 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/claude-opus-5-plus-de-clients.svg",
  imageAlt:
    "Claude Opus 5 : la mise à jour d'Anthropic transformée en machine à clients — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "Claude Opus 5",
    "Anthropic Claude Opus 5",
    "acquisition clients IA",
    "automatiser la prospection",
    "IA pour indépendants",
    "prospection avec Claude",
    "système d'acquisition IA",
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
    q: "Qu'est-ce que Claude Opus 5 ?",
    a: "C'est le nouveau modèle haut de gamme d'Anthropic, sorti le 24 juillet 2026. Il succède à Opus 4.8 au même tarif, avec un « fast mode » environ 2,5× plus rapide, et Anthropic le décrit comme plus proactif — capable d'anticiper les étapes d'une tâche au lieu de seulement répondre.",
  },
  {
    q: "Faut-il payer pour l'utiliser en prospection ?",
    a: "Vous pouvez tester ces usages gratuitement dans une conversation Claude classique. L'intérêt d'un abonnement ou de l'API vient quand vous voulez traiter du volume ou automatiser le tout dans un système qui tourne sans vous.",
  },
  {
    q: "Un nouveau modèle suffit-il à générer des clients ?",
    a: "Non. Un meilleur modèle rédige et qualifie mieux, mais tant que vous copiez-collez à la main, le process reste artisanal. Ce qui ramène des clients de façon régulière, c'est un système : contenu, prospection et relances automatisés, dont le modèle n'est qu'une pièce.",
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
        Claude Opus 5 : une brique de plus pour ta machine à clients.
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
                Tu as vu passer l&apos;annonce le 24 juillet et tu t&apos;es dit
                « encore un nouveau modèle ». Sauf que celui-là change concrètement
                la donne pour ton acquisition — <strong>si tu sais quoi lui demander</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Claude Opus 5, ce n&apos;est pas « juste une mise à jour »
              </h2>
              <p>
                La promesse d&apos;Anthropic : une intelligence proche de son
                modèle le plus haut de gamme, <strong>au même prix que l&apos;ancien
                Opus 4.8</strong>, avec un « fast mode » environ 2,5× plus rapide.
                Traduction pour toi : un cerveau qui rédige, qualifie et personnalise
                mieux, sans que ta facture explose.
              </p>
              <p>
                Surtout, Anthropic décrit Opus 5 comme un modèle{" "}
                <strong>« proactif »</strong> : il ne se contente plus d&apos;exécuter,
                il anticipe les étapes. Pour un freelance ou un dirigeant sans
                commercial, ça veut dire déléguer des tâches entières — pas juste des
                bouts de phrase. Voici 3 façons de le mettre au travail dès aujourd&apos;hui.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                1. Transformer un profil LinkedIn en fiche de qualification
              </h2>
              <p>
                Copie le profil d&apos;un prospect et lance ce prompt :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Voici le profil d&apos;un prospect. Identifie : (1) son problème
                n°1 probable lié à [ton offre], (2) un déclencheur récent qui justifie
                que je le contacte maintenant, (3) une phrase d&apos;accroche
                personnalisée en 2 lignes, ton direct, zéro flatterie. »
              </blockquote>
              <p>
                Opus 5 tient mieux le contexte long : il croise les informations au
                lieu de recracher une bio.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                2. Générer 30 jours de contenu à partir d&apos;UN audit client
              </h2>
              <p>Donne-lui le compte-rendu d&apos;un appel client, puis demande :</p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Extrais les 10 objections et douleurs de ce client. Transforme
                chacune en un post LinkedIn court (règle : 1 idée, 1 exemple, 1
                question finale). »
              </blockquote>
              <p>
                Tu passes d&apos;une page blanche à un mois de contenu ancré dans du
                réel — pas des généralités que tout le monde publie déjà.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3. Nettoyer et scorer une liste de prospects
              </h2>
              <p>
                Colle une liste brute (nom, poste, entreprise) et demande un score de
                priorité de 1 à 5 selon des critères que <strong>tu</strong> définis.
                Le fast mode te sort ça en quelques secondes, même sur 100 lignes.
                Pour aller plus loin sur la qualification, lis notre{" "}
                <Link
                  href="/blog/hack-listes-prospects-qualifies-claude"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  hack pour sortir des listes de prospects qualifiés avec Claude
                </Link>
                .
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le vrai levier n&apos;est pas le modèle
              </h2>
              <p>
                Ces 3 hacks sont réels et gratuits. Mais tu remarques le point commun :
                <strong> c&apos;est toi qui copies, colles et relances à la main.</strong>{" "}
                L&apos;outil est puissant, le process reste artisanal. Tu gagnes 20 %
                de temps, pas 10× de clients.
              </p>
              <p>
                La différence entre « utiliser Claude » et « avoir un système » : dans
                un système, la qualification, le contenu et les relances tournent{" "}
                <strong>sans que tu ouvres l&apos;app</strong>. Le modèle n&apos;est
                qu&apos;une pièce ; ce qui ramène des clients, c&apos;est la machine
                autour. C&apos;est exactement ce que{" "}
                <Link
                  href="/blog/systeme-prospection-multicanale-automatisee"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  notre système de prospection multicanale
                </Link>{" "}
                met en place.
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
                  <a className="underline hover:text-foreground" href="https://claude.com/blog-category/announcements" target="_blank" rel="noopener noreferrer nofollow">
                    Anthropic — Annonces produit Claude
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://releasebot.io/updates/anthropic" target="_blank" rel="noopener noreferrer nofollow">
                    Releasebot — Notes de version Anthropic (juillet 2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux arrêter de bricoler avec Claude et installer TON système ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h. Teste ton éligibilité
                à l&apos;Audit IA offert : 30 minutes, sans jargon, sans engagement.
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
