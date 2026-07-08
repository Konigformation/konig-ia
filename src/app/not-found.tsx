import type { Metadata } from "next";
import Link from "next/link";
import { Home, Newspaper } from "lucide-react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Logo } from "@/components/logo";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
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

      <main className="flex flex-1 items-center py-24 sm:py-32">
        <Container className="text-center">
          <span className="text-7xl font-bold tracking-tight text-[var(--accent-solid)]/20 sm:text-8xl">
            404
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Cette page a disparu du radar
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Le lien est peut-être cassé ou la page a été déplacée. Pas de panique —
            voici par où continuer.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaButton href="/">
              <Home className="size-4" /> Retour à l&apos;accueil
            </CtaButton>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--accent-solid)]/40 hover:text-[var(--accent-solid)]"
            >
              <Newspaper className="size-4" /> Lire le blog
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
