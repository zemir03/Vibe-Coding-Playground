"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-[var(--gradient-accent)] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
