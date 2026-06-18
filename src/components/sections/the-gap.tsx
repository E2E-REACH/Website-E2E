import { Section, Eyebrow, SectionHeading, Lead } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

// TODO: replace placeholder stats with real, cited figures before launch.
const stats = [
  { value: "[PLACEHOLDER]", label: "people in underserved & rural communities" },
  { value: "[PLACEHOLDER]", label: "without reliable access to essential services" },
  { value: "[PLACEHOLDER]", label: "single-purpose agents needed to cover one village" },
];

export function TheGap() {
  return (
    <Section id="the-gap" tone="paper">
      <Reveal>
        <Eyebrow>The gap</Eyebrow>
        <SectionHeading>
          The services exist. The trust to deliver them doesn&apos;t reach the
          last mile.
        </SectionHeading>
        <Lead>
          Banks, insurers, solar companies, telehealth providers and government
          schemes all want to serve rural and underserved communities — but none
          of them can economically build the final human layer that makes it
          work. Underserved markets don&apos;t fail for lack of products. They
          fail for lack of trusted last-mile distribution and fulfilment.
        </Lead>
        <p className="mt-4 max-w-xl text-lg font-medium text-ink">
          e2E Reach <span className="text-marigold-ink">is</span> that layer.
        </p>
      </Reveal>

      {/* Quiet stat row — placeholders until real data is available */}
      <Reveal delay={0.1}>
        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper p-6">
              {/* TODO: replace with real data */}
              <dt className="font-mono text-xl font-bold text-ground sm:text-2xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
