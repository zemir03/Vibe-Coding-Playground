"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useMotionValueEvent, useSpring } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function CounterCard() {
  const [count, setCount] = useState(0);
  const motionCount = useMotionValue(0);
  // Намеренно замедляем пружину, чтобы анимацию было хорошо видно.
  const springCount = useSpring(motionCount, { stiffness: 60, damping: 14, mass: 0.8 });
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    motionCount.set(count);
  }, [count, motionCount]);

  useMotionValueEvent(springCount, "change", (latest) => {
    setDisplayCount(Math.round(latest));
  });

  return (
    <Card className="space-y-4">
      <h3 className="font-semibold">Счетчик</h3>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Кнопки +/- обновляют значение, а число анимируется пружиной.
      </p>
      <p className="text-3xl font-bold">{displayCount}</p>
      <div className="flex gap-2">
        <Button variant="secondary" size="sm" onClick={() => setCount((prev) => prev - 1)}>
          -
        </Button>
        <Button variant="primary" size="sm" onClick={() => setCount((prev) => prev + 1)}>
          +
        </Button>
      </div>
    </Card>
  );
}
