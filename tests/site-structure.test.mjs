import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { siteContent } from "../assets/js/content.js";

const root = new URL("../", import.meta.url);

async function readProjectFile(path) {
  return readFile(new URL(path, root), "utf8");
}

test("site exposes the expected GitHub Pages structure", async () => {
  const [html, css, content, site] = await Promise.all([
    readProjectFile("index.html"),
    readProjectFile("assets/css/styles.css"),
    readProjectFile("assets/js/content.js"),
    readProjectFile("assets/js/site.js")
  ]);

  assert.match(html, /<html lang="ru"/);
  assert.match(html, /data-section="hero"/);
  assert.match(html, /data-section="education"/);
  assert.match(html, /data-section="contacts"/);
  assert.match(html, /data-lang-switcher/);
  assert.match(html, /assets\/css\/styles\.css/);
  assert.match(html, /assets\/js\/site\.js/);
  assert.match(site, /\.\/content\.js/);
  assert.doesNotMatch(html, /hero-panel/);
  assert.doesNotMatch(html, /data-section="achievements"/);
  assert.doesNotMatch(html, /data-section="downloadCv"/);
  assert.doesNotMatch(html, /download-cv/);
  assert.doesNotMatch(html, /data-section="about"/);

  const expectedOrder = [
    'id="experience"',
    'id="tech-stack"',
    'id="education"',
    'id="research"',
    'id="teaching"',
    'id="contacts"'
  ];
  let previousIndex = -1;
  for (const marker of expectedOrder) {
    const nextIndex = html.indexOf(marker);
    assert.ok(nextIndex > previousIndex, `Expected ${marker} after previous section`);
    previousIndex = nextIndex;
  }

  for (const section of [
    "hero",
    "experience",
    "techStack",
    "education",
    "research",
    "teaching",
    "contacts"
  ]) {
    assert.match(content, new RegExp(`${section}:`), `Missing ${section} content bucket`);
  }
  assert.doesNotMatch(content, /downloadCv:/);
  assert.doesNotMatch(content, /andrew-semenov-cv\.pdf/);

  assert.match(content, /ru:/);
  assert.match(content, /en:/);
  assert.doesNotMatch(content, /TODO:/);
  assert.match(css, /:root/);
  assert.match(site, /setLanguage/);
});

test("content is bilingual, real, and follows the chosen structure", () => {
  assert.equal(siteContent.ru.meta.brand, "Андрей Семенов");
  assert.equal(siteContent.en.meta.brand, "Andrew Semenov");
  assert.equal(siteContent.ru.nav.research, "Исследования");
  assert.equal(siteContent.ru.nav.teaching, "Преподавание");
  assert.equal(siteContent.ru.techStack.title, "Технический стек");
  assert.equal(siteContent.ru.experience.eyebrow, "Опыт");
  assert.equal(siteContent.ru.hero.eyebrow, "Профиль");
  assert.equal(siteContent.en.hero.eyebrow, "Profile");
  assert.equal(siteContent.ru.hero.title, "Разработчик, исследователь");
  assert.equal(siteContent.en.hero.title, "Software developer, researcher");
  assert.equal(siteContent.ru.education.items.length, 2);
  assert.equal(siteContent.en.education.items.length, 2);

  assert.ok(!("about" in siteContent.ru));
  assert.ok(!("about" in siteContent.en));
  assert.ok(!("achievements" in siteContent.ru));
  assert.ok(!("achievements" in siteContent.en));
  assert.ok(!("downloadCv" in siteContent.ru));
  assert.ok(!("downloadCv" in siteContent.en));

  for (const language of ["ru", "en"]) {
    const content = siteContent[language];
    assert.ok(content.experience.items.length >= 3);
    assert.ok(
      content.experience.items.every(
        (item) =>
          item.sections?.some((section) => section.title === "Задачи" || section.title === "Tasks") &&
          item.sections?.some((section) => section.title === "Результаты" || section.title === "Results")
      )
    );
    assert.ok(content.research.items.length >= 2);
    assert.match(content.research.items[0].title, /Ончейн|Onchain/);
    assert.ok(content.teaching.items.length >= 1);
    assert.ok(content.techStack.items.length >= 5);
    assert.ok(content.techStack.items.every((item) => !item.description));
    assert.ok(content.contacts.items.length >= 3);
    assert.match(JSON.stringify(content), /Yandex|Яндекс/);
    assert.match(JSON.stringify(content), /VK|ВКонтакте/);
    assert.match(JSON.stringify(content), /SBER|СБЕР/);
  }
});
