"use client";

import { type ReactNode, type ElementType, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/*  Reveal — fade/slide/blur in on scroll                              */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  blur = false,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  as?: "div" | "li" | "span" | "section";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];
  const variants: Variants = {
    hidden: {
      opacity: reduced ? 1 : 0,
      y: reduced ? 0 : y,
      filter: blur && !reduced ? "blur(10px)" : "blur(0px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: reduced ? { duration: 0 } : { duration: 0.8, delay, ease: EASE },
    },
  };
  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

/* ------------------------------------------------------------------ */
/*  RevealMask — editorial line/heading reveal (slides up behind a mask)*/
/* ------------------------------------------------------------------ */
export function RevealMask({
  children,
  className,
  delay = 0,
  as = "span",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const reduced = useReducedMotion();
  const Tag = as as ElementType;
  if (reduced) return <Tag className={cn("block", className)}>{children}</Tag>;
  return (
    <Tag className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Stagger — container that staggers its <StaggerItem> children       */
/* ------------------------------------------------------------------ */
export function Stagger({
  children,
  className,
  amount = 0.12,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  as?: "div" | "ul" | "ol" | "dl";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={{ show: { transition: { staggerChildren: amount } } }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  y = 26,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={{
        hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : y },
        show: {
          opacity: 1,
          y: 0,
          transition: reduced ? { duration: 0 } : { duration: 0.7, ease: EASE },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

/* ------------------------------------------------------------------ */
/*  Parallax — gentle scroll-linked translate (rides on Lenis scroll)  */
/* ------------------------------------------------------------------ */
export function Parallax({
  children,
  className,
  speed = 0.15,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  /** fraction of the element's travel to offset; positive = slower */
  speed?: number;
  as?: "div" | "span";
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const range = 100 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const MotionTag = motion[as];
  return (
    <MotionTag
      ref={ref as never}
      className={cn(className)}
      style={reduced ? undefined : { y }}
    >
      {children}
    </MotionTag>
  );
}
