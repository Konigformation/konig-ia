import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { ctaCopy, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-14">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Link href="#top">
              <Logo />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Contact
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <Link
                    href={siteConfig.bookingUrl}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {ctaCopy.primaryShort}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Légal
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/mentions-legales"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/confidentialite"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Confidentialité (RGPD)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cgv"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    CGV
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Konig Formation. Tous droits réservés.
          </p>
          <a
            href="/partners/qualiopi-certificat.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
            title="Voir le certificat"
          >
            <Image
              src="/partners/qualiopi.png"
              alt="Qualiopi — processus certifié"
              width={72}
              height={24}
              className="h-6 w-auto object-contain opacity-90"
            />
            Formation certifiée Qualiopi
          </a>
        </div>
      </Container>
    </footer>
  );
}
