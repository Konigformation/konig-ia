"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/cta-button";
import { ctaCopy, siteConfig } from "@/lib/site-config";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const bookingSection = document.getElementById("diagnostic");

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      if (!pastHero) {
        setVisible(false);
        return;
      }
      if (bookingSection) {
        const rect = bookingSection.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setVisible(!inView);
      } else {
        setVisible(true);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <CtaButton href={siteConfig.bookingUrl} className="w-full" size="default" showArrow={false}>
        {ctaCopy.primaryShort}
      </CtaButton>
    </div>
  );
}
