"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { DeviceType } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";

const devices: DeviceType[] = ["desktop", "tablet", "mobile"];
const deviceLabels: Record<DeviceType, string> = {
  desktop: "ПК",
  tablet: "Планшет",
  mobile: "Телефон"
};
const frameWidth: Record<DeviceType, string> = {
  desktop: "100%",
  tablet: "72%",
  mobile: "42%"
};

export function ResponsiveSection() {
  const [activeDevice, setActiveDevice] = useState<DeviceType>("desktop");

  return (
    <section id="responsive" className="mx-auto w-full max-w-6xl px-4 py-16">
      <SectionLabel label="АДАПТИВНОСТЬ" />
      <h2 className="mt-4 text-3xl font-bold">Адаптивные макеты</h2>
      <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
        Переключай устройство и смотри, как макет плавно меняет структуру: сетка → компактная
        сетка → вертикальный стек.
      </p>
      <div className="mt-6 flex gap-2">
        {devices.map((device) => (
          <Button
            key={device}
            variant={activeDevice === device ? "primary" : "secondary"}
            size="sm"
            onClick={() => setActiveDevice(device)}
          >
            {deviceLabels[device]}
          </Button>
        ))}
      </div>

      <Card className="mt-6 overflow-hidden">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Текущий режим: {deviceLabels[activeDevice]}
          </p>
          <p className="font-mono text-xs tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
            {deviceLabels[activeDevice]}
          </p>
        </div>

        <div className="mt-5 grid place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-4">
          <motion.div
            animate={{ width: frameWidth[activeDevice] }}
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
            className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
          >
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>

            <motion.div
              layout
              className={
                activeDevice === "desktop"
                  ? "grid grid-cols-3 gap-2 p-3"
                  : activeDevice === "tablet"
                    ? "grid grid-cols-2 gap-2 p-3"
                    : "flex flex-col gap-2 p-3"
              }
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  layout
                  transition={{ type: "spring", stiffness: 280, damping: 30 }}
                  className="h-14 rounded-lg border border-[var(--color-border)] [background:linear-gradient(135deg,var(--color-bg-tertiary),transparent)]"
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Card>
    </section>
  );
}
