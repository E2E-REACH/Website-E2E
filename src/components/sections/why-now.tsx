import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const tailwinds = [
  { k: "800M+", t: "Mobile users in India", d: "Yet deep-point-reach is still the bottleneck." },
  { k: "ONDC", t: "Open Network for Digital Commerce", d: "Infrastructure that finally enables ecosystem-based models." },
  { k: "AA", t: "Account Aggregator", d: "Consented financial data flows unlock credit & insurance." },
  { k: "ESG", t: "Impact-capital appetite", d: "Investor demand for scalable, community-led models." },
  { k: "Post-COVID", t: "Livelihood resilience", d: "Community-embedded income proved the most durable." },
  { k: "Reed's Law", t: "Network value compounds", d: "Value grows with every new member of the network." },
];

export function WhyNow() {
  return (
    <Section id="why-now" tone="ground">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="09">Why now</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7 text-paper">
              The infrastructure moment has <Em className="text-marigold">arrived.</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-paper/75 text-base sm:text-lg">
              Public rails, capital and proof are converging at the same time —
              the window to build the last-mile layer is open.
            </Lead>
          </Reveal>
        </div>
      </div>

      <Stagger
        as="ul"
        className="mt-16 grid grid-cols-1 gap-x-12 border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-3"
        amount={0.07}
      >
        {tailwinds.map((w) => (
          <StaggerItem
            as="li"
            key={w.t}
            className="border-b border-paper/10 py-8"
          >
            <p className="font-display text-3xl font-medium text-marigold sm:text-4xl">
              {w.k}
            </p>
            <h3 className="mt-3 font-display text-lg font-medium text-paper">
              {w.t}
            </h3>
            <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-paper/65">
              {w.d}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
