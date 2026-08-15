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
  slug: "hack-reactiver-prospects-dormants-ia",
  title:
    "Le hack pour signer sans prospecter à froid : réveille ta base dormante avec l'IA",
  description:
    "Hack — Réactive tes prospects dormants avec l'IA : 15-30 % de conversion, 5-7× moins cher que l'acquisition à froid. Tuto pas à pas, prompts inclus.",
  date: "2026-08-13",
  dateLabel: "13 août 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-reactiver-prospects-dormants-ia.svg",
  imageAlt:
    "Réactiver ses prospects dormants avec l'IA : des contacts endormis se réveillent et deviennent des rendez-vous — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "réactiver ses prospects dormants",
    "relance client IA",
    "base de contacts dormante",
    "campagne de win-back",
    "prospection sans démarchage à froid",
    "réactivation base email",
    "relancer ses leads",
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
    q: "Qu'est-ce qu'un prospect dormant ?",
    a: "Un contact qui t'a déjà parlé sans acheter : devis sans suite, appel resté lettre morte, téléchargement d'un guide, ancien client inactif. Il te connaît déjà — c'est ce qui le rend bien plus facile à convertir qu'un inconnu contacté à froid.",
  },
  {
    q: "Pourquoi réactiver plutôt que prospecter à froid ?",
    a: "Parce que c'est plus rentable : un contact dormant réactivé convertit à 15-30 % dans une campagne de win-back bien menée, contre 1-3 % pour du trafic froid, et à un coût 5 à 7× inférieur à l'acquisition d'un nouveau contact.",
  },
  {
    q: "Combien de messages faut-il pour réactiver ?",
    a: "Ne mise pas sur un seul envoi : une séquence de 4 messages atteint jusqu'à 14,7 % de réactivation cumulée. L'IA te permet de personnaliser chaque message à l'échelle, sans y passer la journée.",
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
        Tes prospects dormants sont une mine d&apos;or que l&apos;IA sait réveiller.
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
                Tu passes tes journées à chasser des inconnus à froid, pendant que des
                dizaines de prospects qui t&apos;ont <strong>déjà parlé</strong> prennent
                la poussière dans ta boîte mail. C&apos;est l&apos;erreur la plus coûteuse
                de l&apos;indépendant : ignorer sa base tiède.
              </p>
              <p>
                Les chiffres sont sans appel : un prospect dormant réactivé convertit à{" "}
                <strong>15-30 %</strong> dans une campagne de win-back bien menée — sans
                commune mesure avec le trafic froid (1-3 %). Et ça coûte{" "}
                <strong>5 à 7× moins cher</strong> que d&apos;aller chercher un nouveau
                contact. Voici comment réveiller ta base, aujourd&apos;hui, gratuitement.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Ressors et trie ta base
              </h2>
              <p>
                Rassemble tous ceux qui t&apos;ont déjà contacté sans acheter : devis
                sans suite, appels restés lettre morte, téléchargements, anciens clients
                inactifs. Colle la liste dans Claude ou ChatGPT :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Voici mes contacts dormants (nom, dernière interaction, contexte).
                Classe-les en 3 groupes : (1) chaud — a montré un vrai intérêt, (2)
                tiède — a interagi une fois, (3) froid — à écarter. Justifie en une
                phrase. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Trouve le bon prétexte de relance
              </h2>
              <p>
                Relancer « juste pour prendre des nouvelles », c&apos;est mort. Il te
                faut une <strong>raison légitime</strong> : une nouveauté, un résultat,
                un contenu utile, un changement chez eux.
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Pour ce contact, propose 3 prétextes de reprise de contact crédibles
                et non commerciaux, basés sur [ta nouveauté / son secteur / son ancien
                besoin]. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Écris la séquence de réactivation (4 messages)
              </h2>
              <p>
                Ne mise pas sur un seul message : une <strong>séquence de 4 emails</strong>{" "}
                atteint jusqu&apos;à <strong>14,7 % de réactivation cumulée</strong>.
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Écris une séquence de 4 messages de réactivation, ton direct et humain,
                tutoiement : (1) reprise de contact + valeur, (2) preuve/cas concret, (3)
                proposition claire (audit/appel), (4) message de clôture qui laisse la
                porte ouverte. Pas de "j&apos;espère que tu vas bien". »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Personnalise à l&apos;échelle
              </h2>
              <p>
                C&apos;est là que l&apos;IA change tout. Au lieu de copier-coller, fais
                générer une variante par contact à partir de ton modèle + leur contexte.
                Tu gardes le côté humain <strong>sans y passer la journée</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 5 — Mesure et double la mise
              </h2>
              <p>
                Envoie par lots, note le taux de réponse. Le groupe « chaud » va sortir
                des rendez-vous vite. Réinvestis ce qui marche, coupe le reste. Pour aller
                chercher de nouveaux prospects avec la même rigueur, vois notre{" "}
                <Link
                  href="/blog/hack-listes-prospects-qualifies-claude"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  hack pour sortir des listes qualifiées avec Claude
                </Link>
                .
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Du coup de boost au flux permanent
              </h2>
              <p>
                Ce hack te donne des résultats rapides. Mais fait à la main, tu le lances
                une fois… puis tu oublies, et ta base se re-remplit de contacts oubliés.
                Un vrai <strong>système</strong> fait tourner cette réactivation en
                continu : tout contact qui ne convertit pas entre automatiquement dans
                une séquence de nurturing, relancé au bon moment — exactement ce que
                décrit notre{" "}
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
                  <a className="underline hover:text-foreground" href="https://eightx.co/blog/average-win-back-reactivation-rate-benchmarks" target="_blank" rel="noopener noreferrer nofollow">
                    Eightx — Win-back &amp; reactivation rate benchmarks
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://mailmend.io/blogs/win-back-campaign-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Mailmend — Win-back campaign statistics (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système qui relance ta base tout seul ?
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
