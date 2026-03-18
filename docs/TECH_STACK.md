# Tech Stack — Vibe Coding Playground

## Финальный стек

```
Next.js 15 (App Router)
+ TypeScript
+ Tailwind CSS v4
+ Motion (Framer Motion v12)
+ shadcn/ui (выборочно)
+ Vercel (деплой)
```

---

## Почему именно это?

### Next.js 15 + App Router
**Зачем:** SPA + SSR из коробки, файловая маршрутизация, Image Optimization
**Альтернатива:** Vite + React — проще, но меньше возможностей
**Решение:** Для showcase SEO важен (находимость), Next.js даёт его бесплатно

### TypeScript
**Зачем:** Автодополнение в Cursor AI работает в разы лучше с типами. Меньше ошибок при генерации кода нейросетью.
**Совет:** Не увлекаться — `interface Props` лучше сложных дженериков для showcase

### Tailwind CSS v4
**Зачем:** CSS-переменные из коробки, тёмная/светлая тема через `dark:`, нет необходимости писать CSS файлы
**Ключевая фича:** `@theme` директива для кастомной палитры, работает с CSS variables
**Альтернатива:** CSS Modules — более многословно, сложнее для ИИ-генерации

### Motion (Framer Motion v12)
**Зачем:** Лучшая библиотека анимаций для React. `useScroll`, `useInView`, `AnimatePresence` — мощнейшие инструменты.
**Ключевые хуки:**
- `motion.div` — базовые анимации
- `useInView` — анимации при скролле
- `useMotionValue` — следование за мышью
- `staggerChildren` — поочерёдное появление

### shadcn/ui (выборочно)
**Зачем:** Slider, Switch, Tooltip компоненты — доступные, кастомизируемые. Не берём всё — только нужное.
**Берём:** Slider, Switch, Tabs
**Не берём:** Button (свой), Card (свой)

### Vercel
**Зачем:** 0 конфига, preview deployments на каждый PR, Edge Network, бесплатный тир

---

## Структура зависимостей

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "motion": "^12.0.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "canvas-confetti": "^1.9.0",
    "next-themes": "^0.3.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/react": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

---

## Что НЕ берём и почему

| Библиотека | Почему нет |
|-----------|-----------|
| GSAP | Лицензия, тяжелее Motion |
| Three.js | Избыточно для showcase без 3D |
| Styled Components | Tailwind делает то же самое быстрее |
| Redux | Нет глобального стейта — только UI state |
| React Query | Нет API запросов |
| Storybook | Нет команды, нет смысла |

---

## Цветовая палитра

### Тёмная тема (primary)

```css
--color-bg-primary: #080B14;      /* Глубокий тёмно-синий, не просто чёрный */
--color-bg-secondary: #0D1220;    /* Карточки, секции */
--color-bg-tertiary: #151B2E;     /* Hover states, elevated */

--color-accent-cyan: #00F5FF;     /* Основной акцент — electric cyan */
--color-accent-violet: #7C3AED;   /* Фиолетовый для разнообразия */
--color-accent-green: #00FF87;    /* Electric green для success/interactive */
--color-accent-pink: #FF006E;     /* Hot pink для предупреждений и акцентов */

--color-text-primary: #F0F4FF;    /* Почти белый с синеватым оттенком */
--color-text-secondary: #8892A4;  /* Приглушённый для описаний */
--color-text-muted: #4A5568;      /* Очень приглушённый */

--color-border: #1E2740;          /* Едва видимые границы */
--color-glow-cyan: rgba(0, 245, 255, 0.15);  /* Свечение */
```

### Светлая тема

```css
--color-bg-primary: #F8F9FF;      /* Почти белый с холодным оттенком */
--color-bg-secondary: #FFFFFF;
--color-bg-tertiary: #EDF0FF;

--color-accent-cyan: #0099CC;     /* Темнее для читаемости на светлом */
--color-accent-violet: #6D28D9;
--color-accent-green: #00A85A;
--color-accent-pink: #D6006A;

--color-text-primary: #0A0E1A;
--color-text-secondary: #3D4A5C;
--color-text-muted: #8892A4;

--color-border: #DDE3F0;
```

### Gradient Presets

```css
--gradient-hero: linear-gradient(135deg, #080B14 0%, #0D1220 50%, #080B14 100%);
--gradient-accent: linear-gradient(90deg, #00F5FF, #7C3AED);
--gradient-green-cyan: linear-gradient(90deg, #00FF87, #00F5FF);
--gradient-fire: linear-gradient(90deg, #FF006E, #7C3AED, #00F5FF);
```

---

## Шрифты

```
Display: "Syne" — геометрический, футуристичный, идеален для заголовков
Body: "DM Sans" — чистый, современный, хорошо читается мелко
Mono: "JetBrains Mono" — для кодовых сниппетов в секциях
```

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```
