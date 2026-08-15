import {
  Flame,
  Megaphone,
  BellRing,
  Filter,
  Clock,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaButton } from "@/components/cta-button";

type Post = {
  category: string;
  title: string;
  excerpt?: string;
  readTime: string;
  date: string;
  icon: LucideIcon;
  href: string;
};

const featured: Post = {
  category: "Contre-tendance",
  title:
    "Non, l'IA ne remplacera pas tes commerciaux — et croire le contraire tue ton acquisition",
  excerpt:
    "Les « AI SDR » promettent des clients en pilote automatique. Les données 2026 prouvent l'inverse : le robot qui spamme fait chuter tes réponses. Ce qui marche vraiment à la place.",
  readTime: "9 min",
  date: "Août 2026",
  icon: Flame,
  href: "/blog/ia-ne-remplacera-pas-tes-commerciaux",
};

const posts: Post[] = [
  {
    category: "Actualité IA",
    title: "ChatGPT lance ses pubs : comment en profiter pour ramener des clients",
    readTime: "6 min",
    date: "Août 2026",
    icon: Megaphone,
    href: "/blog/chatgpt-ads-nouveau-canal-acquisition",
  },
  {
    category: "Hack",
    title: "Réveille ta base dormante avec l'IA : signe sans prospecter à froid",
    readTime: "7 min",
    date: "Août 2026",
    icon: BellRing,
    href: "/blog/hack-reactiver-prospects-dormants-ia",
  },
  {
    category: "Système",
    title: "Le système en 3 étapes pour un tunnel de vente automatisé",
    readTime: "8 min",
    date: "Août 2026",
    icon: Filter,
    href: "/blog/systeme-tunnel-vente-automatise-3-etapes",
  },
];

function Thumb({ icon: Icon, category }: { icon: LucideIcon; category: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[var(--accent-solid)]/20 via-[var(--accent-solid)]/8 to-transparent">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <Icon
        className="absolute -right-3 -bottom-4 size-28 text-[var(--accent-solid)]/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
        strokeWidth={1.25}
      />
      <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-[var(--accent-solid)] shadow-sm backdrop-blur">
        {category}
      </span>
    </div>
  );
}

function Meta({ readTime, date }: { readTime: string; date: string }) {
  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1">
        <Clock className="size-3.5" /> {readTime} de lecture
      </span>
      <span className="size-1 rounded-full bg-muted-foreground/40" />
      <span>{date}</span>
    </div>
  );
}

export function Blog() {
  return (
    <section id="blog" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Le blog"
          title={
            <>
              Les dernières actualités IA pour <em>booster</em> votre business
            </>
          }
          description="Tendances, outils et stratégies concrètes — décryptés pour que vous gardiez toujours une longueur d'avance."
        />

        {/* Article à la une */}
        <Reveal className="mt-16">
          <a
            href={featured.href}
            className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-solid)]/40 hover:shadow-xl lg:grid-cols-2"
          >
            <div className="aspect-[16/10] lg:aspect-auto">
              <Thumb icon={featured.icon} category={featured.category} />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <Meta readTime={featured.readTime} date={featured.date} />
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-solid)]">
                Lire l&apos;article
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        </Reveal>

        {/* Grille d'articles */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const Icon = post.icon;
            return (
              <Reveal key={post.title} delay={i * 0.08}>
                <a
                  href={post.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-solid)]/40 hover:shadow-lg"
                >
                  <div className="aspect-[16/9]">
                    <Thumb icon={Icon} category={post.category} />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <Meta readTime={post.readTime} date={post.date} />
                    <h3 className="mt-2 font-semibold tracking-tight text-balance">
                      {post.title}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[var(--accent-solid)]">
                      Lire l&apos;article
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <CtaButton href="/blog" variant="outline">
            Voir tous les articles
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  );
}
