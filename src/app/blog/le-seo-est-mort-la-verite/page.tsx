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
  slug: "le-seo-est-mort-la-verite",
  title:
    "« Le SEO est mort » : tout le monde te ment — voici la vérité (et ce que ça change pour tes clients)",
  description:
    "Contre-tendance — 68 % des recherches finissent sans clic. Le SEO n'est pas mort : il a changé de terrain. Ce qu'il faut faire maintenant pour être trouvé.",
  date: "2026-09-23",
  dateLabel: "23 septembre 2026",
  readTime: "9 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/le-seo-est-mort-la-verite.svg",
  imageAlt:
    "Le SEO est mort ? La vérité : les recherches finissent sans clic, il faut devenir la réponse citée par l'IA — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "le SEO est mort",
    "zéro clic",
    "AI Overviews",
    "GEO",
    "être cité par l'IA",
    "référencement 2026",
    "trafic organique",
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
    q: "Le SEO est-il vraiment mort en 2026 ?",
    a: "Non — le clic est en train de mourir, pas le fait d'être trouvé. 68 % des recherches Google finissent sans clic, et jusqu'à 93 % en mode IA. Mais les gens cherchent toujours : ils lisent désormais la réponse directement, souvent générée par l'IA à partir de contenus qu'elle cite. Le SEO n'est pas mort, il s'est déplacé vers le GEO (être la réponse citée).",
  },
  {
    q: "Ça veut dire qu'il ne faut plus faire de contenu ?",
    a: "Au contraire. C'est le contenu clair, structuré et sourcé qui se fait citer par ChatGPT, Gemini ou Perplexity — et qui continue de bien se positionner sur Google. Le même contenu fait les deux jobs. Ce qui meurt, c'est le contenu creux produit pour « ranker ».",
  },
  {
    q: "Comment être cité par les IA concrètement ?",
    a: "En répondant clairement à de vraies questions, dès le premier paragraphe, avec des faits, une structure nette et ton expertise réelle. Les IA privilégient les pages qui donnent une réponse précise et fiable — pas les pages bourrées de mots-clés.",
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
        Les clics s&apos;effondrent. La question n&apos;est plus « ranker », mais « être la réponse ».
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
                « Le SEO est mort, l&apos;IA a tout tué. » Tu l&apos;as lu partout, et tu
                as peut-être déjà baissé les bras sur ton contenu. Grosse erreur : ce
                n&apos;est pas la recherche qui meurt, c&apos;est ta façon de la jouer.
              </p>
              <p>
                Je ne dis pas que rien n&apos;a changé — tout a changé. Je dis que{" "}
                <strong>enterrer le SEO</strong> est exactement ce qui va te rendre
                invisible. Les chiffres 2026 le prouvent.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que tout le monde croit (et pourquoi)
              </h2>
              <p>
                <strong>Ce que ta cible fait :</strong> elle voit son trafic chuter,
                panique, et conclut « le SEO ne sert plus à rien » — donc elle arrête de
                produire du contenu. <strong>Pourquoi elle le croit :</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>La chute est réelle et visible.</strong> Le trafic baisse, c&apos;est concret, ça fait peur.</li>
                <li><strong>Les gourous adorent les enterrements.</strong> « X est mort » est le titre le plus vendeur du monde — surtout quand on vend la « nouvelle méthode » juste après.</li>
                <li><strong>C&apos;est un soulagement.</strong> Si le SEO est mort, on a une bonne excuse pour arrêter un travail exigeant.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La faille : ce n&apos;est pas la recherche qui meurt, c&apos;est le clic
              </h2>
              <p>Voici ce que la panique masque. Les gens cherchent toujours autant — ils cliquent juste moins, parce qu&apos;ils lisent la réponse directement. Les données 2026 :</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  <strong>68 % des recherches Google finissent sans clic</strong> (contre
                  60 % en 2024), et jusqu&apos;à <strong>93 % en mode IA</strong>.
                </li>
                <li>
                  Les <strong>AI Overviews apparaissent sur plus de 20 %</strong> des
                  recherches et réduisent le taux de clic de près de <strong>60 %</strong>
                  quand ils sont là.
                </li>
                <li>
                  Certaines pages en top 3 ont perdu <strong>30 %</strong> de trafic (et
                  40-60 % dans des secteurs comme la santé ou la finance).
                </li>
              </ul>
              <p>
                Mais regarde bien : cette réponse que lit l&apos;utilisateur, l&apos;IA la
                génère <strong>à partir de contenus qu&apos;elle cite</strong>. La question
                n&apos;est plus « comment ranker n°1 », c&apos;est <strong>« comment être
                la source que l&apos;IA cite »</strong>. C&apos;est ça, le GEO.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui marche vraiment à la place
              </h2>
              <p>
                Bonne nouvelle : la même chose qui te fait citer par l&apos;IA te fait
                aussi bien positionner sur Google. Un seul contenu, deux jobs.
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>Réponds à une vraie question, dès la 1re phrase.</strong> Les IA piochent les réponses claires et directes, pas les intros qui tournent autour.</li>
                <li><strong>Structure et source.</strong> Titres nets, faits, chiffres, exemples : c&apos;est ce qui rend un contenu « citable ».</li>
                <li><strong>Mets ton expertise réelle.</strong> Le contenu générique est justement celui que l&apos;IA produit déjà en masse — donc celui qu&apos;elle ne cite pas.</li>
                <li><strong>Ne dépends pas que de Google.</strong> Contenu, prospection, base d&apos;emails : plusieurs portes d&apos;entrée valent mieux qu&apos;une seule qui se referme.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La conclusion qui dérange
              </h2>
              <p>
                « Le SEO est mort » est le slogan de ceux qui n&apos;ont pas su s&apos;adapter
                — ou qui te vendent la panique. La vérité : être trouvé n&apos;a{" "}
                <strong>jamais compté autant</strong>, mais ça ne se joue plus au clic, ça
                se joue à la <strong>réponse</strong>. Et produire du contenu vraiment
                citable, de façon régulière, ce n&apos;est pas une affaire de chance :
                c&apos;est un <strong>système</strong>. Le bricolage « je ranke ou
                j&apos;abandonne » perd. Le système qui te rend la référence gagne.
                (C&apos;est exactement ce que fait notre{" "}
                <Link
                  href="/blog/systeme-contenu-ia-attirer-clients"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système de contenu
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
                  <a className="underline hover:text-foreground" href="https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/" target="_blank" rel="noopener noreferrer nofollow">
                    SparkToro — Less than one third of Google searches send a click (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://launchcodex.com/blog/seo-geo-ai/is-seo-dead/" target="_blank" rel="noopener noreferrer nofollow">
                    Launchcodex — Is SEO dead in 2026? What the data shows
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux devenir la réponse que l&apos;IA cite — de façon systématique ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h, avec un contenu pensé
                pour être trouvé et cité. Teste ton éligibilité à l&apos;Audit IA offert :
                30 minutes pour un plan clair.
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
