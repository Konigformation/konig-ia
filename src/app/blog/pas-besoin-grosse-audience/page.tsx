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
  slug: "pas-besoin-grosse-audience",
  title:
    "Tu n'as pas besoin d'une grosse audience pour vivre de ton activité — et voici la preuve",
  description:
    "Contre-tendance — Une petite audience engagée bat 50 000 abonnés passifs. Les données 2026 le prouvent, et voici ce qui compte vraiment pour signer des clients.",
  date: "2026-09-09",
  dateLabel: "9 septembre 2026",
  readTime: "9 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/pas-besoin-grosse-audience.svg",
  imageAlt:
    "Tu n'as pas besoin d'une grosse audience : une audience massive mais passive face à une petite audience engagée qui achète — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "grosse audience",
    "petite audience engagée",
    "nombre d'abonnés",
    "vivre de son activité",
    "micro-audience conversion",
    "vanity metrics",
    "audience vs revenu",
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
    q: "Faut-il arrêter de chercher à grandir son audience ?",
    a: "Non, mais il faut arrêter d'en faire l'objectif. Le nombre d'abonnés est une métrique de vanité : ce qui paie ta facture, c'est le taux de conversion et l'engagement. Une audience qui grandit sans système pour la convertir ne fait que gonfler un chiffre.",
  },
  {
    q: "Combien de personnes faut-il vraiment pour en vivre ?",
    a: "Bien moins qu'on ne le croit. Les données 2026 montrent qu'une communauté de 1 000 abonnés vraiment engagés peut générer 2 000 à 8 000 € par mois selon le modèle. Le facteur limitant n'est pas la taille, c'est la qualité de la relation et ta capacité à convertir.",
  },
  {
    q: "Pourquoi les petits comptes convertissent-ils mieux ?",
    a: "Parce que la confiance et la proximité s'y maintiennent. L'engagement chute quand l'audience grandit : les nano-comptes affichent 4 à 14 % d'engagement selon la plateforme, contre moins de 1-2 % pour les très gros comptes. Et les leads engagés convertissent 4× mieux.",
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
        50 000 abonnés passifs, ou 3 000 qui achètent : le choix n&apos;est pas celui qu&apos;on croit.
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
                « Je commencerai à vendre quand j&apos;aurai plus d&apos;abonnés. » Cette
                phrase te retient depuis des mois. Tu cours après le nombre, tu compares
                ton compte à ceux des gros, tu attends le seuil magique. Et si c&apos;était
                exactement ce qui t&apos;empêche de signer ?
              </p>
              <p>
                Je ne dis pas que l&apos;audience ne sert à rien. Je dis que{" "}
                <strong>viser la taille</strong> est le mauvais objectif — et les données
                2026 le prouvent noir sur blanc.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que tout le monde croit (et pourquoi)
              </h2>
              <p>
                <strong>Ce que ta cible fait :</strong> elle repousse la vente en
                attendant « d&apos;avoir assez d&apos;audience », et optimise ses posts
                pour les abonnés plutôt que pour les clients. <strong>Pourquoi elle y
                croit :</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>Le nombre rassure.</strong> Un gros chiffre d&apos;abonnés ressemble à du succès, même s&apos;il ne rapporte rien.</li>
                <li><strong>Les gourous exhibent leurs stats.</strong> « J&apos;ai fait 100k followers » vend des formations — pas forcément des revenus pour toi.</li>
                <li><strong>C&apos;est plus confortable.</strong> Poster pour grossir évite le vrai inconfort : proposer, vendre, relancer.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La faille : l&apos;engagement s&apos;effondre quand l&apos;audience grossit
              </h2>
              <p>
                Voici ce que le nombre cache. Plus une audience grandit, plus elle se
                refroidit. Les données 2026 :
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  Les <strong>nano-comptes (1 000-10 000) affichent 4,2 à 5 %
                  d&apos;engagement</strong>, contre <strong>0,8 à 1 %</strong> pour les
                  méga-comptes (1 M+). Sur TikTok, l&apos;écart va de 9,5-14 % à 1,8-5 %.
                </li>
                <li>
                  Les <strong>leads engagés convertissent 4× mieux</strong> que les leads
                  passifs.
                </li>
                <li>
                  Fais le calcul : <strong>3 000 abonnés à 5 % de conversion (150
                  clients potentiels) battent 50 000 abonnés à 0,5 % (250)</strong> —
                  parce que ces 150-là achètent, reviennent et te recommandent.
                </li>
              </ul>
              <p>
                Autrement dit, en visant la taille, tu optimises la métrique qui{" "}
                <strong>baisse</strong> quand tu réussis. Tu ajoutes des spectateurs, pas
                des clients.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La preuve par les revenus
              </h2>
              <p>
                Le plus frappant : <strong>1 000 abonnés vraiment engagés peuvent générer
                2 000 à 8 000 € par mois</strong> selon le modèle. Pas un million. Mille.
                47 % des marketeurs disent d&apos;ailleurs que les micro-communautés
                délivrent leurs meilleurs résultats. Le facteur limitant n&apos;a jamais
                été la taille — c&apos;est ta capacité à convertir la relation.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui marche vraiment à la place
              </h2>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>Parle à ceux qui sont déjà là.</strong> Une audience de 300 personnes bien ciblées suffit pour commencer à signer.</li>
                <li><strong>Optimise la conversion, pas la portée.</strong> Un point de capture, une offre claire, des relances.</li>
                <li><strong>Transforme chaque client en preuve et en recommandation</strong> — c&apos;est ce qui fait grandir un business, pas les likes.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La conclusion qui dérange
              </h2>
              <p>
                « Il faut une grosse audience » est une croyance qui arrange les vendeurs
                de rêve et qui te garde spectateur de ton propre business. La vérité,
                c&apos;est qu&apos;une petite audience engagée, branchée sur un{" "}
                <strong>système qui convertit</strong>, bat une foule passive à tous les
                coups. Le problème n&apos;a jamais été « pas assez de monde ». C&apos;est
                « pas de système pour transformer ce monde en clients ». Le bricolage de
                la vanité perd. Le système pensé gagne.
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
                  <a className="underline hover:text-foreground" href="https://www.bigeyeagency.com/insights/influencer-engagement-metrics-guide" target="_blank" rel="noopener noreferrer nofollow">
                    Bigeye — Influencer Engagement Metrics Guide (2026 benchmarks)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://blog.liinks.co/how-to-monetize-a-small-audience-a-guide-for-creators-under-10k" target="_blank" rel="noopener noreferrer nofollow">
                    Liinks — How to Monetize a Small Audience (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux convertir l&apos;audience que tu as déjà, sans attendre 100k abonnés ?
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
