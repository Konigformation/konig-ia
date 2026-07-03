import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { ctaCopy, siteConfig } from "@/lib/site-config";

export function InlineCtaBanner({
  title,
}: {
  title: string;
}) {
  return (
    <section className="py-4">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-6 shadow-sm sm:flex-row sm:px-8">
          <p className="text-center text-base font-medium text-foreground/90 sm:text-left">
            {title}
          </p>
          <CtaButton href={siteConfig.bookingUrl} size="default" className="shrink-0">
            {ctaCopy.primaryShort}
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
