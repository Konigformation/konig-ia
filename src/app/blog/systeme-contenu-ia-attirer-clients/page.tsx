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
  slug: "systeme-contenu-ia-attirer-clients",
  title:
    "Le système de contenu IA qui attire des clients en pilote automatique (de A à Z)",
  description:
    "Système — Transforme une seule idée en un mois de contenu qui attire des clients. Le moteur de contenu IA en 3 étapes : extraction, production, distribution.",
  date: "2026-08-19",
  dateLabel: "19 août 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-contenu-ia-attirer-clients.svg",
  imageAlt:
    "Le système de contenu IA qui attire des clients : une idée source se décline en plusieurs formats de contenu distribués — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "système de contenu IA",
    "contenu automatisé par IA",
    "attirer des clients avec le contenu",
    "content marketing IA 2026",
    "recycler son contenu",
    "créer du contenu avec l'IA",
    "moteur de contenu",
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
    q: "Combien de temps faut-il pour ce système de contenu ?",
    a: "L'idée est justement d'arrêter de repartir de zéro à chaque fois. Une session d'extraction d'une heure peut nourrir plusieurs semaines de publications, parce qu'une seule idée source se décline en plusieurs formats (post, newsletter, vidéo courte, article).",
  },
  {
    q: "L'IA ne produit-elle pas du contenu générique qui ne convertit pas ?",
    a: "Si tu lui demandes « écris un post », oui. Ce système part de TA matière (appels clients, expertise, cas concrets) : l'IA n'invente pas, elle met en forme et décline. C'est ce qui distingue un contenu qui attire des clients d'un contenu que tout le monde ignore.",
  },
  {
    q: "Faut-il publier tous les jours ?",
    a: "Non — la régularité et la qualité priment sur la fréquence brute. Mieux vaut 2-3 contenus par semaine à forte valeur, pensés pour être lus jusqu'au bout, qu'un flux quotidien tiède.",
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
        Une idée source, déclinée par l&apos;IA en un mois de contenu.
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
                Ton contenu est irrégulier ? Tu publies trois posts en une semaine, puis
                plus rien pendant un mois ? Le problème n&apos;est pas ton manque
                d&apos;idées — c&apos;est l&apos;absence de <strong>système</strong>. Voici
                comment transformer une seule idée en un mois de contenu qui attire des
                clients, sans y passer tes journées.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi un système, pas de l&apos;inspiration
              </h2>
              <p>
                Le contenu est le 1<sup>er</sup> levier d&apos;acquisition : il attire
                des inconnus et les réchauffe avant même que tu les contactes. Mais fait
                à l&apos;inspiration, il s&apos;arrête dès que tu es débordé. Un moteur de
                contenu, lui, produit en continu — parce qu&apos;il repose sur un process
                répétable, pas sur ta motivation du jour.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Extraire ta matière (la source)
              </h2>
              <p>
                Ne pars jamais d&apos;une page blanche. Ta matière existe déjà : appels
                clients, questions récurrentes, objections, cas concrets. Enregistre un
                appel (ou parle 10 minutes à voix haute) et donne la transcription à
                l&apos;IA :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Voici la transcription d&apos;un échange client. Extrais 10 angles de
                contenu : douleurs, objections, déclics. Pour chacun, un titre
                accrocheur et l&apos;idée clé en une phrase. »
              </blockquote>
              <p>
                Une session d&apos;une heure te sort assez d&apos;angles pour des
                semaines.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Produire et décliner (la multiplication)
              </h2>
              <p>
                Chaque angle devient plusieurs contenus. C&apos;est là que l&apos;IA fait
                gagner 10× de temps : un angle → un post LinkedIn, une section de
                newsletter, un script de vidéo courte, un paragraphe d&apos;article.
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « À partir de cet angle, écris : (1) un post LinkedIn — 1 idée, 1 exemple,
                1 question finale ; (2) une accroche de newsletter ; (3) un script de
                vidéo de 30 s. Ton direct, tutoiement. »
              </blockquote>
              <p>
                Règle d&apos;or : garde <strong>ta voix et tes exemples</strong>.
                L&apos;IA structure, tu apportes le vécu. C&apos;est ce qui te distingue
                du contenu générique que le lecteur zappe.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Distribuer et recycler (le moteur)
              </h2>
              <p>Le système :</p>
              <ul className="ml-5 list-decimal space-y-1.5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li><strong>planifie</strong> les contenus à l&apos;avance (fini le « je poste quand j&apos;ai le temps ») ;</li>
                <li><strong>recycle</strong> les meilleurs après quelques semaines — rafraîchir le format suffit à relancer la performance ;</li>
                <li><strong>ramène</strong> chaque lecteur vers un point de capture (lead magnet, audit) ;</li>
                <li><strong>mesure</strong> ce qui attire vraiment pour en produire plus.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le contenu n&apos;est qu&apos;un tiers de la machine
              </h2>
              <p>
                Attirer, c&apos;est le début. Sans capture ni relance derrière,
                l&apos;attention retombe. C&apos;est pour ça que le contenu doit
                s&apos;emboîter avec la{" "}
                <Link
                  href="/blog/systeme-prospection-multicanale-automatisee"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  prospection
                </Link>{" "}
                et le tunnel de conversion. C&apos;est exactement la machine complète que
                Konig IA installe en 48 h.
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
                  <a className="underline hover:text-foreground" href="https://www.shno.co/marketing-statistics/lead-magnet-conversion-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Shno — Lead Magnet &amp; Content Conversion Statistics 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://buffer.com/resources/how-often-to-post-on-linkedin/" target="_blank" rel="noopener noreferrer nofollow">
                    Buffer — How often to post on LinkedIn (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un moteur de contenu qui tourne sans toi ?
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
