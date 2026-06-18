import { Info } from "lucide-react";
import { Section, Eyebrow, SectionHeading, Lead } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

// All figures are illustrative potential — see the disclaimer in this section.
const streams = [
  {
    title: "Service gigs",
    figure: "Variable",
    note: "Per-service commissions — paid for every task you complete.",
  },
  {
    title: "Knowledge programs",
    figure: "₹10,000–20,000",
    note: "Around 2 awareness or literacy programs a month, plus sponsorships.",
  },
  {
    title: "Entrepreneurial track",
    figure: "up to ~₹1 lakh",
    note: "Per month at maturity — margin and recurring revenue from your own book.",
  },
];

const nonCash = [
  "Rising standing in your community",
  "Life- and employability-skill upskilling",
  "Women's economic empowerment",
];

export function Earnings() {
  return (
    <Section id="earnings" tone="ground">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <Eyebrow>What you can earn</Eyebrow>
          <SectionHeading>
            Stackable income streams that build toward a real monthly target.
          </SectionHeading>
          <Lead>
            Your earnings aren&apos;t one number — they&apos;re layers that stack
            as you grow through the personas. Here&apos;s the potential, framed
            honestly.
          </Lead>

          <div className="mt-8 flex flex-wrap gap-2">
            {nonCash.map((n) => (
              <span
                key={n}
                className="rounded-full border border-paper/20 bg-paper/5 px-3 py-1.5 text-sm text-paper/85"
              >
                {n}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3">
            {streams.map((s) => (
              <div
                key={s.title}
                className="flex items-start justify-between gap-4 rounded-2xl border border-paper/10 bg-paper/[0.04] p-5"
              >
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-paper">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-paper/70">
                    {s.note}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-sm font-bold text-marigold sm:text-base">
                  {s.figure}
                </span>
              </div>
            ))}

            {/* Blended target — the headline figure */}
            <div className="mt-1 overflow-hidden rounded-2xl bg-marigold p-6 text-ink">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/70">
                Blended target
              </p>
              <p className="mt-2 font-mono text-3xl font-bold leading-none sm:text-4xl">
                ₹40,000–50,000
                <span className="ml-1 align-baseline font-sans text-base font-semibold text-ink/70">
                  /month
                </span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                Depending on your service mix, effort and geography — as the
                streams above stack together.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Honest disclaimer */}
      <Reveal delay={0.15}>
        <p className="mt-10 flex max-w-3xl items-start gap-2.5 text-sm leading-relaxed text-paper/60">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
          <span>
            These figures are illustrative potential, not a guarantee. Actual
            earnings vary with your service mix, the effort you put in, and where
            you work. {/* TODO: confirm final earnings ranges with real program data */}
          </span>
        </p>
      </Reveal>
    </Section>
  );
}
