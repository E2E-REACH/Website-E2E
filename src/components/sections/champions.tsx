import { Bike, GraduationCap, TrendingUp, ArrowUpRight } from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const personas = [
  {
    rung: "01",
    icon: Bike,
    title: "Gig Champion",
    earns: "Task-based",
    body: "App-led execution — deliveries, surveys, referrals, data collection, document verification.",
  },
  {
    rung: "02",
    icon: GraduationCap,
    title: "Knowledge Champion",
    earns: "₹20,000–30,000 / mo",
    body: "Consumer education, category fluency and community trust-building — financial-literacy and awareness programs.",
  },
  {
    rung: "03",
    icon: TrendingUp,
    title: "Entrepreneurial Champion",
    earns: "Up to ₹1 lakh / mo",
    body: "Micro-distribution, mentorship and their own business operations on the platform's rails.",
    peak: true,
  },
];

const recruitedFrom = [
  "Heartfulness networks",
  "ASHA workers",
  "Anganwadi workers",
  "Women's cooperatives & federations",
  "Sansthas & NGOs",
  "Retired armed forces",
];

export function Champions() {
  return (
    <Section id="network" tone="paper">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker index="04">The network</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              The engine that makes it all <Em>flow.</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">
              Well-being Champions are the validators and catalysts embedded in
              every community — mostly women, already trusted by their neighbours.
              One trained Champion can serve 200–500 households, and grows along a
              clear ladder.
            </Lead>
          </Reveal>
        </div>
      </div>

      {/* Progression ladder */}
      <Stagger as="ol" className="mt-14">
        {personas.map((p, i) => {
          const Icon = p.icon;
          return (
            <StaggerItem
              key={p.rung}
              as="li"
              className={cn(
                "group relative grid grid-cols-[auto_1fr] gap-x-6 border-t border-ink/15 py-8 sm:gap-x-10",
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

      {/* Recruited from trusted networks */}
      <Reveal delay={0.1}>
        <div className="mt-12 border-t border-ink/15 pt-8">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-soft/60">
            Recruited from networks India already trusts
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3">
            {recruitedFrom.map((r) => (
              <span
                key={r}
                className="rounded-full border border-ink/15 px-4 py-1.5 text-sm font-medium text-ink"
              >
                {r}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton href={siteConfig.ctaChampion.href} variant="ghost-dark">
              {siteConfig.ctaChampion.label}
              <ArrowUpRight aria-hidden />
            </CtaButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
