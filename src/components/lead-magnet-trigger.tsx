"use client";

import { FileDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LeadMagnet } from "@/components/lead-magnet";
import { cn } from "@/lib/utils";

export function LeadMagnetTrigger({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
              className
            )}
          />
        }
      >
        <FileDown className="size-4" />
        {children ?? "Pas encore prêt ? Téléchargez notre guide offert"}
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl" showCloseButton>
        <DialogTitle className="sr-only">
          Télécharger le guide Konig IA
        </DialogTitle>
        <LeadMagnet className="border-none p-0 sm:p-0" />
      </DialogContent>
    </Dialog>
  );
}
