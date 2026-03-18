"use client";

import { useState } from "react";
import { DeviceType } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";

const devices: DeviceType[] = ["desktop", "tablet", "mobile"];

export function ResponsiveSection() {
  const [activeDevice, setActiveDevice] = useState<DeviceType>("desktop");

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <SectionLabel label="RESPONSIVE" />
      <h2 className="mt-4 text-3xl font-bold">Adaptive layouts</h2>
      <div className="mt-6 flex gap-2">
        {devices.map((device) => (
          <Button
            key={device}
            variant={activeDevice === device ? "primary" : "secondary"}
            size="sm"
            onClick={() => setActiveDevice(device)}
          >
            {device}
          </Button>
        ))}
      </div>
      <Card className="mt-6">
        <p className="text-sm text-[var(--color-text-secondary)]">Current breakpoint: {activeDevice}</p>
        <div className="mt-3 rounded-lg border border-[var(--color-border)] p-4">
          <p>Mock content adapts based on selected device mode.</p>
        </div>
      </Card>
    </section>
  );
}
