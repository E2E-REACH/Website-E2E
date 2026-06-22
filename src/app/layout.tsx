import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Space_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "e2E Reach — India's trusted last-mile ecosystem",
  description:
    "e2E Reach turns community trust into national infrastructure — a living, trusted network carrying commerce, finance, healthcare and government schemes to the 900 million Indians the formal economy can't yet reach. Built on India's digital rails.",
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
      className={`${fraunces.variable} ${hanken.variable} ${spaceMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Grain />
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
