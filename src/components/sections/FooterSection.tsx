import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TECH_BADGES } from "@/lib/constants";

export function FooterSection() {
  return (
    <footer className="border-t border-[var(--color-border)] px-4 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <h2 className="font-display text-4xl font-extrabold">Made with Claude & Cursor</h2>
        <p className="text-[var(--color-text-secondary)]">Created as a live showcase of vibe coding workflow.</p>
        <div className="flex flex-wrap gap-2">
          {TECH_BADGES.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Пройти курс</Button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            GitHub
          </a>
        </div>
        <p className="text-xs text-[var(--color-text-muted)]">© {new Date().getFullYear()} Vibe Coding Playground</p>
      </div>
    </footer>
  );
}
