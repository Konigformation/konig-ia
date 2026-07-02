"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function Logo({ className, iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  const [broken, setBroken] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const src = iconOnly ? "/logo-mark.png" : "/logo.png";

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setBroken(true);
    }
  }, []);

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
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={siteConfig.name}
      className={cn(iconOnly ? "h-7 w-auto" : "h-8 w-auto", className)}
      onError={() => setBroken(true)}
    />
  );
}
