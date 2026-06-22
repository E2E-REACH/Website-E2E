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
        "font-display font-bold leading-none inline-flex items-baseline select-none tracking-[-0.05em]",
        base,
        className,
      )}
      aria-label="e2E Reach"
    >
      {/* e2E steps up in size on a shared baseline → an ascending right triangle */}
      <span className="text-[0.55em] opacity-90" aria-hidden>
        e
      </span>
      <span className="text-marigold text-[1em]" aria-hidden>
        2
      </span>
      <span className="text-[1.5em]" aria-hidden>
        E
      </span>
      <span className="ml-[0.42em] font-sans text-[0.46em] font-semibold uppercase tracking-[0.18em] opacity-70" aria-hidden>
        Reach
      </span>
    </span>
  );
}
