import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function VisualEffectsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <SectionLabel label="VISUAL EFFECTS" />
      <h2 className="mt-4 text-3xl font-bold">Modern UI techniques</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <GlassCard glowColor="cyan">
          <h3 className="text-lg font-semibold">Glassmorphism Card</h3>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Backdrop blur + translucent layer.</p>
        </GlassCard>
        <GlassCard glowColor="violet">
          <h3 className="text-lg font-semibold">Glow Card</h3>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Neon hover glow with soft shadows.</p>
        </GlassCard>
        <GlassCard glowColor="green">
          <h3 className="text-lg font-semibold">Gradient Card</h3>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Animated accents through gradients.</p>
        </GlassCard>
        <GlassCard glowColor="pink">
          <h3 className="text-lg font-semibold">Aurora Card</h3>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Aurora-like layered color blending.</p>
        </GlassCard>
      </div>
    </section>
  );
}
