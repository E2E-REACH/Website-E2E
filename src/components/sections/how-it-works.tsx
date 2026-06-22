import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const layers = [
  {
    label: "Vertical ecosystems",
    items: "Commerce · Finance · Health · Logistics",
    note: "Where value, liquidity and transformed assets flow.",
    cls: "bg-ground text-paper",
    accent: true,
  },
  {
    label: "The network — Well-being Champions",
    items: "Gig · Knowledge · Entrepreneurial",
    note: "Validators and transaction catalysts, embedded in communities.",
    cls: "bg-ground-light text-paper",
  },
  {
    label: "Community trust layer",
    items: "Heartfulness · ASHA · Cooperatives · Federations",
    note: "A market-based asset: freely available, high compound value.",
    cls: "bg-marigold text-ink",
  },
];

const principles = ["Asset-light", "Community-first", "Purpose-led", "Revenue-backed", "Scalable"];

export function HowItWorks() {
  return (
    <Section id="platform" tone="paper">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="02">The platform</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              Not a store. Not an app. An <Em>Ecosystem Highway.</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">
              Many formal services run horizontally on top of one trusted,
              human-led distribution layer — a living network, not a piece of
              software.
            </Lead>
          </Reveal>
        </div>
      </div>

      {/* Stacked layers */}
      <Stagger className="mt-14 flex flex-col gap-2.5" amount={0.12}>
        {layers.map((l) => (
          <StaggerItem
            key={l.label}
            className={cn(
              "relative flex flex-col gap-3 rounded-2xl px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-8",
              l.cls,
            )}
          >
            {l.accent && (
              <span className="absolute left-6 top-0 h-[2px] w-16 -translate-y-1/2 bg-marigold sm:left-9" aria-hidden />
            )}
            <div>
              <p
                className={cn(
                  "font-mono text-[0.68rem] uppercase tracking-[0.2em]",
                  l.cls.includes("text-ink") ? "text-ink/60" : "text-paper/55",
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
                l.cls.includes("text-ink") ? "text-ink/75" : "text-paper/70",
              )}
            >
              {l.note}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Design principles */}
      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-ink/15 pt-8">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-soft/60">
            Designed to be
          </span>
          {principles.map((p) => (
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
