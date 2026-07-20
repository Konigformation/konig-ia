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
  slug: "formation-ia-guide-complet-2026",
  title: "Formation IA : le guide complet (2026)",
  description:
    "Tout savoir sur la formation IA : définition, méthode, prix et erreurs à éviter. Le guide clair par Konig IA.",
  date: "2026-07-20",
  dateLabel: "20 juillet 2026",
  readTime: "9 min",
  author: siteConfig.name,
  category: "Guide",
  image: "/blog/formation-ia-guide-complet-2026.svg",
  imageAlt:
    "Formation IA, le guide complet 2026 : un parcours en cinq étapes — diagnostic, fondations, contenu, prospection — menant à une machine à clients automatisée — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "formation IA",
    "formation intelligence artificielle",
    "formation IA indépendant",
    "formation IA dirigeant",
    "prix formation IA",
    "formation IA Qualiopi",
    "formation prospection automatisée",
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
    q: "Qu'est-ce qu'une formation IA, concrètement ?",
    a: "C'est un programme qui vous apprend à utiliser l'intelligence artificielle au service d'un objectif professionnel précis — dans notre cas, trouver des clients. Une bonne formation IA n'est pas un cours théorique sur le fonctionnement des modèles : elle vous fait construire, pendant l'accompagnement, un système qui produit du contenu, prospecte et relance à votre place.",
  },
  {
    q: "Faut-il savoir coder pour suivre une formation IA ?",
    a: "Non, pas pour les formations orientées acquisition de clients. Les programmes sérieux s'appuient sur des outils no-code et vous apprennent à les connecter entre eux. Si l'on vous parle de Python et d'API dès la première heure alors que votre objectif est commercial, vous n'êtes probablement pas au bon endroit.",
  },
  {
    q: "Combien de temps faut-il pour être opérationnel ?",
    a: "Cela dépend du format. Un catalogue de vidéos en autonomie s'étale sur des mois et se termine rarement. Un accompagnement structuré et intensif permet de repartir avec un système fonctionnel en quelques jours — chez Konig IA, le format est de 48 heures, diagnostic compris.",
  },
  {
    q: "Une formation IA est-elle finançable ?",
    a: "Si l'organisme est certifié Qualiopi, oui : la formation peut être prise en charge par un OPCO, France Travail ou un FAF selon votre statut. C'est le cas de Konig IA. Le bon réflexe n'est donc pas de comparer les prix affichés, mais de demander à quel dispositif vous êtes éligible et quel sera votre reste à charge réel.",
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
        Une formation IA utile se juge à ce qu&apos;elle vous fait construire, pas à
        ce qu&apos;elle vous fait écouter.
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
              {/* Réponse d'abord : le paragraphe destiné à être cité. */}
              <div className="rounded-2xl border border-border bg-muted/40 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  En bref
                </h2>
                <p className="mt-3 text-lg font-medium text-foreground">
                  Une <strong>formation IA</strong> vous apprend à utiliser
                  l&apos;intelligence artificielle pour un objectif professionnel concret,
                  le plus souvent trouver des clients. Elle s&apos;adresse aux
                  indépendants, dirigeants et commerciaux. Le bénéfice principal :
                  automatiser sa prospection — contenu, relances, prise de rendez-vous —
                  et cesser de dépendre du bouche-à-oreille ou d&apos;une agence.
                </p>
              </div>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Qu&apos;est-ce qu&apos;une formation IA ?
              </h2>
              <p>
                C&apos;est un programme qui vous apprend à mettre l&apos;intelligence
                artificielle au service d&apos;un résultat mesurable. La nuance est
                importante : il ne s&apos;agit pas de comprendre comment fonctionne un
                modèle de langage, mais de savoir quoi lui faire faire, et surtout comment
                l&apos;enchaîner avec vos outils existants pour que le travail se fasse
                sans vous.
              </p>
              <p>
                Un exemple concret. Un consultant indépendant passe deux heures par jour à
                chercher des prospects sur LinkedIn, rédiger des messages personnalisés et
                relancer ceux qui n&apos;ont pas répondu. Après une formation IA orientée
                acquisition, la même séquence tourne seule : un agent identifie les
                profils correspondant à sa cible, rédige une accroche adaptée à chacun,
                envoie, relance deux fois, et ne lui remonte que les réponses positives —
                directement dans son agenda. Il n&apos;a pas appris à coder. Il a appris à
                assembler.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi c&apos;est décisif pour les indépendants et dirigeants
              </h2>
              <p>
                Parce que la prospection est la première activité sacrifiée quand
                l&apos;agenda se remplit. C&apos;est le paradoxe classique de
                l&apos;indépendant : quand il a des clients, il ne prospecte plus ; quand
                les missions se terminent, il repart de zéro. Ce cycle en dents de scie
                n&apos;est pas un problème de motivation, c&apos;est un problème de
                système.
              </p>
              <p>
                L&apos;IA change l&apos;équation sur un point précis : elle rend
                l&apos;acquisition <strong>continue</strong> et indépendante de votre
                disponibilité. Une séquence de prospection automatisée travaille pendant
                que vous êtes en mission. C&apos;est ce qui transforme un flux de clients
                erratique en flux régulier — et c&apos;est aussi ce qui permet de ne plus
                confier son acquisition à une agence à plusieurs milliers d&apos;euros par
                mois. Nous détaillons ce mécanisme dans notre article sur{" "}
                <Link
                  href="/blog/agents-ia-generer-clients-2026"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  les agents IA qui génèrent des clients en pilote automatique
                </Link>
                .
              </p>
              <p>
                Deuxième effet, moins évident : la production de contenu. Publier
                régulièrement est le levier de visibilité le plus rentable pour un
                indépendant, et le plus abandonné faute de temps. L&apos;IA ne remplace
                pas votre expertise, mais elle supprime la friction de la mise en forme —
                ce qui fait la différence entre publier une fois par trimestre et publier
                chaque semaine.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La méthode en 5 étapes
              </h2>
              <p>
                Une formation IA qui produit des résultats suit à peu près toujours cette
                progression. Si l&apos;une de ces étapes manque, le système ne tient pas.
              </p>
              <ol className="space-y-4">
                <li>
                  <strong>1. Le diagnostic.</strong> Avant tout outil, on établit où
                  partent réellement vos clients aujourd&apos;hui et quelles tâches
                  méritent d&apos;être automatisées. Certaines activités très
                  relationnelles gagnent peu à l&apos;automatisation — mieux vaut le
                  savoir avant d&apos;investir.
                </li>
                <li>
                  <strong>2. Les fondations.</strong> Clarifier son offre, sa cible et son
                  message. C&apos;est l&apos;étape que tout le monde veut sauter, et celle
                  qui détermine tout le reste : une IA qui automatise un message flou
                  produit du volume inutile, plus vite.
                </li>
                <li>
                  <strong>3. Le contenu automatisé.</strong> Mettre en place une chaîne de
                  production qui transforme votre expertise en publications régulières,
                  sans y consacrer vos soirées.
                </li>
                <li>
                  <strong>4. La prospection multicanale.</strong> Configurer les agents qui
                  identifient, contactent et relancent vos prospects sur les canaux où ils
                  se trouvent réellement.
                </li>
                <li>
                  <strong>5. Le tunnel de conversion.</strong> Relier le tout à un parcours
                  qui transforme l&apos;intérêt en rendez-vous, puis le rendez-vous en
                  client. Sans cette dernière étape, vous générez de l&apos;attention que
                  personne ne récupère.
                </li>
              </ol>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Combien coûte une formation IA ?
              </h2>
              <p>
                Les écarts sont considérables, parce que le mot « formation » recouvre des
                produits très différents :
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Catalogues de vidéos en autonomie — 50 à 500 €.</strong> Peu
                  chers, rarement terminés, aucun accompagnement sur votre cas.
                </li>
                <li>
                  <strong>Formations collectives en ligne — 500 à 2 000 €.</strong> Un
                  cadre et un rythme, mais un contenu généraliste.
                </li>
                <li>
                  <strong>Accompagnements individuels — 2 000 à 6 000 €.</strong> Un
                  système construit sur vos outils, avec quelqu&apos;un qui corrige vos
                  erreurs en direct.
                </li>
              </ul>
              <p>
                Trois facteurs font varier le tarif : le degré de personnalisation, le
                volume d&apos;accompagnement humain, et la présence ou non d&apos;un suivi
                après la formation. Mais le prix affiché est le mauvais indicateur. La
                vraie question est celle du <strong>reste à charge</strong> : si
                l&apos;organisme est certifié <strong>Qualiopi</strong>, votre formation
                peut être financée par un <strong>OPCO</strong>,{" "}
                <strong>France Travail</strong> ou un <strong>FAF</strong> selon votre
                statut. Un accompagnement à 3 000 € pris en charge coûte moins qu&apos;une
                formation vidéo à 400 € payée de votre poche.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Les 5 erreurs à éviter
              </h2>
              <ul className="space-y-3">
                <li>
                  <strong>Confondre outil et système.</strong> Savoir se servir de
                  ChatGPT ne fait pas venir de clients. Ce qui compte, c&apos;est
                  l&apos;enchaînement entre les outils, pas la maîtrise de l&apos;un
                  d&apos;eux.
                </li>
                <li>
                  <strong>Choisir sur le prix affiché.</strong> Le seul chiffre pertinent
                  est votre reste à charge après financement.
                </li>
                <li>
                  <strong>Automatiser avant d&apos;avoir clarifié son offre.</strong>{" "}
                  L&apos;automatisation multiplie ce qui existe. Si le message ne convertit
                  pas manuellement, il ne convertira pas dix fois plus vite.
                </li>
                <li>
                  <strong>Se rendre dépendant.</strong> Méfiez-vous des dispositifs en
                  boîte noire que vous devez repayer chaque mois. L&apos;objectif est de
                  repartir avec la compétence, pas avec un abonnement.
                </li>
                <li>
                  <strong>Négliger la certification.</strong> Sans Qualiopi, aucun
                  financement possible — et aucun audit externe sur le sérieux de
                  l&apos;organisme. Les autres critères de sélection sont détaillés dans
                  notre guide{" "}
                  <Link
                    href="/blog/comment-choisir-formation-ia"
                    className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                  >
                    comment bien choisir sa formation IA
                  </Link>
                  .
                </li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Comment Konig IA peut vous aider
              </h2>
              <p>
                <Link
                  href="/"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  Konig IA
                </Link>{" "}
                est un accompagnement certifié <strong>Qualiopi</strong> de{" "}
                <strong>48 heures</strong> destiné aux indépendants, dirigeants et
                commerciaux. Le principe est celui décrit plus haut : vous ne repartez pas
                avec des notes, mais avec une machine à clients configurée sur vos propres
                outils — production de contenu, agents de prospection et tunnel de vente
                reliés entre eux.
              </p>
              <p>
                Le programme suit les cinq étapes de la méthode, du diagnostic au tunnel de
                conversion, et il est finançable via votre OPCO, France Travail ou votre
                FAF selon votre statut. Le point de départ est un{" "}
                <strong>Audit IA offert de 30 minutes</strong> : un état des lieux honnête
                de votre acquisition, y compris la conclusion que l&apos;automatisation
                n&apos;est pas pertinente pour votre activité, si c&apos;est le cas.
              </p>
              <p>
                Pour situer tout cela dans le contexte plus large de ce qui change cette
                année, voyez notre article sur{" "}
                <Link
                  href="/blog/ia-agentique-2026"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  l&apos;IA agentique en 2026
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

              <h2 className="pt-4 text-2xl font-bold tracking-tight">Pour aller plus loin</h2>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>
                  <a className="underline hover:text-foreground" href="https://travail-emploi.gouv.fr" target="_blank" rel="noopener noreferrer nofollow">
                    Ministère du Travail — Qualiopi et qualité de la formation
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
                Par où commencer, dans votre cas ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                L&apos;Audit IA offert dure 30 minutes et sert exactement à ça : identifier
                les deux ou trois automatisations qui auraient le plus d&apos;impact chez
                vous. Sans jargon et sans engagement.
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
