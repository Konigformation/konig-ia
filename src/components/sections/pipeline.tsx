"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ScanSearch,
  BrainCircuit,
  Mail,
  MessageCircle,
  Bot,
  CalendarCheck,
  Database,
  RefreshCw,
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons/linkedin";

const stages = [
  { icon: Globe, label: "Trafic", detail: "Visiteurs & sources d'acquisition" },
  { icon: ScanSearch, label: "Scraping", detail: "Bases de données qualifiées" },
  { icon: BrainCircuit, label: "Qualification IA", detail: "Filtrage des bons prospects" },
  { icon: LinkedinIcon, label: "Prospection LinkedIn", detail: "Messages personnalisés à l'échelle" },
  { icon: Mail, label: "Emails", detail: "Séquences automatisées" },
  { icon: MessageCircle, label: "WhatsApp", detail: "Relance à fort taux d'ouverture" },
  { icon: Bot, label: "Agent IA", detail: "Réponses & qualification en direct" },
  { icon: CalendarCheck, label: "Prise de RDV", detail: "Créneaux réservés automatiquement" },
  { icon: Database, label: "CRM", detail: "Centralisation des données" },
  { icon: RefreshCw, label: "Relances", detail: "Aucun lead laissé sans suite" },
];

export function Pipeline() {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-6 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.06),0_24px_48px_-24px_rgba(0,0,0,0.12)] sm:p-8">
      <p className="mb-6 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Ce que vous apprendrez à construire
      </p>
      <div className="relative flex flex-col">
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-[var(--accent-solid)] via-border to-transparent"
        />
        {stages.map((stage, i) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="relative flex items-center gap-4 py-3"
          >
            <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground">
              <stage.icon className="size-4.5" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <div className="text-sm font-medium">{stage.label}</div>
              <div className="truncate text-xs text-muted-foreground">{stage.detail}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
