import { GlowOrb } from "@/components/effects/GlowOrb";
import { GridBackground } from "@/components/effects/GridBackground";
import { NoiseTexture } from "@/components/effects/NoiseTexture";
import { ParticleField } from "@/components/effects/ParticleField";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { SITE_TEXT } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <GridBackground />
      <NoiseTexture />
      <ParticleField />
      <GlowOrb className="-left-12 top-8" />
      <GlowOrb className="bottom-0 right-0 bg-[var(--color-accent-violet)]/20" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          Welcome
        </p>
        <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
          <GradientText>{SITE_TEXT.heroTitle}</GradientText>
        </h1>
        <p className="max-w-2xl text-lg text-[var(--color-text-secondary)]">{SITE_TEXT.heroSubtitle}</p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg">Explore Demo</Button>
          <Button size="lg" variant="secondary">
            Read Docs
          </Button>
        </div>
      </div>
    </section>
  );
}
