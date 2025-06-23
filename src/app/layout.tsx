import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Sistema de Gestão de Obras | Controle Total para Pequenas e Médias Construções",
  description:
    "Tenha o controle da sua obra do início ao fim. Gerencie custos, materiais e mão de obra com nosso sistema intuitivo, ideal para casas de pequeno e médio porte. Experimente grátis!",
  keywords: [
    "sistema de gestão de obras",
    "software para construtoras",
    "gestão de obras pequeno porte",
    "gestão de obras médio porte",
    "controle de obras",
    "orçamento de obras",
    "gestão de materiais de construção",
    "gestão de mão de obra construção",
    "software para engenheiros civis",
    "sistema para arquitetos",
    "controle financeiro de obras",
    "acompanhamento de obras",
    "planejamento de obras",
    "gestão de projetos de construção",
    "sistema para empreiteiros",
  ],
  authors: [{ name: "GestãoObras" }],
  creator: "GestãoObras",
  publisher: "GestãoObras",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gestaoobras.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Sistema de Gestão de Obras | Controle Total para Pequenas e Médias Construções",
    description:
      "Tenha o controle da sua obra do início ao fim. Gerencie custos, materiais e mão de obra com nosso sistema intuitivo.",
    url: "https://gestaoobras.com.br",
    siteName: "GestãoObras",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sistema de Gestão de Obras - GestãoObras",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Gestão de Obras | GestãoObras",
    description:
      "Tenha o controle da sua obra do início ao fim. Sistema intuitivo para casas de pequeno e médio porte.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
