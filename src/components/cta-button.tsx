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
        "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-3 focus-visible:ring-[var(--accent-solid)]/40 active:translate-y-px",
        size === "lg" ? "h-13 px-7 text-[15px]" : "h-11 px-5 text-sm",
        variant === "solid" &&
          "bg-[var(--accent-solid)] text-[var(--accent-solid-foreground)] shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_var(--accent-solid)] hover:brightness-110 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_10px_30px_-6px_var(--accent-solid)]",
        variant === "outline" &&
          "border border-border bg-transparent text-foreground hover:bg-muted",
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
