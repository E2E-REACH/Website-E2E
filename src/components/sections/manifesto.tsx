import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export function Manifesto({ t }: { t: Dict["manifesto"] }) {
  return (
    <Section id="belief" tone="paper-dim">
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker>{t.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              {t.h} <Em className="text-marigold-ink">{t.hEm}</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:pb-2 lg:self-end">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">{t.lead}</Lead>
          </Reveal>
        </div>
      </div>

      <Stagger className="mt-14 grid grid-cols-1 border-t border-ink/15 md:grid-cols-3">
        {t.contrasts.map((c) => (
          <StaggerItem
            key={c.b}
            className="border-b border-ink/10 py-8 md:border-b-0 md:border-r md:border-ink/10 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
          >
            <p className="text-sm text-ink-soft/70 line-through decoration-ink-soft/30">
              {c.a}
            </p>
            <p className="mt-2 font-display text-2xl font-medium text-ink sm:text-[1.75rem]">
              {c.b}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
