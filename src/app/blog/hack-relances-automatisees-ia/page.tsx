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
  slug: "hack-relances-automatisees-ia",
  title:
    "Le hack des relances automatisées : la séquence IA qui récupère les ventes que tu laisses filer",
  description:
    "Près d'un commercial sur deux ne relance jamais une 2e fois. C'est là que partent tes ventes. La séquence de relance en 5 messages (et les prompts) pour les récupérer avec l'IA.",
  date: "2026-11-12",
  dateLabel: "12 novembre 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-relances-automatisees-ia.svg",
  imageAlt:
    "Le hack des relances automatisées : une séquence de messages de suivi qui récupère les ventes que la plupart abandonnent après un seul essai — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "relance commerciale automatisée",
    "séquence de relance IA",
    "follow-up automatisé",
    "relancer un prospect",
    "message de relance prospect",
    "relance email IA",
    "convertir prospects dormants",
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
    q: "Combien de fois faut-il relancer un prospect ?",
    a: "Les chiffres exacts varient selon les études, mais la tendance est claire et constante : une grande partie des ventes se concluent après plusieurs relances, pas au premier contact. Pourtant une part énorme des commerciaux s'arrêtent après un seul message. Une séquence de 4 à 6 relances espacées est un bon point de départ.",
  },
  {
    q: "Relancer, ce n'est pas harceler ?",
    a: "Non — si chaque relance apporte quelque chose. Le harcèlement, c'est « alors, tu as réfléchi ? » répété cinq fois. Une bonne relance ajoute de la valeur à chaque fois : une ressource, une preuve, une réponse à une objection. Tu n'insistes pas, tu aides — et tu restes présent au moment où le prospect est enfin prêt.",
  },
  {
    q: "Pourquoi automatiser plutôt que relancer à la main ?",
    a: "Parce que la raison n°1 pour laquelle on ne relance pas, c'est qu'on oublie. Une séquence automatisée relance pour toi, au bon moment, sans que tu aies à y penser — tout en gardant un ton personnalisé grâce à l'IA. Tu ne perds plus une vente par simple oubli.",
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
        La plupart des ventes ne se jouent pas au premier « non » — mais au 4e message.
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
                Tu passes un temps fou à générer des prospects… puis tu en perds la moitié
                faute d&apos;un simple message de suivi. La vente n&apos;est presque jamais
                dans le premier contact. Elle est dans la relance — celle que la plupart ne
                font jamais. Voici le hack pour la systématiser avec l&apos;IA.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le trou dans ton tunnel que personne ne regarde
              </h2>
              <p>
                Un prospect qui ne répond pas n&apos;est pas un « non ». C&apos;est le plus
                souvent un « pas maintenant » : il est occupé, il a oublié, il hésite. Et
                pourtant, une part considérable des commerciaux et indépendants{" "}
                <strong>abandonnent après un seul message</strong>. Résultat : tu laisses
                sur la table des ventes déjà à moitié gagnées — pas par manque de leads,
                mais par manque de suivi.
              </p>
              <p>
                La bonne nouvelle : c&apos;est le levier le plus facile à corriger. Tu
                n&apos;as pas besoin de plus de prospects. Tu as besoin de mieux relancer
                ceux que tu as déjà.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La règle d&apos;or : chaque relance apporte de la valeur
              </h2>
              <p>
                Le piège, c&apos;est la relance « vide » : <em>« Bonjour, je me permets de
                revenir vers vous… »</em>. Elle ne fait que quémander une réponse. Une bonne
                relance <strong>donne</strong> avant de demander : une info utile, une
                preuve, une réponse à l&apos;objection probable. Le prospect ne se sent pas
                harcelé — il se sent aidé. Et le jour où il est prêt, c&apos;est toi
                qu&apos;il a en tête.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La séquence de relance en 5 messages
              </h2>
              <ul className="ml-5 list-decimal space-y-2 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li>
                  <strong>J+0 — Le premier contact.</strong> Clair, personnalisé, une seule
                  action demandée.
                </li>
                <li>
                  <strong>J+2 — La relance « valeur ».</strong> Tu reviens avec une ressource
                  utile (un exemple, un cas, un conseil), sans pression.
                </li>
                <li>
                  <strong>J+5 — La preuve / l&apos;objection.</strong> Un témoignage, un
                  résultat chiffré, ou la réponse à l&apos;hésitation la plus fréquente.
                </li>
                <li>
                  <strong>J+9 — Le rappel bénéfice.</strong> Tu reformules ce que le prospect
                  a à gagner, et tu facilites le « oui » (créneau, lien, étape suivante).
                </li>
                <li>
                  <strong>J+14 — Le « break-up ».</strong> « Je n&apos;insiste plus, dis-moi
                  juste si ce n&apos;est pas le bon moment. » Étonnamment, c&apos;est souvent
                  ce message qui débloque une réponse.
                </li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Les prompts pour la générer avec l&apos;IA
              </h2>
              <p>
                Tu n&apos;écris pas 5 messages à la main pour chaque prospect. Tu fais écrire
                la trame une fois, puis tu laisses l&apos;IA personnaliser.
              </p>
              <p className="rounded-xl border border-border bg-muted/40 p-4 text-[15px] italic">
                « Tu es expert en copywriting de prospection B2B. Rédige une séquence de 5
                relances (J+0, J+2, J+5, J+9, J+14) pour [mon offre] destinée à [ma cible].
                Chaque message : court (4-6 lignes), ton tutoiement chaleureux, une seule
                action demandée, et il apporte une valeur concrète (ressource, preuve ou
                réponse à objection). Donne-moi aussi 2 variantes d&apos;objet par email. »
              </p>
              <p>
                Puis, pour personnaliser à grande échelle :
              </p>
              <p className="rounded-xl border border-border bg-muted/40 p-4 text-[15px] italic">
                « Voici ma séquence type et les infos sur ce prospect : [nom, entreprise,
                contexte, échange précédent]. Adapte chaque message à sa situation en gardant
                la structure et le ton. »
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le hack devient un système
              </h2>
              <p>
                Écrire de bonnes relances, c&apos;est 20 % du travail. Les 80 % restants,
                c&apos;est <strong>les envoyer vraiment</strong>, au bon moment, sans oublier
                personne. C&apos;est là qu&apos;un système prend le relais : il déclenche
                chaque message automatiquement, s&apos;arrête dès que le prospect répond, et
                te laisse reprendre la main au bon moment. Exactement ce que fait une{" "}
                <Link
                  href="/blog/systeme-prospection-multicanale-automatisee"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  prospection multicanale automatisée
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

              <h2 className="pt-4 text-2xl font-bold tracking-tight">Sources</h2>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>
                  <a className="underline hover:text-foreground" href="https://www.invespcro.com/blog/sale-follow-ups/" target="_blank" rel="noopener noreferrer nofollow">
                    Invesp — The Importance of Sales Follow-Ups (statistiques)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://pipeline.zoominfo.com/sales/sales-follow-up-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    ZoomInfo — Sales Follow-Up Statistics
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux arrêter de perdre des ventes par simple oubli de relance ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h, relances comprises. Teste
                ton éligibilité à l&apos;Audit IA offert : 30 minutes pour un plan clair.
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
