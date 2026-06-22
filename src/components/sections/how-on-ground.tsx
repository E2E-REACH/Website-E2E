import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { RoughText } from "@/components/ui/rough-text";
import { Sketch } from "@/components/ui/sketch";

const steps = [
  {
    n: "01",
    title: "A trusted local person joins",
    body: "They become a Well-being Champion — most are women, already known and trusted by their neighbours.",
  },
  {
    n: "02",
    title: "We train and equip them",
    body: "One simple app for many services, hands-on training, payments and ongoing support — no capital needed from them.",
  },
  {
    n: "03",
    title: "They carry it to the doorstep",
    body: "Banking, health, insurance and government schemes — explained face-to-face, in the local language, where people live.",
  },
  {
    n: "04",
    title: "Everyone gains",
    body: "Families get access they never had, Champions earn a real livelihood, and partners finally reach the last mile.",
  },
];

export function HowOnGround() {
  return (
    <Section id="how" tone="paper">
      <div className="max-w-3xl">
        <Reveal>
          <Kicker>In plain terms</Kicker>
        </Reveal>
        <Reveal delay={0.05}>
          <Display as="h2" size="lg" className="mt-7">
            How it actually{" "}
            <RoughText type="circle">
              <Em>works.</Em>
            </RoughText>
          </Display>
        </Reveal>
        <Reveal delay={0.1}>
          <Lead className="mt-6">
            No jargon. e2E Reach connects the formal economy to communities it
            can&apos;t reach today — through one trusted person who carries many
            services to the door.
          </Lead>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ImagePlaceholder
            className="aspect-[4/3] w-full lg:sticky lg:top-28 lg:aspect-[5/6]"
            label="On the ground"
            brief="A woman Well-being Champion guiding a family through a service on a tablet at their home — neighbours nearby, rural or small-town India, warm and real."
          />
        </Reveal>

        <div>
          <Reveal className="mb-1 flex items-center gap-3 text-marigold">
            <Sketch variant="arrow" width={84} height={52} />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-soft/60">
              four simple steps
            </span>
          </Reveal>
          <Stagger as="ol" className="flex flex-col">
          {steps.map((s) => (
            <StaggerItem
              as="li"
              key={s.n}
              className="grid grid-cols-[auto_1fr] gap-x-6 border-b border-ink/10 py-7 first:border-t first:border-ink/15"
            >
              <span className="font-mono text-sm tabular-nums text-marigold-ink">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
