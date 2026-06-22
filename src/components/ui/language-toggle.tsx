"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * EN / हिंदी toggle. Sets the locale cookie and refreshes server components
 * (no full reload). `otherLabel` is the name of the language you'll switch to.
 */
export function LanguageToggle({
  locale,
  otherLabel,
  srLabel,
  className,
}: {
  locale: Locale;
  otherLabel: string;
  srLabel: string;
  className?: string;
}) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const next: Locale = locale === "hi" ? "en" : "hi";

  function toggle() {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    start(() => router.refresh());
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={srLabel}
      data-pending={pending || undefined}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-marigold/60 data-pending:opacity-60",
        className,
      )}
    >
      <Languages className="size-3.5" aria-hidden />
      {otherLabel}
    </button>
  );
}
