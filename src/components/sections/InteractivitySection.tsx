"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { AnimatedSlider } from "@/components/interactive/AnimatedSlider";
import { ConfettiButton } from "@/components/interactive/ConfettiButton";
import { CounterCard } from "@/components/interactive/CounterCard";
import { MorphButton } from "@/components/interactive/MorphButton";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cardVariant, staggerContainer } from "@/lib/animations";

export function InteractivitySection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "-100px", once: true });

  return (
    <section id="interactivity" ref={ref} className="mx-auto w-full max-w-6xl px-4 py-16">
      <SectionLabel label="КОМПОНЕНТЫ" />
      <h2 className="mt-4 text-3xl font-bold">Интерактивные компоненты</h2>
      <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
        Каждый блок управляет своим состоянием: кликай, тяни, считай, проверяй, как ведёт себя
        интерфейс.
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-8 grid gap-4 md:grid-cols-2"
      >
        <motion.div variants={cardVariant}>
          <Card className="space-y-4">
            <h3 className="font-semibold">Кнопка с конфетти</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Нажатие запускает взрыв конфетти через холст.
            </p>
            <ConfettiButton />
          </Card>
        </motion.div>

        <motion.div variants={cardVariant}>
          <Card className="space-y-4">
            <h3 className="font-semibold">Кнопка-морфинг</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Переходы состояния: ожидание → загрузка → готово.
            </p>
            <MorphButton />
          </Card>
        </motion.div>

        <motion.div variants={cardVariant}>
          <Card className="space-y-4">
            <h3 className="font-semibold">Слайдер с анимацией</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Анимированный трек и динамический цвет по текущему значению.
            </p>
            <AnimatedSlider />
          </Card>
        </motion.div>

        <motion.div variants={cardVariant}>
          <div className="h-full">
            <CounterCard />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
