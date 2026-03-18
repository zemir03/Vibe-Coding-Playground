import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn("bg-[var(--gradient-accent)] bg-clip-text text-transparent", className)}>
      {children}
    </span>
  );
}
