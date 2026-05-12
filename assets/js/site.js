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

function createCard(item) {
  const article = document.createElement("article");
  article.className = "card";

  const title = document.createElement("h3");
  title.textContent = item.title;
  article.append(title);

  if (item.period || item.role || item.place) {
    const meta = document.createElement("p");
    meta.className = "card-meta";
    meta.textContent = [item.period, item.role, item.place].filter(Boolean).join(" · ");
    article.append(meta);
  }

  const description = document.createElement("p");
  description.textContent = item.description;
  article.append(description);

  if (item.href && item.linkLabel) {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.linkLabel;
    link.className = "text-link";
    article.append(link);
  }

  return article;
}

function renderParagraphs(container, paragraphs) {
  container.replaceChildren(
    ...paragraphs.map((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      return paragraph;
    })
  );
}

function renderCards(container, items) {
  container.replaceChildren(...items.map(createCard));
}

function renderTimeline(container, items) {
  container.replaceChildren(
    ...items.map((item) => {
      const row = document.createElement("article");
      row.className = "timeline-item";

      const period = document.createElement("span");
      period.className = "timeline-period";
      period.textContent = item.period;

      const body = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = item.role;

      const place = document.createElement("p");
      place.className = "timeline-place";
      place.textContent = item.place;

      const description = document.createElement("p");
      description.textContent = item.description;

      body.append(title, place, description);
      row.append(period, body);
      return row;
    })
  );
}

function renderStack(container, groups) {
  container.replaceChildren(
    ...groups.map((group) => {
      const block = document.createElement("article");
      block.className = "stack-group";

      const title = document.createElement("h3");
      title.textContent = group.title;

      const list = document.createElement("ul");
      list.replaceChildren(
        ...group.items.map((item) => {
          const element = document.createElement("li");
          element.textContent = item;
          return element;
        })
      );

      block.append(title, list);
      return block;
    })
  );
}

function renderContacts(container, links) {
  container.replaceChildren(
    ...links.map((item) => {
      const link = document.createElement("a");
      link.className = "contact-link";
      link.href = item.href || "#contacts";
      link.textContent = item.value;
      link.setAttribute("aria-label", item.label);

      const label = document.createElement("span");
      label.textContent = item.label;

      link.prepend(label);
      return link;
    })
  );
}

function updateCvLink(content) {
  const link = document.querySelector("[data-cv-link]");
  if (!link) return;

  if (content.downloadCv.fileUrl) {
    link.href = content.downloadCv.fileUrl;
    link.removeAttribute("aria-disabled");
    link.setAttribute("download", "");
  } else {
    link.href = "#download-cv";
    link.setAttribute("aria-disabled", "true");
    link.removeAttribute("download");
  }
}

export function setLanguage(language) {
  const nextLanguage = supportedLanguages.includes(language) ? language : defaultLanguage;
  const content = siteContent[nextLanguage];

  document.documentElement.lang = content.meta.lang;
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

  renderParagraphs(document.querySelector("[data-list='about.paragraphs']"), content.about.paragraphs);
  renderTimeline(document.querySelector("[data-list='experience.items']"), content.experience.items);
  renderCards(document.querySelector("[data-list='achievements.items']"), content.achievements.items);
  renderCards(document.querySelector("[data-list='research.items']"), content.research.items);
  renderCards(document.querySelector("[data-list='teaching.items']"), content.teaching.items);
  renderStack(document.querySelector("[data-list='techStack.groups']"), content.techStack.groups);
  renderContacts(document.querySelector("[data-list='contacts.links']"), content.contacts.links);
  updateCvLink(content);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === nextLanguage;
    button.setAttribute("aria-pressed", String(isActive));
  });

  const url = new URL(window.location.href);
  url.searchParams.set("lang", nextLanguage);
  window.history.replaceState({}, "", url);
  window.localStorage.setItem("site-language", nextLanguage);
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
setLanguage(getInitialLanguage());
