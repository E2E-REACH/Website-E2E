import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { RoughText } from "@/components/ui/rough-text";
import { Sketch } from "@/components/ui/sketch";

export function HowOnGround({ t }: { t: Dict["how"] }) {
  return (
    <Section id="how" tone="paper">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker>{t.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              {t.h}{" "}
              <RoughText type="circle">
                <Em>{t.hEm}</Em>
              </RoughText>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">{t.lead}</Lead>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-12 flex items-center gap-3 text-marigold">
        <Sketch variant="arrow" width={52} height={52} />
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-soft/60">
          {t.stepsLabel}
        </span>
      </Reveal>

      <Stagger
        as="ol"
        className="mt-6 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2"
        amount={0.1}
      >
        {t.steps.map((s) => (
          <StaggerItem
            as="li"
            key={s.n}
            className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-ink/15 py-8"
          >
            <span className="font-display text-4xl font-medium leading-none text-ground/25">
              {s.n}
            </span>
            <div>
              <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
