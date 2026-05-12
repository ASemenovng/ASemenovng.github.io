import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

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
  assert.match(html, /data-section="contacts"/);
  assert.match(html, /data-lang-switcher/);
  assert.match(html, /assets\/css\/styles\.css/);
  assert.match(html, /assets\/js\/content\.js/);
  assert.match(html, /assets\/js\/site\.js/);

  for (const section of [
    "hero",
    "about",
    "experience",
    "achievements",
    "research",
    "teaching",
    "techStack",
    "contacts",
    "downloadCv"
  ]) {
    assert.match(content, new RegExp(`${section}:`), `Missing ${section} content bucket`);
  }

  assert.match(content, /ru:/);
  assert.match(content, /en:/);
  assert.match(content, /TODO:/);
  assert.match(css, /:root/);
  assert.match(site, /setLanguage/);
});
