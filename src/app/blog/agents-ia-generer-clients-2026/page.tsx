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
  slug: "agents-ia-generer-clients-2026",
  title:
    "Agents IA en 2026 : comment générer vos premiers clients en pilote automatique (même en partant de zéro)",
  description:
    "La tendance 2026 que les indépendants et entrepreneurs les plus rapides exploitent déjà : des agents IA qui prospectent, relancent et remplissent leur agenda — sans agence, sans budget pub, même en partant de zéro.",
  date: "2026-07-07",
  dateLabel: "7 juillet 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Tendance 2026",
  image: "/blog/agents-ia-generer-clients-2026-prospection-automatisee.svg",
  imageAlt:
    "Agents IA en 2026 : des prospects captés automatiquement passent dans un tunnel de prospection piloté par l'IA, puis remplissent un agenda de rendez-vous clients en pilote automatique — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: `${article.title} | Konig IA`,
  description: article.description,
  keywords: [
    "agents IA 2026",
    "générer des clients avec l'IA",
    "prospection automatisée IA",
    "se lancer entrepreneur IA",
    "formation IA indépendant",
    "automatisation acquisition client",
    "IA marketing 2026",
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
    q: "Faut-il savoir coder pour créer un système d'acquisition IA ?",
    a: "Non. Les outils no-code (Make, n8n, agents IA) permettent de bâtir un système complet sans écrire une ligne de code. L'enjeu n'est pas technique, il est stratégique : savoir quoi automatiser, dans quel ordre, et pour quelle cible.",
  },
  {
    q: "Combien de temps pour lancer un système qui génère des rendez-vous ?",
    a: "Les bases se posent en quelques jours. Un système d'acquisition simple (contenu + prospection + relances) peut être opérationnel en 2 jours d'accompagnement, puis affiné au fil des semaines.",
  },
  {
    q: "L'IA remplace-t-elle vraiment une agence marketing ?",
    a: "Pour l'acquisition, oui — et surtout, elle vous rend autonome. Plutôt que de payer une agence chaque mois pour un système que vous ne maîtrisez pas, vous construisez le vôtre, que vous gardez à vie.",
  },
];

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
        publisher: {
          "@type": "Organization",
          name: "Konig IA",
          url: siteConfig.url,
        },
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

      {/* Barre de navigation simple */}
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
                Un système d&apos;acquisition IA : des prospects aux rendez-vous clients, en pilote automatique.
              </figcaption>
            </figure>

            <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
              <p className="text-lg font-medium text-foreground">
                En 2026, une ligne de fracture sépare deux types d&apos;indépendants :
                ceux qui prospectent encore à la main, un message après l&apos;autre — et
                ceux qui ont branché des <strong>agents IA</strong> qui travaillent pour
                eux, 24h/24. Les seconds n&apos;ont pas plus de talent. Ils ont juste
                compris la tendance avant les autres.
              </p>

              <p>
                Si vous êtes freelance, dirigeant, ou que vous rêvez de vous lancer sans
                savoir par où commencer, cet article est pour vous. On va voir
                concrètement comment l&apos;IA permet aujourd&apos;hui de générer ses
                premiers clients <strong>en pilote automatique</strong> — même en partant
                de zéro, sans coder et sans agence.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi 2026 est (vraiment) l&apos;année des agents IA
              </h2>
              <p>
                Depuis deux ans, trois choses ont changé en même temps : les modèles
                d&apos;IA sont devenus <strong>fiables</strong>, les outils no-code les
                ont rendus <strong>accessibles</strong>, et le coût a chuté à quelques
                dizaines d&apos;euros par mois. Résultat : ce qui coûtait des milliers
                d&apos;euros en agence est désormais à la portée d&apos;un indépendant
                seul, depuis son ordinateur.
              </p>
              <p>
                Un « agent IA », ce n&apos;est pas un gadget. C&apos;est un assistant
                autonome qui exécute une mission précise : identifier des prospects,
                écrire des messages personnalisés, relancer au bon moment, qualifier les
                réponses. Pendant que vous dormez, il remplit votre agenda.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                À quoi ressemble un vrai système d&apos;acquisition IA
              </h2>
              <p>
                Oubliez l&apos;idée d&apos;un outil magique. Un système qui tourne repose
                sur <strong>trois leviers</strong> qui s&apos;enchaînent :
              </p>
              <ul className="space-y-3 pl-1">
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent-solid)]" />
                  <span>
                    <strong>Le contenu qui attire.</strong> L&apos;IA vous aide à produire
                    du contenu régulier et ciblé qui capte une audience — sans y passer
                    vos journées.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent-solid)]" />
                  <span>
                    <strong>La prospection automatisée.</strong> Des agents contactent vos
                    prospects en simultané sur LinkedIn, e-mail et WhatsApp, et engagent
                    la conversation à votre place.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent-solid)]" />
                  <span>
                    <strong>Le tunnel de vente.</strong> Des séquences automatisées
                    relancent, qualifient et transforment vos prospects en rendez-vous —
                    puis en clients.
                  </span>
                </li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                5 automatisations qui changent la donne pour un indépendant
              </h2>
              <p>
                Voici ce que vous pouvez mettre en place, même seul :
              </p>
              <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li>Un agent qui trouve chaque jour 20 prospects correspondant à votre cible.</li>
                <li>Des messages d&apos;approche personnalisés générés et envoyés automatiquement.</li>
                <li>Des relances intelligentes déclenchées au bon moment, sans oubli.</li>
                <li>Un agent qui qualifie les réponses et ne vous laisse que les rendez-vous chauds.</li>
                <li>Un contenu hebdomadaire qui installe votre autorité pendant que le reste tourne.</li>
              </ol>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Comment se lancer quand on part de zéro
              </h2>
              <p>
                Bonne nouvelle : vous n&apos;avez pas besoin d&apos;être « technique ». La
                seule chose qui compte, c&apos;est la méthode. Commencez par un{" "}
                <strong>état des lieux</strong> : où en est votre acquisition aujourd&apos;hui,
                et où l&apos;IA peut vraiment faire la différence dans votre marché.
                Ensuite, posez les fondations (comprendre les outils), puis construisez vos
                trois leviers, un par un.
              </p>
              <p>
                L&apos;erreur classique est de vouloir tout automatiser d&apos;un coup.
                Installez d&apos;abord une brique qui fonctionne, mesurez, puis empilez.
                C&apos;est ainsi qu&apos;on obtient un système fiable plutôt qu&apos;une
                usine à gaz.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                L&apos;erreur à éviter : tout déléguer à une agence
              </h2>
              <p>
                Il est tentant de payer une agence pour « s&apos;occuper de tout ». Le
                problème : vous devenez dépendant d&apos;un système que vous ne comprenez
                pas, que vous payez chaque mois, et qui s&apos;arrête le jour où vous
                arrêtez de payer. En 2026, le vrai avantage n&apos;est pas d&apos;avoir un
                système — c&apos;est de <strong>savoir le construire et le piloter
                vous-même</strong>. Cette compétence, personne ne peut vous la reprendre.
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
            </div>

            {/* CTA de fin d'article */}
            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Envie de savoir si ce système est fait pour vous ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Testez votre éligibilité à l&apos;Audit IA offert : 30 minutes pour un état
                des lieux clair de votre potentiel d&apos;automatisation.
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
