import { Bike, GraduationCap, TrendingUp } from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const personas = [
  {
    rung: "01",
    icon: Bike,
    title: "Gig worker",
    earns: "Per task / commission",
    body: "Delivers services on demand — facilitates a telehealth consult, completes a government-scheme application, coordinates a household service, sells and installs a solar product.",
  },
  {
    rung: "02",
    icon: GraduationCap,
    title: "Knowledge provider",
    earns: "Per program + sponsorships",
    body: "Runs awareness and education sessions — financial-literacy camps, health awareness, scheme-eligibility drives — becoming the person who explains how things work.",
  },
  {
    rung: "03",
    icon: TrendingUp,
    title: "Entrepreneur",
    earns: "Margin + recurring revenue",
    body: "Builds a small business on the platform's rails — a micro-distributorship, a team of sub-agents, a recurring services book that keeps paying.",
    peak: true,
  },
];

export function Champions() {
  return (
    <Section id="champions" tone="paper-dim">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker index="03">The Champion</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              A neighbour you already trust — and the{" "}
              <Em>ladder she climbs.</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">
              Most of our Champions are women. The three ways they earn aren&apos;t
              separate jobs — they&apos;re rungs on a ladder, climbed over time. A
              Champion can hold all three at once.
            </Lead>
          </Reveal>
        </div>
      </div>

      <Stagger as="ol" className="mt-16">
        {personas.map((p, i) => {
          const Icon = p.icon;
          return (
            <StaggerItem
              key={p.rung}
              as="li"
              className={cn(
                "group relative grid grid-cols-[auto_1fr] gap-x-6 border-t border-ink/15 py-9 sm:gap-x-10",
                // ascending indent to read as a climb
                i === 1 && "lg:pl-12",
                i === 2 && "lg:pl-24",
              )}
            >
              <div className="flex flex-col items-start gap-4">
                <span className="font-display text-5xl font-medium leading-none text-ground/25 sm:text-6xl">
                  {p.rung}
                </span>
                <span
                  className={cn(
                    "flex size-11 items-center justify-center rounded-full",
                    p.peak ? "bg-marigold text-ink" : "bg-ground text-paper",
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                </span>
              </div>
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                    {p.title}
                  </h3>
                  <span
                    className={cn(
                      "font-mono text-xs uppercase tracking-[0.14em]",
                      p.peak ? "text-marigold-ink" : "text-ink-soft/70",
                    )}
                  >
                    {p.earns}
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
