import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { TheGap } from "@/components/sections/the-gap";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Champions } from "@/components/sections/champions";
import { Earnings } from "@/components/sections/earnings";
import { Sectors } from "@/components/sections/sectors";
import { Impact } from "@/components/sections/impact";
import { Flywheel } from "@/components/sections/flywheel";
import { Partners } from "@/components/sections/partners";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <TheGap />
        <HowItWorks />
        <Champions />
        <Earnings />
        <Sectors />
        <Impact />
        <Flywheel />
        <Partners />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
