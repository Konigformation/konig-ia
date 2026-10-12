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
  slug: "pas-besoin-budget-pub",
  title:
    "« Sans budget pub, pas de clients » : faux — et c'est même l'inverse (la preuve chiffrée)",
  description:
    "Contre-tendance — Le coût des pubs a explosé (+222 % en 8 ans). Les boîtes dépendantes du payant paient 2-3× plus cher. Ce qui marche vraiment sans budget.",
  date: "2026-10-14",
  dateLabel: "14 octobre 2026",
  readTime: "9 min",
  author: "Konig Formation",
  category: "Contre-tendance",
  image: "/blog/pas-besoin-budget-pub.svg",
  imageAlt:
    "Tu n'as pas besoin d'un budget pub : la publicité payante coûte beaucoup plus cher qu'un système d'acquisition organique — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "budget pub",
    "acquisition sans publicité",
    "coût d'acquisition client",
    "publicité payante vs organique",
    "CAC",
    "acquisition organique",
    "avoir des clients sans pub",
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
    q: "La pub ne sert donc à rien ?",
    a: "Si, mais ce n'est ni un préalable ni un raccourci magique. La pub amplifie ce qui marche déjà ; elle ne crée pas une acquisition qui n'existe pas. Et son coût a explosé : la pub est devenue le moyen le plus cher d'acquérir, pas le plus accessible.",
  },
  {
    q: "Pourquoi l'organique coûte-t-il moins cher ?",
    a: "Parce que tu bâtis un actif que tu possèdes (contenu, audience, recommandations) au lieu de louer de l'attention. Les études 2026 montrent que les entreprises dépendantes du payant ont un coût d'acquisition 2,4 à 3,1× supérieur à celles qui ont des canaux organiques solides.",
  },
  {
    q: "Mais l'organique, c'est lent, non ?",
    a: "Au début, oui. Mais c'est un investissement cumulatif : chaque contenu, chaque client satisfait continue de travailler pour toi. La pub, elle, s'arrête net dès que tu coupes le budget. L'un construit, l'autre loue.",
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
        La pub, tu la loues. Un système, tu le possèdes.
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
                « Je n&apos;ai pas de clients parce que je n&apos;ai pas de budget pub. »
                C&apos;est l&apos;excuse préférée des indépendants. Elle est rassurante —
                et complètement fausse. Pire : le budget pub est en train de devenir le
                moyen le <strong>plus cher</strong> d&apos;acquérir des clients.
              </p>
              <p>
                Je ne dis pas que la pub est inutile. Je dis que croire qu&apos;elle est{" "}
                <strong>indispensable pour démarrer</strong> est un piège coûteux — et les
                chiffres 2026 le prouvent.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce que tout le monde croit (et pourquoi)
              </h2>
              <p>
                <strong>Ce que ta cible fait :</strong> elle attend « d&apos;avoir du
                budget » pour lancer des pubs, persuadée que sans ça, pas de clients.{" "}
                <strong>Pourquoi elle le croit :</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>La pub est visible.</strong> On voit les pubs des autres, pas leur système organique — on en déduit que c&apos;est « comme ça qu&apos;on fait ».</li>
                <li><strong>C&apos;est un raccourci rassurant.</strong> Payer pour des clics donne l&apos;illusion du contrôle et de la vitesse.</li>
                <li><strong>Les agences et plateformes le vendent.</strong> Tout un écosystème vit de ton budget pub. Personne n&apos;y gagne à te dire que tu peux t&apos;en passer.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La faille : le coût de la pub a explosé
              </h2>
              <p>Voici ce que l&apos;excuse ignore. Les chiffres 2026 :</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li>
                  Le coût d&apos;acquisition client a bondi de <strong>+222 % en 8 ans</strong>,
                  dont <strong>+40 à 60 %</strong> sur la seule période 2023-2025.
                </li>
                <li>
                  Les entreprises <strong>dépendantes du payant</strong> affichent un coût
                  d&apos;acquisition <strong>2,4 à 3,1× supérieur</strong> à celles qui ont
                  des canaux organiques solides.
                </li>
                <li>
                  En moyenne, une entreprise à forte recommandation acquiert un client
                  pour <strong>~171 €</strong>, contre <strong>937 € et plus</strong> pour
                  une concurrente dépendante de la pub sociale.
                </li>
                <li>
                  Et <strong>68 % des marques sous-estiment leur vrai coût</strong>
                  d&apos;acquisition de 20 à 40 % (elles oublient les frais d&apos;agence,
                  de création, de tests…).
                </li>
              </ul>
              <p>
                Autrement dit : plus tu dépends de la pub, plus chaque client te coûte
                cher — et plus tu es fragile le jour où tu coupes le budget.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La vraie différence : louer vs posséder
              </h2>
              <p>
                La pub, c&apos;est de la <strong>location d&apos;attention</strong> : tu
                paies, tu as des clics ; tu arrêtes, tout s&apos;éteint. Un système
                d&apos;acquisition organique, c&apos;est un <strong>actif que tu
                possèdes</strong> : chaque contenu publié, chaque client satisfait, chaque
                email collecté continue de travailler pour toi, gratuitement, dans la durée.
                L&apos;un est un coût qui se répète, l&apos;autre un investissement qui
                compose.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui marche vraiment (sans budget pub)
              </h2>
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--accent-solid)]">
                <li><strong>Le contenu</strong> qui attire les bons prospects et te rend trouvable.</li>
                <li><strong>La prospection ciblée</strong> vers ton client idéal, au lieu d&apos;arroser large en payant.</li>
                <li><strong>La recommandation</strong>, le canal le moins cher et le plus qualifié qui existe.</li>
                <li><strong>L&apos;email</strong>, l&apos;audience que tu possèdes et qui rapporte le plus pour chaque euro.</li>
              </ul>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La conclusion qui dérange
              </h2>
              <p>
                « Sans budget pub, pas de clients » est l&apos;excuse qui t&apos;empêche de
                construire la seule chose qui compte : un actif d&apos;acquisition que tu
                possèdes. La pub viendra peut-être plus tard, pour amplifier — mais elle
                n&apos;est ni le point de départ, ni le raccourci qu&apos;on te vend. Le
                vrai levier, ce n&apos;est pas ton budget, c&apos;est ton{" "}
                <strong>système</strong>. Le bricolage dépendant de la pub perd. Le système
                qu&apos;on possède gagne.
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
                  <a className="underline hover:text-foreground" href="https://stealthagents.com/research/smb-customer-acquisition-cost-statistics-2026" target="_blank" rel="noopener noreferrer nofollow">
                    Stealth Agents — SMB Customer Acquisition Cost Statistics 2026
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://businessinmarketing.com/articles/customer-acquisition-cost-by-channel-guide.html" target="_blank" rel="noopener noreferrer nofollow">
                    Business in Marketing — CAC by Channel for Small Businesses (2026)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un actif d&apos;acquisition que tu possèdes — pas une facture pub ?
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
