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
  slug: "systeme-partenariats-acquisition",
  title:
    "Le système de partenariats : acquérir des clients via l'audience des autres (sans repartir de zéro)",
  description:
    "Système — Pourquoi bâtir ton audience seul quand d'autres ont déjà la tienne ? Le système de partenariats en 4 étapes pour acquérir via l'audience des autres.",
  date: "2026-10-26",
  dateLabel: "26 octobre 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-partenariats-acquisition.svg",
  imageAlt:
    "Le système de partenariats : deux entreprises complémentaires unissent leurs audiences pour générer des clients communs — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "partenariats",
    "acquisition par partenariat",
    "co-marketing",
    "apporteur d'affaires",
    "collaboration business",
    "audience des autres",
    "partenariat B2B",
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
    q: "Pourquoi les partenariats marchent si bien ?",
    a: "Parce qu'ils reposent sur la confiance empruntée : quand un partenaire te recommande à son audience, tu hérites de la confiance qu'il a mis des années à bâtir. Or le bouche-à-oreille et la recommandation sont parmi les canaux les plus efficaces — 84 % des acheteurs B2B démarrent leur processus d'achat par une recommandation.",
  },
  {
    q: "Avec qui s'associer ?",
    a: "Avec des acteurs non concurrents qui servent le même client idéal que toi, à un autre moment ou sur un autre besoin. Exemple : si tu aides des indépendants à trouver des clients, un comptable ou un coach business partage ta cible sans te concurrencer.",
  },
  {
    q: "Comment proposer un partenariat sans paraître intéressé ?",
    a: "En pensant d'abord à ce que TU apportes à l'autre. Un bon partenariat est gagnant-gagnant : tu offres de la valeur à son audience (un contenu, un atelier, une offre dédiée), il fait pareil pour la tienne. On commence par donner, pas par demander.",
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
        D&apos;autres ont déjà réuni ton audience — autant s&apos;allier.
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
                Tu rames à bâtir ton audience post par post, mois après mois — alors que
                d&apos;autres ont déjà réuni exactement tes clients idéaux. Et si, au lieu
                de repartir de zéro, tu empruntais leur audience ? C&apos;est le système de
                partenariats.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi c&apos;est l&apos;un des leviers les plus sous-exploités
              </h2>
              <p>
                Un partenariat, c&apos;est de la <strong>confiance empruntée</strong> :
                quand un partenaire te recommande, tu hérites d&apos;un capital confiance
                qu&apos;il a mis des années à bâtir. Et la recommandation reste l&apos;un
                des canaux les plus puissants : <strong>84 % des acheteurs B2B</strong>{" "}
                démarrent leur processus d&apos;achat par une recommandation. Pourtant,
                presque personne ne l&apos;organise.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Identifie tes partenaires idéaux
              </h2>
              <p>
                Cherche des acteurs <strong>non concurrents</strong> qui servent le même
                client que toi, à un autre moment ou sur un autre besoin. Si tu aides des
                indépendants à trouver des clients, pense comptable, coach, agence web,
                logiciel… Fais la liste de 10 partenaires potentiels qui parlent déjà à ta
                cible.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Approche en donnant d&apos;abord
              </h2>
              <p>
                L&apos;erreur fatale : « tu peux me recommander ? ». On commence par
                offrir. Propose de la valeur à SON audience : un atelier commun, un
                contenu, une offre dédiée à ses clients. Un partenariat tient parce
                qu&apos;il est <strong>gagnant-gagnant</strong>, pas parce que tu demandes
                un service.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Choisis le bon format d&apos;échange
              </h2>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li><strong>Co-marketing</strong> : un webinaire, un guide ou un live à deux, promu aux deux audiences.</li>
                <li><strong>Cross-promotion</strong> : tu recommandes ses services, il recommande les tiens.</li>
                <li><strong>Apporteur d&apos;affaires</strong> : une commission claire sur les clients qu&apos;il t&apos;amène.</li>
                <li><strong>Offre groupée</strong> : vos deux services packagés pour un même besoin.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Systématise et mesure
              </h2>
              <p>Le système :</p>
              <ul className="ml-5 list-decimal space-y-1.5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li><strong>approche</strong> régulièrement de nouveaux partenaires (pas une fois par an) ;</li>
                <li><strong>facilite</strong> la recommandation (un message prêt, un lien, un support) ;</li>
                <li><strong>route</strong> les leads partenaires directement dans ton tunnel ;</li>
                <li><strong>mesure</strong> ce que chaque partenaire rapporte, pour nourrir les meilleurs.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Un partenariat n&apos;a de valeur que branché à ton système
              </h2>
              <p>
                Un partenaire peut t&apos;envoyer 20 leads… qui se perdent si tu n&apos;as
                rien pour les accueillir. La puissance des partenariats vient quand ils
                alimentent une machine : les leads arrivent dans ton{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  tunnel de vente
                </Link>
                , et tes clients satisfaits deviennent à leur tour une source de{" "}
                <Link
                  href="/blog/systeme-recommandation-client-automatise"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  recommandations
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
                  <a className="underline hover:text-foreground" href="https://growsurf.com/statistics/b2b-referral-marketing-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    GrowSurf — B2B Referral Marketing Statistics (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.shno.co/marketing-statistics/referral-marketing-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Shno — Referral &amp; Word-of-Mouth Statistics 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux une machine à clients qui absorbe aussi tes leads partenaires ?
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
