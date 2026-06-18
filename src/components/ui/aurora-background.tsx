import { cn } from "@/lib/utils";

/**
 * Aceternity-style aurora — soft, slowly drifting color fields that give the
 * dark hero depth and life. Pure CSS (cheap, no JS); the global
 * `prefers-reduced-motion` rule freezes the drift automatically.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 opacity-70 mix-blend-screen blur-[60px]">
        <div
          className="absolute left-[5%] top-[-10%] h-[55vh] w-[55vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--marigold) 0%, transparent 65%)",
            animation: "aurora-a 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute right-[0%] top-[10%] h-[60vh] w-[60vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--ground-light) 0%, transparent 60%)",
            animation: "aurora-b 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-15%] left-[30%] h-[50vh] w-[70vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--clay) 0%, transparent 65%)",
            animation: "aurora-c 24s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}
