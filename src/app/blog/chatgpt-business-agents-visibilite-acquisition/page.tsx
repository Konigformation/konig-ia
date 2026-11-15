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
  slug: "chatgpt-business-agents-visibilite-acquisition",
  title:
    "ChatGPT ouvre les « agents business » : tes futurs clients vont parler à ton entreprise dans l'IA",
  description:
    "Actualité IA — OpenAI lance les Business Agents et profils vérifiés dans ChatGPT. Ce que ce nouveau canal change pour ton acquisition, et comment t'y préparer dès maintenant.",
  date: "2026-11-13",
  dateLabel: "13 novembre 2026",
  readTime: "6 min",
  author: "Konig Formation",
  category: "Actualité IA",
  image: "/blog/chatgpt-business-agents-visibilite-acquisition.svg",
  imageAlt:
    "Les agents business dans ChatGPT : tes futurs clients parleront à ton entreprise directement dans l'IA — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "agents business ChatGPT",
    "Business Agents OpenAI",
    "profil vérifié ChatGPT",
    "visibilité IA entreprise",
    "acquisition via ChatGPT",
    "être trouvé dans l'IA",
    "nouveau canal acquisition 2026",
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
    q: "Que vient d'annoncer OpenAI exactement ?",
    a: "Le 10 novembre 2026, OpenAI a lancé en bêta « Businesses in ChatGPT » : des profils d'entreprise vérifiés (badge bleu) et des « Business Agents » avec lesquels un utilisateur peut discuter directement dans ChatGPT. Pour l'instant, c'est réservé à des e-commerces et services en ligne éligibles aux États-Unis, et OpenAI prévoit aussi des agents sponsorisés côté publicité.",
  },
  {
    q: "Je suis en France / je ne suis pas e-commerce : ça me concerne ?",
    a: "Pas encore directement — la bêta est limitée. Mais le signal, lui, est universel : une part croissante de tes futurs clients commencera sa recherche dans une IA, pas sur Google. La question n'est plus « est-ce que ça arrive ? » mais « est-ce que mon entreprise sera trouvable et recommandable quand ça arrivera chez moi ? ».",
  },
  {
    q: "Comment me préparer concrètement ?",
    a: "En devenant « lisible par l'IA » : un positionnement clair, des pages qui répondent aux vraies questions de ta cible, des avis et preuves structurés, une offre explicite. Ce sont les mêmes fondations qui te rendent trouvable dans ChatGPT demain et qui convertissent tes visiteurs aujourd'hui.",
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
        Le prochain « moteur de recherche » de tes clients, c&apos;est une conversation.
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
                Imagine : ton prochain client ne tape plus ta requête dans Google. Il
                demande à ChatGPT « qui peut m&apos;aider à faire X ? » — et l&apos;IA lui
                répond avec des entreprises. La question qui compte : est-ce que la tienne
                en fera partie ?
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Ce qui vient de se passer
              </h2>
              <p>
                Le 10 novembre 2026, OpenAI a lancé en bêta <strong>« Businesses in
                ChatGPT »</strong> : des <strong>profils d&apos;entreprise vérifiés</strong>{" "}
                (avec badge bleu) et des <strong>« Business Agents »</strong> — des agents
                avec lesquels un utilisateur peut discuter directement dans ChatGPT pour
                poser ses questions, comparer, et parfois acheter. Les entreprises
                revendiquent leur fiche via un « Business Hub » et peuvent tenir à jour
                leurs infos, prix et stocks. OpenAI évoque même des agents{" "}
                <strong>sponsorisés</strong>, premier pas vers la pub dans ChatGPT.
              </p>
              <p>
                Pour l&apos;instant, c&apos;est limité à des e-commerces et services en
                ligne éligibles aux États-Unis. Mais ne t&apos;arrête pas à la bêta —
                regarde la direction.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Le vrai signal : la recherche devient une conversation
              </h2>
              <p>
                Pendant vingt ans, être trouvé voulait dire « être bien classé sur
                Google ». On entre dans une autre ère : tes clients posent une question en
                langage naturel à une IA, et celle-ci <strong>recommande</strong> — ou
                non — ton entreprise. Ce n&apos;est plus une liste de liens bleus,
                c&apos;est une réponse, souvent une seule. Et dans ce monde-là, la place
                est chère : être cité, c&apos;est exister ; être oublié, c&apos;est ne pas
                exister du tout.
              </p>
              <p>
                C&apos;est la continuité d&apos;une bascule qu&apos;on voit arriver depuis
                des mois — après l&apos;entrée de l&apos;IA dans la recherche, voici
                l&apos;IA qui devient le <strong>point de contact</strong> entre le client
                et l&apos;entreprise.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                3 façons d&apos;en profiter avant tout le monde
              </h2>
              <p>
                <strong>1. Rends ton entreprise « lisible par l&apos;IA ».</strong> Une IA
                recommande ce qu&apos;elle comprend : un positionnement net (pour qui, quel
                problème, quelle promesse), des pages qui répondent aux vraies questions de
                ta cible, une offre explicite. Le flou ne se fait jamais recommander.
              </p>
              <p>
                <strong>2. Muscle ta preuve.</strong> Avis, résultats chiffrés, études de
                cas : c&apos;est ce qui fait pencher une recommandation. Si tu n&apos;as pas
                encore de système pour en collecter en continu, commence ici — vois notre{" "}
                <Link
                  href="/blog/systeme-preuve-sociale-automatise"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système de preuve sociale automatisé
                </Link>
                .
              </p>
              <p>
                <strong>3. Sois prêt à répondre, tout de suite.</strong> Quand un prospect
                arrive via l&apos;IA, il arrive « chaud » et pressé. Si personne ne répond
                avant des heures, il est déjà parti ailleurs. Un système qui capte,
                qualifie et répond à ta place fait la différence.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                L&apos;outil change. Les fondations, non.
              </h2>
              <p>
                Bonne nouvelle : tu n&apos;as pas à courir après chaque nouveauté. Ce qui
                te rendra recommandable dans ChatGPT demain — clarté, preuve, réactivité —
                est exactement ce qui convertit tes visiteurs aujourd&apos;hui. Construire
                ces fondations maintenant, c&apos;est jouer sur les deux tableaux. C&apos;est
                tout l&apos;objet d&apos;un{" "}
                <Link
                  href="/blog/systeme-machine-a-clients-3-leviers"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  système d&apos;acquisition complet
                </Link>{" "}
                : contenu pour attirer, prospection pour contacter, tunnel pour convertir.
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
                  <a className="underline hover:text-foreground" href="https://thenextweb.com/news/openai-businesses-in-chatgpt-business-agents" target="_blank" rel="noopener noreferrer nofollow">
                    The Next Web — OpenAI lets businesses claim ChatGPT profiles and launch agents (nov. 2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://aiweekly.co/alerts/openai-puts-verified-business-profiles-and-agents-in-chatgpt" target="_blank" rel="noopener noreferrer nofollow">
                    AI Weekly — OpenAI Puts Verified Business Profiles and Agents in ChatGPT
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux être trouvable et prêt à convertir quand l&apos;IA t&apos;amène des clients ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection et conversions automatisés — en 48 h. Teste ton éligibilité à
                l&apos;Audit IA offert : 30 minutes pour un plan clair.
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
