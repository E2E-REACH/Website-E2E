import { Banknote, Users, Globe } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const icons = [Banknote, Users, Globe];

export function Impact({ t }: { t: Dict["impact"] }) {
  return (
    <Section id="impact" tone="paper">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker index="08">{t.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              {t.h} <Em>{t.hEm}</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">{t.lead}</Lead>
          </Reveal>
        </div>
      </div>

      <Stagger className="mt-16 grid grid-cols-1 gap-px border-t border-ink/15 md:grid-cols-3">
        {t.pillars.map((p, i) => {
          const Icon = icons[i];
          return (
            <StaggerItem
              key={p.title}
              className="border-b border-ink/10 py-9 md:border-b-0 md:border-r md:border-ink/10 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-ground text-paper">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium text-ink">
                {p.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-marigold-ink" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
