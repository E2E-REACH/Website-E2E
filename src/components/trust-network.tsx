import { cn } from "@/lib/utils";

/**
 * Signature element — the living "trust network" constellation.
 *
 * It encodes the ecosystem left-to-right: clusters of village households
 * connect through glowing Champion nodes out to the service sectors.
 * Built as a lightweight, deterministic SVG (no canvas, no 3D, no random
 * so it's SSR-safe). Ambient motion is pure CSS and is disabled globally
 * under `prefers-reduced-motion`.
 */

type Pt = { x: number; y: number };

const villages: Pt[] = [
  { x: 64, y: 92 }, { x: 120, y: 58 }, { x: 96, y: 138 },
  { x: 58, y: 250 }, { x: 116, y: 300 }, { x: 152, y: 236 },
  { x: 70, y: 432 }, { x: 132, y: 462 }, { x: 102, y: 388 },
];

const champions: Pt[] = [
  { x: 384, y: 132 },
  { x: 404, y: 276 },
  { x: 372, y: 418 },
];

const sectors: Pt[] = [
  { x: 690, y: 64 }, { x: 716, y: 168 }, { x: 698, y: 268 },
  { x: 706, y: 360 }, { x: 676, y: 452 }, { x: 648, y: 516 },
];

// village index -> champion index
const villageLinks: [number, number][] = [
  [0, 0], [1, 0], [2, 0],
  [3, 1], [4, 1], [5, 1],
  [6, 2], [7, 2], [8, 2],
];
// champion index -> sector index
const sectorLinks: [number, number][] = [
  [0, 0], [0, 1], [0, 2],
  [1, 1], [1, 2], [1, 3],
  [2, 3], [2, 4], [2, 5],
];

export function TrustNetwork({
  className,
  ariaLabel = "An illustration of the e2E Reach trust network: clusters of village households connect through Well-being Champions to a range of services.",
}: {
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <svg
      viewBox="0 0 760 560"
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="xMidYMid meet"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <radialGradient id="tn-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--marigold)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--marigold)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tn-signal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--marigold)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--marigold)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--marigold)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Connecting lines (the calm base layer) */}
      <g stroke="var(--paper)" strokeOpacity="0.16" strokeWidth="1.2" fill="none">
        {villageLinks.map(([v, c], i) => (
          <line
            key={`vl-${i}`}
            x1={villages[v].x}
            y1={villages[v].y}
            x2={champions[c].x}
            y2={champions[c].y}
          />
        ))}
        {sectorLinks.map(([c, s], i) => (
          <line
            key={`sl-${i}`}
            x1={champions[c].x}
            y1={champions[c].y}
            x2={sectors[s].x}
            y2={sectors[s].y}
          />
        ))}
      </g>

      {/* Travelling "signal" along a few links — trust & value flowing */}
      <g stroke="url(#tn-signal)" strokeWidth="2" fill="none" strokeLinecap="round">
        {[
          [villages[1], champions[0], 0],
          [villages[4], champions[1], 1.4],
          [villages[7], champions[2], 2.6],
          [champions[0], sectors[1], 0.8],
          [champions[1], sectors[2], 2.0],
          [champions[2], sectors[4], 3.2],
        ].map(([a, b, delay], i) => {
          const p1 = a as Pt;
          const p2 = b as Pt;
          const len = Math.hypot(p2.x - p1.x, p2.y - p1.y);
          return (
            <line
              key={`sig-${i}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              strokeDasharray={`${len * 0.32} ${len}`}
              strokeDashoffset={len}
              style={{
                animation: `signal-travel 3.6s linear ${delay as number}s infinite`,
              }}
            />
          );
        })}
      </g>

      {/* Village household nodes */}
      <g fill="var(--paper)" fillOpacity="0.55">
        {villages.map((v, i) => (
          <circle key={`v-${i}`} cx={v.x} cy={v.y} r="3.2" />
        ))}
      </g>

      {/* Sector nodes */}
      <g fill="var(--ground-soft)" fillOpacity="0.85">
        {sectors.map((s, i) => (
          <g key={`s-${i}`}>
            <circle cx={s.x} cy={s.y} r="5" />
            <circle cx={s.x} cy={s.y} r="9.5" fill="none" stroke="var(--ground-soft)" strokeOpacity="0.35" strokeWidth="1" />
          </g>
        ))}
      </g>

      {/* Champion nodes — the glowing heart of the network */}
      {champions.map((c, i) => (
        <g key={`c-${i}`} style={{ transformOrigin: `${c.x}px ${c.y}px` }}>
          <circle cx={c.x} cy={c.y} r="40" fill="url(#tn-glow)" />
          <circle
            cx={c.x}
            cy={c.y}
            r="12"
            fill="none"
            stroke="var(--marigold)"
            strokeOpacity="0.6"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              animation: `ring-expand 3.4s ease-out ${i * 0.9}s infinite`,
            }}
          />
          <circle
            cx={c.x}
            cy={c.y}
            r="7.5"
            fill="var(--marigold)"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              animation: `node-pulse 3.4s ease-in-out ${i * 0.9}s infinite`,
            }}
          />
        </g>
      ))}
    </svg>
  );
}
