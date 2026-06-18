import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style "moving border" — a light travels around the perimeter of
 * the wrapped element via a slowly spinning conic gradient. Used to give the
 * hero / final primary CTA extra presence. CSS-only; the spin freezes under
 * `prefers-reduced-motion`.
 */
export function MovingGlow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex overflow-hidden rounded-full p-[1.5px]",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-[-150%]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, var(--marigold) 55deg, #FCEFD2 92deg, transparent 150deg, transparent 360deg)",
          animation: "spin-slow 4.5s linear infinite",
        }}
      />
      <span className="relative z-10 inline-flex w-full rounded-full">
        {children}
      </span>
    </span>
  );
}
