import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] px-3 py-1 text-xs text-[var(--color-text-secondary)]",
        className
      )}
    >
      {children}
    </span>
  );
}
