"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useSpring } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function CounterCard() {
  const [count, setCount] = useState(0);
  const motionCount = useMotionValue(0);
  const springCount = useSpring(motionCount, { stiffness: 95, damping: 11, mass: 0.7 });
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    motionCount.set(count);
  }, [count, motionCount]);

  useMotionValueEvent(springCount, "change", (latest) => {
    setDisplayCount(Math.round(latest));
  });

  return (
    <Card className="space-y-4">
      <h3 className="font-semibold">Счётчик</h3>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Кнопки +/- обновляют значение, а число анимируется пружиной.
      </p>
      <motion.p
        key={count}
        initial={{ scale: 0.92 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 13 }}
        className="text-3xl font-bold"
      >
        {displayCount}
      </motion.p>
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
