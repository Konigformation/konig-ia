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
  slug: "hack-definir-client-ideal-ia",
  title:
    "Le hack pour définir ton client idéal (ICP) avec l'IA en 30 minutes — et arrêter de parler à tout le monde",
  description:
    "Hack — Parler à tout le monde, c'est ne convertir personne. Comment définir ton client idéal (ICP) avec l'IA en 30 min, pour viser ceux qui achètent. Prompts inclus.",
  date: "2026-09-29",
  dateLabel: "29 septembre 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-definir-client-ideal-ia.svg",
  imageAlt:
    "Définir son client idéal avec l'IA : une cible avec au centre la fiche du client parfait — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "client idéal",
    "ICP",
    "définir son client idéal",
    "persona IA",
    "ciblage marketing",
    "profil client type",
    "à qui vendre",
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
    q: "C'est quoi un ICP ?",
    a: "L'ICP (Ideal Customer Profile) est le portrait précis du client que tu sers le mieux et qui te rapporte le plus : son profil, son problème n°1, son déclencheur d'achat, ses objections. C'est la boussole de toute ton acquisition — sans lui, tu parles à tout le monde et tu ne convertis personne.",
  },
  {
    q: "Pourquoi cibler moins large fait vendre plus ?",
    a: "Parce qu'un message précis pour une personne précise convertit bien mieux qu'un message tiède pour tout le monde. Les spécialistes d'une niche bien définie commandent des tarifs plus élevés et subissent moins la guerre des prix — la clarté du ciblage se paie en marge.",
  },
  {
    q: "L'IA peut-elle inventer mon ICP à ma place ?",
    a: "Non, et c'est une bonne chose : elle part de TA matière (tes meilleurs clients, tes échanges réels) pour la structurer et révéler des points communs que tu n'avais pas vus. Toi tu apportes le vécu, elle apporte la clarté.",
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
        Vise juste : un client précis vaut mille inconnus.
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
                Ton contenu ne fait pas réagir, ta prospection tombe à plat, ton offre
                « ne parle pas » ? Neuf fois sur dix, le problème n&apos;est pas le
                message — c&apos;est que tu parles à <strong>tout le monde</strong>, donc
                à personne. Voici comment définir ton client idéal en 30 minutes.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi c&apos;est la première brique (avant tout le reste)
              </h2>
              <p>
                Un ICP flou pourrit tout ce qui suit : contenu générique, prospection à
                l&apos;aveugle, tunnel qui ne convertit pas. À l&apos;inverse, un ciblage
                précis rend chaque message évident. Ce n&apos;est pas un exercice
                marketing : c&apos;est la <strong>boussole</strong> de ton acquisition.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Pars de tes meilleurs clients (pas de ton imagination)
              </h2>
              <p>
                Liste tes 3 à 5 meilleurs clients : ceux qui ont payé sans négocier, obtenu
                des résultats, et que tu aimerais cloner. Donne-les à l&apos;IA :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Voici mes 5 meilleurs clients (secteur, taille, problème résolu,
                pourquoi ils ont acheté). Trouve leurs points communs et déduis le profil
                type : qui est-il, que fait-il, quel est son déclencheur d&apos;achat ? »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Fais parler ses douleurs et ses mots
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Pour ce profil, liste : ses 3 douleurs principales, la phrase exacte
                qu&apos;il dirait pour décrire son problème, ses 3 objections avant
                d&apos;acheter, et ce qui le ferait dire "oui" tout de suite. »
              </blockquote>
              <p>
                Tu obtiens le vocabulaire réel de ta cible — celui qui fera mouche dans ton
                contenu et ta prospection.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Définis qui EXCLURE
              </h2>
              <p>
                Un bon ICP dit aussi à qui tu ne t&apos;adresses <strong>pas</strong>.
                Demande : « Quels profils dois-je écarter parce qu&apos;ils négocient trop,
                convertissent mal ou me font perdre du temps ? » Dire non aux mauvais
                clients, c&apos;est du temps rendu aux bons.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Transforme-le en filtre pour tout
              </h2>
              <p>
                Ton ICP n&apos;est utile que s&apos;il pilote tes actions : chaque contenu,
                chaque message, chaque offre doit passer le test « est-ce que ça parle à
                MON client idéal ? ». Sinon, poubelle.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                De la fiche au système qui ne vise que les bons
              </h2>
              <p>
                Un ICP dans un document, c&apos;est un bon début. Mais sa vraie puissance,
                c&apos;est quand il <strong>irrigue tout ton système</strong> : il oriente
                ton contenu, filtre ta prospection, qualifie tes leads automatiquement.
                Là, tu arrêtes de ratisser large — tu attires et convertis les bons, en
                continu. (Vois notre{" "}
                <Link
                  href="/blog/systeme-contenu-ia-attirer-clients"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système de contenu
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
                  <a className="underline hover:text-foreground" href="https://www.shno.co/marketing-statistics/lead-quality-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Shno — Lead Quality Statistics 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://prospeo.io/s/lead-quality-vs-quantity" target="_blank" rel="noopener noreferrer nofollow">
                    Prospeo — Lead Quality vs Quantity (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système qui ne vise que tes clients idéaux ?
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
