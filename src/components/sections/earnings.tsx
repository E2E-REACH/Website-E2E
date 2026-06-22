import { Info } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export function Earnings({ t }: { t: Dict["livelihoods"] }) {
  return (
    <Section id="livelihoods" tone="ground-deep">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="05">{t.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7 text-paper">
              {t.h} <Em className="text-marigold">{t.hEm}</Em>
            </Display>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Lead className="text-paper/75">{t.lead}</Lead>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-paper/55">
                {t.aspirationLabel}
              </p>
              <p className="mt-3 font-mono text-[clamp(2.4rem,6.5vw,4.6rem)] font-bold leading-none text-paper">
                {t.aspirationValue}
                <span className="ml-2 align-baseline font-sans text-lg font-semibold text-marigold">
                  {t.aspirationSuffix}
                </span>
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/60">
                {t.aspirationNote}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Stagger className="border-t border-paper/15">
            {t.streams.map((s) => (
              <StaggerItem
                key={s.title}
                className="flex items-baseline justify-between gap-6 border-b border-paper/10 py-5"
              >
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-medium text-paper">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-paper/60">{s.note}</p>
                </div>
                <span className="shrink-0 font-mono text-lg font-bold text-marigold">
                  {s.figure}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-8 flex items-start gap-2.5 text-sm leading-relaxed text-paper/55">
              <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{t.disclaimer}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
