import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Logo } from "@/components/logo";
import { Footer } from "@/components/sections/footer";
import { siteConfig } from "@/lib/site-config";
import { posts } from "@/lib/posts";

const url = `${siteConfig.url}/blog`;
const title = "Le blog IA : générer des clients avec l'intelligence artificielle";
const description =
  "Tendances, outils et stratégies concrètes pour bâtir votre machine à clients grâce à l'IA : prospection automatisée, agents IA, contenu et conversions. Décryptés pour les indépendants et dirigeants.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    title: `${title} | Konig IA`,
    description,
    url,
    siteName: "Konig IA",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Konig IA`,
    description,
  },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${url}#blog`,
        name: "Le blog Konig IA",
        description,
        url,
        inLanguage: "fr-FR",
        publisher: { "@id": `${siteConfig.url}/#organization` },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          url: `${siteConfig.url}/blog/${p.slug}`,
          image: `${siteConfig.url}${p.image}`,
          articleSection: p.category,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: url },
        ],
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
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Retour à l&apos;accueil
          </Link>

          <div className="mt-6 max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-[var(--accent-solid)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-solid)]">
              Le blog
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
              Générer des clients grâce à l&apos;IA
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Tendances, outils et stratégies concrètes — décryptés pour que vous
              gardiez toujours une longueur d&apos;avance et bâtissiez votre
              machine à clients.
            </p>
          </div>

          {/* Article à la une */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-12 grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-solid)]/40 hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-[var(--accent-solid)] shadow-sm backdrop-blur">
                {featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" /> {featured.readTime} de lecture
                </span>
                <span className="size-1 rounded-full bg-muted-foreground/40" />
                <span className="inline-flex items-center gap-1">
                  <Calendar className="size-3.5" /> {featured.dateLabel}
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-solid)]">
                Lire l&apos;article
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Autres articles */}
          {rest.length > 0 && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-solid)]/40 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 380px"
                      className="object-cover"
                    />
                    <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-[var(--accent-solid)] shadow-sm backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3.5" /> {post.readTime}
                      </span>
                      <span className="size-1 rounded-full bg-muted-foreground/40" />
                      <span>{post.dateLabel}</span>
                    </div>
                    <h2 className="mt-2 font-semibold tracking-tight text-balance">
                      {post.title}
                    </h2>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[var(--accent-solid)]">
                      Lire l&apos;article
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* CTA bas de page */}
          <div className="mt-16 rounded-2xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/[0.05] p-7 text-center sm:p-9">
            <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
              Prêt à passer de la théorie à votre propre système ?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Testez votre éligibilité à l&apos;Audit IA offert : 30 minutes pour
              un état des lieux clair, sans jargon et sans engagement.
            </p>
            <div className="mt-6 flex justify-center">
              <CtaButton href="/#diagnostic-ia">Tester mon éligibilité</CtaButton>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
