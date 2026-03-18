"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function CounterCard() {
  const [count, setCount] = useState(0);

  return (
    <Card className="space-y-4">
      <p className="text-3xl font-bold">{count}</p>
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
