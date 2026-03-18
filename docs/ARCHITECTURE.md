# Architecture — Vibe Coding Playground

## Структура файлов и папок

```
vibe-coding-playground/
├── docs/                          # Контекст для Cursor AI
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── TECH_STACK.md
│   └── CURRENT_STATUS.md
│
├── public/
│   ├── favicon.ico
│   ├── og-image.png               # Open Graph превью
│   └── fonts/                     # Локальные шрифты (если нужно)
│
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # Root layout: fonts, ThemeProvider, meta
│   │   ├── page.tsx               # Главная страница — собирает все секции
│   │   ├── globals.css            # CSS переменные, базовые стили, Tailwind
│   │   └── not-found.tsx          # 404 страница
│   │
│   ├── components/
│   │   ├── sections/              # Основные секции страницы
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AnimationsSection.tsx
│   │   │   ├── InteractivitySection.tsx
│   │   │   ├── VisualEffectsSection.tsx
│   │   │   ├── ResponsiveSection.tsx
│   │   │   └── FooterSection.tsx
│   │   │
│   │   ├── ui/                    # Переиспользуемые UI-примитивы
│   │   │   ├── Button.tsx         # Кнопка с вариантами и анимациями
│   │   │   ├── Card.tsx           # Базовая карточка
│   │   │   ├── GlassCard.tsx      # Glassmorphism карточка
│   │   │   ├── GradientText.tsx   # Текст с градиентом
│   │   │   ├── Badge.tsx          # Маленький бейдж/тег
│   │   │   ├── SectionLabel.tsx   # Лейбл секции (ANIMATIONS, etc.)
│   │   │   └── Divider.tsx        # Разделитель секций
│   │   │
│   │   ├── effects/               # Визуальные эффекты
│   │   │   ├── ParticleField.tsx  # Анимированные частицы для Hero
│   │   │   ├── GlowOrb.tsx        # Светящийся шар (декоративный)
│   │   │   ├── GridBackground.tsx # Сетка фона
│   │   │   ├── NoiseTexture.tsx   # Шумовая текстура overlay
│   │   │   └── CursorGlow.tsx     # Кастомное свечение за курсором
│   │   │
│   │   ├── interactive/           # Интерактивные демо-элементы
│   │   │   ├── ConfettiButton.tsx # Кнопка с конфетти
│   │   │   ├── MorphButton.tsx    # Морфинг кнопка
│   │   │   ├── AnimatedSlider.tsx # Слайдер с анимацией
│   │   │   ├── ToggleSwitch.tsx   # Переключатель с анимацией
│   │   │   └── CounterCard.tsx    # Счётчик с анимацией числа
│   │   │
│   │   └── layout/               # Лейаут компоненты
│   │       ├── Navbar.tsx         # Навигация + переключатель темы
│   │       ├── ThemeToggle.tsx    # Кнопка смены темы
│   │       └── ScrollProgress.tsx # Прогресс-бар скролла
│   │
│   ├── hooks/                     # Кастомные React хуки
│   │   ├── useMousePosition.ts    # Отслеживание позиции мыши
│   │   ├── useScrollProgress.ts   # Прогресс скролла страницы
│   │   └── useReducedMotion.ts    # Accessibility: prefers-reduced-motion
│   │
│   ├── lib/                       # Утилиты и хелперы
│   │   ├── utils.ts               # cn() для clsx + tailwind-merge
│   │   ├── animations.ts          # Переиспользуемые Motion variants
│   │   └── constants.ts           # Константы: цвета, брейкпоинты, текст
│   │
│   └── types/                     # TypeScript типы
│       └── index.ts               # Общие типы проекта
│
├── .cursor/                       # Cursor AI настройки
│   └── rules                      # Правила для агента
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── .env.local                     # (пустой для showcase, но структура готова)
```

---

## Компоненты — детальное описание

### 📄 `src/app/page.tsx`
Главная страница. Просто импортирует и рендерит все секции в нужном порядке. Никакой логики — только структура.

```tsx
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AnimationsSection />
      <InteractivitySection />
      <VisualEffectsSection />
      <ResponsiveSection />
      <FooterSection />
    </main>
  )
}
```

---

### 🦸 `HeroSection.tsx`
**Ответственность:** Первое впечатление. Wow-момент при загрузке.

**Содержит:**
- Анимированный заголовок с посимвольным появлением (stagger по буквам)
- Подзаголовок с fade-in задержкой
- CTA кнопки с hover-эффектами
- `ParticleField` на фоне (canvas-based или CSS)
- `GlowOrb` — декоративные светящиеся шары
- Scroll-indicator (мигающая стрелка вниз)

