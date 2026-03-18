"use client";

import { useState } from "react";

export function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setEnabled((prev) => !prev)}
      aria-label="Toggle switch"
      className="relative inline-flex h-7 w-12 items-center rounded-full bg-[var(--color-bg-tertiary)] p-1 transition"
    >
      <span
        className="h-5 w-5 rounded-full bg-[var(--color-accent-cyan)] transition"
        style={{ transform: `translateX(${enabled ? "20px" : "0"})` }}
      />
    </button>
  );
}
