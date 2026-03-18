"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type MorphState = "idle" | "loading" | "success";

export function MorphButton() {
  const [state, setState] = useState<MorphState>("idle");

  const onClick = () => {
    if (state !== "idle") return;
    setState("loading");
    window.setTimeout(() => setState("success"), 900);
    window.setTimeout(() => setState("idle"), 1900);
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={state === "loading"}
      animate={{
        width: state === "loading" ? 170 : state === "success" ? 150 : 140,
        backgroundColor:
          state === "success"
            ? "var(--color-accent-green)"
            : state === "loading"
              ? "var(--color-bg-tertiary)"
              : "var(--color-bg-secondary)"
      }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="inline-flex h-11 items-center justify-center rounded-md border border-[var(--color-border)] px-4 text-sm font-medium text-[var(--color-text-primary)]"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={state}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center gap-2"
        >
          {state === "idle" ? "Запустить" : state === "loading" ? "Загрузка..." : "Готово ✓"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