**Анимации:**
```
0ms    → Заголовок начинает появляться (stagger по словам)
400ms  → Подзаголовок fade-in + slide-up
800ms  → CTA кнопки scale-in
1200ms → Scroll indicator bounce
```

**Props:** нет (статичный контент)

---

### 🎬 `AnimationsSection.tsx`
**Ответственность:** Показать возможности Motion/анимаций.

**Содержит:**
- `SectionLabel` с текстом "ANIMATIONS"
- Заголовок секции
- 3 карточки с разными demo-анимациями:
  1. **Stagger Card** — 6 элементов появляются по очереди при входе в viewport
  2. **Spring Card** — элемент следует за мышью (spring physics)
  3. **Scroll Card** — прогресс-бар связан со скроллом секции
- Все карточки появляются с stagger при скролле к секции

**Ключевые хуки:** `useInView`, `useScroll`, `useMotionValue`, `useSpring`

---

### 🕹️ `InteractivitySection.tsx`
**Ответственность:** Показать что сайт "живой" — можно нажимать, тянуть, переключать.

**Содержит:**
- 4 интерактивных демо в сетке:
  1. **`ConfettiButton`** — нажатие → взрыв конфетти (canvas-confetti)
  2. **`MorphButton`** — морфинг между состояниями (idle → loading → success)
  3. **`AnimatedSlider`** — слайдер с анимированным треком и динамическим цветом
  4. **`CounterCard`** — +/- кнопки, счётчик анимируется (spring)
- Каждый элемент с подписью что он делает

**State:** Каждый интерактивный компонент управляет своим состоянием сам (изолированный стейт)

---

### ✨ `VisualEffectsSection.tsx`
**Ответственность:** Современные визуальные приёмы 2025.

**Содержит:**
- 4 карточки с разными эффектами:
  1. **Glassmorphism Card** — backdrop-blur, прозрачность, border gradient
  2. **Glow Card** — неоновое свечение при hover, цвет меняется
  3. **Gradient Card** — анимированный градиент движется по карточке
  4. **Aurora Card** — aurora-like анимация фона (CSS keyframes)
- Hover state у каждой карточки — уникальный эффект
- Tooltip с объяснением техники

**Технические детали:**
- `backdrop-filter: blur()` для glassmorphism
- CSS custom properties + JS для динамического glow
- `@keyframes` для aurora эффекта

---

### 📱 `ResponsiveSection.tsx`
**Ответственность:** Показать адаптивность.

**Содержит:**
- 3 кнопки-переключателя: Desktop / Tablet / Mobile
- Mock-браузер/устройство с симулированным контентом внутри
- При переключении контент плавно перестраивается (grid → flex → stack)
- Размер "устройства" анимированно меняется
- Индикатор текущего брейкпоинта

**State:** `activeDevice: 'desktop' | 'tablet' | 'mobile'`

---

### 🦶 `FooterSection.tsx`
**Ответственность:** Завершить опыт, дать CTA.

**Содержит:**
- Большой заголовок "Made with Claude & Cursor"
- Subtitle с временем создания
- CTA кнопка "Пройти курс"
- GitHub ссылка
- Список технологий (маленькие badges)
- Copyright

---

### 🧩 UI Примитивы

#### `Button.tsx`
```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'glow'
  size: 'sm' | 'md' | 'lg'
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}
```
- `primary` — градиентный фон, белый текст
- `secondary` — border, прозрачный фон
- `ghost` — только текст, hover underline
- `glow` — с неоновым свечением

#### `GlassCard.tsx`
```tsx
interface GlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'cyan' | 'violet' | 'green' | 'pink'
  hover?: boolean  // включить hover эффект
}
```

#### `SectionLabel.tsx`
Маленький лейбл над заголовком секции:
```
[ ANIMATIONS ]   ← моноширинный шрифт, буквы с пробелами, граница
```

---

## Motion Variants (animations.ts)

```typescript
// Стандартное появление снизу
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

// Контейнер для stagger
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

// Карточка с scale
export const cardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

// Заголовок по буквам
export const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

---

## Принципы организации кода

1. **One component = one responsibility** — HeroSection не знает про InteractivitySection
2. **Composition over configuration** — GlassCard принимает children, не children-as-config
3. **Co-location** — стили, типы и логика компонента рядом с ним
4. **Hooks для логики** — UI-компонент = render, хук = логика
5. **Константы вынесены** — текст страницы в `constants.ts`, не в компонентах
6. **Типизация пропсов** — все публичные props типизированы, `any` запрещён
