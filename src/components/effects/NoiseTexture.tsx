export function NoiseTexture() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, white 0 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 0 1px, transparent 1px)",
        backgroundSize: "3px 3px"
      }}
    />
  );
}
