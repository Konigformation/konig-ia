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
  slug: "arreter-poster-tous-les-jours-linkedin",
  title:
    "Arrête de poster tous les jours sur LinkedIn : ça tue ton acquisition (la preuve chiffrée)",
  description:
    "Contre-tendance — « Poste tous les jours » est le mauvais objectif. Ce que disent vraiment les données LinkedIn 2026, la psychologie du mythe, et ce qui ramène des clients à la place.",
  date: "2026-08-04",
  dateLabel: "4 août 2026",
  readTime: "11 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/arreter-poster-tous-les-jours-linkedin.svg",
  imageAlt:
    "Arrête de poster tous les jours sur LinkedIn : un calendrier saturé de posts quotidiens face à un seul post de qualité qui capte l'attention — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "poster tous les jours sur LinkedIn",
    "algorithme LinkedIn 2026",
    "dwell time LinkedIn",
    "acquisition clients LinkedIn",
    "fréquence de publication LinkedIn",
    "portée LinkedIn 2026",
    "stratégie de contenu LinkedIn",
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
    q: "Faut-il vraiment arrêter de publier sur LinkedIn ?",
    a: "Non. Il faut arrêter de prendre « poster tous les jours » comme objectif. Publier reste utile — mais 2 à 3 posts par semaine conçus pour être lus jusqu'au bout et sauvegardés battent 7 posts tièdes, parce que l'algorithme 2026 récompense le temps de lecture (dwell time), pas la fréquence brute.",
  },
  {
    q: "Pourquoi tant de coachs conseillent-ils de poster chaque jour ?",
    a: "Trois raisons : le biais de survivance (on ne te montre que ceux qui ont percé en postant beaucoup), le mimétisme (un conseil répété paraît vrai), et des incitations cachées — plus tu produis, plus tu as besoin de leurs templates, outils et communautés d'engagement. Personne dans cette chaîne n'est payé pour te faire gagner du temps.",
  },
  {
    q: "Combien de fois faut-il publier alors ?",
    a: "Vise 2 à 3 posts par semaine à forte valeur, écrits pour le « save » plutôt que pour le like, et réinvestis le temps gagné dans la prospection directe et les relances — c'est là que se signent réellement les rendez-vous.",
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
        Sept posts tièdes barrés d&apos;un côté ; un post gardé de l&apos;autre.
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
                « Pour percer sur LinkedIn, poste tous les jours. » Tu l&apos;as lue
                sous chaque post de coach, dans chaque formation à 47 €, dans chaque
                thread « comment j&apos;ai fait 100k followers ». Tu culpabilises quand
                tu sautes un jour. Et si cette injonction était, pour la plupart des
                indépendants, un <strong>piège à temps qui n&apos;améliore pas ton
                acquisition</strong> — les données 2026 à l&apos;appui ?
              </p>
              <p>
                Attention : je ne dis pas « ne publie jamais ». Je dis que{" "}
                <strong>« poster tous les jours » est le mauvais objectif</strong>, et
                qu&apos;il te fait optimiser la mauvaise métrique. Décortiquons.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Partie 1 — Ce que tout le monde croit (et pourquoi)
              </h2>
              <p>
                <strong>Ce que ta cible fait aujourd&apos;hui :</strong> elle se force
                à publier quotidiennement, souvent du contenu tiède, en pensant que
                fréquence = visibilité = clients. <strong>Pourquoi elle le croit —
                trois mécanismes :</strong>
              </p>
              <p>
                <strong>1. Le biais de survivance.</strong> On te montre les créateurs
                qui postent tous les jours <em>et</em> qui ont percé. On ne te montre
                jamais les 10 000 qui postent tous les jours dans le vide. Tu conclus
                « poster tous les jours → succès », alors que tu observes un échantillon
                trié d&apos;avance.
              </p>
              <p>
                <strong>2. Le mimétisme et la preuve sociale.</strong> Tout le monde le
                répète, donc ça <em>doit</em> être vrai. Sauf qu&apos;en marketing, un
                conseil répété mille fois n&apos;est pas validé — il est juste{" "}
                <strong>viral</strong>. La popularité d&apos;un conseil ne dit rien de
                son efficacité.
              </p>
              <p>
                <strong>3. Les incitations cachées de ceux qui le propagent.</strong>{" "}
                Réfléchis à qui profite l&apos;injonction « poste tous les jours ». Les
                coachs LinkedIn : plus tu produis, plus tu as besoin de leurs templates,
                de leurs outils de rédaction, de leurs pods d&apos;engagement. Les
                plateformes elles-mêmes : plus tu publies, plus elles ont de contenu
                gratuit à monétiser. <strong>Personne dans cette chaîne n&apos;est payé
                pour te faire gagner du temps.</strong> Toi si.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Partie 2 — La faille dans le raisonnement
              </h2>
              <p>
                L&apos;erreur est un <strong>glissement de métrique</strong>. « Poster
                tous les jours » optimise le <strong>volume de portée</strong>. Or ton
                objectif, ce n&apos;est pas la portée. C&apos;est <strong>le client.</strong>{" "}
                Entre les deux, il y a un gouffre. Et c&apos;est là que les données 2026
                deviennent intéressantes — car elles se contredisent en apparence.
              </p>
              <p>
                <strong>Argument « pro-volume » (à charge contre ma thèse, je te le
                donne quand même) :</strong> l&apos;analyse Buffer sur 2 millions+ de
                posts montre que plus tu publies, plus tu accumules d&apos;impressions
                totales — jusqu&apos;à +16 946 impressions par post au-delà de 11
                posts/semaine. Vrai. Mais voici ce que ce chiffre cache :
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  Ce sont des <strong>impressions</strong>, pas des conversations, pas
                  des rendez-vous, pas des clients. Personne n&apos;a jamais payé une
                  facture en vues.
                </li>
                <li>
                  En 2026, LinkedIn a basculé du <strong>« Relationship Graph » vers un
                  « Interest Graph »</strong> : il ne pousse plus ton post à ton réseau
                  par défaut, il le pousse aux gens <em>intéressés par le sujet</em>,
                  jugé sur la qualité. La portée moyenne a <strong>baissé</strong>, et
                  le signal n°1 est devenu le <strong>dwell time</strong> — le temps
                  réel passé à lire ton post.
                </li>
                <li>
                  Conséquence directe : <strong>poster tous les jours à 2 %
                  d&apos;engagement performe moins bien que poster 3×/semaine à 8 %.</strong>{" "}
                  La densité d&apos;engagement bat la fréquence brute.
                </li>
                <li>
                  Le kicker : <strong>un « save » génère environ 5× la portée d&apos;un
                  like et 2× celle d&apos;un commentaire.</strong> Ce qui déclenche un
                  save, ce n&apos;est pas un post quotidien de remplissage — c&apos;est
                  un post si utile qu&apos;on le garde. On ne produit pas ça sept fois
                  par semaine à l&apos;arrache.
                </li>
              </ul>
              <p>
                Le raisonnement « poste tous les jours » suppose que chaque post
                supplémentaire est gratuit. Il ne l&apos;est pas : chaque post médiocre{" "}
                <strong>dilue ta moyenne de qualité</strong>, et en régime Interest
                Graph, c&apos;est ta qualité moyenne qui décide de ta distribution
                future. Tu ne montes pas l&apos;escalier plus vite en ajoutant des
                marches pourries — tu le fragilises.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Partie 3 — Le vrai coût que personne ne calcule
              </h2>
              <p>
                Mettons des chiffres. Un post correct te prend, honnêtement, 45 à 60
                minutes (idée, rédaction, visuel, réponses aux commentaires). Sept jours
                par semaine, c&apos;est <strong>5 à 7 heures hebdomadaires</strong>
                englouties. Sur un mois : l&apos;équivalent de <strong>3 jours de
                travail complets.</strong>
              </p>
              <p>
                Question à un million : ces 3 jours, tu les passes à <em>produire du
                contenu</em>… ou à <em>signer des clients</em> ? Parce que pendant que
                tu tournes un carrousel de plus, ta prospection dort, ton tunnel fuit,
                tes relances ne partent pas.
              </p>
              <p>
                Le pire biais n&apos;est pas dans l&apos;algorithme. Il est dans ta tête :
                <strong> poster est confortable.</strong> Ça ressemble à du travail, ça
                produit de la dopamine (les likes), et surtout ça t&apos;évite le truc
                inconfortable qui ramène vraiment des clients — la prospection ciblée et
                la relance. Poster tous les jours est souvent une{" "}
                <strong>procrastination déguisée en productivité.</strong>
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Partie 4 — Ce qui marche vraiment à la place
              </h2>
              <p>Je ne te laisse pas sans plan. Le contre-modèle, étayé par les mêmes données :</p>
              <ul className="ml-5 list-decimal space-y-2 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li>
                  <strong>Moins de posts, plus de dwell time.</strong> Vise 2 à 3 posts
                  par semaine, chacun conçu pour être lu jusqu&apos;au bout et
                  sauvegardé. Une idée forte, un exemple concret, une prise de position.
                </li>
                <li>
                  <strong>Écris pour le save, pas pour le like.</strong> À chaque post :
                  « quelqu&apos;un le garderait-il pour le relire ? » Si non, ne le
                  publie pas. Un post gardé vaut cinq posts likés.
                </li>
                <li>
                  <strong>Mets chaque post au service d&apos;un système, pas de ton
                  ego.</strong> L&apos;attention ne devient client que si elle est
                  capturée et relancée. Le contenu sans prospection ni tunnel derrière,
                  c&apos;est de l&apos;eau versée dans un seau percé.
                </li>
                <li>
                  <strong>Réinvestis les 3 jours/mois gagnés dans l&apos;acquisition
                  directe.</strong> Séquences multicanales, qualification par signal,
                  relances — c&apos;est là que se signent les rendez-vous (voir notre{" "}
                  <Link
                    href="/blog/systeme-prospection-multicanale-automatisee"
                    className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                  >
                    système de prospection multicanale
                  </Link>
                  ).
                </li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La conclusion qui dérange
              </h2>
              <p>
                « Poste tous les jours » n&apos;est pas <em>faux</em> pour tout le monde
                — un média, une marque avec une équipe dédiée peut y trouver son compte.
                Mais pour <strong>toi</strong>, indépendant ou dirigeant qui veut des
                clients et pas des trophées de vanité, c&apos;est un conseil qui optimise
                la mauvaise chose, propagé par des gens qui n&apos;ont pas à vivre avec
                la facture de ton temps.
              </p>
              <p>
                La vérité inconfortable : <strong>le contenu n&apos;est qu&apos;un tiers
                de l&apos;équation.</strong> Publier plus ne répare pas une prospection
                absente ni un tunnel qui fuit. Ce qui ramène des clients, ce n&apos;est
                pas le rythme héroïque de tes posts — c&apos;est un <strong>système</strong>{" "}
                où contenu, prospection et conversion travaillent ensemble, en
                automatique, pendant que tu dors. C&apos;est exactement là que le
                bricolage à la mode s&apos;arrête et qu&apos;un système pensé prend le
                relais.
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
                  <a className="underline hover:text-foreground" href="https://buffer.com/resources/how-often-to-post-on-linkedin/" target="_blank" rel="noopener noreferrer nofollow">
                    Buffer — How often to post on LinkedIn (analyse de 2M+ de posts)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.teract.ai/resources/linkedin-algorithm-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Teract.ai — LinkedIn Algorithm 2026 (deep dive)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://growleads.io/blog/linkedin-algorithm-2026-text-vs-video-reach/" target="_blank" rel="noopener noreferrer nofollow">
                    Growleads — L&apos;algorithme LinkedIn 2026 et le dwell time
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Arrête de courir après la régularité. Installe un vrai système.
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
