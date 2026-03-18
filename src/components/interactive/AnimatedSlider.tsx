"use client";

import { ChangeEvent, useMemo, useState } from "react";

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
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={onChange}
        className="w-full accent-cyan-500"
        style={{ accentColor: trackColor }}
        aria-label="Animated slider"
      />
      <p className="text-sm text-[var(--color-text-secondary)]">Value: {value}</p>
    </div>
  );
}
