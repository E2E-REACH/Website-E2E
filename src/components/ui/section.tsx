import { type ReactNode } from "react";
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
        "scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:py-28",
        toneClasses[tone],
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

/** Mono eyebrow with the node-dot motif; optional sequence number. */
export function Eyebrow({
  children,
  num,
  className,
}: {
  children: ReactNode;
  num?: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em]",
        "text-marigold-ink in-data-[tone=dark]:text-marigold",
        className,
      )}
    >
      {num ? (
        <span className="tabular-nums opacity-70">{num}</span>
      ) : (
        <span
          aria-hidden
          className="size-1.5 rounded-full bg-marigold-ink in-data-[tone=dark]:bg-marigold"
        />
      )}
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mt-3 max-w-2xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
        className,
      )}
    >
      {children}
    </h2>
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
        "mt-5 max-w-xl text-lg leading-relaxed text-pretty",
        "text-ink-soft in-data-[tone=dark]:text-paper/75",
        className,
      )}
    >
      {children}
    </p>
  );
}
