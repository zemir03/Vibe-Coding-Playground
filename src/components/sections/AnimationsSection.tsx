"use client";

import { type MouseEvent, type TouchEvent, useRef } from "react";
import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cardVariant, staggerContainer } from "@/lib/animations";
import { useState } from "react";

const FLIP_ITEMS = [
  { front: "Motion", back: "Плавные переходы на основе spring-анимаций." },
  { front: "UI", back: "Современный интерфейс с эффектами и интерактивом." },
  { front: "Theme", back: "Поддержка тёмной и светлой темы без дерганий." },
  { front: "Touch", back: "Управление жестами и tap-интеракции для мобильных." },
  { front: "Perf", back: "Оптимизированные анимации для плавности и отклика." },
  { front: "DX", back: "Компонентная архитектура для быстрой доработки." }
] as const;

export function AnimationsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "-100px", once: true });
  const springCardRef = useRef<HTMLDivElement | null>(null);
  const scrollCardRef = useRef<HTMLDivElement | null>(null);
  const [activeFlip, setActiveFlip] = useState<number | null>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 220, damping: 20, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 220, damping: 20, mass: 0.4 });

  const { scrollYProgress } = useScroll({
    target: scrollCardRef,
    offset: ["start end", "end start"]
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleSpringMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!springCardRef.current) return;
    const bounds = springCardRef.current.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;
    pointerX.set(x * 0.2);
    pointerY.set(y * 0.2);
  };

  const handleSpringTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!springCardRef.current || event.touches.length === 0) return;
    const touch = event.touches[0];
    const bounds = springCardRef.current.getBoundingClientRect();
    const x = touch.clientX - bounds.left - bounds.width / 2;
    const y = touch.clientY - bounds.top - bounds.height / 2;
    pointerX.set(x * 0.2);
    pointerY.set(y * 0.2);
  };

  const handleSpringLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section id="animations" ref={ref} className="mx-auto w-full max-w-6xl px-4 py-16">
      <SectionLabel label="АНИМАЦИИ" />
      <h2 className="mt-4 text-3xl font-bold">Демо анимаций</h2>
      <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
        3 типа анимаций в одном блоке: поочерёдное появление при входе в viewport, отзыв на курсор
        и тач (spring-физика) и прогресс-бар от скролла.
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-8 grid gap-4 md:grid-cols-3"
      >
        <motion.div variants={cardVariant}>
          <Card className="h-full space-y-4">
            <h3 className="text-lg font-semibold">3D flip-карточки</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              На десктопе карточки переворачиваются при наведении, на мобильном — по tap.
            </p>
            <motion.div
              className="grid grid-cols-3 gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.55 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {FLIP_ITEMS.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="group h-20 [perspective:1000px]"
                  variants={{
                    hidden: { opacity: 0, scale: 0.94, y: 10 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                  onClick={() => setActiveFlip((prev) => (prev === idx ? null : idx))}
                  onMouseLeave={() => setActiveFlip((prev) => (prev === idx ? null : prev))}
                >
                  <div
                    className={`relative h-full w-full rounded-md transition-transform duration-500 [transform-style:preserve-3d] ${
                      activeFlip === idx ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] px-2 text-center text-xs font-semibold [backface-visibility:hidden]">
                      {item.front}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-2 text-center text-[10px] text-[var(--color-text-secondary)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      {item.back}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </motion.div>

        <motion.div variants={cardVariant}>
          <Card className="h-full space-y-4">
            <h3 className="text-lg font-semibold">Пружина от курсора</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Курсор двигает внутренний элемент с физикой spring.
            </p>
            <div
              ref={springCardRef}
              onMouseMove={handleSpringMove}
              onMouseLeave={handleSpringLeave}
              onTouchMove={handleSpringTouchMove}
              onTouchEnd={handleSpringLeave}
              className="relative grid h-32 place-items-center overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]"
            >
              <motion.div
                style={{ x: springX, y: springY }}
                className="h-10 w-10 rounded-full bg-[var(--color-accent-cyan)]/80 shadow-[0_0_24px_rgba(0,245,255,0.35)]"
              />
            </div>
          </Card>
        </motion.div>

        <motion.div variants={cardVariant}>
          <div ref={scrollCardRef}>
            <Card className="h-full space-y-4">
              <h3 className="text-lg font-semibold">Скролл-бар (от прогресса)</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Индикатор синхронизирован с прогрессом скролла этой карточки.
              </p>
              <div className="h-3 overflow-hidden rounded-full bg-[var(--color-bg-tertiary)]">
                <motion.div
                  style={{ width: progressWidth }}
                  className="h-full rounded-full [background:var(--gradient-accent)]"
                />
              </div>
              <motion.p className="font-mono text-xs tracking-[0.2em] text-[var(--color-text-muted)]">
                ОТ СКРОЛЛА
              </motion.p>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
