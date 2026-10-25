# NOSFERATU — сайт квест-проекта (Йошкар-Ола)

Кинематографичный коммерческий сайт: хоррор-перформансы, детские форматы, Lounge, запись по телефону / VK.

## Запуск

```bash
npm install
npm run dev
```

Прод-сборка:

```bash
npm run build
npm run preview
```

## GitHub Pages

Сайт публикуется в репозиторий `nosferatu-yo` (base `/nosferatu-yo/`).

После push в `main` workflow **Deploy to GitHub Pages** собирает и выкладывает сайт:

https://teassty.github.io/nosferatu-yo/

## Данные

Редактируемые источники без правки UI:

- `src/data/contact.ts` — телефон, VK, email
- `src/data/locations.ts` — адреса и график
- `src/data/quests.ts` — игры и категории
- `src/data/reviews.ts` — отзывы
- `src/data/gallery.ts` — галерея

Источники ассетов: `ASSET_SOURCES.md`.

## Стек

Vite + React + TypeScript + React Router + Motion (framer-motion).
