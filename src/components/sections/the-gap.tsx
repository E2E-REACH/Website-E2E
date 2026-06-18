import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

// TODO: replace placeholder stats with real, cited figures before launch.
const stats = [
  { value: "[—]", label: "people in underserved & rural communities" },
  { value: "[—]", label: "without reliable access to essential services" },
  { value: "[—]", label: "agents it takes to cover one village, the old way" },
];

export function TheGap() {
  return (
    <Section id="the-gap" tone="paper">
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker index="01">The reality</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              The services exist. The trust to deliver them{" "}
              <Em className="text-marigold-ink">doesn&apos;t</Em> reach the last
              mile.
            </Display>
          </Reveal>
        </div>

        <div className="flex flex-col justify-end gap-6 lg:col-span-5 lg:pb-2">
          <Reveal delay={0.1}>
            <Lead>
              Banks, insurers, solar companies, telehealth providers and
              government schemes all want to serve these communities — but none
              can economically build the final human layer that makes it work.
              Markets don&apos;t fail for lack of products. They fail for lack of
              trusted last-mile reach.
            </Lead>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-display text-2xl font-medium text-ink sm:text-3xl">
              e2E Reach <Em className="text-marigold-ink">is</Em> that layer.
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
            {/* TODO: replace with real data */}
            <dt className="font-display text-5xl font-medium text-ground sm:text-6xl">
              {s.value}
            </dt>
            <dd className="mt-3 max-w-[26ch] text-sm leading-relaxed text-ink-soft">
              {s.label}
            </dd>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
