import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
}

export function GlowOrb({ className }: GlowOrbProps) {
  return (
    <div
      className={cn(
        "glow-orb-pulse pointer-events-none absolute h-64 w-64 rounded-full bg-[var(--color-accent-cyan)]/20 blur-3xl",
        className
      )}
      aria-hidden="true"
    />
  );
}
