"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

// 07 65 28 65 00 → format international France (+33)
const WA_HREF =
  "https://wa.me/33765286500?text=" +
  encodeURIComponent(
    "Bonjour, j'aimerais poser une question et savoir si je suis éligible à l'Audit IA.",
  );

const ADVISOR = {
  name: "Alexandre",
  photo: "https://randomuser.me/api/portraits/men/75.jpg",
  message:
    "👋 Bonjour ! Une question sur la formation ou votre éligibilité ? Écrivez-moi ici, je vous réponds directement.",
};

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (dismissed) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.35) setOpen(true);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const showNotif = open && !dismissed;

  return (
    <div className="fixed right-4 bottom-24 z-40 flex flex-col items-end gap-3 lg:right-6 lg:bottom-6">
      {/* Notification façon message WhatsApp entrant */}
      {showNotif && (
        <div className="animate-in fade-in slide-in-from-bottom-4 zoom-in-95 w-[290px] rounded-2xl border border-border bg-card p-3 shadow-2xl duration-500">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Fermer"
            className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
          >
            <X className="size-3.5" />
          </button>

          <div className="flex items-center gap-2.5 pr-6 pb-2.5">
            <div className="relative shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ADVISOR.photo}
                alt={ADVISOR.name}
                className="size-9 rounded-full object-cover"
              />
              <span className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-card bg-[#25D366]" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{ADVISOR.name}</div>
              <div className="text-[11px] font-medium text-[#25D366]">
                en ligne
              </div>
            </div>
          </div>

          <a href={WA_HREF} target="_blank" rel="noopener noreferrer">
            <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm text-foreground/90">
              {ADVISOR.message}
              <span className="mt-1 block text-right text-[10px] text-muted-foreground">
                maintenant
              </span>
            </div>
          </a>

          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <WhatsAppGlyph className="size-4" /> Répondre sur WhatsApp
          </a>
        </div>
      )}

      {/* Bulle WhatsApp flottante */}
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter avec un conseiller pédagogique sur WhatsApp"
        className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        {showNotif && (
          <span className="absolute -top-1 -right-1 z-10 flex size-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
            1
          </span>
        )}
        <WhatsAppGlyph className="relative size-7" />
      </a>
    </div>
  );
}
