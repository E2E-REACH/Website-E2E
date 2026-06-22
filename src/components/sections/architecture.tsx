import {
  Fingerprint,
  Network,
  ShieldCheck,
  Blocks,
  Languages,
  Cpu,
} from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const icons = [Fingerprint, Network, ShieldCheck, Blocks, Languages, Cpu];

export function Architecture({ t }: { t: Dict["architecture"] }) {
  return (
    <Section id="architecture" tone="paper">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="06">{t.kicker}</Kicker>
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

      <Stagger
        as="ul"
        className="mt-16 grid grid-cols-1 gap-x-12 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3"
        amount={0.08}
      >
        {t.rails.map((r, i) => {
          const Icon = icons[i];
          return (
            <StaggerItem
              key={r.title}
              as="li"
              className="flex flex-col gap-4 border-b border-ink/10 py-8"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-ground-soft text-ground">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-medium text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {r.body}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-1">
                {r.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-ground/[0.06] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-ground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
