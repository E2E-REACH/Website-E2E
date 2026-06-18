"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Tasteful scroll-triggered reveal. Under `prefers-reduced-motion` it renders
 * the content in its final state with no transform/opacity animation.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  // Under reduced-motion, render in the final state with no animation —
  // Framer animates via JS and would otherwise ignore the global CSS rule.
  const variants: Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduced
        ? { duration: 0 }
        : { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
