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
  slug: "arrete-de-vouloir-etre-partout",
  title:
    "Arrête de vouloir être partout : l'omniprésence te rend invisible (et t'épuise) — la preuve",
  description:
    "Flagship — « Il faut être partout » est le conseil le plus toxique de 2026. 78 % des créateurs en burnout. Pourquoi t'éparpiller te tue, et ce qui marche vraiment.",
  date: "2026-10-07",
  dateLabel: "7 octobre 2026",
  readTime: "12 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/arrete-de-vouloir-etre-partout.svg",
  imageAlt:
    "Arrête de vouloir être partout : une présence éparpillée et pâle sur de nombreux canaux face à la domination d'un seul canal — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "il faut être partout",
    "omniprésence marketing",
    "un seul canal",
    "burnout créateur",
    "multicanal vs éparpillement",
    "stratégie de canal",
    "focus marketing",
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
    q: "Faut-il vraiment se limiter à un seul canal ?",
    a: "Il faut en dominer un avant d'en ajouter. Les entreprises qui grandissent le plus vite en 2026 choisissent un canal principal, un format et un rythme tenable — puis étendent. Être présent sur sept plateformes à la fois, seul, mène à un contenu dilué et au burnout, pas à des clients.",
  },
  {
    q: "Mais le multicanal n'est-il pas plus performant ?",
    a: "Le multicanal COORDONNÉ, oui : des campagnes synchronisées sur plusieurs canaux peuvent générer bien plus de conversions qu'un canal isolé. La nuance est capitale : un système qui orchestre quelques canaux reliés n'a rien à voir avec une personne seule qui s'éparpille à la main partout. L'un est une machine, l'autre un épuisement.",
  },
  {
    q: "Comment choisir mon canal principal ?",
    a: "Celui où se trouvent tes clients idéaux, où tu es à l'aise pour produire régulièrement, et où tu peux tenir dans la durée. Mieux vaut dominer un canal imparfait que disparaître sur cinq canaux parfaits sur le papier.",
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
        Pâle partout, ou dominant quelque part : il faut choisir.
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
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> Retour au blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[var(--accent-solid)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-solid)]">
                {article.category}
              </span>
              <span className="inline-flex items-center rounded-full bg-[var(--accent-solid)] px-3 py-1 text-xs font-semibold text-white">
                Pièce maîtresse du mois
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
                « Aujourd&apos;hui, il faut être partout : LinkedIn, Instagram, TikTok,
                YouTube, X, une newsletter, un podcast… » Tu l&apos;as entendu mille fois.
                Tu as essayé. Et tu es épuisé, dispersé, avec l&apos;impression de ramer
                partout sans percer nulle part. Ce n&apos;est pas toi le problème.
                C&apos;est le conseil.
              </p>
              <p>
                « Il faut être partout » est l&apos;une des injonctions les plus toxiques
                de 2026 — et je vais te prouver, chiffres à l&apos;appui, qu&apos;elle te
                rend <strong>invisible</strong> au lieu de te rendre visible. On
                décortique.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Partie 1 — Ce que tout le monde croit (et fait)
              </h2>
              <p>
                <strong>Ce que ta cible fait aujourd&apos;hui :</strong> elle ouvre un
                compte sur chaque plateforme « parce qu&apos;il faut y être », tente de
                tout alimenter, et finit par publier du contenu tiède, en retard, sur six
                canaux à la fois. <strong>Pourquoi elle y croit — quatre
                mécanismes :</strong>
              </p>
              <p>
                <strong>1. La peur de rater (FOMO).</strong> « Si je ne suis pas sur
                TikTok, je rate une génération de clients. » La peur de l&apos;absence est
                plus forte que le bon sens de la concentration.
              </p>
              <p>
                <strong>2. Le biais de survivance.</strong> Tu vois les marques qui sont
                « partout » — mais ce sont des entreprises avec des équipes entières. Tu
                compares ta production de solo à celle d&apos;un service marketing de dix
                personnes. Forcément, tu te sens en retard.
              </p>
              <p>
                <strong>3. Le mimétisme.</strong> Tout le monde le répète, donc ça{" "}
                <em>doit</em> être la règle. Sauf qu&apos;un conseil viral n&apos;est pas
                un conseil validé : il est juste facile à relayer.
              </p>
              <p>
                <strong>4. Les incitations de ceux qui le propagent.</strong> À qui
                profite « sois partout » ? Aux plateformes (chacune veut ton contenu
                gratuit), aux gourous qui vendent la méthode « omnicanal », aux outils de
                publication multi-plateformes. <strong>Personne dans cette chaîne
                n&apos;est payé pour protéger ton énergie.</strong> Toi si.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Partie 2 — La faille : ton temps et ton attention sont finis
              </h2>
              <p>
                Voici le mécanisme que l&apos;injonction ignore. Produire du{" "}
                <em>bon</em> contenu demande du temps et de l&apos;attention — deux
                ressources rigoureusement limitées. Les répartir sur six canaux, c&apos;est
                garantir d&apos;être <strong>médiocre sur les six</strong>. Et médiocre,
                en 2026, c&apos;est invisible.
              </p>
              <p>Les preuves s&apos;accumulent :</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  <strong>78 % des créateurs déclarent un burnout</strong> qui affecte
                  leur motivation et leur santé ; <strong>62 %</strong> des créateurs à
                  plein temps parlent de symptômes sévères, et <strong>37 %</strong>{" "}
                  songent à arrêter.
                </li>
                <li>
                  Le burnout est identifié comme la <strong>cause n°1 d&apos;abandon</strong>{" "}
                  avant même d&apos;avoir vu des résultats, dans une enquête créateurs 2026.
                </li>
                <li>
                  <strong>67 % des créateurs gagnent moins de 10 000 $ par an</strong> :
                  l&apos;éparpillement ne paie pas — il épuise.
                </li>
                <li>
                  La fréquence de publication a <strong>chuté de 55 % en cinq ans</strong>
                  — une correction massive après des années de production intenable.
                </li>
              </ul>
              <p>
                Et le constat qui résume tout : <strong>trois posts bien faits par
                semaine, par une personne reposée, battent systématiquement sept posts
                bâclés.</strong> Au-delà d&apos;un certain volume, qualité et fréquence
                s&apos;opposent. L&apos;éparpillement te fait franchir cette ligne tous les
                jours.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Partie 3 — La sociologie de l&apos;épuisement
              </h2>
              <p>
                Pourquoi cette injonction tient-elle malgré les dégâts ? Parce qu&apos;elle
                s&apos;appuie sur une <strong>culture de la hustle</strong> qui confond
                agitation et efficacité. Être partout <em>donne l&apos;impression</em> de
                travailler dur — c&apos;est visible, ça rassure. Pendant ce temps,
                l&apos;« anxiété de l&apos;algorithme » pousse à produire toujours plus,
                par peur de disparaître.
              </p>
              <p>
                Chaque plateforme entretient cette peur : elle te récompense si tu publies
                souvent, te punit si tu lèves le pied. Multiplie par cinq ou six, et tu
                travailles gratuitement pour cinq ou six maîtres à la fois, chacun exigeant
                ta présence quotidienne. Ce n&apos;est pas une stratégie, c&apos;est une{" "}
                <strong>course sans ligne d&apos;arrivée</strong>.
              </p>
              <p>
                Le piège final : en voulant être partout, tu ne construis de la mémoire{" "}
                <strong>nulle part</strong>. Personne ne te rattache clairement à un sujet,
                un lieu, une promesse. Tu es un visage flou croisé partout — jamais la
                référence qu&apos;on recommande.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Partie 4 — La nuance que personne ne fait (et qui change tout)
              </h2>
              <p>
                Attention : je ne dis pas « un seul canal, jamais plus ». Les données
                montrent aussi que le <strong>multicanal coordonné</strong> est puissant :
                des campagnes synchronisées sur plusieurs canaux peuvent générer{" "}
                <strong>un taux d&apos;achat bien supérieur</strong> et un{" "}
                <strong>coût d&apos;acquisition nettement plus bas</strong> qu&apos;un canal
                isolé.
              </p>
              <p>
                Mais regarde la différence fondamentale. « Être partout » version solo, à
                la main, c&apos;est de l&apos;<strong>éparpillement</strong> : même énergie
                divisée, incohérence, burnout. Le multicanal qui gagne, c&apos;est un{" "}
                <strong>système</strong> : quelques canaux <em>reliés</em>, un message
                cohérent décliné, une orchestration automatisée. L&apos;un te vide, l&apos;autre
                te démultiplie. Ce n&apos;est pas une question de nombre de canaux —
                c&apos;est une question de <strong>cohérence et d&apos;automatisation</strong>.
              </p>
              <p>
                D&apos;ailleurs, la vraie définition de l&apos;omniprésence n&apos;a jamais
                été « être partout ». C&apos;est <strong>« donner l&apos;impression
                d&apos;être partout »</strong> en saturant un canal où ton audience se
                concentre, jusqu&apos;à ce que ceux qui t&apos;y suivent aient le sentiment
                de te voir sans cesse.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Partie 5 — Ce qui marche vraiment
              </h2>
              <ul className="ml-5 list-decimal space-y-2 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li>
                  <strong>Choisis UN canal principal</strong> — là où sont tes clients
                  idéaux et où tu peux tenir dans la durée — et <strong>domine-le</strong>{" "}
                  avant d&apos;en ajouter.
                </li>
                <li>
                  <strong>Un format, un rythme tenable.</strong> Mieux vaut 2-3 contenus
                  excellents que tu tiens que 7 bâclés que tu abandonnes dans un mois.
                </li>
                <li>
                  <strong>Recycle, ne re-crée pas.</strong> Décline une idée forte en
                  plusieurs formats — mais à partir d&apos;un seul effort de création.
                </li>
                <li>
                  <strong>Étends par système, pas à la main.</strong> Quand ton canal
                  principal tourne, ajoute-en un deuxième <em>relié</em> et automatisé —
                  jamais un de plus à alimenter manuellement.
                </li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La conclusion qui dérange
              </h2>
              <p>
                « Il faut être partout » est l&apos;excuse parfaite pour ne jamais exceller
                nulle part — et le meilleur raccourci vers l&apos;épuisement. La vérité,
                c&apos;est que la visibilité ne vient pas de la dispersion, mais de la{" "}
                <strong>domination</strong> : être <em>la</em> référence quelque part, puis
                étendre intelligemment.
              </p>
              <p>
                Et cette extension ne se fait pas à la force du poignet sur dix plateformes
                — elle se fait par un <strong>système</strong> : quelques canaux cohérents,
                reliés, automatisés, qui donnent l&apos;impression que tu es partout alors
                que tu n&apos;as alimenté qu&apos;une machine. L&apos;éparpillement manuel
                perd. Le système focalisé gagne. C&apos;est exactement ce que fait Konig IA :
                une seule machine à clients, cohérente — pas une présence diluée sur tout.
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
                  <a className="underline hover:text-foreground" href="https://thecreatoreconomy.com/post/creator-burnout-78-percent-mental-health-2026" target="_blank" rel="noopener noreferrer nofollow">
                    The Creator Economy — 78 % of Creators Report Burnout (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://getspiced.ai/blog/choose-primary-growth-channel-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Spiced — How to Choose Your One Primary Growth Channel (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://beomniscient.com/blog/omnipresence/" target="_blank" rel="noopener noreferrer nofollow">
                    Omniscient Digital — Omnipresence (ce qu&apos;elle est vraiment)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://trenchlessmarketing.com/blog/one-channel-at-a-time-how-to-build-an-online-presence-without-burning-out/" target="_blank" rel="noopener noreferrer nofollow">
                    Trenchless Marketing — One Channel at a Time (sans burnout)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux une seule machine à clients cohérente — pas une présence diluée partout ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h, focalisée et reliée.
                Teste ton éligibilité à l&apos;Audit IA offert : 30 minutes pour un plan clair.
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
