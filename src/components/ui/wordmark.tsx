import { cn } from "@/lib/utils";

/**
 * The e2E wordmark tells the brand story typographically:
 *   small lowercase `e`  = e-commerce (the start)
 *   marigold `2`         = "to"
 *   large uppercase `E`  = Ecosystem (the destination)
 */
export function Wordmark({
  className,
  tone = "light",
}: {
  className?: string;
  /** "light" = for dark surfaces (paper text); "dark" = for light surfaces (ink text) */
  tone?: "light" | "dark";
}) {
  const base = tone === "light" ? "text-paper" : "text-ground";
  return (
    <span
      className={cn(
        "font-display font-semibold leading-none inline-flex items-baseline select-none tracking-[-0.02em]",
        base,
        className,
      )}
      aria-label="e2E Reach"
    >
      <span className="text-[0.64em] font-normal italic opacity-80" aria-hidden>
        e
      </span>
      <span className="text-marigold font-bold mx-[0.015em]" aria-hidden>
        2
      </span>
      <span className="text-[1.16em] font-bold" aria-hidden>
        E
      </span>
      <span className="ml-[0.36em] font-sans text-[0.5em] font-semibold uppercase tracking-[0.18em] opacity-70" aria-hidden>
        Reach
      </span>
    </span>
  );
}
