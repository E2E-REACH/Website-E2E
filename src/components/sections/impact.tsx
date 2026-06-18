import { Sprout, Users } from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

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
  { value: "[—]", label: "Champions onboarded" },
  { value: "[—]", label: "Share who are women" },
  { value: "[—]", label: "Households served" },
  { value: "[—]", label: "Villages reached" },
];

export function Impact() {
  return (
    <Section id="impact" tone="paper-dim">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker index="06">Why it matters</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              A livelihood that builds dignity, skills and a{" "}
              <Em>way forward.</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">
              Most of our Champions are women. It isn&apos;t only about what they
              earn this month — it&apos;s about standing, skills, and a real path
              from a first paid task to a business of their own.
            </Lead>
          </Reveal>
        </div>
      </div>

      {/* Testimonial — large editorial pull-quote (placeholder, no invented quotes) */}
      <Reveal delay={0.05}>
        <figure className="mt-16 border-t border-ink/15 pt-10">
          <span className="font-display text-6xl leading-none text-marigold-ink" aria-hidden>
            &ldquo;
          </span>
          {/* TODO: replace with a real, consented Champion testimonial */}
          <blockquote className="mt-2 max-w-5xl font-display text-2xl font-medium italic leading-[1.25] text-ink text-balance sm:text-3xl lg:text-[2.6rem]">
            [PLACEHOLDER: a real, consented Champion testimonial, in her own words
            — what changed for her and her family.]
          </blockquote>
          <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft/70">
            [PLACEHOLDER: name · role · location]
          </figcaption>
        </figure>
      </Reveal>

      <Stagger className="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <StaggerItem key={p.title} className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ground text-paper">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-medium text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* Future impact band — placeholders for now */}
      <Stagger
        as="dl"
        className="mt-16 grid grid-cols-2 border-t border-ink/15 lg:grid-cols-4"
      >
        {impactStats.map((s) => (
          <StaggerItem
            key={s.label}
            className="border-b border-ink/10 py-7 lg:border-b-0 lg:border-r lg:border-ink/10 lg:px-7 lg:first:pl-0 lg:last:border-r-0"
          >
            {/* TODO: replace with real data */}
            <dt className="font-display text-4xl font-medium text-ground sm:text-5xl">
              {s.value}
            </dt>
            <dd className="mt-2 text-sm text-ink-soft">{s.label}</dd>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
