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
  slug: "hack-page-de-vente-ia",
  title:
    "Le hack pour écrire une page de vente qui convertit avec l'IA (en une après-midi)",
  description:
    "Hack — Une page de vente, ce n'est pas de la déco : c'est une structure. La méthode et les prompts pour écrire une page qui convertit avec l'IA, section par section.",
  date: "2026-10-27",
  dateLabel: "27 octobre 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-page-de-vente-ia.svg",
  imageAlt:
    "Écrire une page de vente avec l'IA : une page structurée accroche, preuve, offre et appel à l'action qui convertit — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "page de vente",
    "écrire une page de vente avec l'IA",
    "copywriting IA",
    "page de vente qui convertit",
    "structure page de vente",
    "landing page qui vend",
    "sales page",
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
    q: "Pourquoi ma page de vente ne convertit pas ?",
    a: "Le plus souvent, parce qu'elle parle de toi au lieu de parler du problème du lecteur, ou parce qu'il manque une structure. Une page qui convertit suit un ordre précis : accroche, problème, solution, preuve, offre, levée des objections, appel à l'action. Si une brique manque, la vente fuit.",
  },
  {
    q: "L'IA peut-elle écrire une bonne page de vente ?",
    a: "Oui, à condition de la guider section par section avec TA matière (ton offre, ton client idéal, tes preuves). Lui demander « écris-moi une page de vente » d'un coup donne du générique. La découper en blocs, avec un prompt par bloc, donne un résultat redoutable.",
  },
  {
    q: "Faut-il un long texte ou une page courte ?",
    a: "La bonne longueur, c'est celle qui lève toutes les objections — ni plus, ni moins. Pour une offre simple, une page courte suffit ; pour un accompagnement à enjeu, il faut souvent plus de preuve et de réassurance. L'important n'est pas la longueur, c'est que chaque ligne fasse avancer vers le « oui ».",
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
        Une page de vente, c&apos;est une structure — pas de l&apos;inspiration.
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
                Tu envoies des gens vers ta page… et ils repartent sans réserver. Le
                problème n&apos;est presque jamais le trafic : c&apos;est que ta page ne{" "}
                <strong>vend pas</strong>. Bonne nouvelle : une page de vente, ce
                n&apos;est pas du talent, c&apos;est une structure. Et l&apos;IA la remplit
                avec toi.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La règle d&apos;or : une page = une structure, pas de l&apos;inspiration
              </h2>
              <p>
                Une page qui convertit suit toujours le même ordre, parce qu&apos;il suit
                la façon dont un cerveau décide : <strong>accroche → problème → solution →
                preuve → offre → objections → appel à l&apos;action</strong>. Le hack :
                faire écrire chaque bloc séparément par l&apos;IA, avec ta matière.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Nourris l&apos;IA de ta matière
              </h2>
              <p>
                Avant d&apos;écrire, donne-lui le contexte : ton client idéal, son problème
                n°1, ton offre, tes preuves (résultats, témoignages), tes objections
                courantes. Sans ça, tu obtiens du générique.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — L&apos;accroche + le problème (le haut de page)
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Écris 5 accroches (titre + sous-titre) pour ma page de vente : résultat
                promis + pour qui + sans quelle douleur. Puis un paragraphe qui décrit le
                problème de mon client idéal avec SES mots, pour qu&apos;il se dise "c&apos;est
                exactement moi". »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Solution + preuve + offre (le cœur)
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « À partir de mon offre [X], écris : (1) comment elle résout le problème,
                en 3 points ; (2) une section preuve (où placer témoignages et résultats) ;
                (3) la présentation de l&apos;offre avec ce qui est inclus et le bénéfice de
                chaque élément. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 4 — Objections + appel à l&apos;action (le bas qui déclenche)
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Liste les 5 objections les plus probables à mon offre et rédige une
                réponse courte pour chacune (format FAQ). Puis écris l&apos;appel à
                l&apos;action final : une seule action claire, avec la garantie qui lève le
                risque. »
              </blockquote>
              <p>
                Astuce : une seule action par page. Un visiteur face à trois boutons
                n&apos;en clique aucun.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Une page qui vend ne suffit pas sans trafic qualifié
              </h2>
              <p>
                Même parfaite, ta page a besoin qu&apos;on l&apos;alimente en bons
                visiteurs — et qu&apos;on relance ceux qui ne convertissent pas du premier
                coup. Seule, c&apos;est une vitrine ; branchée à un <strong>système</strong>{" "}
                (contenu qui attire, prospection qui amène, relances qui convertissent),
                c&apos;est une machine. Commence par aligner ton{" "}
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
                  <a className="underline hover:text-foreground" href="https://www.shno.co/marketing-statistics/lead-magnet-conversion-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    Shno — Landing Page &amp; Conversion Statistics 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://provesrc.com/blog/social-proof-statistics/" target="_blank" rel="noopener noreferrer nofollow">
                    ProveSource — Social Proof Statistics (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux une page de vente branchée à un vrai système d&apos;acquisition ?
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
