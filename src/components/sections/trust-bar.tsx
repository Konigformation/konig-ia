import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const stats = [
  { value: "30 min", label: "pour un Audit IA gratuit et personnalisé" },
  { value: "0€", label: "aucun engagement, aucune carte bancaire" },
  { value: "24h", label: "de délai de réponse après votre demande" },
  { value: "100%", label: "honnête : un état des lieux, pas un argumentaire" },
];

const stack = ["Make", "n8n", "Zapier", "OpenAI", "Claude", "Brevo", "WhatsApp", "LinkedIn"];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-muted/40 py-12">
      <Container>
        <Reveal className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Les outils que nous analysons lors de votre audit
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground/70 grayscale">
            {stack.map((tool) => (
              <span key={tool} className="text-sm font-semibold tracking-tight">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
