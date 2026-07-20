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
  slug: "prospection-automatisee-guide-complet-2026",
  title: "Prospection automatisée : le guide complet (2026)",
  description:
    "Tout savoir sur la prospection automatisée : définition, méthode, prix et erreurs à éviter. Le guide clair par Konig IA.",
  date: "2026-07-20",
  dateLabel: "20 juillet 2026",
  readTime: "10 min",
  author: siteConfig.name,
  category: "Guide",
  image: "/blog/prospection-automatisee-guide-complet-2026.svg",
  imageAlt:
    "Prospection automatisée : des prospects bruts entrent dans une séquence de messages et de relances automatisées, et ressortent en rendez-vous qualifiés dans un agenda — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "prospection automatisée",
    "automatiser sa prospection",
    "prospection LinkedIn automatisée",
    "séquence de prospection",
    "prospection commerciale IA",
    "agents IA prospection",
    "prospection automatisée indépendant",
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
    q: "La prospection automatisée est-elle légale en France ?",
    a: "Oui, à conditions. En B2B, vous pouvez contacter un professionnel sur son adresse professionnelle si le message concerne son activité, à condition d'indiquer clairement qui vous êtes et d'offrir un moyen simple de se désinscrire. En B2C, le consentement préalable est obligatoire. C'est le cadre RGPD : l'automatisation ne change pas les règles, elle augmente simplement le volume — et donc le risque si les règles sont ignorées.",
  },
  {
    q: "Quelle différence entre prospection automatisée et spam ?",
    a: "La pertinence et le volume. Le spam envoie un message identique au plus grand nombre. Une prospection automatisée bien construite envoie un message spécifique à une liste étroite et qualifiée, avec une raison d'entrer en contact qui tient debout. Si votre message pourrait être envoyé à n'importe qui, c'est du spam, même automatisé proprement.",
  },
  {
    q: "Combien de rendez-vous peut-on espérer ?",
    a: "Les ordres de grandeur varient énormément selon le secteur, le panier moyen et la qualité du ciblage. Méfiez-vous des promesses chiffrées : un prestataire qui garantit un nombre de rendez-vous avant d'avoir vu votre offre vend du volume, pas des clients. Le seul indicateur qui compte est le coût d'acquisition rapporté à votre valeur client.",
  },
  {
    q: "Faut-il un CRM pour automatiser sa prospection ?",
    a: "Pas au démarrage, mais très vite oui. Sans endroit centralisé pour savoir qui a été contacté, quand et avec quel message, vous finissez par recontacter les mêmes personnes ou laisser des réponses sans suite. Un outil simple suffit au début — l'important est qu'il existe.",
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
        Le principe : une liste étroite, un message pertinent, des relances
        régulières — et vous n&apos;intervenez qu&apos;à la réponse.
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
                  La <strong>prospection automatisée</strong> consiste à confier à des
                  outils la partie répétitive de la recherche de clients : identifier les
                  bons interlocuteurs, envoyer un premier message, relancer ceux qui
                  n&apos;ont pas répondu. Elle s&apos;adresse aux indépendants, dirigeants
                  et commerciaux. Le bénéfice principal : un flux de rendez-vous régulier,
                  qui ne s&apos;arrête plus quand vous êtes en mission.
                </p>
              </div>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Qu&apos;est-ce que la prospection automatisée ?
              </h2>
              <p>
                C&apos;est l&apos;automatisation de tout ce qui, dans la prospection, ne
                demande pas votre jugement. Repérer les entreprises qui correspondent à
                votre cible, retrouver le bon interlocuteur, envoyer un message
                d&apos;approche, relancer trois jours plus tard, puis encore une fois la
                semaine suivante : ces gestes sont indispensables, chronophages, et
                n&apos;exigent aucune expertise particulière. La discussion commerciale,
                elle, reste entièrement humaine.
              </p>
              <p>
                Un exemple concret. Une consultante RH cible les PME industrielles de 50 à
                200 salariés dans sa région. Autrefois, elle y consacrait ses vendredis :
                recherche LinkedIn, vérification des profils, rédaction de messages,
                tableur de suivi. Aujourd&apos;hui, la liste se construit seule selon ses
                critères, chaque prospect reçoit une accroche qui mentionne son secteur et
                sa taille, deux relances partent automatiquement si personne ne répond, et
                seule une réponse humaine lui arrive en notification. Son vendredi est
                redevenu un jour facturable — et le flux ne s&apos;interrompt plus quand
                elle est en mission.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi c&apos;est décisif pour les indépendants et dirigeants
              </h2>
              <p>
                Le premier bénéfice est la <strong>régularité</strong>. La plupart des
                indépendants prospectent par à-coups : intensément quand le carnet se vide,
                plus du tout quand il se remplit. Comme un cycle commercial dure souvent
                plusieurs semaines, les efforts fournis en panique produisent des résultats
                bien trop tard. Une prospection automatisée tourne à bas bruit en
                permanence, ce qui lisse la courbe au lieu de la faire osciller.
              </p>
              <p>
                Le deuxième est le <strong>coût</strong>. Externaliser son acquisition à
                une agence représente souvent plusieurs milliers d&apos;euros mensuels,
                avec une dépendance totale : le jour où vous arrêtez de payer, le flux
                s&apos;arrête. Construire son propre système demande un investissement
                initial, puis coûte le prix des outils. La bascule est en général rapide.
              </p>
              <p>
                Le troisième est plus discret mais souvent décisif : la{" "}
                <strong>mémoire</strong>. Un système garde la trace de qui a été contacté,
                quand, avec quel message et quelle réponse. Fini le prospect intéressé
                « à recontacter dans six mois » qu&apos;on oublie, ou le doublon gênant
                envoyé à quelqu&apos;un déjà en discussion. Cette rigueur est difficile à
                tenir manuellement et devient automatique une fois outillée. Pour voir
                comment les agents IA prennent en charge ces séquences, lisez notre article
                sur{" "}
                <Link
                  href="/blog/agents-ia-generer-clients-2026"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  les agents IA qui génèrent des clients en pilote automatique
                </Link>
                .
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La méthode en 5 étapes
              </h2>
              <p>
                L&apos;ordre compte autant que les étapes elles-mêmes. Automatiser à
                partir de l&apos;étape 3 sans avoir traité les deux premières est la cause
                d&apos;échec la plus fréquente.
              </p>
              <ol className="space-y-4">
                <li>
                  <strong>1. Définir une cible étroite.</strong> « Les PME » n&apos;est pas
                  une cible. « Les cabinets d&apos;architecture de 5 à 20 personnes en
                  Nouvelle-Aquitaine » en est une. Plus le segment est resserré, plus le
                  message peut être précis — et c&apos;est la précision, pas le volume, qui
                  fait le taux de réponse.
                </li>
                <li>
                  <strong>2. Écrire un message qui tient sans automatisation.</strong>{" "}
                  Testez-le à la main sur vingt personnes. S&apos;il ne génère aucune
                  réponse manuellement, l&apos;automatiser ne fera qu&apos;échouer plus
                  vite et à plus grande échelle.
                </li>
                <li>
                  <strong>3. Construire la liste.</strong> C&apos;est ici que
                  l&apos;automatisation commence réellement : collecte des profils
                  correspondant à vos critères, vérification des coordonnées, exclusion des
                  clients et contacts existants.
                </li>
                <li>
                  <strong>4. Séquencer les relances.</strong> L&apos;essentiel des réponses
                  arrive après le premier message. Deux à trois relances espacées, chacune
                  apportant un angle nouveau plutôt qu&apos;un simple « je me permets de
                  revenir vers vous », constituent le cœur du système.
                </li>
                <li>
                  <strong>5. Qualifier et basculer en humain.</strong> Dès qu&apos;une
                  personne répond, l&apos;automatisation s&apos;arrête. Le rôle du système
                  s&apos;arrête à la mise en relation : un formulaire de qualification, un
                  lien de prise de rendez-vous, et c&apos;est vous qui prenez le relais.
                </li>
              </ol>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Combien coûte une prospection automatisée ?
              </h2>
              <p>Il faut distinguer deux budgets, souvent confondus.</p>
              <ul className="space-y-2">
                <li>
                  <strong>Les outils — 50 à 300 € par mois.</strong> Outil de séquences,
                  enrichissement de contacts, CRM léger. C&apos;est le coût courant, et il
                  reste stable dans le temps.
                </li>
                <li>
                  <strong>La mise en place.</strong> Soit une agence, à 1 500 à 5 000 €
                  par mois en récurrent, avec une dépendance durable. Soit un
                  accompagnement qui vous rend autonome, entre 2 000 et 6 000 € une fois,
                  après quoi vous ne payez plus que les outils.
                </li>
              </ul>
              <p>
                Trois facteurs font varier la note : la taille de votre marché, le nombre
                de canaux activés, et le degré de personnalisation des messages. Mais le
                calcul déterminant est ailleurs — comparez le coût total sur douze mois, et
                non le ticket d&apos;entrée. Une agence à 2 000 € mensuels représente
                24 000 € annuels et zéro compétence acquise. Par ailleurs, si vous passez
                par un organisme certifié <strong>Qualiopi</strong>, la formation peut être
                financée par un <strong>OPCO</strong>, <strong>France Travail</strong> ou
                un <strong>FAF</strong> selon votre statut, ce qui modifie sensiblement le
                calcul.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Les 5 erreurs à éviter
              </h2>
              <ul className="space-y-3">
                <li>
                  <strong>Envoyer beaucoup plutôt que bien.</strong> Multiplier les envois
                  d&apos;un message médiocre dégrade votre réputation d&apos;expéditeur et
                  votre marque. Cinquante messages pertinents valent mieux que deux mille
                  génériques.
                </li>
                <li>
                  <strong>Ignorer la délivrabilité.</strong> Un domaine mal configuré
                  (SPF, DKIM, DMARC) envoie vos messages en spam sans que vous le sachiez.
                  Vous croyez prospecter alors que personne ne reçoit rien.
                </li>
                <li>
                  <strong>Négliger le cadre légal.</strong> En B2B, il faut identifier
                  clairement l&apos;expéditeur, justifier la pertinence professionnelle du
                  message et permettre le désabonnement. Le RGPD ne s&apos;assouplit pas
                  parce que l&apos;envoi est automatisé.
                </li>
                <li>
                  <strong>Automatiser la conversation.</strong> L&apos;automatisation
                  amène le prospect jusqu&apos;à la porte. Un échange commercial mené par
                  un robot se repère immédiatement et détruit la confiance construite.
                </li>
                <li>
                  <strong>Ne rien mesurer.</strong> Sans suivi du taux de réponse par
                  segment et par message, vous ne saurez jamais quoi corriger. Les
                  critères à exiger d&apos;un accompagnement sur ce point sont détaillés
                  dans notre guide{" "}
                  <Link
                    href="/blog/formation-ia-guide-complet-2026"
                    className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                  >
                    Formation IA : le guide complet
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
                commerciaux. L&apos;objectif est exactement celui décrit dans cet article :
                repartir avec une prospection qui tourne sur vos propres outils — ciblage,
                séquences de relance, tunnel de conversion — plutôt qu&apos;avec un
                prestataire à repayer chaque mois.
              </p>
              <p>
                Les cinq étapes de la méthode sont mises en place pendant
                l&apos;accompagnement, sur votre marché et avec vos messages. Le programme
                est finançable via votre OPCO, France Travail ou votre FAF selon votre
                statut. Le point de départ est un{" "}
                <strong>Audit IA offert de 30 minutes</strong> : un état des lieux de votre
                acquisition actuelle, qui peut parfaitement conclure que
                l&apos;automatisation n&apos;est pas le bon levier pour vous.
              </p>
              <p>
                Pour replacer tout cela dans le contexte technologique de l&apos;année,
                voyez notre article sur{" "}
                <Link
                  href="/blog/ia-agentique-2026"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  l&apos;IA agentique en 2026
                </Link>
                , et pour bien choisir votre organisme,{" "}
                <Link
                  href="/blog/comment-choisir-formation-ia"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  nos cinq critères de sélection
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
                Votre marché se prête-t-il à l&apos;automatisation ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Tous les secteurs ne s&apos;y prêtent pas de la même façon. L&apos;Audit IA
                offert dure 30 minutes et répond précisément à cette question, sans jargon
                et sans engagement.
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
