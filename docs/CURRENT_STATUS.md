# Current Status — Vibe Coding Playground

> Обновляй этот файл после каждой рабочей сессии, чтобы Cursor знал контекст.

## Текущий статус: 🟡 Planning / Setup

**Последнее обновление:** [ДАТА]
**Текущий этап:** Этап 1 — Инициализация проекта

---

## Что сделано ✅

- [ ] Создана документация проекта (docs/)
- [ ] Инициализирован Next.js проект
- [ ] Настроен Tailwind CSS v4
- [ ] Установлены зависимости
- [ ] Настроен ThemeProvider (next-themes)
- [ ] Созданы CSS переменные в globals.css
- [ ] Настроены шрифты (Syne + DM Sans + JetBrains Mono)
- [ ] Создан layout.tsx с мета-тегами
- [ ] Создан Navbar с ThemeToggle

---

## В процессе 🔄

*(Записывай сюда что сейчас делаешь)*

---

## Что делать дальше 📋

### Этап 1 — Фундамент (Day 1, утро)
- [ ] `npx create-next-app@latest vibe-coding-playground --typescript --tailwind --app`
- [ ] Установить Motion: `npm install motion`
- [ ] Установить next-themes: `npm install next-themes`
- [ ] Установить canvas-confetti: `npm install canvas-confetti @types/canvas-confetti`
- [ ] Установить clsx + tailwind-merge: `npm install clsx tailwind-merge`
- [ ] Настроить `globals.css` с CSS переменными из TECH_STACK.md
- [ ] Создать `lib/utils.ts` с функцией `cn()`
- [ ] Создать `lib/animations.ts` с Motion variants
- [ ] Создать `lib/constants.ts` с текстом страницы
- [ ] Настроить `ThemeProvider` в `layout.tsx`
- [ ] Создать базовую структуру папок

### Этап 2 — Layout и навигация (Day 1, полдень)
- [ ] `Navbar.tsx` — лого + навигация + ThemeToggle
- [ ] `ThemeToggle.tsx` — анимированная кнопка темы (sun/moon)
- [ ] `ScrollProgress.tsx` — прогресс-бар скролла вверху страницы
- [ ] `SectionLabel.tsx` — переиспользуемый лейбл
- [ ] `GradientText.tsx` — текст с CSS gradient
- [ ] `Button.tsx` — все варианты кнопок
- [ ] `GlassCard.tsx` — glassmorphism карточка
- [ ] `CursorGlow.tsx` — свечение за курсором (опционально)

### Этап 3 — Hero секция (Day 1, вечер)
- [ ] Анимированный заголовок (stagger по словам через Motion)
- [ ] Подзаголовок и CTA кнопки
- [ ] `ParticleField.tsx` — фоновые частицы (CSS animation или canvas)
- [ ] `GlowOrb.tsx` — декоративные шары на фоне
- [ ] Scroll indicator с bounce анимацией
- [ ] **Проверка:** выглядит "wow" на мобилке и десктопе

### Этап 4 — Animations секция (Day 2, утро)
- [ ] `useInView` hook для trigger анимаций
- [ ] Stagger карточка — 6 элементов с задержкой
- [ ] Spring карточка — mouse follow effect
- [ ] Scroll progress карточка
- [ ] `AnimationsSection.tsx` собирает всё вместе
- [ ] **Проверка:** анимации плавные (60fps), работают на мобилке

### Этап 5 — Interactivity секция (Day 2, полдень)
- [ ] `ConfettiButton.tsx` (canvas-confetti)
- [ ] `MorphButton.tsx` (idle → loading → success)
- [ ] `AnimatedSlider.tsx` (range + анимированный трек)
- [ ] `CounterCard.tsx` (+/- с spring анимацией числа)
- [ ] `InteractivitySection.tsx` собирает всё
- [ ] **Проверка:** всё кликабельно, нет дёрганья

### Этап 6 — Visual Effects секция (Day 2, вечер)
- [ ] Glassmorphism карточка
- [ ] Glow карточка (hover-triggered neon glow)
- [ ] Animated gradient карточка
- [ ] Aurora карточка (CSS keyframes)
- [ ] `VisualEffectsSection.tsx` собирает всё
- [ ] **Проверка:** эффекты работают в обеих темах

### Этап 7 — Responsive секция (Day 3, утро)
- [ ] Device switcher (Desktop/Tablet/Mobile)
- [ ] Mock device frame
- [ ] Анимированный контент внутри
- [ ] `ResponsiveSection.tsx`

### Этап 8 — Footer (Day 3, полдень)
- [ ] Большой заголовок
- [ ] CTA кнопка
- [ ] GitHub ссылка
- [ ] Tech badges
- [ ] `FooterSection.tsx`

### Этап 9 — Полировка (Day 3, вечер)
- [ ] SEO мета-теги (title, description, OG image)
- [ ] Lighthouse проверка (цель: ≥ 85 Performance)
- [ ] Тест на iOS Safari
- [ ] Тест на Android Chrome
- [ ] Проверить `prefers-reduced-motion`
- [ ] Деплой на Vercel

---

## Известные проблемы / Блокеры

*(Пиши сюда что не работает)*

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
