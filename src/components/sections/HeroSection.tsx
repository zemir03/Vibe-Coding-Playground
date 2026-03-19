"use client";

import { motion } from "motion/react";

import { GlowOrb } from "@/components/effects/GlowOrb";
import { GridBackground } from "@/components/effects/GridBackground";
import { NoiseTexture } from "@/components/effects/NoiseTexture";
import { ParticleField } from "@/components/effects/ParticleField";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { letterVariant, staggerContainer } from "@/lib/animations";
import { SITE_TEXT } from "@/lib/constants";

const TITLE_LINES = ["Делай быстро.", "Делай красиво."];

const EASE = [0.22, 1, 0.36, 1] as const;
const REPO_URL = "https://github.com/zemir03/Vibe-Coding-Playground";

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start"
    });
  };

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-4 py-24">
      {/* Backgrounds */}
      <GridBackground />
      <NoiseTexture />
      <ParticleField />

      {/* Decorative glow orbs */}
      <GlowOrb className="-left-24 top-16 h-80 w-80" />
      <GlowOrb className="-right-28 bottom-12 h-96 w-96 bg-[var(--color-accent-violet)]/15" />
      <GlowOrb className="left-1/2 top-8 h-56 w-56 -translate-x-1/2 bg-[var(--color-accent-green)]/8" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="flex max-w-4xl flex-col gap-8">

          {/* ── Eyebrow label ─────────────────────────────────────────────── */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="space-y-2"
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.28em] text-[var(--color-accent-cyan)] uppercase">
              <span aria-hidden="true">✦</span>
              Showcase Vibe
            </span>
            <p className="max-w-xl text-sm text-[var(--color-text-secondary)]">
              Showcase Vibe — это интерактивная демонстрация приёмов vibe coding: анимаций,
              эффектов и UI-компонентов.
            </p>
          </motion.div>

          {/* ── Animated title — stagger per word ─────────────────────────── */}
          <h1
            className="font-display text-5xl font-extrabold leading-[1.06] sm:text-7xl"
            aria-label={SITE_TEXT.heroTitle}
          >
            <motion.span variants={staggerContainer} initial="hidden" animate="visible" className="block" aria-hidden="true">
              {TITLE_LINES.map((line, i) => (
                <motion.span key={line} variants={letterVariant} className="block">
                  {i === 0 ? <GradientText>{line}</GradientText> : line}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* ── Subtitle — fade-up at 400 ms ──────────────────────────────── */}
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4, ease: EASE }}
            className="max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl"
          >
            {SITE_TEXT.heroSubtitle}
          </motion.p>

          {/* ── CTA buttons — scale-in at 800 ms ──────────────────────────── */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: EASE }}
            className="flex flex-wrap gap-3"
          >
            <Button size="lg" variant="primary" onClick={() => scrollToId("animations")}>
              Смотреть демо
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.open(REPO_URL, "_blank", "noopener,noreferrer")}
            >
              Исходники на GitHub
            </Button>
          </motion.div>
        </div>

        {/* ── Scroll indicator — bounce at 1 200 ms ───────────────────────── */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: EASE }}
          className="mt-20 flex flex-col items-center gap-2 sm:absolute sm:bottom-0 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2"
          aria-hidden="true"
        >
          <span className="font-mono text-[10px] tracking-[0.35em] text-[var(--color-text-muted)]">
            ВНИЗ
          </span>
          <div className="bounce-arrow text-[var(--color-accent-cyan)]">
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 4v16M8 20l-4-4M8 20l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
