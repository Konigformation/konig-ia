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
  slug: "systeme-tunnel-vente-automatise-3-etapes",
  title:
    "Le système en 3 étapes pour un tunnel de vente automatisé (et arrêter le tunnel qui fuit)",
  description:
    "Système — 79 % des leads ne convertissent jamais. Le système en 3 étapes pour un tunnel de vente automatisé qui capte, relance et convertit à ta place.",
  date: "2026-08-12",
  dateLabel: "12 août 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-tunnel-vente-automatise-3-etapes.svg",
  imageAlt:
    "Le système en 3 étapes pour un tunnel de vente automatisé : des leads entrent, les fuites sont colmatées, des clients ressortent — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "tunnel de vente automatisé",
    "automatiser ses relances",
    "nurturing IA",
    "convertir ses leads",
    "séquences automatisées",
    "tunnel de conversion",
    "relance commerciale automatique",
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
    q: "Pourquoi mes leads ne se transforment-ils pas en clients ?",
    a: "Le plus souvent, ce n'est pas un problème de volume mais de suivi : 79 % des leads marketing ne convertissent jamais, faute de relance structurée. Or 80 % des ventes demandent 5 relances ou plus — un rythme impossible à tenir à la main, d'où l'intérêt d'un tunnel automatisé.",
  },
  {
    q: "Qu'est-ce qu'un tunnel de vente automatisé ?",
    a: "C'est un système qui capte chaque lead, le qualifie, puis le nourrit avec une séquence de messages de valeur jusqu'à la prise de rendez-vous — automatiquement, en s'arrêtant dès que le lead répond. Il colmate les fuites entre « lead intéressé » et « client signé ».",
  },
  {
    q: "La rapidité de réponse compte-t-elle vraiment ?",
    a: "Énormément : suivre un lead dans les 5 minutes multiplie par 9 les chances de le convertir. Pourtant, 44 % des commerciaux ne relancent jamais. Un tunnel automatisé garantit une réponse immédiate, pendant que l'intérêt est chaud.",
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
        Un tunnel qui capte, relance et convertit — sans fuite au milieu.
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
                Tu génères des contacts, mais peu deviennent clients ? Tu n&apos;es pas
                seul : <strong>79 % des leads marketing ne se transforment jamais</strong>{" "}
                en vente, et la cause principale est le manque de suivi. Le trou
                n&apos;est pas en haut du tunnel — il est au milieu.
              </p>
              <p>
                Le pire, c&apos;est que ces leads ne sont pas perdus :{" "}
                <strong>69 % des leads jugés « pas prêts » finissent par acheter</strong>{" "}
                dans les 24 mois s&apos;ils sont nourris par une séquence structurée,
                contre 21 % sans relance. La différence entre les deux, c&apos;est un
                système.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi maintenant
              </h2>
              <p>
                En 2026, l&apos;attention est plus rare et le cycle d&apos;achat plus
                long : <strong>80 % des ventes demandent 5 relances ou plus</strong>.
                Personne n&apos;a le temps de faire ça à la main pour chaque contact.
                D&apos;où le système en 3 étapes.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Capter et qualifier automatiquement
              </h2>
              <p>
                Chaque lead qui entre (formulaire, DM, téléchargement) doit être{" "}
                <strong>capturé et qualifié sans délai</strong>. Rappel crucial : suivre
                un lead <strong>dans les 5 minutes multiplie par 9</strong> les chances
                de le convertir.
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li>un point d&apos;entrée unique (formulaire d&apos;audit, prise de contact) ;</li>
                <li>une qualification automatique par l&apos;IA (score selon tes critères) ;</li>
                <li>une réponse immédiate, même simple, pendant que l&apos;intérêt est chaud.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Nourrir avec une séquence de valeur
              </h2>
              <p>
                C&apos;est ici que se joue la conversion. Construis <strong>une séquence
                de nurturing</strong> de 5 à 7 messages qui alterne valeur et
                proposition, plutôt que de relancer « alors, ça avance ? ».
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li><strong>Message 1-2</strong> : valeur pure (un conseil, un cas client, une ressource).</li>
                <li><strong>Message 3</strong> : la proposition (audit, appel).</li>
                <li><strong>Message 4-5</strong> : preuve sociale + objection levée.</li>
                <li><strong>Message 6-7</strong> : urgence douce + porte de sortie.</li>
              </ul>
              <p>
                Les entreprises qui nourrissent bien génèrent <strong>50 % de leads
                prêts à acheter en plus, à 33 % de coût en moins</strong> — et des
                paniers 47 % plus gros.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Automatiser et mesurer
              </h2>
              <p>Le système :</p>
              <ul className="ml-5 list-decimal space-y-1.5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li><strong>déclenche</strong> la séquence dès qu&apos;un lead entre ;</li>
                <li><strong>personnalise</strong> chaque message avec l&apos;IA ;</li>
                <li><strong>s&apos;arrête</strong> dès que le lead répond ou réserve ;</li>
                <li><strong>mesure</strong> le taux de conversion par étape pour réparer les fuites une à une.</li>
              </ul>
              <p>
                Tu ne cours plus après tes leads. Le tunnel travaille pendant que tu
                livres tes clients.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Du plan au système qui tourne
              </h2>
              <p>
                Sur le papier, c&apos;est clair. En pratique, brancher capture +
                qualification + séquences + mesure sans que la chaîne casse, c&apos;est
                des semaines de montage. C&apos;est ce que Konig IA installe{" "}
                <strong>clé en main en 48 h</strong> : le 3ᵉ levier de ta machine à
                clients, connecté au contenu et à la{" "}
                <Link
                  href="/blog/systeme-prospection-multicanale-automatisee"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  prospection multicanale
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
                  <a className="underline hover:text-foreground" href="https://www.salesgenie.com/blog/lead-nurturing-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    Salesgenie — 46 Lead Nurturing Statistics (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.amraandelma.com/lead-to-sale-conversion-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    Amra &amp; Elma — Lead-to-Sale Conversion Statistics (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux colmater ton tunnel qui fuit et automatiser tes relances ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h, sans agence. Teste ton
                éligibilité à l&apos;Audit IA offert : 30 minutes, sans engagement.
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
