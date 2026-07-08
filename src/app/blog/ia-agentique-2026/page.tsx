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
  slug: "ia-agentique-2026",
  title:
    "IA agentique : 2026, l'année où l'IA passe de la parole à l'action",
  description:
    "Actualité IA — Les agents autonomes qui exécutent des tâches (au lieu de simplement répondre) déferlent en 2026. Ce qui vient de sortir, ce que ça change pour les indépendants, et les limites à connaître.",
  date: "2026-07-07",
  dateLabel: "7 juillet 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/ia-agentique-2026-agents-autonomes.svg",
  imageAlt:
    "IA agentique en 2026 : des bulles de conversation se transforment en actions automatisées, exécutées par un agent IA autonome au centre d'un réseau — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: `${article.title} | Konig IA`,
  description: article.description,
  keywords: [
    "IA agentique 2026",
    "agents IA autonomes",
    "actualité intelligence artificielle",
    "Gemini Spark",
    "agentic AI entreprise",
    "tendances IA 2026",
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
    q: "Qu'est-ce que l'IA agentique exactement ?",
    a: "C'est une IA capable d'enchaîner des actions de façon autonome : analyser une situation, se fixer un objectif, choisir les bons outils et ajuster sa stratégie selon les résultats — là où un chatbot classique se contente de répondre à une question.",
  },
  {
    q: "Les agents IA autonomes sont-ils déjà utilisés en entreprise ?",
    a: "Oui. En 2026, ils sont déjà testés en France dans le service client, la planification logistique et l'automatisation de tâches administratives. Beaucoup de projets restent toutefois au stade de l'expérimentation.",
  },
  {
    q: "Faut-il être une grande entreprise pour en profiter ?",
    a: "Non, et c'est justement ce qui change : la baisse des coûts et les outils accessibles mettent ces technologies à portée des indépendants et des petites structures, pas seulement des grands groupes.",
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
        L&apos;IA agentique en 2026 : de la conversation à l&apos;action automatisée.
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
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/#blog` },
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
              href="/#blog"
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
                Pendant deux ans, on a discuté avec l&apos;IA. En 2026, elle
                commence à <strong>agir à notre place</strong>. C&apos;est le grand
                basculement de l&apos;année : l&apos;essor de l&apos;« IA agentique »,
                ces systèmes autonomes qui n&apos;attendent plus vos questions pour
                exécuter des tâches entières.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                L&apos;IA agentique, c&apos;est quoi au juste ?
              </h2>
              <p>
                Un chatbot répond. Un agent, lui, <strong>fait</strong>. Concrètement,
                un agent IA est capable d&apos;analyser une situation, de se fixer un
                objectif, de choisir les bons outils, puis d&apos;ajuster sa stratégie
                selon les résultats obtenus. On passe d&apos;un assistant qui suggère à
                un exécutant qui enchaîne les actions, du début à la fin.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de sortir
              </h2>
              <p>
                Le mouvement s&apos;accélère. Début juillet, Google a déployé{" "}
                <strong>Gemini Spark</strong>, un assistant « agentic » disponible
                24h/24 sur Mac, avec suivi en temps réel et prise en charge d&apos;un
                nombre croissant d&apos;applications. En parallèle, les entreprises
                françaises testent déjà ces agents dans le service client, la
                planification logistique et l&apos;automatisation de tâches
                administratives.
              </p>
              <p>
                Autre tendance forte de 2026 : l&apos;<strong>IA multimodale</strong>,
                qui efface les frontières entre les briques spécialisées. Un même
                environnement peut désormais croiser un document écrit, un audio, une
                vidéo et des données chiffrées — de quoi rendre ces agents encore plus
                polyvalents.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi ça compte (surtout) pour les indépendants
              </h2>
              <p>
                Jusqu&apos;ici, automatiser sérieusement demandait une équipe et un
                budget. Ce qui change en 2026, c&apos;est l&apos;<strong>accessibilité</strong>
                : la baisse des coûts et des outils plus simples mettent ces
                technologies à portée d&apos;une petite structure, pas seulement des
                grands groupes. Pour un freelance ou un dirigeant seul, c&apos;est une
                occasion rare de jouer dans la même cour que des acteurs bien plus gros.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le revers de la médaille
              </h2>
              <p>
                Tout n&apos;est pas rose. L&apos;ONU a alerté cet été sur une IA qui
                « progresse plus vite que notre capacité à la maîtriser ». Côté
                entreprises, beaucoup de projets lancés ces dernières années n&apos;ont
                jamais dépassé le stade du prototype. 2026 marque donc aussi une phase de{" "}
                <strong>rationalisation</strong> : moins d&apos;effets d&apos;annonce,
                plus de cas concrets qui tiennent la route. La bonne nouvelle pour les
                petits acteurs agiles : c&apos;est souvent eux qui passent le plus vite
                de l&apos;idée à l&apos;usage réel.
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
                  <a className="underline hover:text-foreground" href="https://www.orange.com/fr/whats-up/intelligence-artificielle-en-entreprise-productivite-et-gouvernance-en-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Orange — L&apos;IA en entreprise en 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://bigmedia.bpifrance.fr/nos-dossiers/nouvelles-tendances-ia-ce-qui-va-transformer-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Bpifrance Big Media — Les tendances IA de 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://news.un.org/fr/story/2026/07/1159086" target="_blank" rel="noopener noreferrer nofollow">
                    ONU Info — L&apos;IA progresse plus vite que notre capacité à la maîtriser
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.unow.fr/blog/le-coin-des-experts/adoption-ia-entreprise-tendances-2026/" target="_blank" rel="noopener noreferrer nofollow">
                    Unow — Adoption de l&apos;IA en entreprise en 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Où l&apos;IA peut-elle vraiment aider votre activité ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Testez votre éligibilité à l&apos;Audit IA offert : 30 minutes pour un
                état des lieux clair, sans jargon et sans engagement.
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
