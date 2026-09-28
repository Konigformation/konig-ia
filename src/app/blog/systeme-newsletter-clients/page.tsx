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
  slug: "systeme-newsletter-clients",
  title:
    "Le système de newsletter qui transforme des abonnés en clients (le seul canal que tu possèdes)",
  description:
    "Système — L'email rapporte jusqu'à 36 € pour 1 € investi. Le système de newsletter en 4 étapes pour transformer une audience que tu possèdes en clients réguliers.",
  date: "2026-09-28",
  dateLabel: "28 septembre 2026",
  readTime: "8 min",
  author: "Konig Formation",
  category: "Système",
  image: "/blog/systeme-newsletter-clients.svg",
  imageAlt:
    "Le système de newsletter : une audience d'abonnés que l'on possède, nourrie et convertie en clients — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "système de newsletter",
    "email marketing",
    "audience possédée",
    "nurturing email",
    "convertir ses abonnés",
    "newsletter qui convertit",
    "email ROI",
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
    q: "La newsletter, ce n'est pas un truc du passé ?",
    a: "Au contraire, c'est l'un des canaux les plus rentables de 2026 : l'email rapporte en moyenne 36 à 42 € pour 1 € investi, 59 % des marketeurs B2B disent que c'est leur canal qui génère le plus de revenus, et 73 % l'utilisent pour nourrir leurs leads. Surtout, c'est le seul canal que tu possèdes vraiment.",
  },
  {
    q: "Pourquoi « posséder » son audience change tout ?",
    a: "Parce que sur les réseaux ou Google, tu loues ton audience : un changement d'algorithme et ta portée s'effondre. Ta liste email, elle, t'appartient : tu décides quand et comment tu parles à tes abonnés, sans intermédiaire. C'est ton actif le plus stable.",
  },
  {
    q: "Faut-il écrire une newsletter chaque semaine à la main ?",
    a: "Non. Avec un système, tu pars de ta matière (contenus, appels, questions clients) et l'IA t'aide à décliner et rédiger. La régularité vient du process, pas de ta motivation du dimanche soir.",
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
        Ta liste email : le seul public que personne ne peut t&apos;enlever.
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
                Tu construis ton audience sur LinkedIn, Instagram ou Google — et un
                changement d&apos;algorithme peut la faire disparaître du jour au
                lendemain. Il existe un canal que personne ne peut t&apos;enlever, et
                c&apos;est le plus rentable : ta <strong>newsletter</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi l&apos;email écrase tout le reste
              </h2>
              <p>
                Les chiffres 2026 sont sans appel : l&apos;email rapporte en moyenne{" "}
                <strong>36 à 42 € pour 1 € investi</strong>, <strong>59 % des marketeurs
                B2B</strong> disent que c&apos;est leur canal n°1 en revenus, et{" "}
                <strong>73 %</strong> l&apos;utilisent pour nourrir leurs leads. Surtout :
                c&apos;est le seul canal que tu <strong>possèdes</strong> — pas de portée
                bridée, pas d&apos;intermédiaire.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Capte des abonnés (pas des inconnus de passage)
              </h2>
              <p>
                Une newsletter sans abonnés, c&apos;est un journal intime. Mets une raison
                claire de s&apos;inscrire à chaque point de contact : un lead magnet, une
                promesse nette (« chaque semaine, un système d&apos;acquisition
                décortiqué »). Ton contenu attire, la newsletter capture.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Apporte de la valeur avant de vendre
              </h2>
              <p>
                Le piège : ne parler que de toi. La règle : <strong>donne, donne, donne,
                puis demande</strong>. Chaque numéro doit apprendre ou faire gagner quelque
                chose. C&apos;est ce qui installe la confiance qui fera vendre plus tard —
                et une newsletter que les gens ouvrent vraiment.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Personnalise et convertis
              </h2>
              <p>
                La personnalisation n&apos;est pas un détail : les CTA personnalisés
                convertissent <strong>202 % mieux</strong> que les génériques. Segmente
                (par intérêt, par étape) et adapte ton appel à l&apos;action. Chaque
                numéro doit avoir une porte de sortie claire vers ton offre ou ton audit.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Systématise avec l&apos;IA
              </h2>
              <p>Le système :</p>
              <ul className="ml-5 list-decimal space-y-1.5 marker:font-semibold marker:text-[var(--accent-solid)]">
                <li><strong>alimente</strong> la newsletter depuis ta matière (contenus, appels, questions clients) ;</li>
                <li><strong>rédige</strong> les brouillons avec l&apos;IA, à ta voix ;</li>
                <li><strong>déclenche</strong> une séquence de bienvenue automatique pour chaque nouvel abonné ;</li>
                <li><strong>mesure</strong> ouvertures, clics et ventes pour garder ce qui marche.</li>
              </ul>
              <p>
                Une séquence de nurturing bien pensée peut faire grimper tes leads
                qualifiés de plusieurs centaines de pour cent — sans un abonné de plus.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le canal qui relie contenu et conversion
              </h2>
              <p>
                La newsletter n&apos;est pas un levier isolé : c&apos;est le pont entre ton{" "}
                <Link
                  href="/blog/systeme-contenu-ia-attirer-clients"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  contenu qui attire
                </Link>{" "}
                et ton{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  tunnel qui convertit
                </Link>
                . Branchée au reste, elle transforme une audience de passage en clients
                réguliers — c&apos;est exactement ce qu&apos;orchestre une vraie machine à
                clients.
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
                  <a className="underline hover:text-foreground" href="https://stripo.email/blog/email-newsletter-statistics-data-backed-proof-of-why-newsletters-still-drive-business-growth/" target="_blank" rel="noopener noreferrer nofollow">
                    Stripo — Email newsletter statistics (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://sqmagazine.co.uk/b2b-email-marketing-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    SQ Magazine — B2B Email Marketing Statistics 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux une newsletter branchée à un vrai système d&apos;acquisition ?
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
