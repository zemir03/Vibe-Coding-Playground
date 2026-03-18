# Current Status — Vibe Coding Playground

> Обновляй этот файл после каждой рабочей сессии, чтобы Cursor знал контекст.

## Текущий статус: 🚀 Deployed to VDS / Ready for Development

**Последнее обновление:** 2026-03-18
**Текущий этап:** Деплой завершён — сервер настроен, приложение запущено, готово к дальнейшей разработке

---

## Что сделано ✅

- [x] Задеплоено на VDS — http://109.107.189.30:3000 (Ubuntu 24.04, Node.js 22, pm2, автозапуск)
- [x] Создана документация проекта (docs/)
- [x] Инициализирован Next.js проект (App Router + TypeScript)
- [x] Настроены Tailwind, PostCSS, ESLint, TypeScript конфиги
- [x] Установлены зависимости из `TECH_STACK.md`
- [x] Настроен ThemeProvider (`next-themes`)
- [x] Созданы CSS переменные в `globals.css`
- [x] Подключены шрифты (Syne + DM Sans + JetBrains Mono)
- [x] Создан `layout.tsx` с мета-тегами и `metadataBase`
- [x] Создан Navbar + ThemeToggle + ScrollProgress
- [x] Создана полная структура папок и базовые файлы компонентов по `ARCHITECTURE.md`
- [x] Проект проходит `npm run type-check`, `npm run lint`, `npm run build`
- [x] Локальный dev-сервер запускается без ошибок
- [x] Инициализирован git-репозиторий, сделан первый коммит и создан GitHub-репозиторий

---

## В процессе 🔄

- Полировка визуала и интерактивов до целевого "wow" уровня
- Доработка анимаций секций (stagger/spring/scroll) и accessibility-поведения

---

## Что делать дальше 📋

### Этап 1 — Фундамент (Day 1, утро)
- [x] Создан проект на Next.js 15 + TypeScript + App Router
- [x] Установлен Motion
- [x] Установлен next-themes
- [x] Установлен canvas-confetti + типы
- [x] Установлены clsx + tailwind-merge
- [x] Настроен `globals.css` с CSS переменными из TECH_STACK.md
- [x] Создан `lib/utils.ts` с функцией `cn()`
- [x] Создан `lib/animations.ts` с Motion variants
- [x] Создан `lib/constants.ts` с текстом страницы
- [x] Настроен `ThemeProvider` в `layout.tsx`
- [x] Создана базовая структура папок

### Этап 2 — Layout и навигация (Day 1, полдень)
- [x] `Navbar.tsx` — лого + ThemeToggle
- [x] `ThemeToggle.tsx`
- [x] `ScrollProgress.tsx`
- [x] `SectionLabel.tsx`
- [x] `GradientText.tsx`
- [x] `Button.tsx` (базовые варианты)
- [x] `GlassCard.tsx` (базовая реализация)
- [x] `CursorGlow.tsx`

### Этап 3 — Hero секция (Day 1, вечер)
- [x] Подзаголовок и CTA кнопки
- [x] `ParticleField.tsx` — базовая версия
- [x] `GlowOrb.tsx` — базовая версия
- [ ] Анимированный заголовок (stagger по словам через Motion)
- [ ] Scroll indicator с bounce анимацией
- [ ] **Проверка:** выглядит "wow" на мобилке и десктопе

### Этап 4 — Animations секция (Day 2, утро)
- [x] `AnimationsSection.tsx` создана и подключена
- [x] `useInView` используется для trigger анимаций
- [ ] Stagger карточка — 6 элементов с задержкой (MVP-версия упрощена)
- [ ] Spring карточка — mouse follow effect
- [ ] Scroll progress карточка
- [ ] **Проверка:** анимации плавные (60fps), работают на мобилке

### Этап 5 — Interactivity секция (Day 2, полдень)
- [x] `ConfettiButton.tsx`
- [x] `MorphButton.tsx`
- [x] `AnimatedSlider.tsx`
- [x] `CounterCard.tsx`
- [x] `InteractivitySection.tsx` собрана
- [ ] **Проверка:** всё кликабельно, нет дёрганья

### Этап 6 — Visual Effects секция (Day 2, вечер)
- [x] `VisualEffectsSection.tsx` собрана
- [x] Glassmorphism/Glow/Gradient/Aurora карточки созданы как базовые MVP-блоки
- [ ] **Проверка:** эффекты работают в обеих темах

### Этап 7 — Responsive секция (Day 3, утро)
- [x] Device switcher (Desktop/Tablet/Mobile)
- [x] `ResponsiveSection.tsx`
- [ ] Mock device frame
- [ ] Анимированный контент внутри

### Этап 8 — Footer (Day 3, полдень)
- [x] Большой заголовок
- [x] CTA кнопка
- [x] GitHub ссылка
- [x] Tech badges
- [x] `FooterSection.tsx`

### Этап 9 — Полировка (Day 3, вечер)
- [x] SEO мета-теги (title, description, OG image, metadataBase)
- [ ] Lighthouse проверка (цель: ≥ 85 Performance)
- [ ] Тест на iOS Safari
- [ ] Тест на Android Chrome
- [x] Базовый хук `useReducedMotion` добавлен
- [ ] Интегрировать `prefers-reduced-motion` во все анимации
- [ ] Деплой на Vercel

---

## Сервер (VDS)

| Параметр | Значение |
|----------|----------|
| IP | `109.107.189.30` |
| ОС | Ubuntu 24.04 LTS |
| Node.js | v22.22.1 |
| Process manager | pm2 (`vibe-playground`) |
| Порт | 3000 |
| URL | http://109.107.189.30:3000 |
| Деплой-скрипт | `scripts/deploy-vds.mjs` |

Обновить на сервере: `node scripts/deploy-vds.mjs`

---

## Известные проблемы / Блокеры

- Блокеров нет.
- Примечание: на Windows периодически возможен конфликт `trace`-файла при нескольких `next dev` процессах; решается остановкой лишних node-процессов проекта.

---

## Решения принятые решения (ADR)

| Решение | Почему | Альтернатива |
|---------|--------|-------------|
| Motion вместо CSS animations | Нужна scroll-trigger логика, spring physics | CSS animations (проще, но ограниченно) |
| next-themes вместо ручного context | Готовое решение с SSR поддержкой | Свой ThemeContext |
| canvas-confetti вместо CSS | Реалистичная физика конфетти | CSS particles (менее впечатляющий) |
| Syne шрифт | Уникальный, футуристичный, подходит showcase | Space Grotesk (слишком популярный) |

---

## Полезные команды

```bash
# Разработка
npm run dev

# Сборка
npm run build

# Проверка типов
npm run type-check

# Lint
npm run lint

# Деплой (если Vercel CLI)
vercel --prod
```

---

## Cursor — Инструкции для агента

При работе с этим проектом:
1. **Всегда читай `ARCHITECTURE.md`** перед созданием нового компонента
2. **Используй `cn()` из `lib/utils.ts`** для классов
3. **Используй variants из `lib/animations.ts`** для Motion анимаций
4. **Тёмная тема первична** — светлая тема через `dark:` prefix в Tailwind
5. **Каждый компонент** — отдельный файл в правильной папке
6. **TypeScript строго** — нет `any`, все props типизированы
7. **Accessibility** — кнопки с `aria-label`, уважай `prefers-reduced-motion`
