import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { RoughText } from "@/components/ui/rough-text";
import { Sketch } from "@/components/ui/sketch";

export function HowOnGround({ t }: { t: Dict["how"] }) {
  return (
    <Section id="how" tone="paper">
      <div className="max-w-3xl">
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
        <Reveal delay={0.1}>
          <Lead className="mt-6">{t.lead}</Lead>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ImagePlaceholder
            className="aspect-[4/3] w-full lg:sticky lg:top-28 lg:aspect-[5/6]"
            label="On the ground"
            brief={t.photoAlt}
          />
        </Reveal>

        <div>
          <Reveal className="mb-1 flex items-center gap-3 text-marigold">
            <Sketch variant="arrow" width={56} height={56} />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-soft/60">
              {t.stepsLabel}
            </span>
          </Reveal>
          <Stagger as="ol" className="flex flex-col">
            {t.steps.map((s) => (
              <StaggerItem
                as="li"
                key={s.n}
                className="grid grid-cols-[auto_1fr] gap-x-6 border-b border-ink/10 py-7 first:border-t first:border-ink/15"
              >
                <span className="font-mono text-sm tabular-nums text-marigold-ink">
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
        </div>
      </div>
    </Section>
  );
}
