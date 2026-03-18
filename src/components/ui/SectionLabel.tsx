import { cn } from "@/lib/utils";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export function SectionLabel({ label, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-xs tracking-[0.2em] text-[var(--color-text-secondary)]",
        className
      )}
    >
      [ {label} ]
    </span>
  );
}
