"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

// Dimensions d'AFFICHAGE (2× pour les écrans retina), pas les dimensions
// intrinsèques : le logo se rend en h-8/h-7 (~32/28 px de haut), inutile de
// demander à l'optimiseur une version 1920 px. Le ratio des fichiers est
// respecté (929/375 ≈ 2.48, 500/180 ≈ 2.78) pour éviter tout décalage.
const DIMS = {
  full: { src: "/logo-dark.png", width: 161, height: 65 },
  mark: { src: "/logo-mark-dark.png", width: 156, height: 56 },
};

export function Logo({ className, iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  const [broken, setBroken] = useState(false);
  const { src, width, height } = iconOnly ? DIMS.mark : DIMS.full;

  if (broken) {
    return (
      <span className={cn("flex items-center gap-2 font-semibold tracking-tight", className)}>
        <span className="flex size-7 items-center justify-center rounded-md bg-foreground text-sm text-background">
          K
        </span>
        {!iconOnly && siteConfig.name}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={siteConfig.name}
      width={width}
      height={height}
      priority
      className={cn(iconOnly ? "h-7 w-auto" : "h-8 w-auto", className)}
      onError={() => setBroken(true)}
    />
  );
}
