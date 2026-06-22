import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { RoughText } from "@/components/ui/rough-text";

// Figures reflect e2E Reach's market framing (corporate & investor decks).
const stats = [
  { value: "67%", label: "of India remains chronically underserved, despite smartphones" },
  { value: "₹3–5k", label: "to acquire one customer the old way — economically unviable at the last mile" },
  { value: "The missing middle", label: "economically viable, yet operationally unreachable" },
];

export function TheGap() {
  return (
    <Section id="opportunity" tone="paper">
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker index="01">The opportunity</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              The bottleneck isn&apos;t demand. It&apos;s{" "}
              <RoughText type="underline" multiline>
                <Em className="text-marigold-ink">trusted reach.</Em>
              </RoughText>
            </Display>
          </Reveal>
        </div>

        <div className="flex flex-col justify-end gap-6 lg:col-span-5 lg:pb-2">
          <Reveal delay={0.1}>
            <Lead>
              Commerce, insurance, credit, healthcare and welfare all have vast
              addressable markets at India&apos;s last mile. Value can&apos;t
              flow because rural, semi-urban and underserved communities need
              human intermediaries who carry credibility — not just connectivity.
            </Lead>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Community trust is a <Em className="text-marigold-ink">market-based asset</Em> — freely available, and largely untapped.
            </p>
          </Reveal>
        </div>
      </div>

      <Stagger
        as="dl"
        className="mt-20 grid grid-cols-1 border-t border-ink/15 sm:grid-cols-3"
      >
        {stats.map((s) => (
          <StaggerItem
            key={s.label}
            className="border-b border-ink/10 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0"
          >
            <dt className="font-display text-3xl font-medium leading-tight text-ground sm:text-4xl">
              {s.value}
            </dt>
            <dd className="mt-3 max-w-[28ch] text-sm leading-relaxed text-ink-soft">
              {s.label}
            </dd>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
