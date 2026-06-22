import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const styleByIndex = [
  { cls: "bg-ground text-paper", accent: true, dark: true },
  { cls: "bg-ground-light text-paper", accent: false, dark: true },
  { cls: "bg-marigold text-ink", accent: false, dark: false },
];

export function HowItWorks({ t }: { t: Dict["platform"] }) {
  return (
    <Section id="platform" tone="paper">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="02">{t.kicker}</Kicker>
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

      <Stagger className="mt-14 flex flex-col gap-2.5" amount={0.12}>
        {t.layers.map((l, i) => {
          const s = styleByIndex[i];
          return (
            <StaggerItem
              key={l.label}
              className={cn(
                "relative flex flex-col gap-3 rounded-2xl px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-8",
                s.cls,
              )}
            >
              {s.accent && (
                <span className="absolute left-6 top-0 h-[2px] w-16 -translate-y-1/2 bg-marigold sm:left-9" aria-hidden />
              )}
              <div>
                <p
                  className={cn(
                    "font-mono text-[0.68rem] uppercase tracking-[0.2em]",
                    s.dark ? "text-paper/55" : "text-ink/60",
                  )}
                >
                  {l.items}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
                  {l.label}
                </h3>
              </div>
              <p
                className={cn(
                  "max-w-sm text-sm leading-relaxed sm:text-right",
                  s.dark ? "text-paper/70" : "text-ink/75",
                )}
              >
                {l.note}
              </p>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-ink/15 pt-8">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-soft/60">
            {t.designLabel}
          </span>
          {t.principles.map((p) => (
            <span
              key={p}
              className="rounded-full border border-ink/15 px-4 py-1.5 text-sm font-medium text-ink"
            >
              {p}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
