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
  slug: "nouvelle-generation-ia-septembre-2026",
  title:
    "GPT-6, Claude Fable 5.1 : une nouvelle vague de modèles IA vient de sortir — comment en profiter sans perdre ton temps",
  description:
    "Actualité IA — Début septembre 2026, une salve de nouveaux modèles (GPT-6, Claude Fable 5.1…) est sortie. Ce qui change vraiment pour ton acquisition, et quoi faire.",
  date: "2026-09-09",
  dateLabel: "9 septembre 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/nouvelle-generation-ia-septembre-2026.svg",
  imageAlt:
    "Une nouvelle génération de modèles IA arrive en septembre 2026 : plusieurs modèles récents, et un système qui les met au travail — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "nouvelle génération IA 2026",
    "GPT-6",
    "Claude Fable 5.1",
    "nouveaux modèles IA septembre 2026",
    "quel modèle IA choisir",
    "IA acquisition clients",
    "automatiser avec l'IA",
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
    q: "Quels modèles IA sont sortis début septembre 2026 ?",
    a: "En quelques jours : Claude Fable 5.1 (et Mythos 5.1) chez Anthropic le 1er septembre, avec une baisse du prix de lecture en cache ; la release stable de ChatGPT sur GPT-6 le 4 septembre ; et de nouvelles versions chez Google (Gemini 3.8 Flash) et d'autres. Une des périodes les plus denses de l'année côté modèles.",
  },
  {
    q: "Dois-je changer d'outil à chaque nouvelle sortie ?",
    a: "Non. Pour 95 % des usages d'acquisition (contenu, prospection, qualification), les modèles récents se valent largement. Changer d'outil à chaque annonce te fait perdre plus de temps que ça ne t'en fait gagner. Ce qui compte, c'est ce que tu en fais.",
  },
  {
    q: "Comment profiter de ces nouveautés concrètement ?",
    a: "En les branchant dans un process répétable, pas en les testant une par une. Un meilleur modèle rédige et qualifie mieux, mais seul un système transforme cette capacité en rendez-vous réguliers.",
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
        Une vague de nouveaux modèles — ce qui compte, c&apos;est le système autour.
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
                Tu as vu passer les annonces : GPT-6, Claude Fable 5.1, Gemini 3.8… En
                une semaine, l&apos;IA a encore « changé ». Et toi, tu culpabilises de ne
                pas suivre. Bonne nouvelle : pour ramener des clients, tu n&apos;as pas
                besoin de courir après chaque sortie.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de sortir (vraiment)
              </h2>
              <p>
                Début septembre 2026 a été l&apos;une des périodes les plus denses de
                l&apos;année côté modèles. Anthropic a sorti <strong>Claude Fable
                5.1</strong> le 1<sup>er</sup> septembre et baissé le prix de lecture en
                cache. ChatGPT est passé en release stable sur <strong>GPT-6</strong> le
                4 septembre. Google a suivi avec <strong>Gemini 3.8 Flash</strong>.
              </p>
              <p>
                Deux tendances de fond derrière le bruit : les modèles deviennent{" "}
                <strong>plus rapides</strong> et <strong>moins chers</strong>. Traduit
                pour toi : automatiser ton acquisition n&apos;a jamais coûté aussi peu.
                Encore faut-il savoir quoi en faire.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le piège du « nouveau jouet »
              </h2>
              <p>
                L&apos;erreur classique : passer sa semaine à tester le dernier modèle au
                lieu de produire des clients. Pour l&apos;écrasante majorité des usages
                d&apos;acquisition — écrire, qualifier, relancer — les modèles récents se
                valent. La différence ne se joue plus sur l&apos;outil, mais sur{" "}
                <strong>ce que tu lui fais faire</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3 façons d&apos;en profiter dès aujourd&apos;hui
              </h2>
              <p>
                <strong>1. Baisse tes coûts sans rien changer.</strong> Si tu utilises
                déjà l&apos;IA via des outils, vérifie que tu es sur la dernière version :
                tu obtiens souvent mieux, plus vite, moins cher, sans effort.
              </p>
              <p>
                <strong>2. Confie-lui une tâche entière, pas une phrase.</strong> Les
                modèles récents tiennent mieux le contexte long : donne-lui un compte-
                rendu d&apos;appel complet et demande 10 angles de contenu, ou une liste
                brute et un scoring. Tu délègues un livrable, pas un bout.
              </p>
              <p>
                <strong>3. Fige ta méthode.</strong> Écris une fois ta façon de
                qualifier ou de rédiger, et rejoue-la. C&apos;est ce qui transforme un
                modèle puissant en résultat constant.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le vrai levier n&apos;est pas le modèle
              </h2>
              <p>
                Un meilleur moteur ne remplit pas ton agenda tout seul. Ce qui ramène des
                clients, c&apos;est un <strong>système</strong> qui met ce moteur au
                travail : contenu, prospection et conversion reliés. Le modèle change tous
                les mois ; le système, lui, tourne en continu. (Vois notre{" "}
                <Link
                  href="/blog/systeme-machine-a-clients-3-leviers"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  machine à clients complète
                </Link>
                .)
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
                  <a className="underline hover:text-foreground" href="https://releasebot.io/updates/anthropic" target="_blank" rel="noopener noreferrer nofollow">
                    Releasebot — Anthropic Release Notes (septembre 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://llm-stats.com/llm-updates" target="_blank" rel="noopener noreferrer nofollow">
                    LLM-Stats — AI Updates Today (septembre 2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux arrêter de tester des outils et installer TON système ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h. Teste ton éligibilité à
                l&apos;Audit IA offert : 30 minutes, sans jargon, sans engagement.
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
