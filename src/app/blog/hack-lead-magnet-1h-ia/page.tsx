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
  slug: "hack-lead-magnet-1h-ia",
  title:
    "Le hack pour créer un lead magnet qui convertit en 1 heure avec l'IA",
  description:
    "Hack — Crée un lead magnet qui capture des emails en 1 heure avec l'IA. Pourquoi une checklist (24-42 %) écrase un ebook (4-8 %), et la méthode pas à pas.",
  date: "2026-08-20",
  dateLabel: "20 août 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-lead-magnet-1h-ia.svg",
  imageAlt:
    "Créer un lead magnet qui convertit en 1 heure avec l'IA : un aimant attire des emails de prospects — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "lead magnet",
    "créer un lead magnet avec l'IA",
    "aimant à prospects",
    "capturer des emails",
    "lead magnet qui convertit",
    "générer des leads IA",
    "checklist lead magnet",
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
    q: "C'est quoi un lead magnet ?",
    a: "Un contenu gratuit et immédiatement utile (checklist, modèle, mini-audit, calculateur) que tu offres en échange d'un email. C'est le point d'entrée qui transforme un visiteur anonyme en contact que tu peux relancer.",
  },
  {
    q: "Quel format convertit le mieux ?",
    a: "Les données 2026 sont claires : une checklist ou un cheat sheet convertit souvent entre 24 et 42 %, quand un ebook plafonne à 4-8 %. Les formats interactifs (quiz, calculateur) apportent jusqu'à +70 à 78 % de captures en plus. Fais court et actionnable, pas long et théorique.",
  },
  {
    q: "Faut-il du trafic payant pour que ça marche ?",
    a: "Non. Le trafic email convertit le mieux (autour de 19 %), devant le SEO. Un bon lead magnet fonctionne d'abord avec l'audience que tu as déjà — d'où l'intérêt de le brancher sur ton contenu et tes relances.",
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
        Un bon lead magnet transforme des visiteurs anonymes en contacts.
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
                Tu attires des visiteurs, mais ils repartent sans laisser de trace ?
                C&apos;est le trou noir de la plupart des indépendants : pas de{" "}
                <strong>lead magnet</strong> pour capturer l&apos;email, donc aucun moyen
                de recontacter. Bonne nouvelle : avec l&apos;IA, tu en crées un qui
                convertit en une heure.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                D&apos;abord, arrête de vouloir écrire un ebook
              </h2>
              <p>
                L&apos;erreur classique : passer une semaine sur un ebook de 30 pages que
                personne ne lit. Les données 2026 sont sans appel : un ebook convertit à{" "}
                <strong>4-8 %</strong>, quand une <strong>checklist ou un cheat sheet
                monte à 24-42 %</strong>, et les formats interactifs (quiz, calculateur)
                ajoutent jusqu&apos;à <strong>+70 %</strong> de captures. La règle :{" "}
                <strong>court, actionnable, résultat immédiat</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Trouve la promesse (10 min)
              </h2>
              <p>Un bon lead magnet résout UN problème précis, vite. Demande à l&apos;IA :</p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Ma cible est [X], son problème n°1 est [Y]. Propose 5 idées de lead
                magnets courts et actionnables (checklist, modèle, mini-audit) qui
                donnent un résultat en moins de 10 minutes. Pour chacun, la promesse en
                une phrase. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Génère le contenu (20 min)
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Rédige la checklist "[promesse]" : 10 à 15 points concrets, formulés en
                actions, regroupés en 3 étapes. Ton direct, zéro blabla. Ajoute en fin un
                encart "l&apos;erreur à éviter". »
              </blockquote>
              <p>
                Relis, coupe ce qui est générique, ajoute <strong>un exemple tiré de ton
                expérience</strong> : c&apos;est ce détail vécu qui fait la différence
                avec le contenu IA lambda.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Mets en forme et titre (15 min)
              </h2>
              <p>
                Un titre orienté bénéfice double les opt-ins. Demande 10 variantes, garde
                la plus concrète (« La checklist en 12 points pour… »). Mets en page
                proprement (un simple document exporté en PDF suffit).
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Capture et enchaîne (15 min)
              </h2>
              <p>
                Un formulaire simple (prénom + email), une page courte qui répète la
                promesse, et surtout : <strong>une séquence de bienvenue</strong> qui
                envoie le magnet puis relance. Sans ça, tu captures des emails qui
                dorment. C&apos;est exactement le rôle de{" "}
                <Link
                  href="/blog/systeme-tunnel-vente-automatise-3-etapes"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  ton tunnel de vente automatisé
                </Link>
                .
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Du fichier isolé à l&apos;actif qui tourne
              </h2>
              <p>
                Un lead magnet, c&apos;est bien. Mais posé seul sur un site, il capture
                trois emails et s&apos;endort. Sa vraie puissance vient quand il est{" "}
                <strong>alimenté par ton contenu</strong> (pour le trafic) et{" "}
                <strong>relié à des relances automatiques</strong> (pour la conversion).
                Là, il devient une machine à contacts qui tourne en continu.
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
                    Shno — Lead Magnet Conversion Statistics 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.digitalapplied.com/blog/lead-magnet-conversion-benchmarks-2026-b2b-data-reference" target="_blank" rel="noopener noreferrer nofollow">
                    DigitalApplied — Lead Magnet Conversion Benchmarks 2026 (B2B)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un lead magnet branché sur une vraie machine à clients ?
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
