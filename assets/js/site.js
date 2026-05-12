import { siteContent } from "./content.js";

const supportedLanguages = Object.keys(siteContent);
const defaultLanguage = "ru";

function getValue(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("lang");
  const fromStorage = window.localStorage.getItem("site-language");

  if (supportedLanguages.includes(fromQuery)) return fromQuery;
  if (supportedLanguages.includes(fromStorage)) return fromStorage;
  return defaultLanguage;
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value ?? "";
  });
}

function renderParagraphs(container, paragraphs) {
  if (!container) return;

  container.replaceChildren(
    ...paragraphs.map((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      return paragraph;
    })
  );
}

function createLink(linkItem) {
  const link = document.createElement("a");
  link.className = "text-link";
  link.href = linkItem.href;
  link.textContent = linkItem.label;
  if (linkItem.download) link.setAttribute("download", "");
  return link;
}

function createItemSection(section) {
  const block = document.createElement("div");
  block.className = "timeline-subsection";

  const title = document.createElement("h4");
  title.textContent = section.title;

  const list = document.createElement("ul");
  list.replaceChildren(
    ...section.items.map((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    })
  );

  block.append(title, list);
  return block;
}

function renderTimeline(container, items) {
  if (!container) return;

  container.replaceChildren(
    ...items.map((item) => {
      const row = document.createElement("article");
      row.className = "timeline-item";

      const period = document.createElement("span");
      period.className = "timeline-period";
      period.textContent = item.period;

      const body = document.createElement("div");
      body.className = "timeline-body";

      const title = item.href ? document.createElement("a") : document.createElement("h3");
      title.textContent = item.title;
      if (item.href) {
        title.href = item.href;
        title.className = "timeline-title-link";
      }

      body.append(title);

      if (item.place) {
        const place = document.createElement("p");
        place.className = "timeline-place";
        place.textContent = item.place;
        body.append(place);
      }

      if (item.description) {
        const description = document.createElement("p");
        description.textContent = item.description;
        body.append(description);
      }

      if (item.sections) {
        body.append(...item.sections.map(createItemSection));
      }

      if (item.links) {
        const links = document.createElement("div");
        links.className = "timeline-links";
        links.append(...item.links.map(createLink));
        body.append(links);
      }

      row.append(period, body);
      return row;
    })
  );
}

export function setLanguage(language) {
  const nextLanguage = supportedLanguages.includes(language) ? language : defaultLanguage;
  const content = siteContent[nextLanguage];

  document.documentElement.lang = content.meta.lang;
  document.documentElement.dataset.theme = "ink";
  document.title = content.meta.title;
  document
    .querySelector("meta[name='description']")
    ?.setAttribute("content", content.meta.description);

  setText("[data-field='brand']", content.meta.brand);

  for (const [key, value] of Object.entries(content.nav)) {
    setText(`[data-nav='${key}']`, value);
  }

  document.querySelectorAll("[data-field]").forEach((element) => {
    const field = element.getAttribute("data-field");
    if (!field || field === "brand") return;
    const value = getValue(content, field);
    if (typeof value === "string") element.textContent = value;
  });

  renderTimeline(document.querySelector("[data-list='education.items']"), content.education.items);
  renderTimeline(document.querySelector("[data-list='experience.items']"), content.experience.items);
  renderTimeline(document.querySelector("[data-list='research.items']"), content.research.items);
  renderTimeline(document.querySelector("[data-list='teaching.items']"), content.teaching.items);
  renderTimeline(document.querySelector("[data-list='techStack.items']"), content.techStack.items);
  renderTimeline(document.querySelector("[data-list='contacts.items']"), content.contacts.items);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === nextLanguage;
    button.setAttribute("aria-pressed", String(isActive));
  });

  const url = new URL(window.location.href);
  url.searchParams.set("lang", nextLanguage);
  window.history.replaceState({}, "", `${url.pathname}${url.search}`);
  window.localStorage.setItem("site-language", nextLanguage);
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
setLanguage(getInitialLanguage());
