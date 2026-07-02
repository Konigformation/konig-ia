import { Check, Minus, X } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const rows = [
  {
    label: "Vous savez le faire évoluer vous-même",
    us: true,
    saas: false,
    agency: false,
  },
  { label: "Coût mensuel récurrent", us: "0€", saas: "500-1000€+/mois", agency: "Plus de 3000€/mois" },
  { label: "Vous êtes propriétaire du système", us: true, saas: false, agency: "partial" },
  { label: "Indépendance technologique", us: true, saas: false, agency: "partial" },
  { label: "Formation certifiée, potentiellement finançable", us: true, saas: false, agency: false },
  { label: "Aucune dépendance une fois formé", us: true, saas: "partial", agency: false },
];

function Cell({ value }: { value: boolean | string | "partial" }) {
  if (value === true) {
    return (
      <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-[var(--accent-solid)]/10 text-[var(--accent-solid)]">
        <Check className="size-3.5" strokeWidth={2.5} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-muted text-muted-foreground/60">
        <X className="size-3.5" strokeWidth={2.5} />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-muted text-muted-foreground/60">
        <Minus className="size-3.5" strokeWidth={2.5} />
      </span>
    );
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Autonomie plutôt que dépendance"
          title="Une agence facture chaque mois. Nous vous transmettons la compétence."
          description="Le système vous appartient dès le premier jour. Vous savez le comprendre, le construire et le faire évoluer seul — sans dépendre de nous, ni de personne d'autre."
        />

        <div className="mt-16 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="p-5 text-left font-medium text-muted-foreground">Critère</th>
                <th className="p-5 text-center font-semibold text-foreground">
                  Notre approche
                </th>
                <th className="p-5 text-center font-medium text-muted-foreground">
                  Logiciel / freelance
                </th>
                <th className="p-5 text-center font-medium text-muted-foreground">
                  Agence classique
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i !== rows.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="p-5 text-left text-foreground/90">{row.label}</td>
                  <td className="bg-[var(--accent-solid)]/[0.04] p-5 text-center">
                    <Cell value={row.us} />
                  </td>
                  <td className="p-5 text-center">
                    <Cell value={row.saas} />
                  </td>
                  <td className="p-5 text-center">
                    <Cell value={row.agency} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Sécurité & RGPD",
              text: "Hébergement et traitement des données conformes RGPD, avec contrôle total sur vos flux et vos bases.",
            },
            {
              title: "Expertise terrain",
              text: "Nous utilisons ces mêmes systèmes pour notre propre acquisition avant de vous les enseigner.",
            },
            {
              title: "Modularité",
              text: "Chaque brique (LinkedIn, email, WhatsApp, IA) est indépendante : vous ajustez sans tout reconstruire.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border p-6">
              <h3 className="font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
