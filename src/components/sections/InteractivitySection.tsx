import { AnimatedSlider } from "@/components/interactive/AnimatedSlider";
import { ConfettiButton } from "@/components/interactive/ConfettiButton";
import { CounterCard } from "@/components/interactive/CounterCard";
import { MorphButton } from "@/components/interactive/MorphButton";
import { ToggleSwitch } from "@/components/interactive/ToggleSwitch";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function InteractivitySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <SectionLabel label="INTERACTIVITY" />
      <h2 className="mt-4 text-3xl font-bold">Play with components</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card className="space-y-3">
          <h3 className="font-semibold">Confetti Button</h3>
          <ConfettiButton />
        </Card>
        <Card className="space-y-3">
          <h3 className="font-semibold">Morph Button</h3>
          <MorphButton />
        </Card>
        <Card className="space-y-3">
          <h3 className="font-semibold">Animated Slider</h3>
          <AnimatedSlider />
        </Card>
        <div className="space-y-4">
          <CounterCard />
          <Card className="flex items-center justify-between">
            <span>Toggle Switch</span>
            <ToggleSwitch />
          </Card>
        </div>
      </div>
    </section>
  );
}
