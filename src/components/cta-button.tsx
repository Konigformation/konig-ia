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
        // capitales espacées, angles droits — cf. .btn de la refonte
        "group inline-flex shrink-0 items-center justify-center gap-3 border border-transparent font-bold tracking-[0.22em] whitespace-nowrap uppercase transition-all duration-200 outline-none select-none focus-visible:ring-3 focus-visible:ring-[var(--accent-solid)]/40 active:translate-y-px",
        size === "lg" ? "px-8 pt-[17px] pb-[15px] text-xs" : "px-6 pt-3.5 pb-3 text-[11px]",
        variant === "solid" &&
          "bg-[var(--accent-solid)] text-[var(--accent-solid-foreground)] hover:-translate-y-0.5 hover:bg-foreground",
        variant === "outline" &&
          "border-[var(--line-strong)] bg-transparent text-foreground hover:-translate-y-0.5 hover:border-[var(--accent-solid)] hover:text-[var(--accent-solid)]",
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
