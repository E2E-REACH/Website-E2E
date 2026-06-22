import { getDict } from "@/lib/locale";
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

export default async function Home() {
  const { locale, t } = await getDict();
  return (
    <>
      <SiteNav locale={locale} nav={t.nav} cta={t.cta} langName={t.langName} langSwitchLabel={t.langSwitchLabel} />
      <main className="flex-1">
        <Hero t={t.hero} cta={t.cta} />
        <HowOnGround t={t.how} />
        <TheGap t={t.gap} />
        <HowItWorks t={t.platform} />
        <Sectors t={t.verticals} />
        <Champions t={t.network} cta={t.cta} />
        <Earnings t={t.livelihoods} />
        <Architecture t={t.architecture} />
        <Flywheel t={t.flywheel} />
        <Impact t={t.impact} />
        <WhyNow t={t.whynow} />
        <AcrossIndia t={t.india} />
        <Partners t={t.partners} cta={t.cta} />
        <Faq t={t.faq} />
        <FinalCta t={t.finalCta} cta={t.cta} />
      </main>
      <SiteFooter t={t.footer} nav={t.nav} />
    </>
  );
}
