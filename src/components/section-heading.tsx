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
        "mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium tracking-wide text-[var(--accent-solid)] uppercase",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-[var(--accent-solid)]" />
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
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
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
