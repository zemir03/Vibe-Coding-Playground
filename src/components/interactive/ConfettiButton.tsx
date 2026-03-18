"use client";

import confetti from "canvas-confetti";
import { Button } from "@/components/ui/Button";

export function ConfettiButton() {
  const handleClick = () => {
    void confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
  };

  return (
    <Button variant="glow" onClick={handleClick}>
      Конфетти
    </Button>
  );
}
