import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title =
  "Audit IA gratuit — Ne dépendez plus d'une agence marketing | Konig IA";
const description =
  "Réservez votre Audit IA gratuit : nous évaluons si l'automatisation a du sens pour votre activité et ce que ça lui apporterait. Si pertinent, apprenez à construire vous-même votre système d'acquisition lors de notre formation intensive de 2 jours (Qualiopi, éligible CPF/OPCO) — sans dépendre d'une agence marketing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [
    "audit IA gratuit",
    "formation automatisation IA",
    "formation IA Qualiopi",
    "automatisation commerciale",
    "indépendance agence marketing",
    "prospection LinkedIn IA",
    "agent IA",
    "formation CPF automatisation",
    "IA pour PME",
    "IA pour indépendants",
  ],
  authors: [{ name: siteConfig.name }],
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
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      description,
    },
    {
      "@type": "Service",
      name: "Audit IA gratuit",
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: "FR",
      serviceType: "Audit d'automatisation commerciale par IA",
      description:
        "Un appel gratuit de 30 minutes pour évaluer si l'automatisation a du sens pour votre activité et ce que ça lui apporterait.",
    },
    {
      "@type": "Course",
      name: "Formation intensive : construire son système d'acquisition automatisé par IA",
      provider: { "@id": `${siteConfig.url}/#organization` },
      description:
        "Formation certifiée Qualiopi de 2 jours pendant laquelle chaque participant construit lui-même son système d'acquisition automatisé par IA (prospection, agents IA, relances, workflows).",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "L'Audit IA est-il vraiment gratuit ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, entièrement offert et sans engagement. Nous analysons votre activité et vous montrons concrètement votre potentiel d'automatisation.",
          },
        },
        {
          "@type": "Question",
          name: "La formation est-elle finançable ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre organisme est certifié Qualiopi et peut être éligible à des financements (CPF, OPCO, France Travail, FAF) selon votre situation.",
          },
        },
        {
          "@type": "Question",
          name: "Repart-on avec un système concret après la formation ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. À l'issue des 2 jours, chaque participant repart avec son propre système d'acquisition configuré et opérationnel, pas seulement de la théorie.",
          },
        },
      ],
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
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
