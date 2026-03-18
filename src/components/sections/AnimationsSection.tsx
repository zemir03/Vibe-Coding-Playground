"use client";

import { type MouseEvent, useRef } from "react";
import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cardVariant, staggerContainer } from "@/lib/animations";

export function AnimationsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "-100px", once: true });
  const springCardRef = useRef<HTMLDivElement | null>(null);
  const scrollCardRef = useRef<HTMLDivElement | null>(null);

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

  const handleSpringLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section id="animations" ref={ref} className="mx-auto w-full max-w-6xl px-4 py-16">
      <SectionLabel label="АНИМАЦИИ" />
      <h2 className="mt-4 text-3xl font-bold">Демо анимаций</h2>
      <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
        3 типа анимаций в одном блоке: поочерёдное появление при входе в область просмотра,
        отзыв на курсор (пружинная физика) и прогресс-бар от скролла.
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-8 grid gap-4 md:grid-cols-3"
      >
        <motion.div variants={cardVariant}>
          <Card className="h-full space-y-4">
            <h3 className="text-lg font-semibold">Поочерёдное появление</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              6 элементов появляются по очереди после входа в viewport.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-8 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
                        }
                      : { opacity: 0, scale: 0.95, y: 10 }
                  }
                />
              ))}
            </div>
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
