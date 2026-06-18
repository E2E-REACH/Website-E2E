import { Info } from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

// All figures are illustrative potential — see the disclaimer in this section.
const streams = [
  { title: "Service gigs", figure: "Variable", note: "Per-service commissions, for every task you complete." },
  { title: "Knowledge programs", figure: "₹10–20k", note: "~2 awareness or literacy programs a month, plus sponsorships." },
  { title: "Entrepreneurial track", figure: "~₹1 lakh", note: "Per month at maturity — margin and recurring revenue." },
];

const nonCash = [
  "Rising standing in your community",
  "Life- & employability-skill upskilling",
  "Women's economic empowerment",
];

export function Earnings() {
  return (
    <Section id="earnings" tone="ground-deep">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="04">The opportunity</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7 text-paper">
              Stackable income that builds toward a{" "}
              <Em className="text-marigold">real monthly target.</Em>
            </Display>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
        {/* left: framing + non-cash value */}
        <div className="lg:col-span-5">
          <Reveal>
            <Lead className="text-paper/75">
              Your earnings aren&apos;t one number — they&apos;re layers that stack
              as you grow through the personas.
            </Lead>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 flex flex-col gap-2.5">
              {nonCash.map((n) => (
                <li
                  key={n}
                  className="flex items-center gap-3 text-sm text-paper/80"
                >
                  <span className="size-1.5 rounded-full bg-marigold" aria-hidden />
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* right: the streams + the headline figure */}
        <div className="lg:col-span-7">
          <Stagger className="border-t border-paper/15">
            {streams.map((s) => (
              <StaggerItem
                key={s.title}
                className="flex items-baseline justify-between gap-6 border-b border-paper/10 py-5"
              >
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-medium text-paper">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-paper/60">{s.note}</p>
                </div>
                <span className="shrink-0 font-mono text-lg font-bold text-marigold">
                  {s.figure}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-paper/55">
                Blended target
              </p>
              <p className="mt-3 font-mono text-[clamp(2.6rem,7vw,5rem)] font-bold leading-none text-paper">
                ₹40–50k
                <span className="ml-2 align-baseline font-sans text-lg font-semibold text-marigold">
                  / month
                </span>
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/65">
                As the streams above stack together — depending on your service
                mix, effort and geography.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-14 flex max-w-3xl items-start gap-2.5 border-t border-paper/12 pt-6 text-sm leading-relaxed text-paper/55">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
          <span>
            Illustrative potential, not a guarantee. Actual earnings vary with
            your service mix, the effort you put in, and where you work.
            {/* TODO: confirm final earnings ranges with real program data */}
          </span>
        </p>
      </Reveal>
    </Section>
  );
}
