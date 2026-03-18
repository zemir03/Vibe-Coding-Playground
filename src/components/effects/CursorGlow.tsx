"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent-cyan)]/10 blur-3xl"
      style={{ left: x, top: y }}
    />
  );
}
