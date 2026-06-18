import { type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

type Tone = "paper" | "paper-dim" | "ground" | "ground-deep";

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  "paper-dim": "bg-paper-dim text-ink",
  ground: "bg-ground text-paper",
  "ground-deep": "bg-ground-deep text-paper",
};

export function Section({
  id,
  tone = "paper",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  const dark = tone === "ground" || tone === "ground-deep";
  return (
    <section
      id={id}
      data-tone={dark ? "dark" : "light"}
      className={cn(
        "relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:py-40",
        toneClasses[tone],
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[88rem]">{children}</div>
    </section>
  );
}

/** Editorial kicker: indexed, mono, with a hairline tick. */
export function Kicker({
  index,
  children,
  className,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em]",
        className,
      )}
    >
      {index && (
        <span className="text-marigold-ink in-data-[tone=dark]:text-marigold">
          ({index})
        </span>
      )}
      <span className="h-px w-8 bg-ink/25 in-data-[tone=dark]:bg-paper/30" aria-hidden />
      <span className="text-ink-soft in-data-[tone=dark]:text-paper/60">{children}</span>
    </div>
  );
}

/** Fraunces display heading with an editorial scale. */
export function Display({
  as = "h2",
  size = "lg",
  className,
  children,
}: {
  as?: ElementType;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: ReactNode;
}) {
  const Tag = as as ElementType;
  const sizes: Record<string, string> = {
    sm: "text-[clamp(1.6rem,3vw,2.2rem)]",
    md: "text-[clamp(2rem,4.2vw,3.1rem)]",
    lg: "text-[clamp(2.4rem,5.4vw,4.2rem)]",
    xl: "text-[clamp(2.9rem,8.2vw,6.6rem)]",
  };
  return (
    <Tag
      className={cn(
        "font-display font-medium leading-[1.02] text-balance",
        sizes[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "max-w-xl text-lg leading-relaxed text-pretty sm:text-xl",
        "text-ink-soft in-data-[tone=dark]:text-paper/75",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Em — italic Fraunces emphasis (the editorial accent). */
export function Em({ children, className }: { children: ReactNode; className?: string }) {
  return <em className={cn("italic", className)}>{children}</em>;
}
