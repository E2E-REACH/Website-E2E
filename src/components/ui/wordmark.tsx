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
        "font-display font-bold leading-none tracking-tight inline-flex items-baseline select-none",
        base,
        className,
      )}
      aria-label="e2E Reach"
    >
      <span className="text-[0.62em] font-medium opacity-80" aria-hidden>
        e
      </span>
      <span className="text-marigold font-extrabold mx-[0.02em]" aria-hidden>
        2
      </span>
      <span className="text-[1.18em] font-extrabold -ml-[0.02em]" aria-hidden>
        E
      </span>
      <span className="ml-[0.34em] text-[0.74em] font-semibold tracking-tight" aria-hidden>
        Reach
      </span>
    </span>
  );
}
