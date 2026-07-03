import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
  variant?: "solid" | "outline";
  showArrow?: boolean;
}

export function CtaButton({
  href,
  children,
  className,
  size = "lg",
  variant = "solid",
  showArrow = true,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-250 outline-none select-none focus-visible:ring-3 focus-visible:ring-[var(--accent-solid)]/40 active:translate-y-px",
        size === "lg" ? "h-13 px-7 text-[15px]" : "h-11 px-5 text-sm",
        variant === "solid" &&
          "bg-[var(--accent-solid)] text-[var(--accent-solid-foreground)] shadow-[0_10px_24px_-10px_color-mix(in_oklch,var(--accent-solid)_75%,transparent)] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-10px_color-mix(in_oklch,var(--accent-solid)_75%,transparent)] hover:brightness-105",
        variant === "outline" &&
          "border border-border bg-background text-foreground hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/60",
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
