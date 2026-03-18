import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowColor = "cyan" | "violet" | "green" | "pink";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: GlowColor;
  hover?: boolean;
}

const glowMap: Record<GlowColor, string> = {
  cyan: "hover:shadow-[0_0_24px_rgba(0,245,255,0.3)]",
  violet: "hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]",
  green: "hover:shadow-[0_0_24px_rgba(0,255,135,0.3)]",
  pink: "hover:shadow-[0_0_24px_rgba(255,0,110,0.3)]"
};

export function GlassCard({ children, className, glowColor = "cyan", hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md",
        hover && "transition duration-300",
        hover && glowMap[glowColor],
        className
      )}
    >
      {children}
    </div>
  );
}
