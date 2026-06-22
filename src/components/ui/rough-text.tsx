"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type RoughType = "underline" | "circle" | "box" | "highlight" | "bracket";

/**
 * Hand-drawn marigold annotation that draws itself when scrolled into view —
 * a warm, confident way to emphasise a key word or figure. Used only in the
 * "human" sections; never in the institutional ones.
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
    const annotation = annotate(el, {
      type,
      color,
      strokeWidth: 2.4,
      padding: type === "circle" ? [4, 8] : type === "box" ? 6 : 3,
      multiline,
      iterations: type === "circle" || type === "box" ? 2 : 1,
      animationDuration: reduced ? 0 : 800,
    });
    // let layout settle (fonts, reveal transforms) before measuring
    const t = setTimeout(() => annotation.show(), 220);
    return () => {
      clearTimeout(t);
      annotation.remove();
    };
  }, [inView, type, color, multiline, reduced]);

  return (
    <span ref={ref} className={cn("relative", className)}>
      {children}
    </span>
  );
}
