import { Info } from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

// Earning ranges are platform aspirations (per e2E Reach decks), not guarantees.
const streams = [
  { title: "Financial-literacy programmes", figure: "₹10–20k", note: "~2 programmes a month" },
  { title: "Commerce & micro-distribution", figure: "₹8–15k", note: "FMCG + local category" },
  { title: "Healthcare & insurance referrals", figure: "₹5–10k", note: "Referral commissions" },
  { title: "Entrepreneurial business", figure: "up to ₹1L", note: "Own distribution ops" },
];

export function Earnings() {
  return (
    <Section id="livelihoods" tone="ground-deep">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="05">Livelihoods</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7 text-paper">
              Dignified income — <Em className="text-marigold">created at the last mile.</Em>
            </Display>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Lead className="text-paper/75">
              Every participant stacks multiple income streams into a meaningful
              livelihood — building employability, standing and women&apos;s
              economic participation along the way.
            </Lead>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-paper/55">
                Platform aspiration
              </p>
              <p className="mt-3 font-mono text-[clamp(2.4rem,6.5vw,4.6rem)] font-bold leading-none text-paper">
                ₹40–50k
                <span className="ml-2 align-baseline font-sans text-lg font-semibold text-marigold">
                  / month
                </span>
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/60">
                Blended, across activities — depending on mix, effort and
                geography.
              </p>
            </div>
          </Reveal>
        </div>

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
            <p className="mt-8 flex items-start gap-2.5 text-sm leading-relaxed text-paper/55">
              <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                Illustrative potential, not a guarantee — actual earnings vary
                with activity mix, effort and geography.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
