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
  width = 110,
  height = 64,
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
    const opts = { stroke: color, strokeWidth: 2.2, roughness: 1.9, bowing: 2 };

    if (variant === "arrow") {
      const w = width;
      const h = height;
      svg.appendChild(
        rc.path(
          `M ${w * 0.18} 8 C ${w * 0.05} ${h * 0.5}, ${w * 0.95} ${h * 0.38}, ${w * 0.56} ${h - 12}`,
          opts,
        ),
      );
      svg.appendChild(rc.line(w * 0.56, h - 12, w * 0.38, h - 26, opts));
      svg.appendChild(rc.line(w * 0.56, h - 12, w * 0.74, h - 28, opts));
    } else {
      const seg = width / 4;
      svg.appendChild(
        rc.path(
          `M 4 ${height / 2} q ${seg / 2} -13 ${seg} 0 t ${seg} 0 t ${seg} 0 t ${seg} 0`,
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
      className={cn("pointer-events-none", className)}
      aria-hidden
    />
  );
}
