import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Photo } from "@/components/ui/photo";

export function AcrossIndia({ t }: { t: Dict["india"] }) {
  return (
    <Section id="across-india" tone="ground">
      <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <Kicker>{t.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7 text-paper">
              {t.h} <Em className="text-marigold">{t.hEm}</Em>
            </Display>
          </Reveal>
          <Reveal delay={0.1}>
            <Lead className="mt-6 text-paper/75">{t.lead}</Lead>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 flex flex-col gap-3">
              {t.points.map((p) => (
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
            alt={t.photoAlt}
            className="aspect-[4/3] w-full ring-1 ring-paper/15"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
      </div>
    </Section>
  );
}
