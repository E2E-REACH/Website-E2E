import { ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A tasteful, clearly-labelled stand-in for a real photograph.
 * The visible label + brief double as the eventual `alt` text, so it's obvious
 * what to shoot/upload. Replace with a next/image <Image> when assets land.
 *
 *   TODO: replace with real photograph (see `brief`).
 */
export function ImagePlaceholder({
  label,
  brief,
  className,
  tone = "light",
}: {
  /** short caption, e.g. "Champion at a doorstep" */
  label: string;
  /** the photo direction — becomes the alt text later */
  brief: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <figure
      role="img"
      aria-label={`${label}. ${brief}`}
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-2xl p-8 text-center",
        dark
          ? "bg-paper/[0.06] ring-1 ring-paper/15"
          : "bg-ground-soft ring-1 ring-ground/15",
        className,
      )}
    >
      {/* subtle node-grid texture so it reads as intentional, not broken */}
      <span aria-hidden className="absolute inset-0 bg-node-grid opacity-40" />
      <span
        className={cn(
          "relative flex size-12 items-center justify-center rounded-full",
          dark ? "bg-paper/10 text-marigold" : "bg-ground text-paper",
        )}
      >
        <ImagePlus className="size-5" aria-hidden />
      </span>
      <figcaption className="relative mt-4 max-w-[42ch]">
        <span
          className={cn(
            "block font-mono text-[0.62rem] uppercase tracking-[0.2em]",
            dark ? "text-paper/50" : "text-ground/55",
          )}
        >
          Photo placeholder
        </span>
        <span
          className={cn(
            "mt-2 block font-display text-lg font-medium",
            dark ? "text-paper" : "text-ink",
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            "mt-1.5 block text-sm leading-relaxed",
            dark ? "text-paper/65" : "text-ink-soft",
          )}
        >
          {brief}
        </span>
      </figcaption>
    </figure>
  );
}
