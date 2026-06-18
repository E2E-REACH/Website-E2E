import { Sprout, Users, Quote } from "lucide-react";
import { Section, Eyebrow, SectionHeading, Lead } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    icon: Users,
    title: "Standing, not just income",
    body: "Being the person who brings health, finance and energy to the village raises a Champion's social capital — how much she's trusted and turned to.",
  },
  {
    icon: Sprout,
    title: "Skills that compound",
    body: "Real life- and employability skills — from digital tools to running programs — that stay with her whatever comes next.",
  },
];

// TODO: replace all placeholder figures with verified impact data before launch.
const impactStats = [
  { value: "[PLACEHOLDER]", label: "Champions onboarded" },
  { value: "[PLACEHOLDER]", label: "Share who are women" },
  { value: "[PLACEHOLDER]", label: "Households served" },
  { value: "[PLACEHOLDER]", label: "Villages reached" },
];

export function Impact() {
  return (
    <Section id="impact" tone="paper-dim">
      <Reveal>
        <Eyebrow>Impact & women empowerment</Eyebrow>
        <SectionHeading>
          A livelihood that builds dignity, skills and a way forward.
        </SectionHeading>
        <Lead>
          Most of our Champions are women. The work isn&apos;t only about what
          they earn this month — it&apos;s about standing in the community, skills
          that last, and a real path from a first paid task to running a
          business of their own.
        </Lead>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal delay={0.1} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex flex-col rounded-2xl bg-paper p-6 ring-1 ring-line"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-ground-soft text-ground">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            );
          })}
        </Reveal>

        {/* Placeholder testimonial — no invented quotes */}
        <Reveal delay={0.15}>
          <figure className="flex h-full flex-col justify-between rounded-2xl bg-ground p-6 text-paper ring-1 ring-ground">
            <Quote className="size-7 text-marigold" aria-hidden />
            {/* TODO: replace with a real, consented Champion testimonial */}
            <blockquote className="mt-4 font-display text-xl leading-snug text-balance text-paper/90">
              [PLACEHOLDER: Champion testimonial — a real, consented quote in her
              own words.]
            </blockquote>
            <figcaption className="mt-6 font-mono text-xs uppercase tracking-wide text-paper/55">
              [PLACEHOLDER: name, role, location]
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* Future impact-stats band — placeholders for now */}
      <Reveal delay={0.2}>
        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line lg:grid-cols-4">
          {impactStats.map((s) => (
            <div key={s.label} className="bg-paper p-6">
              {/* TODO: replace with real data */}
              <dt className="font-mono text-lg font-bold text-ground sm:text-xl">
                {s.value}
              </dt>
              <dd className="mt-1.5 text-sm text-ink-soft">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
