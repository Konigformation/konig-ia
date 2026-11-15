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
  slug: "arrete-d-etre-disponible-24-7",
  title:
    "Arrête d'être disponible 24/7 : pourquoi la culture du « toujours joignable » sabote ton acquisition",
  description:
    "Pièce maîtresse — 1 indépendant sur 2 pense à tout arrêter à cause du « toujours dispo ». Pourquoi ta disponibilité permanente ne prouve rien, et comment un système répond mieux que toi.",
  date: "2026-11-13",
  dateLabel: "13 novembre 2026",
  readTime: "12 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/arrete-d-etre-disponible-24-7.svg",
  imageAlt:
    "Arrête d'être disponible 24/7 : un indépendant épuisé collé à son téléphone face à un système qui répond à sa place, nuit comprise — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "disponibilité permanente entrepreneur",
    "culture always-on",
    "toujours joignable business",
    "burnout indépendant",
    "répondre vite prospect",
    "speed to lead automatisé",
    "arrêter d'être disponible 24/7",
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
    q: "Mais répondre vite, ça marche vraiment, non ?",
    a: "Oui — et c'est justement le piège. Les données (MIT / InsideSales) montrent qu'un contact dans les 5 minutes multiplie fortement les chances de qualifier un lead. Le problème n'est pas la vitesse : c'est de croire que cette vitesse doit venir de TOI, en personne, à toute heure. Un système répond en 30 secondes à 3h du matin. Toi, non — et tu n'as pas à essayer.",
  },
  {
    q: "Si je ne réponds pas tout de suite, je ne perds pas le client ?",
    a: "Tu le perds si personne ne répond. Pas si c'est un système qui accuse réception, qualifie et propose un créneau à ta place. La disponibilité qui convertit, c'est celle de ton système — pas celle de ton pouce sur l'écran à 23h.",
  },
  {
    q: "Être très disponible, ce n'est pas un bon service client ?",
    a: "Un bon service, c'est une réponse rapide et utile — pas un humain épuisé joignable en permanence. Les clients veulent être aidés vite et bien ; ils ne vérifient pas si tu dormais. Automatiser la réactivité améliore le service ET te rend ta vie.",
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
        La vraie disponibilité qui vend, c&apos;est celle de ton système — pas la tienne.
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
                Téléphone sur la table de nuit. Notifications qui vibrent le dimanche. Ce
                réflexe de répondre « avant que le client aille voir ailleurs », même à 23h.
                On t&apos;a vendu la disponibilité permanente comme la preuve de ton sérieux.
                C&apos;est faux — et ça te coûte bien plus que ça ne te rapporte. Démontons-le.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La croyance que tout le monde répète
              </h2>
              <p>
                « Sois réactif. Réponds vite. Sois toujours joignable, sinon tu perds le
                client. » Le conseil est partout, et il a l&apos;air frappé au coin du bon
                sens. Sauf qu&apos;il glisse, l&apos;air de rien, d&apos;une vérité utile vers
                une injonction toxique : de « il faut répondre vite » à « <strong>je</strong>{" "}
                dois être disponible tout le temps ». Et c&apos;est cette deuxième phrase qui
                ruine les indépendants.
              </p>
              <p>
                Le glissement est sournois parce qu&apos;il s&apos;appuie sur une donnée
                réelle. Oui, la vitesse de réponse compte : contacter un lead dans les 5
                minutes peut multiplier par ~21 les chances de le qualifier (MIT /
                InsideSales). Mais de cette vérité, on tire la mauvaise conclusion. La bonne,
                ce n&apos;est pas « reste scotché à ton téléphone ». C&apos;est « fais en
                sorte qu&apos;une réponse rapide parte, que tu dormes ou non ».
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que ça te coûte vraiment (les chiffres)
              </h2>
              <p>
                La disponibilité permanente n&apos;est pas un petit sacrifice héroïque :
                c&apos;est un facteur d&apos;effondrement. Dans une enquête britannique de
                Markel Direct auprès d&apos;indépendants, <strong>plus de la moitié</strong>{" "}
                déclarent des symptômes de burnout, et <strong>près d&apos;un sur deux</strong>{" "}
                a déjà songé à <strong>tout arrêter</strong> — en grande partie à cause de
                cette culture « always-on ». Des compilations sur le burnout des fondateurs
                avancent des proportions encore plus élevées (à prendre comme des ordres de
                grandeur, les sources étant hétérogènes), et une part notable des actifs se
                disent épuisés « toujours ou très souvent ».
              </p>
              <p>
                Traduction business : un indépendant cramé prospecte moins, vend moins mal,
                crée du contenu en pointillé et finit par saboter l&apos;acquisition
                même qu&apos;il croyait protéger en restant joignable. La disponibilité
                24/7 ne sauve pas ton business — elle l&apos;use de l&apos;intérieur.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La psychologie : pourquoi tu n&apos;arrives pas à lâcher le téléphone
              </h2>
              <p>
                Cette injonction tient si bien parce qu&apos;elle appuie sur des ressorts
                psychologiques puissants.
              </p>
              <p>
                <strong>L&apos;aversion à la perte.</strong> La douleur de « rater un client »
                pèse, dans notre cerveau, bien plus lourd que le plaisir d&apos;une soirée
                tranquille. Alors on reste en alerte, pour ne pas perdre — même quand le coût
                cumulé de cette vigilance dépasse de loin la vente occasionnelle qu&apos;on
                sauve.
              </p>
              <p>
                <strong>Le « busy = important ».</strong> Être tout le temps sollicité,
                débordé, joignable, procure un sentiment de valeur. On confond activité et
                productivité, agitation et importance. Répondre à 23h donne l&apos;illusion
                d&apos;être indispensable. En réalité, c&apos;est souvent le signe qu&apos;on
                n&apos;a pas construit de système.
              </p>
              <p>
                <strong>La peur du jugement.</strong> « Si je ne réponds pas vite, il va me
                croire amateur / pas sérieux. » On projette sur le client une exigence
                qu&apos;il n&apos;a pas forcément : lui veut une réponse claire et rapide, pas
                la preuve que tu as sacrifié ta nuit. Le service perçu dépend de la qualité et
                du délai de la réponse — pas de ton épuisement.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La racine sociale : à qui profite le culte du « toujours dispo »
              </h2>
              <p>
                Ce réflexe n&apos;est pas qu&apos;une faiblesse individuelle : c&apos;est un
                air du temps, soigneusement entretenu.
              </p>
              <p>
                <strong>La hustle culture.</strong> Pendant dix ans, les réseaux ont glorifié
                le « grind » : debout à 5h, répondre à tout, ne jamais s&apos;arrêter.
                L&apos;épuisement est devenu un badge d&apos;honneur, mis en scène par des
                influenceurs… qui vendent justement des formations sur la productivité. Le
                message « sois toujours dispo » profite d&apos;abord à ceux qui le diffusent.
              </p>
              <p>
                <strong>La norme de l&apos;immédiat.</strong> Messageries, « vu à 22h47 »,
                accusés de lecture : la technologie a fabriqué l&apos;attente d&apos;une
                réponse instantanée, puis l&apos;a transformée en obligation morale. On se
                sent coupable de répondre « en retard » à un message qui pouvait très bien
                attendre demain.
              </p>
              <p>
                <strong>L&apos;économie du freelance.</strong> Quand on est seul maître à
                bord, sans filet, chaque client ressemble à une question de survie. Cette
                précarité pousse à sur-réagir, à tout accepter, à être joignable en
                permanence — un terrain parfait pour que l&apos;injonction prospère.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La vérité qui dérange : le système bat l&apos;humain sur la réactivité
              </h2>
              <p>
                Voici le retournement. Sur le terrain même où tu crois devoir te sacrifier —
                la vitesse — <strong>tu perds contre un système</strong>. Un humain, aussi
                dévoué soit-il, dort, mange, conduit, vit. Il répondra parfois en 2 minutes,
                souvent en 2 heures, jamais la nuit. Un système, lui, répond en 30 secondes,
                à toute heure, chaque fois, sans fatigue ni mauvaise humeur.
              </p>
              <p>
                Autrement dit : la disponibilité 24/7 que tu t&apos;imposes est <em>à la fois</em>{" "}
                destructrice pour toi <em>et</em> inférieure à ce qu&apos;une automatisation
                fait les doigts dans le nez. Tu t&apos;épuises pour un résultat qu&apos;un
                système délivre mieux. C&apos;est le pire des deux mondes.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qu&apos;il faut faire à la place
              </h2>
              <p>
                <strong>1. Sépare « réactivité » et « toi ».</strong> La réactivité est un
                job — confie-le à un système. Un accusé de réception immédiat, une
                qualification automatique, une proposition de créneau : le prospect est pris
                en charge en quelques secondes, sans que tu interviennes. (C&apos;est
                exactement l&apos;objet d&apos;un{" "}
                <Link
                  href="/blog/systeme-prise-rdv-qualifiee-automatisee"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système de prise de RDV automatisée
                </Link>
                .)
              </p>
              <p>
                <strong>2. Définis des horaires de contact humain.</strong> Le système
                répond 24/7 ; toi, tu traites les échanges qui demandent vraiment un humain
                sur des plages définies. Le client a une réponse tout de suite ; ta vraie
                attention arrive quand elle est utile, pas quand elle te détruit.
              </p>
              <p>
                <strong>3. Mesure les RDV, pas ton temps de veille.</strong> La bonne
                métrique n&apos;est pas « à quelle vitesse j&apos;ai répondu personnellement »,
                mais « combien de bons rendez-vous mon système a générés ». Le reste, c&apos;est
                de la culpabilité déguisée en professionnalisme.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Où l&apos;IA change tout
              </h2>
              <p>
                Il y a cinq ans, « automatiser sa réactivité » voulait dire des réponses
                robotiques qui sentaient le script à plein nez. Plus aujourd&apos;hui. Une IA
                bien configurée accueille, qualifie et oriente un prospect avec un ton
                naturel et personnalisé — puis te passe le relais seulement quand ça compte.
                Tu gagnes la vitesse <strong>et</strong> ta vie. C&apos;est tout le principe
                d&apos;un{" "}
                <Link
                  href="/blog/systeme-machine-a-clients-3-leviers"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système d&apos;acquisition complet
                </Link>{" "}
                : il travaille quand tu dors, pour que ton business tourne sans te broyer.
              </p>
              <p>
                La disponibilité permanente n&apos;est pas une vertu. C&apos;est l&apos;aveu
                d&apos;un système qui manque. Le vrai professionnalisme, ce n&apos;est pas
                d&apos;être joignable à 3h du matin — c&apos;est d&apos;avoir bâti ce qui
                répond à ta place pendant que tu dors.
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
                  <a className="underline hover:text-foreground" href="https://startups.co.uk/news/self-employed-always-on-culture/" target="_blank" rel="noopener noreferrer nofollow">
                    Startups.co.uk — Over half of sole traders consider quitting due to “always on” culture (Markel Direct)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.leadsigma.com/resources/blog/five-minute-lead-response-stat" target="_blank" rel="noopener noreferrer nofollow">
                    LeadSigma — The 5-Minute Lead Response Rule (MIT / InsideSales)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.entrepreneur.com/growing-a-business/1-in-3-entrepreneurs-burn-out-the-ones-who-dont-do/503988" target="_blank" rel="noopener noreferrer nofollow">
                    Entrepreneur — 1 in 3 Entrepreneurs Burn Out
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Et si c&apos;était ton système, pas toi, qui répondait 24/7 ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h. Elle capte, qualifie et
                répond à ta place, nuit comprise. Teste ton éligibilité à l&apos;Audit IA
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
