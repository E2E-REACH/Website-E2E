"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type RoughType = "underline" | "circle" | "box" | "highlight" | "bracket";

/**
 * Hand-drawn marigold annotation that draws itself when scrolled into view.
 * Re-measures on size change (ResizeObserver) so it re-wraps correctly when the
 * text changes — e.g. when switching EN ⇄ हिंदी — or after fonts load.
 */
export function RoughText({
  children,
  type = "underline",
  color = "#E8A33D",
  className,
  multiline = false,
}: {
  children: ReactNode;
  type?: RoughType;
  color?: string;
  className?: string;
  multiline?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;

    let annotation: ReturnType<typeof annotate> | undefined;
    let drawn = false;
    const draw = (animate: boolean) => {
      annotation?.remove();
      annotation = annotate(el, {
        type,
        color,
        strokeWidth: 2.4,
        padding: type === "circle" ? [6, 12] : type === "box" ? 6 : 3,
        multiline,
        iterations: type === "circle" || type === "box" ? 2 : 1,
        animationDuration: animate && !reduced ? 800 : 0,
      });
      annotation.show();
    };

    const first = setTimeout(() => {
      draw(true);
      drawn = true;
    }, 220);

    let redraw: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      if (!drawn) return;
      clearTimeout(redraw);
      redraw = setTimeout(() => draw(false), 90);
    });
    ro.observe(el);

    return () => {
      clearTimeout(first);
      clearTimeout(redraw);
      ro.disconnect();
      annotation?.remove();
    };
  }, [inView, type, color, multiline, reduced]);

  return (
    <span ref={ref} className={cn("relative", className)}>
      {children}
    </span>
  );
}
