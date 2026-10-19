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
  slug: "hack-profil-linkedin-qui-vend",
  title:
    "Le hack pour transformer ton profil LinkedIn en machine à prospects (avec l'IA, en 1 heure)",
  description:
    "Hack — Ton profil LinkedIn est une page de vente qui tourne 24/7, et tu la gâches. Comment l'optimiser avec l'IA pour qu'il attire et convertisse. Pas à pas.",
  date: "2026-10-20",
  dateLabel: "20 octobre 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-profil-linkedin-qui-vend.svg",
  imageAlt:
    "Transformer son profil LinkedIn en machine à prospects : un profil optimisé avec accroche, bio et appel à l'action qui attire des contacts — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "profil LinkedIn qui vend",
    "optimiser son profil LinkedIn",
    "profil LinkedIn prospection",
    "titre LinkedIn accrocheur",
    "bio LinkedIn",
    "générer des prospects LinkedIn",
    "LinkedIn acquisition",
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
    q: "Pourquoi le profil LinkedIn compte autant ?",
    a: "Parce que c'est la première chose que regarde un prospect quand tu le contactes, quand il voit ton post ou quand on te recommande. Si ton profil ne dit pas clairement à qui tu t'adresses et quel résultat tu apportes, tu perds le prospect avant même d'avoir parlé. C'est une page de vente qui tourne en continu — autant qu'elle vende.",
  },
  {
    q: "La différence entre un profil 'CV' et un profil qui vend ?",
    a: "Un profil CV parle de toi (ton parcours, tes titres). Un profil qui vend parle de ton client : son problème, le résultat que tu lui apportes, la preuve que ça marche, et l'étape suivante. Tu passes du 'regardez qui je suis' au 'voici ce que je peux faire pour vous'.",
  },
  {
    q: "L'IA peut-elle écrire mon profil à ma place ?",
    a: "Elle rédige d'excellents brouillons à partir de TA matière (ton offre, tes clients, tes résultats). À toi d'ajouter ta voix et tes exemples réels. L'IA structure et accélère ; l'authenticité, c'est toi.",
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
        Ton profil te vend (ou te dessert) 24h/24 — à toi de choisir.
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
                Tu prospectes, tu postes, tu commentes… et tes prospects atterrissent tous
                au même endroit : ton profil LinkedIn. S&apos;il ressemble à un CV, tu les
                perds. Voici comment en faire une vraie page de vente, en une heure.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ton profil est une page de vente (qui tourne 24/7)
              </h2>
              <p>
                Chaque fois qu&apos;on te contacte, qu&apos;on voit ton post ou qu&apos;on
                te recommande, on va voir ton profil. C&apos;est <strong>le point de
                passage obligé</strong> de toute ton acquisition LinkedIn. Pourtant, la
                plupart des profils parlent du passé (« 10 ans d&apos;expérience en… »)
                au lieu de vendre un résultat futur. On corrige ça.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Le titre : ta promesse, pas ton poste
              </h2>
              <p>
                Ton titre (sous ton nom) est la ligne la plus vue. Remplace « Consultant »
                par une promesse claire. Demande à l&apos;IA :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « J&apos;aide [cible] à [résultat] grâce à [méthode]. Donne 7 titres
                LinkedIn courts et percutants sur ce modèle, orientés bénéfice, sans
                jargon. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — La bannière et la photo : la première impression
              </h2>
              <p>
                Ta bannière (l&apos;image de fond) est un espace publicitaire gratuit :
                mets-y ta promesse et ton offre, pas un paysage. Photo nette, souriante,
                professionnelle. En 2 secondes, le visiteur doit comprendre ce que tu fais
                et pour qui.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — La section « Infos » : parle de LUI, pas de toi
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Rédige ma section "Infos" LinkedIn, structure : (1) le problème de ma
                cible en 2 lignes, (2) le résultat que j&apos;apporte, (3) comment (ma
                méthode), (4) une preuve, (5) un appel à l&apos;action clair. Ton direct,
                tutoiement, zéro jargon. »
              </blockquote>
              <p>
                Les premières lignes sont cruciales : elles s&apos;affichent avant le « voir
                plus ». Mets l&apos;accroche la plus forte en tête.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — La section « Sélection » + l&apos;appel à l&apos;action
              </h2>
              <p>
                Épingle en « Sélection » tes meilleures preuves (cas client, témoignage,
                lead magnet) et un lien vers ton point de capture. Et termine ta bio par{" "}
                <strong>une seule action claire</strong> : « Réserve un appel », « Télécharge
                le guide ». Un profil sans appel à l&apos;action, c&apos;est une boutique
                sans caisse.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Un profil optimisé, c&apos;est le début — pas la machine
              </h2>
              <p>
                Un profil qui vend transforme mieux les visites… encore faut-il générer
                ces visites, et convertir ceux qui cliquent. Seul, ton profil attend. Branché
                à un <strong>système</strong> — contenu qui attire, prospection qui amène,
                tunnel qui convertit —, il devient une vraie porte d&apos;entrée. Vois comment
                aligner tout ça avec ton{" "}
                <Link
                  href="/blog/hack-offre-irresistible-ia"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  offre irrésistible
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
                    Expandi — State of LinkedIn Outreach (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://www.teract.ai/resources/linkedin-algorithm-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Teract.ai — LinkedIn Algorithm 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système qui amène des visiteurs à ton profil — et les convertit ?
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
