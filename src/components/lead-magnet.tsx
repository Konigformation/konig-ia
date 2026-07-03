"use client";

import { useState } from "react";
import { CheckCircle2, Download, FileText, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const bullets = [
  "Les 5 canaux à automatiser en premier (et dans quel ordre)",
  "Comment estimer vous-même votre potentiel d'automatisation",
  "La checklist RGPD pour prospecter avec l'IA en toute sécurité",
];

export function LeadMagnet({ className }: { className?: string }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className={cn(
        "grid gap-8 overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm sm:grid-cols-2 sm:p-10",
        className
      )}
    >
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          <FileText className="size-3.5 text-[var(--accent-solid)]" />
          Guide gratuit
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-balance">
          Le guide pour identifier votre potentiel d&apos;automatisation IA
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          20 pages concrètes, sans blabla, pour évaluer vous-même ce qui est
          automatisable dans votre activité avant même votre Audit IA.
        </p>
        <ul className="mt-5 flex flex-col gap-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-solid)]" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-center">
        {status === "done" ? (
          <div className="flex flex-col items-start gap-4 rounded-xl border border-[var(--accent-solid)]/30 bg-[var(--accent-solid)]/5 p-6">
            <CheckCircle2 className="size-8 text-[var(--accent-solid)]" />
            <div>
              <p className="font-medium">C&apos;est envoyé !</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Vous pouvez aussi le télécharger directement ci-dessous.
              </p>
            </div>
            <a
              href="/guide-automatisation-ia-konig.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-solid)] px-5 py-2.5 text-sm font-medium text-[var(--accent-solid-foreground)] hover:brightness-110"
            >
              <Download className="size-4" />
              Télécharger le PDF
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="h-11 rounded-lg border border-border bg-background px-4 text-sm outline-none focus-visible:ring-3 focus-visible:ring-[var(--accent-solid)]/40"
            />
            <input
              type="email"
              required
              placeholder="Votre email professionnel"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-lg border border-border bg-background px-4 text-sm outline-none focus-visible:ring-3 focus-visible:ring-[var(--accent-solid)]/40"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent-solid)] px-5 text-sm font-medium text-[var(--accent-solid-foreground)] transition hover:brightness-110 disabled:opacity-60"
            >
              {status === "loading" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Download className="size-4" />
              )}
              Recevoir le guide gratuitement
            </button>
            {status === "error" && (
              <p className="text-xs text-destructive">
                Une erreur est survenue, réessayez dans un instant.
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Pas de spam. Désinscription en un clic.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
