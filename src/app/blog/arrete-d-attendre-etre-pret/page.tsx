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
  slug: "arrete-d-attendre-etre-pret",
  title:
    "Arrête d'attendre d'être prêt : pourquoi la perfection tue ton acquisition (et ce qui marche à la place)",
  description:
    "Pièce maîtresse — Tu repousses ton lancement pour « être prêt ». C'est le piège. Pourquoi le perfectionnisme sabote ton acquisition, ce qu'en dit la psychologie, et la méthode du lancement imparfait.",
  date: "2026-11-04",
  dateLabel: "4 novembre 2026",
  readTime: "12 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/arrete-d-attendre-etre-pret.svg",
  imageAlt:
    "Arrête d'attendre d'être prêt : un projet poli à l'infini qui ne sort jamais face à un projet lancé imparfait qui grandit — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "arrêter d'attendre d'être prêt",
    "perfectionnisme entrepreneur",
    "lancer imparfait",
    "peur de se lancer",
    "syndrome de l'imposteur acquisition",
    "procrastination lancement",
    "passer à l'action business",
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
    q: "« Lancer imparfait », ce n'est pas bâcler ?",
    a: "Non. Bâcler, c'est livrer en dessous du minimum utile. Lancer imparfait, c'est livrer dès que c'est utile, puis améliorer au contact du réel. La différence : l'un ignore le client, l'autre apprend de lui. Le vrai gaspillage, ce n'est pas l'imperfection — c'est de polir pendant des mois une chose que personne n'a encore voulue.",
  },
  {
    q: "Comment savoir si je suis « assez prêt » pour lancer ?",
    a: "Tu ne le sauras jamais à 100 %, et c'est normal : la clarté vient APRÈS l'action, pas avant. Le bon seuil : ton offre résout un vrai problème pour une vraie personne, et quelqu'un peut déjà dire oui et payer. Si c'est le cas, tu es prêt. Le reste se règle en marchant.",
  },
  {
    q: "Et si je me lance et que je me plante ?",
    a: "Un lancement raté te donne en quelques semaines ce que des mois de préparation ne te donneront jamais : des retours réels. Tu ajustes et tu repars. Le seul vrai échec, c'est de ne jamais lancer — et c'est le regret le plus cité par ceux qui ont trop attendu.",
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
        Le projet « parfait » ne sort jamais. Le projet lancé, lui, grandit.
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
                Tu attends d&apos;avoir le bon logo, le site nickel, l&apos;offre
                peaufinée, le « bon moment ». Pendant ce temps, personne ne t&apos;achète
                rien — parce que personne ne sait que tu existes. Le perfectionnisme n&apos;est
                pas une qualité professionnelle : c&apos;est le frein le plus coûteux de
                ton acquisition. Démontons-le.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La croyance que tout le monde répète
              </h2>
              <p>
                « Je me lancerai quand ce sera prêt. » Ça sonne responsable, sérieux,
                raisonnable. On te félicite même pour ça : « prends ton temps, fais les
                choses bien ». Sauf que derrière ce vernis de rigueur se cache souvent
                autre chose — la peur. Peur du jugement, peur de l&apos;échec, peur de
                découvrir que l&apos;offre que tu couves depuis six mois n&apos;intéresse,
                en fait, personne. « Être prêt » devient l&apos;excuse socialement
                acceptable pour ne jamais s&apos;exposer.
              </p>
              <p>
                Et le piège est parfait : comme tu ne lances pas, tu ne reçois jamais le
                démenti. Tu restes dans le confort de l&apos;espoir — « ça va marcher,
                quand ce sera prêt » — sans jamais le confronter au réel. C&apos;est
                exactement ce qui rend cette croyance si tenace : elle se protège
                elle-même.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que la psychologie dit vraiment du perfectionnisme
              </h2>
              <p>
                Les chercheurs distinguent deux choses qu&apos;on confond tout le temps :
                la <strong>recherche d&apos;excellence</strong> (sain : viser haut, aimer
                le travail bien fait) et le <strong>perfectionnisme</strong> (toxique :
                une peur de ne jamais être à la hauteur, déguisée en exigence). Le second
                n&apos;améliore pas la qualité — il paralyse. Il transforme chaque
                décision en menace : tant que je n&apos;ai pas publié, je ne peux pas être
                jugé.
              </p>
              <p>
                C&apos;est ce que les psychologues appellent l&apos;
                <strong>évitement</strong> : repousser l&apos;action réduit l&apos;anxiété
                à court terme (ouf, je n&apos;ai pas à affronter ça aujourd&apos;hui), ce
                qui renforce le comportement… et nourrit l&apos;angoisse à long terme.
                Plus tu attends, plus l&apos;enjeu grossit dans ta tête, plus le lancement
                devient terrifiant. Le perfectionnisme n&apos;est pas le remède à la peur :
                il en est le carburant.
              </p>
              <p>
                S&apos;ajoute le <strong>syndrome de l&apos;imposteur</strong> : cette
                petite voix qui murmure « tu n&apos;es pas encore légitime ». Elle te
                pousse à accumuler formations, certifications et préparatifs avant
                d&apos;oser — une légitimité qui, par définition, ne vient jamais de la
                préparation, mais de l&apos;expérience. Autrement dit : de l&apos;action
                que tu refuses de faire.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La racine sociale : pourquoi on t&apos;a appris à attendre
              </h2>
              <p>
                Ce réflexe n&apos;est pas qu&apos;individuel, il est <strong>culturel</strong>.
                À l&apos;école, pendant quinze ans, on t&apos;a appris que l&apos;erreur se
                sanctionne : une faute = des points en moins. Le message implicite : il
                vaut mieux ne pas répondre que répondre faux. On forme des générations à
                la prudence, pas à l&apos;expérimentation.
              </p>
              <p>
                Ajoute l&apos;effet des réseaux : tu ne vois que les lancements
                réussis, léchés, applaudis. Jamais les versions 1 bancales qui les ont
                précédés. Tu compares ton brouillon aux produits finis des autres — et tu
                conclus, logiquement, que tu n&apos;es « pas encore prêt ». C&apos;est une
                illusion d&apos;optique. Tout ce que tu admires a commencé moche.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le coût réel : ce que « plus tard » te prend
              </h2>
              <p>
                Mettons des chiffres sur l&apos;abstrait. Dans une enquête Shopify/Harris,
                une large part des aspirants entrepreneurs reconnaissent repousser leur
                lancement faute de se sentir « prêts » — et une proportion comparable de
                ceux qui ont trop attendu <strong>regrettent ce retard</strong>. Des
                études sur le financement et le démarrage d&apos;activité montrent le même
                schéma : un délai médian de plusieurs mois entre « l&apos;idée est prête »
                et « j&apos;ai lancé », souvent justifié par l&apos;attente d&apos;un
                hypothétique « meilleur moment ».
              </p>
              <p>
                Pendant ce délai, trois choses se produisent, toutes contre toi :
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li>
                  <strong>Le marché bouge.</strong> Un concurrent moins talentueux mais
                  plus rapide occupe la place que tu polissais.
                </li>
                <li>
                  <strong>Tu n&apos;apprends rien.</strong> Zéro client = zéro retour =
                  aucune donnée pour t&apos;améliorer. Tu optimises à l&apos;aveugle.
                </li>
                <li>
                  <strong>Ta motivation s&apos;érode.</strong> Un projet qui ne sort pas
                  finit par mourir d&apos;ennui, pas d&apos;échec.
                </li>
              </ul>
              <p>
                La vérité qui dérange : <strong>l&apos;inaction est un choix, pas une
                pause.</strong> Chaque semaine « à peaufiner » est une semaine où tu as
                décidé de ne pas être sur le marché.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi l&apos;imparfait gagne (presque) toujours
              </h2>
              <p>
                Le lancement imparfait a un super-pouvoir que la perfection n&apos;aura
                jamais : il te met en <strong>boucle d&apos;apprentissage</strong>. Tu
                sors une version simple, le réel te répond, tu ajustes. Trois cycles de
                ça valent plus que six mois de réflexion en chambre. Les entreprises qui
                durent ne sont pas celles qui ont eu la meilleure idée de départ — ce sont
                celles qui ont itéré le plus vite au contact de leurs clients.
              </p>
              <p>
                Et sur le plan psychologique, l&apos;action est le seul antidote connu à
                la peur de l&apos;action. Chaque petit lancement réussi (même modeste)
                reprogramme ton cerveau : « ok, je l&apos;ai fait, je ne suis pas mort ».
                La confiance ne précède pas l&apos;action — elle en découle.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La méthode : le lancement imparfait en 4 pas
              </h2>
              <p>
                <strong>1. Définis ton « assez bon pour aujourd&apos;hui ».</strong> Pas
                la version rêvée : la plus petite version qui résout déjà un vrai problème
                pour une vraie personne. Une page simple, une offre claire, un moyen de
                dire oui. C&apos;est tout.
              </p>
              <p>
                <strong>2. Fixe une date, publique.</strong> Annonce ton lancement à
                quelqu&apos;un — un client, un pair, ta liste. La contrainte externe fait
                ce que ta volonté seule ne fait pas : elle t&apos;empêche de repousser
                encore.
              </p>
              <p>
                <strong>3. Lance, puis écoute.</strong> Mets-le dehors. Observe : qui
                clique, qui achète, qui objecte, qui reste silencieux. Ces retours valent
                de l&apos;or — ils remplacent toutes tes suppositions.
              </p>
              <p>
                <strong>4. Itère vite.</strong> Améliore sur la base du réel, pas de tes
                craintes. Tu polis maintenant ce que les clients t&apos;ont désigné, pas
                ce que ton angoisse imaginait.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Où l&apos;IA change la donne
              </h2>
              <p>
                La bonne nouvelle : « lancer imparfait » n&apos;a jamais été aussi peu
                risqué. Ce qui te prenait des semaines — bâtir une présence, écrire tes
                contenus, lancer ta prospection, monter un tunnel — se met aujourd&apos;hui
                debout en quelques jours. L&apos;excuse « je n&apos;ai pas le temps de tout
                préparer » ne tient plus : tu peux être présent sur le marché{" "}
                <strong>cette semaine</strong>, puis améliorer en marchant. C&apos;est tout
                l&apos;intérêt d&apos;un{" "}
                <Link
                  href="/blog/systeme-machine-a-clients-3-leviers"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système d&apos;acquisition complet
                </Link>{" "}
                : il transforme « un jour, quand je serai prêt » en « c&apos;est en ligne,
                j&apos;ajuste ».
              </p>
              <p>
                La perfection n&apos;est pas ton objectif. C&apos;est ta planque. Le vrai
                courage, ce n&apos;est pas d&apos;attendre d&apos;être prêt — c&apos;est de
                partir en sachant que tu ne le seras jamais tout à fait, et de grandir en
                route.
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
                  <a className="underline hover:text-foreground" href="https://www.shopify.com/blog/entrepreneurship-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Shopify / Harris — Entrepreneurship & readiness statistics (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.bls.gov/bdm/entrepreneurship/entrepreneurship.htm" target="_blank" rel="noopener noreferrer nofollow">
                    U.S. Bureau of Labor Statistics — Survival of new businesses
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.apa.org/topics/anxiety/avoidance-coping" target="_blank" rel="noopener noreferrer nofollow">
                    American Psychological Association — Avoidance & anxiety
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Et si « prêt » devenait « en ligne cette semaine » ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h. De quoi lancer vite,
                propre, et ajuster ensuite. Teste ton éligibilité à l&apos;Audit IA
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
