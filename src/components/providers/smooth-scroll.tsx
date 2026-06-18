"use client";

import { type ReactNode, useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";

/**
 * Premium smooth scrolling via Lenis, with two pieces of polish:
 *  - respects `prefers-reduced-motion` (falls back to native scroll), and
 *  - intercepts in-page anchor links so nav jumps glide instead of snapping.
 */
function AnchorGlide() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!el) return;
      const id = el.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.1 });
      history.pushState(null, "", id);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);
  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.1, smoothWheel: true }}
    >
      <AnchorGlide />
      {children}
    </ReactLenis>
  );
}
