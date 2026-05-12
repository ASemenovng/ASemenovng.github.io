# ASemenovng.github.io

Статический one-page personal professional website для GitHub Pages.

## Файловая организация

- `index.html` — семантическая структура страницы и секции портфолио.
- `assets/css/styles.css` — весь визуальный стиль сайта.
- `assets/js/content.js` — независимые русская и английская версии текстов.
- `assets/js/site.js` — переключение языка, рендер списков и ссылка на CV.
- `assets/files/` — место для PDF-файла CV и других статических файлов.
- `tests/site-structure.test.mjs` — минимальная проверка структуры шаблона.

## Как заполнять сайт

Основные данные редактируются в `assets/js/content.js`.

- Русская версия лежит в объекте `siteContent.ru`.
- Английская версия лежит в объекте `siteContent.en`.
- Это две отдельные версии текста, а не автоматический перевод.
- Все поля `TODO:` нужно заменить реальными данными.

Для PDF CV:

1. Положите файл, например, в `assets/files/cv.pdf`.
2. В `assets/js/content.js` укажите путь в `downloadCv.fileUrl` для нужного языка:

```js
fileUrl: "assets/files/cv.pdf"
```

## Локальная проверка

```bash
npm test
```

Сайт не требует сборки. Для GitHub Pages достаточно `index.html` и файлов из `assets/`.

## Деплой

Для user site репозитория `ASemenovng.github.io` GitHub Pages будет доступен по адресу:

```text
https://asemenovng.github.io/
```

После коммита изменения нужно отправить в `main`:

```bash
git push origin main
```
