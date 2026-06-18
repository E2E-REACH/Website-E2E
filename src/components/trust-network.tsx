"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Signature element — a crafted, living "trust network".
 *
 * Communities cluster around Well-being Champions (the glowing orbs), who in
 * turn reach out along flowing curves to the service sectors. Composition is
 * deterministic (SSR-safe); it breathes via CSS, sends signal pulses along the
 * links, and drifts subtly toward the pointer. All motion is disabled under
 * `prefers-reduced-motion`.
 */

type Pt = { x: number; y: number };

// Champions sit along a gentle S-curve rather than a rigid column.
const champions: Pt[] = [
  { x: 232, y: 148 },
  { x: 322, y: 300 },
  { x: 250, y: 452 },
];

// Community households cluster intimately around each Champion (lower-left mass).
const communities: { p: Pt; c: number }[] = [
  { p: { x: 96, y: 96 }, c: 0 },
  { p: { x: 70, y: 168 }, c: 0 },
  { p: { x: 138, y: 70 }, c: 0 },
  { p: { x: 120, y: 214 }, c: 0 },
  { p: { x: 150, y: 332 }, c: 1 },
  { p: { x: 104, y: 286 }, c: 1 },
  { p: { x: 92, y: 372 }, c: 1 },
  { p: { x: 116, y: 470 }, c: 2 },
  { p: { x: 150, y: 528 }, c: 2 },
  { p: { x: 88, y: 430 }, c: 2 },
];

// Service sectors arc up the right-hand side.
const services: Pt[] = [
  { x: 498, y: 70 },
  { x: 548, y: 178 },
  { x: 532, y: 296 },
  { x: 540, y: 410 },
  { x: 474, y: 506 },
];

const serviceLinks: [number, number][] = [
  [0, 0], [0, 1],
  [1, 1], [1, 2], [1, 3],
  [2, 3], [2, 4],
];

/** Curved path with a perpendicular control-point offset for an organic arc. */
function curve(a: Pt, b: Pt, k: number): string {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  return `M ${a.x} ${a.y} Q ${mx + nx * k} ${my + ny * k} ${b.x} ${b.y}`;
}

function Layer({
  px,
  py,
  depth,
  children,
}: {
  px: MotionValue<number>;
  py: MotionValue<number>;
  depth: number;
  children: React.ReactNode;
}) {
  const x = useSpring(useTransformScale(px, depth), { stiffness: 60, damping: 18 });
  const y = useSpring(useTransformScale(py, depth), { stiffness: 60, damping: 18 });
  return (
    <motion.g style={{ x, y }} className="will-change-transform">
      {children}
    </motion.g>
  );
}

function useTransformScale(mv: MotionValue<number>, depth: number) {
  return useTransform(mv, (v) => v * depth);
}

export function TrustNetwork({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const motionOk = mounted && !reduced;

  const wrapRef = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  function onMove(e: React.PointerEvent) {
    if (!motionOk || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    py.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  }
  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      ref={wrapRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn("relative h-full w-full", className)}
    >
      <svg
        viewBox="0 0 620 600"
        role="img"
        aria-label="Communities cluster around Well-being Champions, who connect outward to healthcare, finance, energy and other services."
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <radialGradient id="tn-orb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FBE6BE" />
            <stop offset="38%" stopColor="var(--marigold)" />
            <stop offset="100%" stopColor="#C9791C" />
          </radialGradient>
          <radialGradient id="tn-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--marigold)" stopOpacity="0.45" />
            <stop offset="70%" stopColor="var(--marigold)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="tn-atmo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--ground-light)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--ground-light)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tn-link" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--marigold)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--marigold)" stopOpacity="0.55" />
          </linearGradient>
          <filter id="tn-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Atmosphere — big soft orbs for depth */}
        <Layer px={px} py={py} depth={6}>
          <circle cx="330" cy="300" r="190" fill="url(#tn-atmo)" />
          <circle cx="150" cy="430" r="120" fill="url(#tn-atmo)" opacity="0.5" />
        </Layer>

        {/* Links */}
        <Layer px={px} py={py} depth={14}>
          {/* community -> champion (short, intimate) */}
          {communities.map((c, i) => (
            <path
              key={`cl-${i}`}
              d={curve(c.p, champions[c.c], 22)}
              fill="none"
              stroke="var(--paper)"
              strokeOpacity="0.14"
              strokeWidth="1"
            />
          ))}
          {/* champion -> service (long flowing arcs) */}
          {serviceLinks.map(([ci, si], i) => (
            <path
              key={`sl-${i}`}
              id={`tn-path-${i}`}
              d={curve(champions[ci], services[si], i % 2 ? 60 : -60)}
              fill="none"
              stroke="url(#tn-link)"
              strokeOpacity="0.5"
              strokeWidth="1.4"
            />
          ))}
        </Layer>

        {/* Signal pulses travelling champion -> service */}
        {motionOk && (
          <Layer px={px} py={py} depth={14}>
            {serviceLinks.map((_, i) => (
              <circle key={`pulse-${i}`} r="2.6" fill="var(--marigold)">
                <animateMotion
                  dur={`${3.2 + (i % 3) * 0.8}s`}
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href={`#tn-path-${i}`} />
                </animateMotion>
              </circle>
            ))}
          </Layer>
        )}

        {/* Service nodes */}
        <Layer px={px} py={py} depth={20}>
          {services.map((s, i) => (
            <g key={`s-${i}`}>
              <circle cx={s.x} cy={s.y} r="11" fill="none" stroke="var(--ground-soft)" strokeOpacity="0.3" strokeWidth="1" />
              <circle cx={s.x} cy={s.y} r="5.5" fill="var(--ground-soft)" fillOpacity="0.9" />
            </g>
          ))}
        </Layer>

        {/* Community nodes */}
        <Layer px={px} py={py} depth={26}>
          {communities.map((c, i) => (
            <circle key={`c-${i}`} cx={c.p.x} cy={c.p.y} r="3" fill="var(--paper)" fillOpacity="0.6" />
          ))}
        </Layer>

        {/* Champion orbs — the glowing heart */}
        <Layer px={px} py={py} depth={34}>
          {champions.map((c, i) => (
            <g key={`ch-${i}`} style={{ transformOrigin: `${c.x}px ${c.y}px` }}>
              <circle cx={c.x} cy={c.y} r="58" fill="url(#tn-halo)" filter="url(#tn-soft)" />
              <circle
                cx={c.x}
                cy={c.y}
                r="13"
                fill="none"
                stroke="var(--marigold)"
                strokeOpacity="0.55"
                style={
                  motionOk
                    ? {
                        transformBox: "fill-box",
                        transformOrigin: "center",
                        animation: `ring-expand 3.6s ease-out ${i * 1.1}s infinite`,
                      }
                    : undefined
                }
              />
              <circle
                cx={c.x}
                cy={c.y}
                r="9"
                fill="url(#tn-orb)"
                style={
                  motionOk
                    ? {
                        transformBox: "fill-box",
                        transformOrigin: "center",
                        animation: `node-pulse 3.6s ease-in-out ${i * 1.1}s infinite`,
                      }
                    : undefined
                }
              />
            </g>
          ))}
        </Layer>
      </svg>
    </div>
  );
}
