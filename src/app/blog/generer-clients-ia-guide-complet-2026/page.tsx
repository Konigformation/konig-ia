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
  slug: "generer-clients-ia-guide-complet-2026",
  title: "Générer des clients avec l'IA : le guide complet (2026)",
  description:
    "Tout savoir sur générer des clients avec l'IA : définition, méthode, prix et erreurs à éviter. Le guide clair par Konig IA.",
  date: "2026-07-20",
  dateLabel: "20 juillet 2026",
  readTime: "10 min",
  author: siteConfig.name,
  category: "Guide",
  image: "/blog/generer-clients-ia-guide-complet-2026.svg",
  imageAlt:
    "Générer des clients avec l'IA : un système relie contenu, prospection et conversion pour produire un flux de clients régulier — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "générer des clients avec l'IA",
    "trouver des clients avec l'intelligence artificielle",
    "acquisition client IA",
    "IA pour trouver des clients",
    "machine à clients IA",
    "générer des clients indépendant",
    "IA acquisition commerciale",
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
    q: "L'IA peut-elle vraiment trouver des clients à ma place ?",
    a: "Elle prend en charge tout ce qui est répétitif dans l'acquisition : produire du contenu, identifier des prospects, envoyer et relancer. Ce qu'elle ne fait pas — et ne doit pas faire — c'est la relation commerciale elle-même. L'IA remplit votre agenda de rendez-vous qualifiés ; c'est vous qui signez.",
  },
  {
    q: "Faut-il une grande audience pour démarrer ?",
    a: "Non. C'est même l'intérêt de l'approche : la prospection automatisée ne dépend pas de votre notoriété, elle va chercher les prospects un par un. Une audience aide sur le volet contenu, mais on peut générer des rendez-vous dès le premier jour sans un seul abonné, en partant d'une cible bien définie.",
  },
  {
    q: "Quels résultats espérer, et en combien de temps ?",
    a: "La prospection produit des rendez-vous en quelques semaines ; le contenu met plusieurs mois à porter ses fruits mais devient un actif durable. Méfiez-vous de toute promesse chiffrée avant l'analyse de votre offre : le seul indicateur qui compte est le coût d'acquisition rapporté à la valeur d'un client.",
  },
  {
    q: "Est-ce réservé aux profils techniques ?",
    a: "Non. Les systèmes d'acquisition par IA reposent sur des outils no-code que l'on connecte entre eux. L'enjeu n'est pas de coder, mais de savoir quel outil fait quoi et dans quel ordre — c'est précisément ce qu'un bon accompagnement vous transmet.",
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
        Générer des clients avec l&apos;IA, c&apos;est relier trois briques —
        contenu, prospection, conversion — en un seul système.
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
                  <strong>Générer des clients avec l&apos;IA</strong>, c&apos;est
                  utiliser l&apos;intelligence artificielle pour construire un système
                  d&apos;acquisition qui produit, contacte et convertit à votre place.
                  Cela s&apos;adresse aux indépendants, dirigeants et commerciaux. Le
                  bénéfice principal : un flux de clients régulier et prévisible, qui ne
                  dépend plus ni du bouche-à-oreille, ni d&apos;une agence.
                </p>
              </div>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Qu&apos;est-ce que « générer des clients avec l&apos;IA » ?
              </h2>
              <p>
                Ce n&apos;est pas un outil, c&apos;est un <strong>système</strong>.
                L&apos;expression désigne l&apos;assemblage de plusieurs briques
                d&apos;intelligence artificielle qui, mises bout à bout, transforment un
                inconnu en client : produire du contenu qui attire, aller chercher les bons
                prospects, entretenir la relation, et amener jusqu&apos;au rendez-vous. Pris
                isolément, chacun de ces gestes existe depuis longtemps. Ce qui change, c&apos;est
                qu&apos;ils tournent désormais en continu, sans mobiliser votre temps.
              </p>
              <p>
                Un exemple concret. Un coach en gestion veut dix nouveaux clients par
                trimestre. Son système IA publie chaque semaine un article et trois posts
                tirés de son expertise, identifie en parallèle les dirigeants correspondant
                à sa cible, leur envoie un message d&apos;approche puis deux relances, et
                propose un lien de rendez-vous à ceux qui manifestent de l&apos;intérêt. Il
                n&apos;intervient qu&apos;au moment de l&apos;appel. Le reste — la partie
                mécanique, chronophage et facile à abandonner — tourne sans lui.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi c&apos;est décisif pour les indépendants et dirigeants
              </h2>
              <p>
                Le premier gain est la <strong>prévisibilité</strong>. La plupart des
                indépendants vivent leur acquisition comme une loterie : des mois fastes
                suivis de creux angoissants. Un système qui tourne en permanence remplace
                le hasard par un flux mesurable — vous savez combien de contacts entrent,
                combien deviennent des rendez-vous, combien signent.
              </p>
              <p>
                Le deuxième est le <strong>temps</strong>. L&apos;acquisition est le premier
                poste sacrifié quand on est débordé par les missions en cours. En confiant
                sa partie répétitive à l&apos;IA, vous cessez de choisir entre livrer et
                prospecter : les deux avancent en parallèle. C&apos;est exactement ce que
                permet la{" "}
                <Link
                  href="/blog/prospection-automatisee-guide-complet-2026"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  prospection automatisée
                </Link>
                , brique centrale de tout système d&apos;acquisition.
              </p>
              <p>
                Le troisième est le <strong>coût</strong>. Déléguer son acquisition à une
                agence coûte souvent plusieurs milliers d&apos;euros par mois, sans jamais
                acquérir la compétence : le jour où vous arrêtez de payer, tout
                s&apos;éteint. Construire son propre système demande un investissement
                initial, puis se limite au prix des outils. Pour comprendre comment les
                agents autonomes rendent cela accessible à un indépendant seul, voyez notre
                article sur{" "}
                <Link
                  href="/blog/agents-ia-generer-clients-2026"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  les agents IA en pilote automatique
                </Link>
                .
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La méthode en 5 étapes
              </h2>
              <p>
                Générer des clients avec l&apos;IA suit une logique de système : chaque
                étape alimente la suivante, et sauter les premières fait s&apos;effondrer
                les dernières.
              </p>
              <ol className="space-y-4">
                <li>
                  <strong>1. Clarifier l&apos;offre et la cible.</strong> À qui vendez-vous,
                  quel problème résolvez-vous, et pourquoi vous plutôt qu&apos;un autre ?
                  Sans cette base, l&apos;IA ne fait qu&apos;amplifier un message flou. Aucune
                  automatisation ne rattrape un positionnement bancal.
                </li>
                <li>
                  <strong>2. Produire du contenu qui installe la confiance.</strong> Articles,
                  posts, réponses aux questions récurrentes : l&apos;IA transforme votre
                  expertise en publications régulières. C&apos;est ce qui fait que le
                  prospect vous connaît déjà quand vous le contactez.
                </li>
                <li>
                  <strong>3. Aller chercher les prospects.</strong> En parallèle du contenu,
                  le système identifie les interlocuteurs correspondant à votre cible et
                  entre en contact. C&apos;est le moteur qui produit des rendez-vous sans
                  attendre que l&apos;audience grossisse.
                </li>
                <li>
                  <strong>4. Relancer et nourrir la relation.</strong> L&apos;essentiel des
                  réponses arrive après plusieurs points de contact. Des relances
                  automatiques, espacées et pertinentes, récupèrent la majorité des clients
                  que l&apos;on perd faute de suivi.
                </li>
                <li>
                  <strong>5. Convertir puis mesurer.</strong> Un tunnel clair mène le
                  prospect intéressé jusqu&apos;au rendez-vous, et chaque étape est chiffrée.
                  Ce sont ces chiffres qui vous disent quoi améliorer — et transforment
                  l&apos;acquisition en processus pilotable plutôt qu&apos;en intuition.
                </li>
              </ol>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Combien ça coûte ?
              </h2>
              <p>Trois postes composent le budget, et il faut les distinguer.</p>
              <ul className="space-y-2">
                <li>
                  <strong>Les outils — 50 à 300 € par mois.</strong> Génération de contenu,
                  enrichissement de contacts, séquences de messages, CRM léger. Coût
                  récurrent, relativement stable.
                </li>
                <li>
                  <strong>La montée en compétence.</strong> Soit une agence qui fait à votre
                  place, à 1 500 à 5 000 € mensuels en continu et sans transfert de savoir.
                  Soit un accompagnement qui vous rend autonome, entre 2 000 et 6 000 € une
                  fois, après quoi vous ne payez plus que les outils.
                </li>
                <li>
                  <strong>Votre temps de mise en route.</strong> Réel au démarrage, il
                  décroît vite une fois le système en place — c&apos;est justement l&apos;objet
                  de l&apos;automatisation.
                </li>
              </ul>
              <p>
                Ce qui fait varier la note : le nombre de canaux activés, le degré de
                personnalisation et la taille de votre marché. Mais le vrai calcul est le
                coût sur douze mois rapporté aux clients générés — pas le ticket
                d&apos;entrée. Et si vous passez par un organisme certifié{" "}
                <strong>Qualiopi</strong>, l&apos;accompagnement peut être financé par un{" "}
                <strong>OPCO</strong>, <strong>France Travail</strong> ou un{" "}
                <strong>FAF</strong> selon votre statut, ce qui change nettement
                l&apos;équation.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Les 5 erreurs à éviter
              </h2>
              <ul className="space-y-3">
                <li>
                  <strong>Attendre que le contenu suffise.</strong> Publier sans prospecter,
                  c&apos;est espérer que les clients viennent seuls. Le contenu réchauffe,
                  la prospection déclenche — il faut les deux.
                </li>
                <li>
                  <strong>Collectionner les outils sans système.</strong> Dix abonnements IA
                  qui ne se parlent pas ne génèrent aucun client. C&apos;est
                  l&apos;enchaînement qui produit le résultat, pas l&apos;accumulation.
                </li>
                <li>
                  <strong>Automatiser la relation humaine.</strong> Un échange commercial
                  mené par un robot se repère et détruit la confiance. L&apos;IA amène le
                  prospect à la porte ; c&apos;est vous qui l&apos;ouvrez.
                </li>
                <li>
                  <strong>Viser le volume plutôt que la pertinence.</strong> Contacter mille
                  personnes avec un message générique abîme votre marque et votre
                  délivrabilité. Cinquante messages justes valent mieux.
                </li>
                <li>
                  <strong>Ne rien mesurer.</strong> Sans chiffres à chaque étape, vous
                  pilotez à l&apos;aveugle. Les critères à exiger d&apos;un accompagnement
                  sérieux sont détaillés dans notre guide{" "}
                  <Link
                    href="/blog/comment-choisir-formation-ia"
                    className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                  >
                    pour bien choisir sa formation IA
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
                commerciaux. Sa promesse recouvre exactement le sujet de cet article :
                repartir avec une machine à clients complète — contenu, agents de
                prospection et tunnel de conversion — configurée sur vos propres outils,
                plutôt qu&apos;avec un prestataire à repayer chaque mois.
              </p>
              <p>
                Les cinq étapes de la méthode sont mises en place pendant
                l&apos;accompagnement, sur votre marché et avec votre offre. Le programme
                est finançable via votre OPCO, France Travail ou votre FAF selon votre
                statut. Tout commence par un{" "}
                <strong>Audit IA offert de 30 minutes</strong> : un état des lieux honnête
                de votre acquisition, qui peut parfaitement conclure que ce n&apos;est pas
                le bon levier pour votre activité.
              </p>
              <p>
                Pour aller plus loin selon votre priorité, voyez nos guides sur{" "}
                <Link
                  href="/blog/formation-ia-guide-complet-2026"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  la formation IA
                </Link>{" "}
                et sur{" "}
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
                  <a className="underline hover:text-foreground" href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer nofollow">
                    CNIL — prospection commerciale et RGPD
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://travail-emploi.gouv.fr" target="_blank" rel="noopener noreferrer nofollow">
                    Ministère du Travail — Qualiopi et qualité de la formation
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Combien de clients votre activité peut-elle générer ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                L&apos;Audit IA offert dure 30 minutes et répond précisément à cette
                question, à partir de votre offre et de votre marché. Sans jargon et sans
                engagement.
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
