import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-[var(--color-text-secondary)]">Страница не найдена.</p>
      <Link href="/" className="underline">
        На главную
      </Link>
    </main>
  );
}
