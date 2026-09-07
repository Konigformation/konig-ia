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
  slug: "hack-whatsapp-closer-prospects",
  title:
    "Le hack WhatsApp pour closer tes prospects (95 %+ d'ouverture) — sans passer pour un spammeur",
  description:
    "Hack — WhatsApp affiche 95 %+ d'ouverture contre 20 % pour l'email. Comment l'utiliser pour closer tes prospects engagés, avec la méthode et le cadre légal.",
  date: "2026-09-08",
  dateLabel: "8 septembre 2026",
  readTime: "7 min",
  author: "Konig Formation",
  category: "Hack",
  image: "/blog/hack-whatsapp-closer-prospects.svg",
  imageAlt:
    "Le hack WhatsApp pour closer ses prospects : une conversation avec 95 pour cent d'ouverture et une réponse rapide — illustration Konig IA.",
};

const url = `${siteConfig.url}/blog/${article.slug}`;
const imageUrl = `${siteConfig.url}${article.image}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "prospection WhatsApp",
    "WhatsApp closing",
    "relance WhatsApp",
    "taux d'ouverture WhatsApp",
    "WhatsApp vs email",
    "prospection multicanale",
    "closer ses prospects",
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
    q: "WhatsApp est-il vraiment plus efficace que l'email en B2B ?",
    a: "Pour la relance de prospects déjà engagés, oui : WhatsApp affiche 95-98 % d'ouverture (75-85 % en B2B) contre 18-25 % pour l'email, et une fois le lead engagé, le suivi WhatsApp convertit 3 à 5× mieux qu'une séquence email. En revanche, 77 % des acheteurs B2B préfèrent l'email pour le premier contact formel — d'où l'ordre : email d'abord, WhatsApp ensuite.",
  },
  {
    q: "Est-ce légal de prospecter sur WhatsApp ?",
    a: "Envoyer des messages non sollicités est à proscrire (RGPD et règles de WhatsApp). La règle : n'utilise WhatsApp qu'avec des prospects qui ont donné leur numéro et accepté d'être contactés (opt-in), typiquement après un premier échange. C'est un canal de suivi, pas de démarchage à froid.",
  },
  {
    q: "Comment ne pas paraître intrusif ?",
    a: "Un message court, personnel, avec une vraie raison (une réponse à sa question, une ressource promise, un rappel de rendez-vous) et une porte de sortie claire. Tu écris comme à une personne, pas comme une newsletter.",
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
        Le bon canal, au bon moment : WhatsApp pour l&apos;instant décisif.
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
                Tes emails de relance finissent dans les limbes ? Normal : un email
                marketing sur cinq est ouvert, au mieux. Pendant ce temps, tes prospects
                lisent un canal quasi instantanément — <strong>WhatsApp</strong>. Voici
                comment t&apos;en servir pour closer, sans passer pour un spammeur.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Pourquoi WhatsApp change la donne
              </h2>
              <p>
                Les chiffres 2026 sont sans appel : <strong>95 à 98 %
                d&apos;ouverture</strong> sur WhatsApp (75-85 % en B2B) contre 18-25 %
                pour l&apos;email, un CTR de <strong>45-60 %</strong> contre 2-3 %, et un
                temps de réponse moyen d&apos;environ <strong>90 secondes</strong>.
                Surtout : une fois un lead engagé, le suivi WhatsApp convertit{" "}
                <strong>3 à 5× mieux</strong> qu&apos;une séquence email.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                La règle d&apos;or : suivi, pas démarchage
              </h2>
              <p>
                Le hack ne consiste pas à envoyer des messages à froid — c&apos;est
                interdit (RGPD, règles WhatsApp) et contre-productif. Tu utilises WhatsApp{" "}
                <strong>uniquement avec des prospects qui ont donné leur numéro</strong> :
                après un premier échange, un formulaire, un rendez-vous. C&apos;est un
                canal de <strong>closing</strong>, pas de prospection à l&apos;aveugle.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 1 — Récupère le numéro au bon moment
              </h2>
              <p>
                Ajoute un champ téléphone (facultatif) à ton formulaire d&apos;audit, ou
                demande simplement en fin d&apos;échange : « Je te renvoie le récap sur
                WhatsApp, ça te va ? ». Tu obtiens l&apos;opt-in naturellement.
              </p>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 2 — Le combo email + WhatsApp
              </h2>
              <p>
                La stratégie la plus performante en 2026 : <strong>l&apos;email porte le
                fond, WhatsApp déclenche l&apos;action</strong>. Tu envoies ta proposition
                détaillée par email, puis un message WhatsApp court au moment de
                l&apos;intention :
              </p>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Salut [Prénom], je t&apos;ai envoyé le plan d&apos;action par mail 👍 Tu
                veux qu&apos;on cale 20 min cette semaine pour le dérouler ensemble, ou tu
                préfères que je te laisse regarder d&apos;abord ? »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Étape 3 — Fais rédiger tes variantes par l&apos;IA
              </h2>
              <blockquote className="border-l-2 border-[var(--accent-solid)]/40 pl-4 text-muted-foreground italic">
                « Rédige 3 messages WhatsApp de relance, ton humain et court (2-3
                lignes), pour un prospect qui a reçu ma proposition mais n&apos;a pas
                répondu. Chacun avec une porte de sortie polie. Pas de ton commercial. »
              </blockquote>

              <h2 className="pt-4 text-2xl font-bold tracking-tight">
                Du message isolé au canal branché
              </h2>
              <p>
                Envoyer un WhatsApp à la main de temps en temps, c&apos;est bien. Mais la
                vraie puissance vient quand WhatsApp devient une <strong>brique de ton
                système</strong> : le canal se déclenche automatiquement au bon moment de
                la séquence, en complément de l&apos;email et de LinkedIn — exactement la
                logique de notre{" "}
                <Link
                  href="/blog/systeme-prospection-multicanale-automatisee"
                  className="font-medium text-[var(--accent-solid)] underline underline-offset-2 hover:opacity-80"
                >
                  prospection multicanale automatisée
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
                  <a className="underline hover:text-foreground" href="https://www.hillteck.com/blog/whatsapp-vs-email-vs-sms-open-rate-study-2026.html" target="_blank" rel="noopener noreferrer nofollow">
                    HillTeck — WhatsApp vs Email vs SMS Open Rate Study (2026)
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-foreground" href="https://wizmessage.com/blog/whatsapp-business-statistics" target="_blank" rel="noopener noreferrer nofollow">
                    WizMessage — WhatsApp Business Statistics 2026
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
              <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
                Tu veux un système multicanal qui relance au bon moment, tout seul ?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Chez Konig IA, on te construit ta propre machine à clients — contenu,
                prospection (LinkedIn, email, WhatsApp) et conversions automatisés — en
                48 h. Teste ton éligibilité à l&apos;Audit IA offert : 30 minutes, sans
                engagement.
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
