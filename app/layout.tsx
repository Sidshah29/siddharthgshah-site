import type { Metadata } from "next";
import {
  Fraunces,
  JetBrains_Mono,
  Bricolage_Grotesque,
  Noto_Sans,
  Noto_Sans_Devanagari,
  Noto_Sans_Arabic,
  Noto_Sans_Gujarati,
} from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Multi-script families for the Mind & Margin hero (brief §12.1).
// Each is bound to a CSS variable and applied per-glyph via the MultiScriptHero component.
const notoLatin = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-latin",
  display: "swap",
  weight: ["400", "500"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-devanagari",
  display: "swap",
  weight: ["400", "500"],
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
  weight: ["400", "500"],
});

const notoGujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  variable: "--font-noto-gujarati",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Siddharth Shah",
  description:
    "Engineering, finance, and the analytics newsrooms run on — taught at Penn State, applied across three U.S. internships, defended in code that ships.",
  metadataBase: new URL("https://siddharthgshah.com"),
  openGraph: {
    title: "Siddharth Shah",
    description:
      "Three disciplines. One mind, sharpening.",
    url: "https://siddharthgshah.com",
    siteName: "Siddharth Shah",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontVars = [
    fraunces.variable,
    bricolage.variable,
    jetbrains.variable,
    notoLatin.variable,
    notoDevanagari.variable,
    notoArabic.variable,
    notoGujarati.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVars}>
      <body className="grain-overlay font-sans">{children}</body>
    </html>
  );
}
