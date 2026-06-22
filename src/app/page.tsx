import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { HowOnGround } from "@/components/sections/how-on-ground";
import { TheGap } from "@/components/sections/the-gap";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Sectors } from "@/components/sections/sectors";
import { Champions } from "@/components/sections/champions";
import { Earnings } from "@/components/sections/earnings";
import { Architecture } from "@/components/sections/architecture";
import { Flywheel } from "@/components/sections/flywheel";
import { Impact } from "@/components/sections/impact";
import { WhyNow } from "@/components/sections/why-now";
import { AcrossIndia } from "@/components/sections/across-india";
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
        <HowOnGround />
        <TheGap />
        <HowItWorks />
        <Sectors />
        <Champions />
        <Earnings />
        <Architecture />
        <Flywheel />
        <Impact />
        <WhyNow />
        <AcrossIndia />
        <Partners />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
