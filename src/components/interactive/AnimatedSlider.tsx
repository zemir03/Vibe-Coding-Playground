"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { motion } from "motion/react";

export function AnimatedSlider() {
  const [value, setValue] = useState(40);

  const trackColor = useMemo(() => {
    const green = Math.min(255, 40 + value * 2);
    return `rgb(0 ${green} 255)`;
  }, [value]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="h-2 rounded-full bg-[var(--color-bg-tertiary)]" />
        <motion.div
          className="pointer-events-none absolute left-0 top-0 h-2 rounded-full"
          animate={{ width: `${value}%` }}
          transition={{ type: "spring", stiffness: 220, damping: 30 }}
          style={{ background: `linear-gradient(90deg, var(--color-accent-cyan), ${trackColor})` }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={onChange}
          className="absolute inset-0 h-2 w-full cursor-pointer opacity-0"
          aria-label="Animated slider"
        />
      </div>
      <div className="flex items-center justify-between text-sm text-[var(--color-text-secondary)]">
        <span>Интенсивность</span>
        <motion.span
          key={value}
          initial={{ opacity: 0.5, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="font-mono"
        >
          {value}
        </motion.span>
      </div>
    </div>
  );
}
