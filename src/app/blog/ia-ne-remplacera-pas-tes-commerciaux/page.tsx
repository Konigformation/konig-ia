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
  slug: "ia-ne-remplacera-pas-tes-commerciaux",
  title:
    "Non, l'IA ne remplacera pas tes commerciaux — et croire le contraire tue ton acquisition",
  description:
    "Contre-tendance — Les « AI SDR » promettent des clients en pilote automatique. Les données 2026 prouvent l'inverse : le robot qui spamme fait baisser tes réponses. Ce qui marche vraiment.",
  date: "2026-08-14",
  dateLabel: "14 août 2026",
  readTime: "9 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/ia-ne-remplacera-pas-tes-commerciaux.svg",
  imageAlt:
    "L'IA ne remplacera pas tes commerciaux : un robot qui envoie en masse fait chuter les taux de réponse, face à un système pensé qui gagne — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "l'IA va remplacer les commerciaux",
    "AI SDR",
    "prospection automatisée IA",
    "délivrabilité cold email 2026",
    "automatisation prospection",
    "IA prospection limites",
    "cold email IA",
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
    q: "L'IA va-t-elle remplacer les commerciaux ?",
    a: "Non. Les données 2026 montrent qu'un email écrit par IA obtient 4,1 % de réponse contre 5,2 % pour un humain, et qu'il est flaggé spam à 8 % contre 3 %. L'IA baisse le coût d'envoi, ce qui pousse tout le monde à sur-envoyer et fait chuter les taux de réponse de 30 à 50 %. Elle amplifie une stratégie, elle ne la remplace pas.",
  },
  {
    q: "Faut-il alors renoncer à automatiser sa prospection ?",
    a: "Au contraire. Ce qui échoue, c'est le « bouton magique » qui spamme sans stratégie. Ce qui marche, c'est un système où l'IA sert un ciblage précis, un message basé sur un signal et une cadence maîtrisée qui protège ta délivrabilité.",
  },
  {
    q: "Qu'est-ce qui fait vraiment la différence en 2026 ?",
    a: "La pertinence, pas le volume. Un email basé sur un signal obtient 5-18 % de réponse contre 1-3 % pour du générique, et espacer les envois (50-100/jour, 3 jours d'intervalle) monte la délivrabilité à 93 % contre 71 %.",
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
        Le robot qui spamme perd. Le système pensé gagne.
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
                « Branche l&apos;AI SDR, il prospecte à ta place, tu n&apos;as plus
                qu&apos;à encaisser. » Tu l&apos;as vue partout cette année : un robot qui
                trouve tes prospects, écrit, envoie, relance — les commerciaux,
                c&apos;est fini. Séduisant, non ?
              </p>
              <p>
                Sauf que les données 2026 racontent l&apos;inverse. Et venant d&apos;une
                boîte qui <strong>vend de l&apos;automatisation IA</strong>, ça devrait
                te faire réfléchir : le bouton magique n&apos;existe pas, et y croire est
                en train de saboter ton acquisition.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que tout le monde croit (et pourquoi)
              </h2>
              <p>
                <strong>Ce que ta cible fait :</strong> elle achète un outil « AI SDR »,
                le lance sur des milliers de contacts, et attend les rendez-vous.{" "}
                <strong>Pourquoi elle y croit :</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>La peur de rater.</strong> Tout le monde en parle, donc « si je ne m&apos;y mets pas, je suis largué ».</li>
                <li><strong>Le désir de facilité.</strong> Supprimer la tâche la plus ingrate — prospecter — est irrésistible.</li>
                <li><strong>Les vendeurs d&apos;outils.</strong> Ceux qui propagent la promesse vendent l&apos;outil. Leur intérêt, c&apos;est que tu envoies plus — pas que tu signes plus.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La faille : quand tout le monde a le même robot, l&apos;avantage disparaît
              </h2>
              <p>
                Voici le mécanisme que personne ne t&apos;explique. L&apos;IA a fait{" "}
                <strong>s&apos;effondrer le coût d&apos;envoi</strong>. Résultat : chaque
                commercial envoie <strong>3 à 5× plus d&apos;emails</strong> qu&apos;avant.
                Les boîtes de réception ont explosé, et la suite est mathématique.
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  Un email écrit par IA obtient <strong>4,1 % de réponse, contre 5,2 %
                  pour un humain</strong> — et il est <strong>flaggé spam à 8 %, contre
                  3 %</strong>.
                </li>
                <li>
                  À cause de cette saturation, les taux de réponse ont{" "}
                  <strong>chuté de 30 à 50 %</strong> selon les segments.
                </li>
                <li>
                  Google et Microsoft rejettent désormais les mails non conformes{" "}
                  <strong>au serveur</strong> : la délivrabilité moyenne est tombée à{" "}
                  <strong>55-75 %</strong> — un email sur trois n&apos;arrive même pas.
                </li>
              </ul>
              <p>
                Autrement dit : l&apos;outil que « tout le monde » utilise pour gagner du
                temps <strong>détruit le canal pour tout le monde</strong>, toi compris.
                Plus tu automatises bêtement, plus tu creuses le trou.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui marche vraiment (et ce n&apos;est pas « moins d&apos;IA »)
              </h2>
              <p>
                La bonne nouvelle : l&apos;écart se comble par la <strong>pertinence</strong>,
                pas par le volume.
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  Un email <strong>basé sur un signal</strong> obtient <strong>5-18 % de
                  réponse</strong>, contre 1-3 % pour le générique. C&apos;est 6×
                  l&apos;écart.
                </li>
                <li>
                  Envoyer <strong>50-100 mails/boîte/jour</strong> avec 3 jours
                  d&apos;intervalle monte la délivrabilité à <strong>93 %</strong>, contre
                  71 % en bourrinant.
                </li>
              </ul>
              <p>
                Ce qui gagne, ce n&apos;est ni « l&apos;humain seul » ni « le robot
                seul ». C&apos;est un <strong>système pensé</strong> où l&apos;IA amplifie
                une stratégie — ciblage, signal, cadence, message humain — au lieu de la
                remplacer. L&apos;IA est un <strong>levier</strong>, pas un pilote
                automatique. C&apos;est exactement l&apos;esprit de notre{" "}
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
                « L&apos;IA va remplacer les commerciaux » est le genre de phrase qui fait
                vendre des abonnements — et qui te fait déléguer ton jugement à un robot
                qui spamme. Les acheteurs, eux, sentent le message générique à dix mètres
                et l&apos;ignorent.
              </p>
              <p>
                Ce qui te ramène des clients, ce n&apos;est pas de retirer l&apos;humain
                de l&apos;équation. C&apos;est de mettre l&apos;IA <strong>au service
                d&apos;un système intelligent</strong> : le bon message, à la bonne
                personne, au bon moment, à une cadence qui préserve ta délivrabilité. Le
                bricolage « bouton magique » perd. Le système pensé gagne.
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
                  <a className="underline hover:text-foreground" href="https://www.digitalapplied.com/blog/ai-sdr-real-performance-100k-email-analysis-2026" target="_blank" rel="noopener noreferrer nofollow">
                    DigitalApplied — AI SDR Real Performance (analyse de 100K emails, 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://instantly.ai/cold-email-benchmark-report-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Instantly — Cold Email Benchmark Report 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.unifygtm.com/explore/cold-email-2026-domain-setup-deliverability-sequences" target="_blank" rel="noopener noreferrer nofollow">
                    Unify — Cold Email 2026 : domaines, délivrabilité, séquences
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système d&apos;acquisition qui tient la route, pas un robot qui spamme ?
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
