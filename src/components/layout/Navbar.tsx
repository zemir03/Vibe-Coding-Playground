import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color:var(--color-bg-primary)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <span className="font-display text-lg font-bold">Vibe Coding Плейграунд</span>
        <ThemeToggle />
      </div>
    </header>
  );
}
