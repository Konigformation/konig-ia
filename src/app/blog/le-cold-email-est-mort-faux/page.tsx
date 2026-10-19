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
  slug: "le-cold-email-est-mort-faux",
  title:
    "« Le cold email est mort » : faux — ce qui est mort, c'est ta façon de le faire (la preuve)",
  description:
    "Contre-tendance — Le cold email générique s'effondre (3,4 % de réponse). Mais l'email ciblé cartonne (15-25 %), et 61 % des décideurs B2B le préfèrent. La vérité.",
  date: "2026-10-21",
  dateLabel: "21 octobre 2026",
  readTime: "9 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/le-cold-email-est-mort-faux.svg",
  imageAlt:
    "Le cold email est mort ? Faux : le mass spam s'effondre mais l'email ciblé obtient 15 à 25 pour cent de réponse — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "le cold email est mort",
    "cold email 2026",
    "taux de réponse cold email",
    "email de prospection",
    "signal-based outreach",
    "délivrabilité email",
    "prospection email B2B",
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
    q: "Le cold email fonctionne-t-il encore en 2026 ?",
    a: "Oui, mais seulement bien fait. Le cold email générique de masse s'effondre (environ 3,4 % de réponse en moyenne, contre 8,5 % en 2019). En revanche, un email ciblé basé sur un signal d'achat atteint 15 à 25 % de réponse. Ce n'est pas le canal qui meurt, c'est le spam.",
  },
  {
    q: "Pourquoi tout le monde dit que c'est mort alors ?",
    a: "Parce que beaucoup ont spammé des listes achetées, obtenu de mauvais résultats, et conclu que le canal était fini. En réalité, ils ont tué leur propre cold email par de mauvaises pratiques. Et 61 % des décideurs B2B préfèrent toujours l'email comme canal de contact.",
  },
  {
    q: "Qu'est-ce qui a vraiment changé ?",
    a: "La délivrabilité est devenue le juge de paix : Google, Yahoo et Microsoft rejettent les emails non conformes, et près de 17 % des cold emails n'atteignent jamais la boîte de réception. Sans authentification, liste propre et volume maîtrisé, tu n'existes même pas.",
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
        Le spam de masse meurt. L&apos;email ciblé n&apos;a jamais été aussi efficace.
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
                « Le cold email ? C&apos;est mort, personne ne répond plus. » Tu l&apos;as
                entendu, et tu as peut-être abandonné le canal le plus direct qui existe.
                Grosse erreur : ce n&apos;est pas le cold email qui est mort — c&apos;est
                la façon dont la majorité le pratique.
              </p>
              <p>
                Je ne dis pas que tout va bien. Je dis qu&apos;<strong>enterrer le cold
                email</strong>, c&apos;est jeter un canal que tes acheteurs préfèrent encore.
                Les chiffres 2026 le prouvent.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que tout le monde croit (et pourquoi)
              </h2>
              <p>
                <strong>Ce que ta cible fait :</strong> elle achète une liste, envoie le
                même message à 2 000 personnes, obtient 3 réponses agacées, et conclut
                « le cold email est mort ». <strong>Pourquoi elle le croit :</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>Ses résultats sont nuls.</strong> Normal : elle a spammé. Elle confond « mon cold email est mort » avec « le cold email est mort ».</li>
                <li><strong>Les gourous adorent les enterrements.</strong> « X est mort » est un titre vendeur — surtout quand on vend la « nouvelle méthode » juste après.</li>
                <li><strong>Les boîtes débordent.</strong> On voit le spam qu&apos;on reçoit, pas les emails ciblés qui, eux, décrochent des rendez-vous.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La faille : c&apos;est le spam qui meurt, pas l&apos;email
              </h2>
              <p>Regarde les deux réalités que la moyenne cache :</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  Le cold email <strong>générique</strong> plafonne à{" "}
                  <strong>~3,4 % de réponse</strong> (contre 8,5 % en 2019). Oui, le
                  bourrinage de masse s&apos;effondre.
                </li>
                <li>
                  Mais l&apos;email <strong>basé sur un signal</strong> (levée de fonds,
                  recrutement, changement de poste) atteint <strong>15 à 25 % de
                  réponse</strong> — et la personnalisation avancée fait 18 % contre 9 %
                  pour un template générique.
                </li>
                <li>
                  La <strong>délivrabilité</strong> est devenue le juge de paix : Google,
                  Yahoo et Microsoft rejettent les emails non conformes au serveur, et{" "}
                  <strong>~17 %</strong> des cold emails n&apos;atteignent jamais la boîte.
                </li>
                <li>
                  Et surtout : <strong>61 % des décideurs B2B préfèrent encore
                  l&apos;email</strong> comme canal de contact.
                </li>
              </ul>
              <p>
                Autrement dit, le marché n&apos;a pas quitté l&apos;email. Il a juste cessé
                de répondre au spam. Ce qui a changé, ce n&apos;est pas le canal — c&apos;est
                le niveau d&apos;exigence.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui marche vraiment en 2026
              </h2>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>Cibler, pas ratisser.</strong> Une petite liste ultra-pertinente bat 2 000 contacts au hasard.</li>
                <li><strong>Partir d&apos;un signal.</strong> Un vrai déclencheur chez le prospect transforme le « t&apos;es qui ? » en « ah, pertinent ».</li>
                <li><strong>Soigner la délivrabilité.</strong> Authentification, liste propre, volume maîtrisé : sans ça, rien n&apos;arrive.</li>
                <li><strong>Relancer.</strong> 42 % des réponses viennent des relances, pas du premier email.</li>
              </ul>
              <p>
                Rien de tout ça ne tient sans méthode. C&apos;est précisément ce que décrit
                notre{" "}
                <Link
                  href="/blog/hack-listes-prospects-qualifies-claude"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  méthode de listes qualifiées par signal
                </Link>
                .
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La conclusion qui dérange
              </h2>
              <p>
                « Le cold email est mort » est l&apos;excuse de ceux qui l&apos;ont mal
                fait — ou qui te vendent le prochain canal miracle. La vérité : l&apos;email
                reste le canal le plus direct et le plus préféré des acheteurs B2B. Ce
                n&apos;est pas une question de canal, c&apos;est une question de{" "}
                <strong>système</strong> : ciblage, signal, délivrabilité, relances. Le
                bricolage de masse perd. Le système ciblé gagne.
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
                  <a className="underline hover:text-foreground" href="https://www.cleverly.co/blog/cold-email-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Cleverly — Cold Email Statistics 2026 (100M+ emails)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.lacleo.ai/blog/cold-email-benchmarks-deliverability-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Lacleo — Cold Email Benchmarks &amp; Deliverability 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système de prospection email qui décroche vraiment des rendez-vous ?
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
