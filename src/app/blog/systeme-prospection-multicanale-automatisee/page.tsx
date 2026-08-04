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
  slug: "systeme-prospection-multicanale-automatisee",
  title:
    "Le système en 3 étapes pour automatiser ta prospection multicanale de A à Z",
  description:
    "Système — Le plan complet pour automatiser ta prospection multicanale LinkedIn + email et générer +40 % d'engagement. Séquence, cadence jour par jour et automatisation.",
  date: "2026-08-03",
  dateLabel: "3 août 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-prospection-multicanale-automatisee.svg",
  imageAlt:
    "Le système en 3 étapes pour automatiser la prospection multicanale : LinkedIn et email convergent vers un agenda de rendez-vous — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "prospection multicanale",
    "automatiser la prospection",
    "séquence LinkedIn email",
    "acquisition clients automatisée",
    "cadence de prospection 2026",
    "prospection LinkedIn automatique",
    "système d'acquisition",
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
    q: "Pourquoi une prospection multicanale plutôt qu'un seul canal ?",
    a: "Parce que tes prospects ne vivent pas tous au même endroit. Les données 2026 montrent qu'une séquence multicanale (email + LinkedIn) génère environ +40 % d'engagement par rapport à un canal isolé, et que les meilleures équipes atteignent 15 à 25 % de réponse.",
  },
  {
    q: "Combien de messages faut-il dans une séquence ?",
    a: "Quatre à cinq, pensés comme une conversation et non comme cinq pitchs : accroche sans vente, ressource utile, proposition, relance courte avec preuve, puis un message « break-up » qui laisse la porte ouverte.",
  },
  {
    q: "Automatiser la prospection, est-ce légal et sans risque pour mes comptes ?",
    a: "L'automatisation ne dispense pas de respecter le cadre légal (RGPD, consentement, base de contacts propre) ni les limites des plateformes. Un système bien conçu respecte des volumes prudents, personnalise chaque message et s'arrête dès qu'un prospect répond — c'est ce qui protège ta délivrabilité et tes comptes.",
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
        LinkedIn + email, orchestrés en une seule séquence qui remplit ton agenda.
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
                Tu prospectes par email uniquement ? Tu passes à côté de ceux qui ne
                lisent que LinkedIn. Que par LinkedIn ? Tu rates ceux qui vivent dans
                leur boîte mail. Un seul canal, c&apos;est une seule porte — et le
                prospect prend souvent l&apos;autre.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi le multicanal, et pourquoi maintenant
              </h2>
              <p>
                La donnée 2026 est nette : une <strong>séquence multicanale génère
                environ +40 % d&apos;engagement</strong> par rapport à un canal isolé,
                et les meilleures équipes tournent à 15 à 25 % de réponse. Le problème
                n&apos;est pas de savoir <em>quoi</em> faire. C&apos;est de le faire{" "}
                <strong>avec régularité, sans y passer tes soirées.</strong> D&apos;où
                le système en 3 étapes.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — La liste et le message (le carburant)
              </h2>
              <p>
                Reprends la méthode « signal-based » (voir notre{" "}
                <Link
                  href="/blog/hack-listes-prospects-qualifies-claude"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  hack pour sortir des listes qualifiées
                </Link>
                ) : liste ciblée + accroche personnalisée. Puis prépare{" "}
                <strong>une seule séquence</strong> de 4 à 5 messages, pensée comme une
                conversation :
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li><strong>Message 1</strong> — accroche signal, zéro vente.</li>
                <li><strong>Message 2</strong> — une ressource ou une observation utile.</li>
                <li><strong>Message 3</strong> — la proposition (audit, appel).</li>
                <li><strong>Message 4</strong> — relance courte + preuve.</li>
                <li><strong>Message 5</strong> — le « break-up » : « je te laisse tranquille, dis-moi juste si le timing n&apos;est pas bon ».</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — La cadence multicanale (le rythme)
              </h2>
              <p>
                Alterne les canaux pour rester présent sans harceler. Une cadence
                éprouvée :
              </p>
              <ul className="ml-5 list-disc space-y-1.5 marker:text-[var(--accent-solid)]">
                <li><strong>Jour 1</strong> — invitation LinkedIn (sans note ou note ultra-courte).</li>
                <li><strong>Jour 3</strong> — email n°1 (accroche signal).</li>
                <li><strong>Jour 7</strong> — message LinkedIn (une fois la connexion acceptée).</li>
                <li><strong>Jour 10</strong> — email de relance.</li>
                <li><strong>Jour 14</strong> — break-up.</li>
              </ul>
              <p>
                Le prospect te croise sur deux terrains, ce qui crée un effet de
                familiarité — sans que tu doubles ta charge de travail.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — L&apos;automatisation et la mesure (le moteur)
              </h2>
              <p>
                C&apos;est ici que la plupart abandonnent, parce qu&apos;ils font tout
                manuellement. Le système, lui :
              </p>
              <ul className="ml-5 list-decimal space-y-1.5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li><strong>Déclenche</strong> la séquence dès qu&apos;un prospect entre dans la liste.</li>
                <li><strong>Personnalise</strong> chaque message avec l&apos;IA (le signal, le prénom, le contexte).</li>
                <li><strong>Arrête</strong> automatiquement la séquence dès qu&apos;il répond.</li>
                <li><strong>Mesure</strong> le taux de réponse par message pour couper ce qui ne convertit pas.</li>
              </ul>
              <p>
                Tu ne « fais » plus la prospection. Tu la <strong>pilotes</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Du plan clair au système qui tourne
              </h2>
              <p>
                Sur le papier, ces 3 étapes sont limpides. En pratique, les brancher
                ensemble — outils, connexions, IA, sécurité des comptes — c&apos;est
                plusieurs semaines de bricolage, et le premier grain de sable casse la
                chaîne. C&apos;est précisément le genre de système que Konig IA installe
                <strong> clé en main en 48 h</strong> : contenu pour attirer,
                prospection multicanale pour contacter, tunnel pour convertir. Pour la
                vue d&apos;ensemble, lis aussi notre guide{" "}
                <Link
                  href="/blog/generer-clients-ia-guide-complet-2026"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  générer des clients avec l&apos;IA
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
                  <a className="underline hover:text-foreground" href="https://expandi.io/blog/state-of-li-outreach-h1-2026/" target="_blank" rel="noopener noreferrer nofollow">
                    Expandi — State of LinkedIn Outreach (H1 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://salesmotion.io/blog/cold-outreach-best-practices" target="_blank" rel="noopener noreferrer nofollow">
                    Salesmotion — Cold Outreach Playbook 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux ce système multicanal branché et opérationnel ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h, sans agence. Teste
                ton éligibilité à l&apos;Audit IA offert : 30 minutes, sans engagement.
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
