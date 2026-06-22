import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { RoughText } from "@/components/ui/rough-text";

export function TheGap({ t }: { t: Dict["gap"] }) {
  return (
    <Section id="opportunity" tone="paper">
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker index="01">{t.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              {t.h}{" "}
              <RoughText type="underline" multiline>
                <Em className="text-marigold-ink">{t.hEm}</Em>
              </RoughText>
            </Display>
          </Reveal>
        </div>

        <div className="flex flex-col justify-end gap-6 lg:col-span-5 lg:pb-2">
          <Reveal delay={0.1}>
            <Lead>{t.lead}</Lead>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-display text-2xl font-medium text-ink sm:text-3xl">
              {t.pullA}
              <Em className="text-marigold-ink">{t.pullEm}</Em>
              {t.pullB}
            </p>
          </Reveal>
        </div>
      </div>

      <Stagger
        as="dl"
        className="mt-20 grid grid-cols-1 border-t border-ink/15 sm:grid-cols-3"
      >
        {t.stats.map((s) => (
          <StaggerItem
            key={s.label}
            className="border-b border-ink/10 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0"
          >
            <dt className="font-display text-3xl font-medium leading-tight text-ground sm:text-4xl">
              {s.value}
            </dt>
            <dd className="mt-3 max-w-[28ch] text-sm leading-relaxed text-ink-soft">
              {s.label}
            </dd>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
