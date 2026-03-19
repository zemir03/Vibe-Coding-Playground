"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cardVariant, staggerContainer } from "@/lib/animations";

export function VisualEffectsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "-120px", once: true });
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const isActive = (cardId: string) => activeCard === cardId;
  const activate = (cardId: string) => setActiveCard(cardId);
  const deactivate = () => setActiveCard(null);

  return (
    <section id="visual-effects" ref={ref} className="mx-auto w-full max-w-6xl px-4 py-16">
      <SectionLabel label="ВИЗУАЛЬНЫЕ ЭФФЕКТЫ" />
      <h2 className="mt-4 text-3xl font-bold">Современные техники UI</h2>
      <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
        4 карточки с разными визуальными техниками. Наведи на каждую, чтобы увидеть уникальный hover.
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-8 grid gap-4 md:grid-cols-2"
      >
        <motion.div variants={cardVariant}>
          <GlassCard
            glowColor="cyan"
            className={`group relative cursor-pointer overflow-hidden transition-transform duration-300 ${
              isActive("glass") ? "-translate-y-1 scale-[1.03]" : "hover:-translate-y-1 hover:scale-[1.03]"
            }`}
            onMouseEnter={() => activate("glass")}
            onMouseLeave={deactivate}
            onClick={() => setActiveCard((prev) => (prev === "glass" ? null : "glass"))}
          >
            <div className="pointer-events-none absolute inset-0 border border-white/10" />
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-300 [background:radial-gradient(circle_at_20%_20%,rgba(0,245,255,0.35),transparent_52%)] ${
                isActive("glass") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
            <h3 className="text-lg font-semibold">Стеклянный эффект</h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Размытие backdrop + прозрачный слой + светящийся контур.
            </p>
          </GlassCard>
        </motion.div>

        <motion.div variants={cardVariant}>
          <GlassCard
            glowColor="violet"
            className={`group relative cursor-pointer overflow-hidden transition-transform duration-300 ${
              isActive("glow") ? "-translate-y-1 scale-[1.03]" : "hover:-translate-y-1 hover:scale-[1.03]"
            }`}
            onMouseEnter={() => activate("glow")}
            onMouseLeave={deactivate}
            onClick={() => setActiveCard((prev) => (prev === "glow" ? null : "glow"))}
          >
            <div
              className={`pointer-events-none absolute -inset-2 rounded-2xl transition-opacity duration-300 [background:radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.75),transparent_65%)] blur-2xl ${
                isActive("glow") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-300 [background:linear-gradient(135deg,rgba(124,58,237,0.4),transparent_55%)] ${
                isActive("glow") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
            <h3 className="text-lg font-semibold">Неоновое свечение</h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Неоновое свечение усиливается на hover.
            </p>
          </GlassCard>
        </motion.div>

        <motion.div variants={cardVariant}>
          <GlassCard
            glowColor="green"
            className={`group relative cursor-pointer overflow-hidden transition-transform duration-300 ${
              isActive("gradient") ? "-translate-y-1 scale-[1.03]" : "hover:-translate-y-1 hover:scale-[1.03]"
            }`}
            onMouseEnter={() => activate("gradient")}
            onMouseLeave={deactivate}
            onClick={() => setActiveCard((prev) => (prev === "gradient" ? null : "gradient"))}
          >
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-300 gradient-flow-card [background:linear-gradient(120deg,rgba(0,245,255,0.5),rgba(124,58,237,0.45),rgba(0,255,135,0.5))] ${
                isActive("gradient") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
            <h3 className="text-lg font-semibold">Плавающий градиент</h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Фон-карточка с бесконечным движением градиента.
            </p>
          </GlassCard>
        </motion.div>

        <motion.div variants={cardVariant}>
          <GlassCard
            glowColor="pink"
            className={`group aurora-card relative cursor-pointer overflow-hidden transition-transform duration-300 ${
              isActive("aurora") ? "-translate-y-1 scale-[1.03]" : "hover:-translate-y-1 hover:scale-[1.03]"
            }`}
            onMouseEnter={() => activate("aurora")}
            onMouseLeave={deactivate}
            onClick={() => setActiveCard((prev) => (prev === "aurora" ? null : "aurora"))}
          >
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-300 [background:radial-gradient(circle_at_20%_20%,rgba(0,245,255,0.55),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,0,110,0.5),transparent_40%),radial-gradient(circle_at_40%_80%,rgba(124,58,237,0.45),transparent_45%)] ${
                isActive("aurora") ? "opacity-55" : "opacity-25 group-hover:opacity-55"
              }`}
            />
            <h3 className="text-lg font-semibold">Северное сияние</h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Слоистая цветовая анимация в стиле северного сияния.
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
