"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LeadMagnet } from "@/components/lead-magnet";

const SESSION_KEY = "konig-exit-intent-shown";

export function ExitIntent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    function onMouseOut(e: MouseEvent) {
      if (e.clientY > 0) return;
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
      document.removeEventListener("mouseout", onMouseOut);
    }

    const timeoutId = setTimeout(() => {
      document.addEventListener("mouseout", onMouseOut);
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-xl" showCloseButton>
        <DialogTitle className="sr-only">
          Avant de partir, téléchargez notre guide gratuit
        </DialogTitle>
        <LeadMagnet className="border-none p-0 sm:p-0" />
      </DialogContent>
    </Dialog>
  );
}
