import { Badge } from "@/components/ui/Badge";
import { TECH_BADGES } from "@/lib/constants";

const CREATED_IN = "3 дня";
const REPO_URL = "https://github.com/zemir03/Vibe-Coding-Playground";
const TELEGRAM_URL = "https://vk.com/away.php?to=https%3A%2F%2Ft.me%2Fizemtsov03&utf=1";
const VK_URL = "https://vk.com/izemtsov0";
const FOOTER_YEAR = 2026;
const FOOTER_NAME = "Zemir";

export function FooterSection() {
  return (
    <footer className="border-t border-[var(--color-border)] px-4 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <h2 className="font-display text-4xl font-extrabold">Сделано с Claude и Cursor</h2>
        <p className="text-[var(--color-text-secondary)]">
          Создано как живой шоукейс вайбового кодинга. Время сборки: {CREATED_IN}.
        </p>
        <div className="flex flex-wrap gap-2">
          {TECH_BADGES.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Репозиторий GitHub
          </a>
        </div>

        <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
          <h3 className="font-display text-2xl font-bold">Хочешь так же?</h3>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            Пиши мне и оформи заказ на сайт. Сделаем красиво, быстро и с вау-эффектами.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm hover:opacity-90"
            >
              Телеграм
            </a>
            <a
              href={VK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm hover:opacity-90"
            >
              ВК
            </a>
          </div>
        </div>

        <p className="text-xs text-[var(--color-text-muted)]">
          © {FOOTER_YEAR} {FOOTER_NAME}
        </p>
      </div>
    </footer>
  );
}
