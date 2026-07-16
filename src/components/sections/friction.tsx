import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

type Friction = {
  /** Chiffre romain composé en Didone italique — cf. .folio de la refonte. */
  folio: string;
  label: string;
  title: string;
  description: React.ReactNode;
};

const frictions: Friction[] = [
  {
    folio: "I",
    label: "Croissance",
    title: "L'absence de moteur de croissance",
    description:
      "Votre prospection repose sur le bouche-à-oreille ou le hasard, sans système prévisible pour générer des rendez-vous. Résultat : un chiffre d'affaires qui stagne et zéro visibilité sur les mois à venir.",
  },
  {
    folio: "II",
    label: "Temps",
    title: "Une création de contenu qui vous dévore",
    description:
      "E-mails, relances, templates, publications… produire votre marketing vous prend des heures chaque semaine — autant de temps en moins pour vendre et pour livrer.",
  },
  {
    folio: "III",
    label: "Réactivité",
    title: "Une réactivité commerciale limitée",
    description: (
      <>
        <span className="font-semibold text-foreground">
          80 % des clients achètent à celui qui répond en premier.
        </span>{" "}
        Mais vous ne pouvez pas être partout : sans système pour répondre à
        l&apos;instant, les opportunités filent à la concurrence.
      </>
    ),
  },
];

export function Friction() {
  return (
    <section id="freins" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Les freins"
          title={
            <>
              Qu&apos;est-ce qui freine votre activité <em>aujourd&apos;hui</em> ?
            </>
          }
          description="Trois blocages qui vous coûtent des clients — souvent sans même que vous le remarquiez."
        />

        <div className="mt-16 grid gap-4 sm:gap-5 md:grid-cols-3">
          {frictions.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <article className="carte h-full p-8">
                <div className="relative flex items-baseline justify-between">
                  <span className="font-heading text-[44px] leading-none text-[var(--accent-solid)] italic">
                    {f.folio}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.22em] text-[var(--dim)] uppercase">
                    {f.label}
                  </span>
                </div>

                <h3 className="font-heading relative mt-6 text-xl leading-snug font-normal">
                  {f.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
