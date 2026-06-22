"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { cn } from "@/lib/utils";

/**
 * Hand-drawn (RoughJS) decorative marks — a curved arrow or a squiggle —
 * for the warm sections. Purely decorative, so aria-hidden.
 */
export function Sketch({
  variant = "arrow",
  color = "#E8A33D",
  width = 58,
  height = 58,
  className,
}: {
  variant?: "arrow" | "squiggle";
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    svg.innerHTML = "";
    const rc = rough.svg(svg);
    // low roughness + fixed seed → a clean, legible hand-drawn mark every render
    const opts = {
      stroke: color,
      strokeWidth: 2,
      roughness: 1,
      bowing: 1,
      seed: 7,
    };

    if (variant === "arrow") {
      const w = width;
      const h = height;
      const tipX = w * 0.5;
      const tipY = h * 0.86;
      // gently curving vertical shaft
      svg.appendChild(
        rc.path(
          `M ${w * 0.5} ${h * 0.1} Q ${w * 0.28} ${h * 0.5} ${tipX} ${tipY}`,
          opts,
        ),
      );
      // tidy arrowhead
      svg.appendChild(rc.line(tipX, tipY, tipX - w * 0.18, tipY - h * 0.18, opts));
      svg.appendChild(rc.line(tipX, tipY, tipX + w * 0.18, tipY - h * 0.18, opts));
    } else {
      const seg = width / 4;
      svg.appendChild(
        rc.path(
          `M 4 ${height / 2} q ${seg / 2} -11 ${seg} 0 t ${seg} 0 t ${seg} 0 t ${seg} 0`,
          opts,
        ),
      );
    }
  }, [variant, color, width, height]);

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("pointer-events-none shrink-0", className)}
      aria-hidden
    />
  );
}
