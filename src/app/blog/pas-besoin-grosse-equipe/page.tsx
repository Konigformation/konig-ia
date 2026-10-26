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
  slug: "pas-besoin-grosse-equipe",
  title:
    "« Il faut une grosse équipe (ou une agence) pour scaler » : faux — voici pourquoi un solo + IA suffit",
  description:
    "Contre-tendance — L'économie solo pèse 1 700 milliards de dollars. Pourquoi tu n'as pas besoin d'une grosse équipe ni d'une agence pour scaler, et ce qui compte vraiment.",
  date: "2026-10-28",
  dateLabel: "28 octobre 2026",
  readTime: "9 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/pas-besoin-grosse-equipe.svg",
  imageAlt:
    "Tu n'as pas besoin d'une grosse équipe : une personne équipée d'IA égale une équipe entière — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "grosse équipe pour scaler",
    "scaler sans embaucher",
    "solopreneur IA",
    "sans agence",
    "entreprise d'une personne",
    "scaler seul",
    "automatiser avec l'IA",
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
    q: "On ne peut vraiment pas scaler sans équipe ?",
    a: "On peut aller bien plus loin qu'avant en restant solo. L'économie des indépendants pèse environ 1 700 milliards de dollars aux États-Unis (données Census sur les non-employeurs), et la majorité des solopreneurs utilisent déjà l'IA dans leur activité. Ce qui demandait une équipe (produire du contenu, qualifier, relancer) peut aujourd'hui être systématisé par une personne outillée.",
  },
  {
    q: "Pourquoi pas une agence, alors ?",
    a: "Une agence, c'est un coût fixe élevé, une marge qui part en honoraires de gestion, et surtout une dépendance : tu ne possèdes rien à la fin. Un système que tu installes une fois t'appartient — tu gardes le contrôle et la marge.",
  },
  {
    q: "Mais je suis déjà débordé seul, comment en faire plus ?",
    a: "Justement : si tu es débordé, c'est que tu fais à la main ce qu'un système devrait faire. Le problème n'est pas le manque de bras, c'est l'absence d'automatisation. On ne te demande pas de travailler plus, mais de mettre un système au travail.",
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
        Le levier a changé : une personne outillée fait le travail d&apos;une équipe.
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
                « Pour vraiment grandir, il me faudrait une équipe… ou une agence. » Cette
                phrase te sert d&apos;excuse pour rester bloqué. Sauf qu&apos;en 2026, le
                levier a changé : une personne bien outillée fait aujourd&apos;hui le
                travail de toute une équipe.
              </p>
              <p>
                Je ne dis pas qu&apos;on ne recrute jamais. Je dis que croire qu&apos;il
                faut <strong>une grosse équipe pour scaler</strong> est un frein coûteux —
                et les faits le montrent.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que tout le monde croit (et pourquoi)
              </h2>
              <p>
                <strong>Ce que ta cible fait :</strong> elle repousse sa croissance en
                attendant « d&apos;avoir les moyens d&apos;embaucher » ou délègue tout à une
                agence coûteuse. <strong>Pourquoi elle le croit :</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>Le modèle d&apos;hier.</strong> « Plus de résultats = plus de bras » était vrai… avant l&apos;automatisation. On raisonne avec les règles du passé.</li>
                <li><strong>Les agences vendent la dépendance.</strong> Tout un marché vit de l&apos;idée que tu ne peux pas y arriver seul.</li>
                <li><strong>Se cacher derrière.</strong> « Je ne peux pas, je suis seul » est une excuse confortable pour ne pas s&apos;attaquer au vrai sujet : le système.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La faille : le levier n&apos;est plus le nombre de bras
              </h2>
              <p>Regarde ce qui se passe réellement :</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  L&apos;économie des indépendants pèse environ <strong>1 700 milliards de
                  dollars</strong> aux États-Unis, portée par des dizaines de millions de
                  <strong> entreprises sans salarié</strong> (données Census).
                </li>
                <li>
                  La majorité des solopreneurs <strong>utilisent déjà l&apos;IA</strong>{" "}
                  dans leur activité — autour de <strong>3 sur 4</strong> selon les études
                  récentes.
                </li>
                <li>
                  Des tâches qui demandaient autrefois une équipe — produire du contenu,
                  qualifier des prospects, relancer, préparer des supports — peuvent
                  aujourd&apos;hui être <strong>systématisées par une seule personne</strong>.
                </li>
              </ul>
              <p>
                Autrement dit : ce qui manque à la plupart des solos, ce ne sont pas des
                bras — c&apos;est un <strong>système</strong> qui fait le travail répétitif
                à leur place.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi l&apos;agence est souvent le pire choix
              </h2>
              <p>
                Déléguer à une agence, c&apos;est <strong>payer cher, perdre en marge, et
                ne rien posséder</strong> à la fin : le jour où tu arrêtes, tout
                s&apos;arrête. Un système que tu installes une fois t&apos;appartient. Tu
                gardes le contrôle, la marge, et un actif qui continue de tourner —
                exactement l&apos;inverse de la dépendance.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui marche vraiment
              </h2>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>Systématise avant d&apos;embaucher.</strong> Automatise le répétitif ; tu verras que tu as besoin de bien moins de bras que tu ne crois.</li>
                <li><strong>Garde ce qui demande du jugement.</strong> L&apos;humain (toi) sur la relation et la décision ; l&apos;IA sur l&apos;exécution.</li>
                <li><strong>Possède ton système.</strong> Un actif qui t&apos;appartient bat une agence que tu loues.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La conclusion qui dérange
              </h2>
              <p>
                « Il faut une grosse équipe pour scaler » est la croyance qui arrange les
                agences et qui te maintient bloqué. La vérité : tu n&apos;as pas besoin de
                plus de bras, tu as besoin d&apos;un <strong>système</strong>. Une personne
                + une machine à clients bien pensée fait aujourd&apos;hui ce qui demandait
                hier une équipe entière. Le bricolage qui attend « les moyens » perd. Le
                système que tu possèdes gagne.
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
                  <a className="underline hover:text-foreground" href="https://autofaceless.ai/blog/solopreneur-statistics-2026" target="_blank" rel="noopener noreferrer nofollow">
                    AutoFaceless — Solopreneur Statistics 2026 (29,8 M, 1,7 T$)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://lonelyentrepreneur.com/one-person-business-ai/" target="_blank" rel="noopener noreferrer nofollow">
                    The Lonely Entrepreneur — One-Person Business &amp; AI (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux la puissance d&apos;une équipe — sans l&apos;équipe ni l&apos;agence ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h, sans agence, même en
                partant de zéro. Teste ton éligibilité à l&apos;Audit IA offert : 30
                minutes pour un plan clair.
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
