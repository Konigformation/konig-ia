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
  slug: "arrete-de-baisser-tes-prix",
  title:
    "Arrête de baisser tes prix pour signer : c'est un piège mathématique (la preuve)",
  description:
    "Contre-tendance — Baisser tes prix pour décrocher des clients détruit ta marge bien plus vite que tu ne crois. Les chiffres 2026, et ce qui marche vraiment à la place.",
  date: "2026-09-16",
  dateLabel: "16 septembre 2026",
  readTime: "9 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/arrete-de-baisser-tes-prix.svg",
  imageAlt:
    "Arrête de baisser tes prix : une étiquette de prix bradée et barrée face à une offre à sa vraie valeur — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "baisser ses prix",
    "remise commerciale",
    "pricing freelance",
    "vendre la valeur",
    "value-based pricing",
    "marge et discount",
    "positionnement prix",
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
    q: "Baisser mes prix ne m'aide donc pas à signer plus ?",
    a: "Ça peut faire signer plus de mauvais clients, tout en détruisant ta marge. Les données 2026 montrent que la rentabilité devient négative au-delà d'environ 10 % de remise, et qu'à 30 % de marge, une remise de 10 % exige 50 % de ventes en plus pour le même profit. Le prix bas attire aussi les clients les plus exigeants et les moins fidèles.",
  },
  {
    q: "Mais si le prospect dit que c'est trop cher ?",
    a: "« Trop cher » veut presque toujours dire « je ne perçois pas assez de valeur » ou « j'ai peur du risque ». La réponse n'est pas de baisser le prix, mais d'augmenter la valeur perçue et de réduire le risque : preuves, cadrage du ROI, garantie, étapes claires.",
  },
  {
    q: "Comment vendre plus cher sans faire fuir ?",
    a: "En te spécialisant (les niches bien définies commandent des tarifs plus élevés et subissent moins la guerre des prix), en montrant des preuves de résultat, et en construisant un parcours qui justifie le prix avant même l'entretien. C'est le rôle d'un système d'acquisition pensé.",
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
        La remise se voit tout de suite. Le trou dans ta marge, un peu plus tard.
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
                Un prospect hésite, tu sens qu&apos;il va filer, alors tu lâches : « je
                peux te faire un petit geste sur le prix ». Ça marche, il signe. Et tu
                viens de faire l&apos;une des pires affaires de ton business — sans même
                t&apos;en rendre compte.
              </p>
              <p>
                Je ne dis pas qu&apos;une remise est toujours interdite. Je dis que{" "}
                <strong>baisser tes prix comme réflexe pour signer</strong> est un piège —
                et les chiffres 2026 le prouvent noir sur blanc.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que tout le monde croit (et pourquoi)
              </h2>
              <p>
                <strong>Ce que ta cible fait :</strong> au moindre « c&apos;est cher »,
                elle rabote son tarif pour ne pas perdre l&apos;affaire.{" "}
                <strong>Pourquoi elle le croit :</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>La peur du vide.</strong> Un « oui » à prix bradé rassure plus qu&apos;un « non » à plein tarif.</li>
                <li><strong>La croyance que le prix est LE frein.</strong> Alors que c&apos;est presque toujours la valeur perçue ou le risque.</li>
                <li><strong>Le manque de confiance en sa propre valeur.</strong> On brade ce dont on doute.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La faille : la remise détruit ta marge de façon disproportionnée
              </h2>
              <p>
                Voici le calcul que personne ne fait au moment de « faire un geste ». La
                remise ne sort pas de ton chiffre d&apos;affaires — elle sort direct de ta{" "}
                <strong>marge</strong>, la seule chose que tu gardes vraiment.
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  Avec <strong>30 % de marge, une remise de 10 % t&apos;oblige à vendre
                  50 % de plus</strong> pour le même profit.
                </li>
                <li>
                  La rentabilité devient <strong>négative au-delà d&apos;environ 10 %</strong>{" "}
                  de remise ; à partir de 16 %, tu travailles souvent à perte.
                </li>
                <li>
                  En B2B, la remise crée un <strong>« effet de contagion »</strong> : le
                  client l&apos;exige à nouveau ensuite, avec un impact parfois{" "}
                  <strong>3× supérieur</strong> au coût de la remise initiale.
                </li>
              </ul>
              <p>
                Pire : le prix bas attire les clients les <strong>plus exigeants et les
                moins fidèles</strong>. Tu travailles plus, pour gagner moins, avec des
                gens plus durs. Le triple perdant.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui marche vraiment à la place
              </h2>
              <p>
                Le vrai levier n&apos;est pas le prix, c&apos;est la <strong>valeur
                perçue</strong>. Les entreprises qui pratiquent un pricing basé sur la
                valeur génèrent <strong>20 à 30 % de revenus en plus</strong> que celles
                au coût-plus. Concrètement :
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>Spécialise-toi.</strong> Les niches bien définies commandent des tarifs plus élevés et subissent moins la guerre des prix.</li>
                <li><strong>Montre le ROI et des preuves.</strong> Un prospect qui voit le retour ne compte plus le prix — il compte le gain.</li>
                <li><strong>Réduis le risque, pas le prix.</strong> Garantie, étapes claires, premier résultat rapide : c&apos;est ça qui débloque le « oui ».</li>
                <li><strong>Justifie avant l&apos;entretien.</strong> Contenu, cas clients, positionnement : quand la valeur est établie en amont, le prix ne se négocie plus.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La conclusion qui dérange
              </h2>
              <p>
                « Baisse tes prix pour signer » est le conseil de ceux qui n&apos;ont pas
                de système pour vendre leur valeur. C&apos;est le réflexe du bricolage :
                brader parce qu&apos;on ne sait pas convaincre. La vérité, c&apos;est
                qu&apos;un <strong>système pensé</strong> — qui attire les bons prospects,
                prouve la valeur et lève le risque avant même l&apos;entretien — te permet
                de vendre plus cher, plus facilement, à de meilleurs clients. Le prix bas
                perd. La valeur mise en système gagne.
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
                  <a className="underline hover:text-foreground" href="https://phoenixstrategy.group/blog/how-discounting-affects-profit-margins" target="_blank" rel="noopener noreferrer nofollow">
                    Phoenix Strategy Group — How Discounting Affects Profit Margins
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://improvado.io/blog/value-based-pricing" target="_blank" rel="noopener noreferrer nofollow">
                    Improvado — Value-Based Pricing in 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux vendre ta valeur au bon prix, sans brader ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h, qui prouve ta valeur
                avant même l&apos;entretien. Teste ton éligibilité à l&apos;Audit IA
                offert : 30 minutes pour un plan clair.
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
