import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Siddharth Shah — Data Journalist & Newsroom Technologist",
  description:
    "Engineer by training, journalist by instinct. Data infrastructure and analytical storytelling for the next generation of newsrooms.",
  metadataBase: new URL("https://siddharthgshah.com"),
  openGraph: {
    title: "Siddharth Shah — Data Journalist & Newsroom Technologist",
    description: "Engineer by training, journalist by instinct.",
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
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${bricolage.variable} ${jetbrains.variable}`}
    >
      <body className="grain-overlay font-sans">{children}</body>
    </html>
  );
}
