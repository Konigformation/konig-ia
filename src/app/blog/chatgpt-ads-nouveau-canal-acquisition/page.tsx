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
  slug: "chatgpt-ads-nouveau-canal-acquisition",
  title:
    "ChatGPT lance ses pubs (100 M$ en 6 semaines) : comment en profiter pour ramener des clients",
  description:
    "Actualité IA — OpenAI a ouvert son Ads Manager en 2026. Ce que ChatGPT Ads change pour ton acquisition, et 3 actions concrètes à lancer dès aujourd'hui.",
  date: "2026-08-14",
  dateLabel: "14 août 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/chatgpt-ads-nouveau-canal-acquisition.svg",
  imageAlt:
    "ChatGPT Ads, un nouveau canal d'acquisition : une réponse d'IA avec un encart sponsorisé et une courbe de revenus en hausse — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "ChatGPT Ads",
    "publicité ChatGPT",
    "nouveau canal d'acquisition",
    "acquisition clients 2026",
    "OpenAI Ads Manager",
    "publicité IA",
    "acquisition IA",
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
    q: "Qu'est-ce que ChatGPT Ads ?",
    a: "C'est la régie publicitaire d'OpenAI. Depuis le 22 juillet 2026, un Ads Manager en self-service permet aux entreprises de créer des campagnes affichées dans des encarts sponsorisés, en bas des réponses de ChatGPT, avec un ciblage contextuel basé sur la conversation.",
  },
  {
    q: "Est-ce disponible en France ?",
    a: "Le déploiement a commencé aux États-Unis puis s'est étendu à plusieurs marchés. Selon les pays, l'accès à l'Ads Manager n'est pas encore ouvert partout — d'où l'intérêt de préparer ta stratégie avant que le canal arrive chez toi.",
  },
  {
    q: "Faut-il un gros budget pour se lancer ?",
    a: "OpenAI a supprimé le minimum de dépense initial et le CPM tourne autour de 25 $, avec un bidding au clic et un pixel de conversion. Mais un canal isolé ne suffit pas : sans système pour capter et convertir derrière, la pub reste de l'argent brûlé.",
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
        ChatGPT Ads : un nouveau canal, à intégrer dans un vrai système.
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
                Tu cherches de nouveaux endroits pour capter des clients ? Il vient
                d&apos;en apparaître un énorme. Depuis le 22 juillet 2026, OpenAI a
                ouvert <strong>« Advertise in ChatGPT »</strong> — tu peux désormais
                afficher des annonces là où des millions de gens posent leurs questions
                d&apos;achat.
              </p>
              <p>
                Et ce n&apos;est pas un gadget : la plateforme a généré{" "}
                <strong>100 millions de dollars de revenus en 6 semaines</strong>. Quand
                l&apos;argent afflue aussi vite, ce n&apos;est pas une mode — c&apos;est
                un canal qui s&apos;installe.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de sortir, concrètement
              </h2>
              <p>Les faits vérifiés, sans hype :</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  Les annonces apparaissent dans des <strong>encarts clairement
                  identifiés, en bas des réponses</strong>. OpenAI précise qu&apos;elles
                  n&apos;influencent pas les réponses du modèle.
                </li>
                <li>
                  Le ciblage est <strong>contextuel</strong> : basé sur le sujet de la
                  conversation, pas sur des mots-clés à la Google.
                </li>
                <li>
                  Le <strong>CPM tourne autour de 25 $</strong>, le minimum de dépense a
                  été supprimé, et le bidding au clic (CPC) comme un pixel de conversion
                  sont disponibles.
                </li>
                <li>
                  Les abonnés payants (Plus, Pro, Business…) ne voient{" "}
                  <strong>aucune pub</strong> : tu touches surtout l&apos;audience des
                  offres gratuites.
                </li>
              </ul>
              <p>
                À l&apos;heure où j&apos;écris, le déploiement reste centré sur quelques
                marchés. En France, prépare-toi <strong>avant</strong> que ça arrive.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3 actions gratuites dès aujourd&apos;hui
              </h2>
              <p>
                Tu n&apos;as peut-être pas encore accès au Ads Manager. Peu importe : le
                signal derrière cette news est ce qui compte.
              </p>

              <h3 className="pt-2 text-xl font-semibold tracking-tight">
                1. Deviens « la réponse », pas juste un site
              </h3>
              <p>
                Les gens ne googlent plus, ils demandent. Liste les <strong>10 questions
                d&apos;achat</strong> de ta cible et rédige un contenu qui répond à
                chacune, clairement, dès le premier paragraphe. C&apos;est ce qui te rend
                citable par les IA — et pertinent le jour où tu passeras à la pub.
              </p>

              <h3 className="pt-2 text-xl font-semibold tracking-tight">
                2. Installe ta mesure MAINTENANT
              </h3>
              <p>
                Le nerf de la guerre d&apos;un nouveau canal, c&apos;est de savoir ce
                qu&apos;il rapporte. Mets en place dès aujourd&apos;hui un suivi simple :
                d&apos;où vient chaque prise de rendez-vous ? Sans ça, tu brûleras ton
                budget à l&apos;aveugle.
              </p>

              <h3 className="pt-2 text-xl font-semibold tracking-tight">
                3. Prépare une offre d&apos;entrée irrésistible
              </h3>
              <p>
                Un canal froid ne convertit pas en vente directe. Il te faut un{" "}
                <strong>point d&apos;entrée à faible friction</strong> : un audit
                gratuit, un diagnostic, un mini-guide. C&apos;est lui qui transformera
                l&apos;attention en rendez-vous.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Un canal ne remplace pas un système
              </h2>
              <p>
                Un nouveau canal, c&apos;est excitant. Mais un canal isolé ne suffit
                jamais : la pub attire, encore faut-il <strong>capter, relancer et
                convertir</strong> derrière — sinon tu payes pour des clics qui
                s&apos;évaporent. C&apos;est là que se joue la différence entre « faire
                de la pub » et avoir un système où chaque euro entre dans une machine
                pensée. Vois d&apos;ailleurs notre{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système de tunnel de vente automatisé
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
                  <a className="underline hover:text-foreground" href="https://explainx.ai/blog/openai-advertise-in-chatgpt-ads-launch-july-2026" target="_blank" rel="noopener noreferrer nofollow">
                    ExplainX — OpenAI « Advertise in ChatGPT » Ads Manager (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://choice.marketing/blog/chatgpt-ads-2026-field-guide/" target="_blank" rel="noopener noreferrer nofollow">
                    Choice OMG — ChatGPT Ads 2026 Field Guide
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système prêt à absorber chaque nouveau canal ?
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
