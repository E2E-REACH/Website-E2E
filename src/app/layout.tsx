import type { Metadata } from "next";
import {
  Fraunces,
  Hanken_Grotesk,
  Space_Mono,
  Tiro_Devanagari_Hindi,
  Mukta,
} from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Grain } from "@/components/ui/grain";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { getLocale } from "@/lib/locale";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

// Devanagari faces — used automatically (per-glyph fallback) for Hindi text:
// Tiro pairs with Fraunces (display), Mukta with Hanken (body/UI).
const tiroDevanagari = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["devanagari", "latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "e2E Reach — Ecosystem commerce for the last mile",
  description:
    "Technology democratised information, not access to goods and services. e2E Reach is the trusted human layer that carries commerce, finance, healthcare, energy and government services to the world's underserved communities — starting in India.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${hanken.variable} ${spaceMono.variable} ${tiroDevanagari.variable} ${mukta.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Grain />
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
