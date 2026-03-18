export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-40">
      <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-[var(--color-accent-cyan)]" />
      <div className="absolute left-1/2 top-1/3 h-2 w-2 rounded-full bg-[var(--color-accent-violet)]" />
      <div className="absolute left-2/3 top-1/2 h-2 w-2 rounded-full bg-[var(--color-accent-green)]" />
    </div>
  );
}
