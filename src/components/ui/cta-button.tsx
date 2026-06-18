import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-3 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:size-[1.1em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary: marigold — works on both teal and paper surfaces
        primary:
          "bg-marigold text-ink shadow-[0_1px_0_rgba(0,0,0,0.08)] hover:bg-[color-mix(in_oklab,var(--marigold),black_8%)] focus-visible:ring-marigold/50 focus-visible:ring-offset-transparent",
        // Ghost for dark surfaces (hero on teal)
        "ghost-light":
          "border border-paper/30 text-paper hover:bg-paper/10 hover:border-paper/50 focus-visible:ring-paper/40 focus-visible:ring-offset-transparent",
        // Ghost for light surfaces (paper sections)
        "ghost-dark":
          "border border-ground/25 text-ground hover:bg-ground/5 hover:border-ground/45 focus-visible:ring-ground/30 focus-visible:ring-offset-transparent",
      },
      size: {
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  },
);

type CtaButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof ctaVariants>;

export function CtaButton({
  className,
  variant,
  size,
  children,
  ...props
}: CtaButtonProps) {
  return (
    <a className={cn(ctaVariants({ variant, size, className }))} {...props}>
      {children}
    </a>
  );
}
