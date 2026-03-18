"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cardVariant, staggerContainer } from "@/lib/animations";

const cards = [
  { title: "Stagger Card", desc: "Элементы появляются по очереди при входе в viewport" },
  { title: "Spring Card", desc: "Мягкое движение с эффектом spring" },
  { title: "Scroll Card", desc: "Привязка эффекта к прогрессу скролла" }
];

export function AnimationsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "-100px", once: true });

  return (
    <section ref={ref} className="mx-auto w-full max-w-6xl px-4 py-16">
      <SectionLabel label="ANIMATIONS" />
      <h2 className="mt-4 text-3xl font-bold">Motion demos</h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-8 grid gap-4 md:grid-cols-3"
      >
        {cards.map((card) => (
          <motion.div key={card.title} variants={cardVariant}>
            <Card>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{card.desc}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
