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
  slug: "comment-choisir-formation-ia",
  title:
    "Formation IA : comment bien la choisir quand on est indépendant ou dirigeant ?",
  description:
    "Guide — Toutes les formations IA ne se valent pas. Cinq critères concrets pour distinguer un accompagnement qui vous rend autonome d'un catalogue de vidéos que vous ne finirez jamais.",
  date: "2026-07-18",
  dateLabel: "18 juillet 2026",
  readTime: "7 min",
  author: siteConfig.name,
  category: "Guide",
  image: "/blog/comment-choisir-formation-ia.svg",
  imageAlt:
    "Comment choisir sa formation IA : une liste de critères cochés (Qualiopi, finançable, pratique, autonomie) menant au monogramme Konig IA — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: `${article.title} | Konig IA`,
  description: article.description,
  keywords: [
    "comment choisir formation IA",
    "formation IA indépendant",
    "meilleure formation intelligence artificielle",
    "formation IA Qualiopi",
    "formation IA finançable CPF OPCO",
    "formation prospection automatisée",
    "formation IA pour dirigeant",
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
    q: "Combien coûte une formation IA, et est-elle finançable ?",
    a: "Les tarifs varient fortement selon le format (vidéos en libre accès, cours collectif, accompagnement individuel). L'élément décisif n'est pas le prix affiché mais le financement : si l'organisme est certifié Qualiopi, la formation peut être prise en charge par le CPF, un OPCO, France Travail ou le FAF — et votre reste à charge peut être nul.",
  },
  {
    q: "Faut-il savoir coder pour suivre une formation IA ?",
    a: "Non, pour la grande majorité des formations orientées acquisition de clients. Les bons programmes s'appuient sur des outils no-code et vous apprennent à les connecter, pas à programmer. Méfiez-vous d'un contenu trop technique si votre objectif est commercial.",
  },
  {
    q: "Vaut-il mieux une formation en vidéo ou un accompagnement ?",
    a: "Les vidéos en autonomie sont peu chères mais rarement terminées, et vous laissent seul face à votre cas. Un accompagnement coûte plus cher à l'affichage mais vous fait construire un système réel sur vos propres outils — c'est la différence entre savoir et faire.",
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
        Cinq critères pour choisir une formation IA qui vous rend réellement autonome.
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
                « Formation IA » est devenu un argument marketing. Derrière ces deux
                mots se cachent des offres qui n&apos;ont rien à voir : d&apos;un côté des
                catalogues de vidéos à 47&nbsp;€ que personne ne termine, de l&apos;autre
                des accompagnements qui vous font repartir avec un système qui tourne.
                Voici cinq critères pour ne pas vous tromper.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                1. La certification Qualiopi — la vraie ligne de partage
              </h2>
              <p>
                Qualiopi est la certification qualité obligatoire pour tout organisme qui
                veut faire financer ses formations par des fonds publics ou mutualisés.
                Concrètement, c&apos;est votre premier filtre : un organisme certifié a été
                audité sur son sérieux, et surtout, sa formation devient{" "}
                <strong>finançable</strong>. Un formateur non certifié peut être excellent,
                mais vous paierez tout de votre poche.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                2. Le financement — regardez le reste à charge, pas le prix affiché
              </h2>
              <p>
                Une formation à 2&nbsp;000&nbsp;€ financée à 100&nbsp;% vous coûte moins
                qu&apos;une vidéo à 300&nbsp;€. Selon votre statut, un accompagnement
                certifié peut être pris en charge par le{" "}
                <strong>CPF</strong>, votre <strong>OPCO</strong>,{" "}
                <strong>France Travail</strong> ou un <strong>FAF</strong>. La bonne
                question à poser à un organisme n&apos;est donc pas « combien ça coûte »
                mais « à quoi suis-je éligible, et quel sera mon reste à charge ».
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3. Pratique, pas théorique — repartez-vous avec quelque chose ?
              </h2>
              <p>
                C&apos;est le critère qui sépare le savoir du faire. Demandez ce que vous
                aurez <strong>construit</strong> à la fin : un système de prospection
                réellement configuré sur vos outils, ou une pile de notes ? Une bonne
                formation IA orientée acquisition vous fait paramétrer vos agents, vos
                séquences de relance et votre tunnel <em>pendant</em> l&apos;accompagnement.
                Pour voir à quoi ça ressemble concrètement, lisez{" "}
                <Link
                  href="/blog/agents-ia-generer-clients-2026"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  comment générer ses premiers clients avec des agents IA en pilote
                  automatique
                </Link>
                .
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                4. L&apos;autonomie — apprend-on à pêcher, ou vous vend-on du poisson ?
              </h2>
              <p>
                Beaucoup d&apos;offres vous rendent dépendant : une boîte noire que vous
                devez repayer chaque mois. Le vrai critère de qualité, c&apos;est
                l&apos;inverse — repartir avec la <strong>compétence</strong>, capable de
                faire évoluer votre système seul. C&apos;est aussi ce qui distingue une
                formation d&apos;une prestation d&apos;agence. Sur ce point, notre article{" "}
                <Link
                  href="/blog/ia-agentique-2026"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  sur l&apos;IA agentique en 2026
                </Link>{" "}
                montre pourquoi ces outils sont désormais à la portée d&apos;un indépendant
                seul, et plus seulement des grands groupes.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                5. L&apos;adéquation à votre cas — méfiez-vous du « pour tout le monde »
              </h2>
              <p>
                Une formation qui prétend convenir à tous ne convient vraiment à personne.
                Les meilleurs organismes commencent par un <strong>diagnostic</strong> :
                ils évaluent si l&apos;automatisation a du sens pour <em>votre</em> activité
                avant de vous vendre quoi que ce soit — quitte à vous dire que ce
                n&apos;est pas pertinent. C&apos;est précisément le rôle d&apos;un audit
                préalable.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                En résumé
              </h2>
              <p>
                Avant de choisir, cochez ces cinq cases :{" "}
                <strong>certifié Qualiopi</strong>, <strong>finançable</strong>,{" "}
                <strong>pratique</strong> (vous construisez un système réel),{" "}
                <strong>orienté autonomie</strong> et <strong>adapté à votre cas</strong>{" "}
                après diagnostic. Une offre qui coche les cinq vous fait gagner des mois ;
                une qui n&apos;en coche aucune vous fait perdre un budget.
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

              <h2 className="pt-4 text-2xl font-bold tracking-tight">Pour aller plus loin</h2>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>
                  <a className="underline hover:text-foreground" href="https://travail-emploi.gouv.fr" target="_blank" rel="noopener noreferrer nofollow">
                    Ministère du Travail — Qualiopi et qualité de la formation
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer nofollow">
                    Mon Compte Formation — vérifier son crédit CPF
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.francecompetences.fr" target="_blank" rel="noopener noreferrer nofollow">
                    France Compétences — répertoires et financements
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Pas sûr que ce soit fait pour vous ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                C&apos;est exactement l&apos;objet de l&apos;Audit IA offert : 30 minutes
                pour un état des lieux clair, sans jargon et sans engagement — y compris
                vous dire si l&apos;automatisation n&apos;a pas de sens pour votre activité.
              </p>
              <div className="mt-6 flex justify-center">
                <CtaButton href="/#diagnostic-ia">Tester mon éligibilité</CtaButton>
              </div>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
