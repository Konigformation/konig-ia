import type { Metadata } from "next";
import { Mukta_Mahee, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

// Charte Konig : Mukta Mahee pour le texte, Didot pour les titres.
// Didot n'est pas une webfont et n'existe que sur Apple — Playfair Display est
// son substitut Google Fonts (même squelette Didone, fort contraste, italique vraie).
const mukta = Mukta_Mahee({
  variable: "--font-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title =
  "Bâtissez votre machine à clients grâce à l'IA | Konig IA";
const titleTemplate = "%s | Konig IA";
const description =
  "Le système IA tout-en-un pour automatiser votre contenu, votre prospection et vos conversions en 48 heures. Accompagnement certifié Qualiopi (éligible CPF/OPCO) : repartez avec votre propre machine à clients — sans agence, même en partant de zéro. Audit IA offert.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: title,
    template: titleTemplate,
  },
  description,
  category: "Business",
  keywords: [
    "machine à clients IA",
    "système d'acquisition IA",
    "automatiser sa prospection avec l'IA",
    "générer des clients avec l'IA",
    "agents IA prospection",
    "prospection LinkedIn automatisée IA",
    "acquisition client automatisée",
    "formation IA Qualiopi CPF",
    "IA pour indépendants et dirigeants",
    "audit IA offert",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title,
    description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  // Vérification Google Search Console : renseigner NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  // (dans Vercel → Settings → Environment Variables) avec le code fourni par Google.
  // Tant que la variable est vide, aucune balise n'est ajoutée.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "fr-FR",
      description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: "Konig Formation",
      url: siteConfig.url,
      email: siteConfig.email,
      logo: `${siteConfig.url}/logo.png`,
      description:
        "Konig Formation aide les indépendants, dirigeants et commerciaux à bâtir leur propre machine à clients grâce à l'IA : contenu, prospection et conversions automatisés. Organisme certifié Qualiopi.",
      areaServed: "FR",
      knowsAbout: [
        "Intelligence artificielle",
        "Automatisation commerciale",
        "Prospection automatisée",
        "Acquisition client",
        "Agents IA",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Certification Qualiopi",
      },
    },
    {
      "@type": "Service",
      name: "Audit IA offert",
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: "FR",
      serviceType: "Audit d'automatisation de l'acquisition client par IA",
      description:
        "Un appel offert de 30 minutes pour faire l'état des lieux de votre acquisition et identifier où l'IA peut vous faire gagner du temps et des clients.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Course",
      name: "Bâtir sa machine à clients grâce à l'IA",
      provider: { "@id": `${siteConfig.url}/#organization` },
      description:
        "Accompagnement intensif certifié Qualiopi de 48 heures (2 jours) : chaque participant repart avec son propre système IA d'acquisition — contenu automatisé, prospection multicanale (LinkedIn, e-mail, WhatsApp) et tunnel de conversion, opérationnels dès la fin de la formation.",
      inLanguage: "fr-FR",
      educationalCredentialAwarded: "Certification Qualiopi",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Blended",
        courseWorkload: "PT48H",
        location: { "@type": "Country", name: "France" },
      },
      offers: {
        "@type": "Offer",
        category: "Éligible CPF, OPCO, France Travail",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${mukta.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
