import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Photo } from "@/components/ui/photo";

const points = [
  "Prove the unit economics in one district",
  "Replicate the playbook to the next",
  "District-level coordination infrastructure",
];

export function AcrossIndia() {
  return (
    <Section id="across-india" tone="ground">
      <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <Kicker>Built for scale</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7 text-paper">
              From one district to the <Em className="text-marigold">whole country.</Em>
            </Display>
          </Reveal>
          <Reveal delay={0.1}>
            <Lead className="mt-6 text-paper/75">
              We start where there&apos;s a real community need, prove it works,
              then replicate — a scalable template for India&apos;s underserved
              geographies, built district by district.
            </Lead>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 flex flex-col gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-paper/85">
                  <span className="size-1.5 rounded-full bg-marigold" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Photo
            src="/images/india-network.jpg"
            alt="A map of India glowing with warm marigold nodes across states and districts, joined by faint connecting lines — a living trust network spreading nationwide."
            className="aspect-[4/3] w-full ring-1 ring-paper/15"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
      </div>
    </Section>
  );
}
