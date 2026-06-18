import {
  HeartPulse,
  Landmark,
  Wrench,
  Sun,
  ScrollText,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const sectors = [
  { icon: HeartPulse, title: "Healthcare", body: "Telehealth consults, diagnostics and follow-ups, at the doorstep." },
  { icon: Landmark, title: "Financial services & literacy", body: "Savings, credit, insurance — and the literacy to use them well." },
  { icon: Wrench, title: "Household services", body: "Everyday services, coordinated and fulfilled through one person." },
  { icon: Sun, title: "Renewable energy", body: "Clean-energy products like solar — sold, installed, supported locally." },
  { icon: ScrollText, title: "Government schemes & entitlements", body: "Eligibility checks and applications, so benefits actually arrive." },
  { icon: BookOpen, title: "Awareness & education", body: "Camps and sessions that build knowledge, confidence and uptake." },
];

export function Sectors() {
  return (
    <Section id="sectors" tone="paper">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="05">What we carry</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              Many services. <Em>One trusted person</Em> to deliver them.
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">
              A single Champion can carry all of these — which is exactly why the
              model works where a dozen single-purpose agents can&apos;t.
            </Lead>
          </Reveal>
        </div>
      </div>

      <Stagger as="ul" className="mt-16 border-t border-ink/15">
        {sectors.map((s, i) => {
          const Icon = s.icon;
          return (
            <StaggerItem
              key={s.title}
              as="li"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 border-b border-ink/10 py-6 transition-colors sm:gap-x-8"
            >
              <span className="flex items-center gap-4 sm:gap-6">
                <span className="font-mono text-xs tabular-nums text-ink-soft/50">
                  0{i + 1}
                </span>
                <span className="flex size-11 items-center justify-center rounded-full bg-ground-soft text-ground transition-colors group-hover:bg-ground group-hover:text-paper">
                  <Icon className="size-5" aria-hidden />
                </span>
              </span>
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                  {s.title}
                </h3>
                <span className="max-w-md text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </span>
              </span>
              <ArrowUpRight
                className="size-5 text-ink-soft/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-marigold-ink"
                aria-hidden
              />
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
