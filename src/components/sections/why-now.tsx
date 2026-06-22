import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export function WhyNow({ t }: { t: Dict["whynow"] }) {
  return (
    <Section id="why-now" tone="ground">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="09">{t.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7 text-paper">
              {t.h} <Em className="text-marigold">{t.hEm}</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-paper/75 text-base sm:text-lg">{t.lead}</Lead>
          </Reveal>
        </div>
      </div>

      <Stagger
        as="ul"
        className="mt-16 grid grid-cols-1 gap-x-12 border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-3"
        amount={0.07}
      >
        {t.tailwinds.map((w) => (
          <StaggerItem
            as="li"
            key={w.t}
            className="border-b border-paper/10 py-8"
          >
            <p className="font-display text-3xl font-medium text-marigold sm:text-4xl">
              {w.k}
            </p>
            <h3 className="mt-3 font-display text-lg font-medium text-paper">
              {w.t}
            </h3>
            <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-paper/65">
              {w.d}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
