import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
}

export function GlowOrb({ className }: GlowOrbProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute h-40 w-40 rounded-full bg-[var(--color-accent-cyan)]/20 blur-3xl",
        className
      )}
    />
  );
}
