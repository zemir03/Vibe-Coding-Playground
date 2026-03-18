import { CursorGlow } from "@/components/effects/CursorGlow";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { AnimationsSection } from "@/components/sections/AnimationsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InteractivitySection } from "@/components/sections/InteractivitySection";
import { ResponsiveSection } from "@/components/sections/ResponsiveSection";
import { VisualEffectsSection } from "@/components/sections/VisualEffectsSection";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <Divider />
        <AnimationsSection />
        <Divider />
        <InteractivitySection />
        <Divider />
        <VisualEffectsSection />
        <Divider />
        <ResponsiveSection />
        <FooterSection />
      </main>
    </>
  );
}
