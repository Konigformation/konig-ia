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
  slug: "automatisation-deshumanise-faux",
  title:
    "« L'automatisation déshumanise ta relation client » : faux — et voici ce que les données prouvent vraiment",
  description:
    "Contre-tendance — 79 % préfèrent l'humain… mais 62 % choisissent un chatbot plutôt qu'attendre. Ce que les gens rejettent, c'est la mauvaise automatisation. La preuve.",
  date: "2026-09-30",
  dateLabel: "30 septembre 2026",
  readTime: "9 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/automatisation-deshumanise-faux.svg",
  imageAlt:
    "L'automatisation déshumanise ? Faux : une bonne automatisation répond en 1 seconde et rend l'expérience plus humaine — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "automatisation déshumanise",
    "automatisation relation client",
    "IA vs humain",
    "chatbot expérience client",
    "personnalisation à l'échelle",
    "automatiser sans déshumaniser",
    "vitesse de réponse",
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
    q: "Les gens ne préfèrent-ils pas vraiment parler à un humain ?",
    a: "Oui et non. 79 % disent préférer l'humain — mais 62 % choisissent un chatbot plutôt que d'attendre, 75 % le préfèrent pour les questions simples, et 69 % basculent volontiers vers l'automatisation si elle résout leur problème. La préférence pour l'humain traduit surtout la déception face aux mauvais bots, pas un rejet de l'automatisation.",
  },
  {
    q: "Alors faut-il tout automatiser ?",
    a: "Non — il faut automatiser ce qui gagne à l'être (vitesse, disponibilité, personnalisation), et garder l'humain là où il crée vraiment de la valeur (relation, décisions, cas complexes). La bonne automatisation libère du temps pour être PLUS humain, pas moins.",
  },
  {
    q: "Comment automatiser sans paraître froid ?",
    a: "En misant sur ce que les gens veulent vraiment : une réponse immédiate, pertinente et personnalisée. Un système connecté à tes données répond en une seconde avec le bon contexte — c'est souvent plus « humain » qu'un email générique reçu trois jours trop tard.",
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
        Ce n&apos;est pas l&apos;automatisation le problème — c&apos;est la mauvaise.
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
                « Moi, je préfère le contact humain, je n&apos;automatiserai jamais ma
                relation client. » Noble sur le papier. Sauf que, pendant que tu défends
                l&apos;humain, tes prospects attendent ta réponse pendant trois jours — et
                vont voir ailleurs.
              </p>
              <p>
                Je ne dis pas de virer l&apos;humain. Je dis que <strong>« l&apos;automatisation
                déshumanise »</strong> est une croyance qui te fait perdre des clients, et
                les données 2026 le montrent — avec toute leur nuance.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que tout le monde croit (et pourquoi)
              </h2>
              <p>
                <strong>Ce que ta cible fait :</strong> elle refuse d&apos;automatiser ses
                réponses, ses relances, son suivi, « pour garder le contact humain » — et
                se retrouve débordée, lente, irrégulière. <strong>Pourquoi elle le
                croit :</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>De mauvaises expériences.</strong> On a tous détesté un chatbot stupide qui tourne en boucle. On généralise.</li>
                <li><strong>Le mimétisme anti-IA.</strong> « Les gens détestent les robots » est devenu un slogan rassurant.</li>
                <li><strong>La peur de perdre son âme.</strong> Automatiser semble trahir la relation qu&apos;on a mis des années à construire.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La faille : les gens ne rejettent pas l&apos;automatisation, ils rejettent la mauvaise
              </h2>
              <p>Regarde les vrais chiffres 2026, dans leur ensemble :</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  Oui, <strong>79 % disent préférer l&apos;humain</strong> au service
                  automatisé…
                </li>
                <li>
                  … mais <strong>62 % préfèrent un chatbot plutôt que d&apos;attendre</strong>,
                  <strong> 75 %</strong> le préfèrent pour les questions simples, et{" "}
                  <strong>69 % basculent volontiers</strong> vers l&apos;automatisation si
                  elle règle vraiment leur problème.
                </li>
                <li>
                  La <strong>vitesse change tout</strong> : un chatbot répond en{" "}
                  <strong>1,1 seconde</strong>, et la rapidité de réponse est l&apos;un des
                  plus forts prédicteurs de conversion.
                </li>
              </ul>
              <p>
                La conclusion des études est limpide : la préférence pour l&apos;humain{" "}
                <strong>traduit la déception face aux mauvais bots</strong>, pas un rejet
                de l&apos;automatisation. Les gens ne veulent pas « un humain » — ils
                veulent que <strong>ça marche</strong> : vite, juste, sans attendre.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui marche vraiment : l&apos;automatisation qui humanise
              </h2>
              <p>
                Bien conçue, l&apos;automatisation ne remplace pas la relation — elle la{" "}
                <strong>rend possible à l&apos;échelle</strong> :
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>Réponse immédiate</strong> quand l&apos;intérêt est chaud, nuit et week-end compris — plus « humain » qu&apos;un silence de 3 jours.</li>
                <li><strong>Personnalisation réelle</strong> : connectée à tes données, l&apos;IA parle à chacun avec son contexte, pas avec un script générique.</li>
                <li><strong>Ton temps libéré</strong> pour les moments qui comptent vraiment : la vraie conversation, la vente, le conseil.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La conclusion qui dérange
              </h2>
              <p>
                « L&apos;automatisation déshumanise » est l&apos;excuse de ceux qui
                n&apos;ont pas su l&apos;automatiser <em>correctement</em>. La vérité :
                c&apos;est le <strong>bricolage</strong> qui déshumanise — le bot stupide,
                l&apos;email générique, la réponse qui n&apos;arrive jamais. Un{" "}
                <strong>système pensé</strong>, lui, met l&apos;IA au service de la
                relation : rapide, pertinent, personnel. Le tout-manuel qui fait attendre
                perd. Le tout-robot qui répond n&apos;importe quoi perd. Le système qui
                automatise <em>intelligemment</em> gagne.
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
                  <a className="underline hover:text-foreground" href="https://www.verint.com/blog/ai-vs-human-customer-service-paradox/" target="_blank" rel="noopener noreferrer nofollow">
                    Verint — The Human Preference Paradox (State of CX 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://masterofcode.com/blog/ai-in-customer-service-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Master of Code — AI in Customer Service Statistics 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux automatiser intelligemment — sans perdre l&apos;humain ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h, qui répond vite et juste
                pendant que tu gardes la relation. Teste ton éligibilité à l&apos;Audit IA
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
