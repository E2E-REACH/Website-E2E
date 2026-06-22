import { Handshake, TrendingUp, Lightbulb, ArrowUpRight } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { siteConfig } from "@/lib/site";

const icons = [Handshake, TrendingUp, Lightbulb];

export function Partners({ t, cta }: { t: Dict["partners"]; cta: Dict["cta"] }) {
  return (
    <Section id="partners" tone="paper-dim">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="10">{t.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              {t.h} <Em>{t.hEm}</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">{t.lead}</Lead>
          </Reveal>
        </div>
      </div>

      <Stagger className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {t.audiences.map((a, i) => {
          const Icon = icons[i];
          return (
            <StaggerItem
              key={a.title}
              className="flex flex-col rounded-2xl bg-paper p-7 ring-1 ring-ink/10"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-ground text-paper">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium text-ink">
                {a.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                {a.body}
              </p>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-medium text-ink sm:text-2xl">
            {t.regionalLine}
          </p>
          <CtaButton href={`mailto:${siteConfig.contactEmail}`} variant="ghost-dark">
            {siteConfig.contactEmail}
            <ArrowUpRight aria-hidden />
          </CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}
