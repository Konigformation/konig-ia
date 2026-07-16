import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-4 inline-flex items-center gap-3.5 text-[11px] leading-none font-bold tracking-[0.34em] text-[var(--accent-solid)] uppercase",
        "before:h-px before:w-[34px] before:bg-[var(--line-strong)] before:content-['']",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow className={align === "center" ? "after:h-px after:w-[34px] after:bg-[var(--line-strong)] after:content-['']" : ""}>
          {eyebrow}
        </Eyebrow>
      )}
      {/* Titre Didone : graisse normale, italique bleu sur les <em> — cf. h2.sec-title */}
      <h2 className="font-heading max-w-2xl text-[clamp(1.875rem,4.4vw,2.875rem)] leading-[1.14] font-normal tracking-[0.005em] text-balance [&_em]:text-[var(--accent-solid)] [&_em]:italic">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-xl text-base text-muted-foreground text-balance sm:text-lg",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
