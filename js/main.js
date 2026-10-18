import {
  PROFILE,
  SKILLS,
  PROJECT_HIGHLIGHTS,
  ITCH_GAMES,
  TIMELINE,
} from "./config.js";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function initSmoothScroll() {
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
      closeMobileNav();
    });
  });
}

function initMobileNav() {
  const toggle = $(".nav-toggle");
  const panel = $(".nav-panel");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

function closeMobileNav() {
  const panel = $(".nav-panel");
  const toggle = $(".nav-toggle");
  if (panel) panel.classList.remove("is-open");
  if (toggle) toggle.setAttribute("aria-expanded", "false");
}

function initScrollReveal() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    $$(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  $$(".reveal").forEach((el) => observer.observe(el));
}

function initHeroCursor() {
  const el = $(".hero-cursor");
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;
  el.hidden = false;
}

function renderSkills() {
  const root = $("#skills-grid");
  if (!root) return;

  const groups = [
    { key: "languages", label: "Languages" },
    { key: "frameworks", label: "Frameworks & engines" },
    { key: "tools", label: "Tools & design" },
  ];

  root.innerHTML = groups
    .map(({ key, label }) => {
      const items = SKILLS[key]
        .map(
          (s) => `
        <li class="skill-orbit__item" style="--skill-level: ${s.level}">
          <span class="skill-orbit__ring" aria-hidden="true"></span>
          <span class="skill-orbit__name">${escapeHtml(s.name)}</span>
        </li>`
        )
        .join("");

      return `
      <div class="skill-group reveal">
        <h3 class="skill-group__title">${escapeHtml(label)}</h3>
        <ul class="skill-orbit" role="list">${items}</ul>
      </div>`;
    })
    .join("");
}

function renderTimeline(rootId, type) {
  const root = $(`#${rootId}`);
  if (!root) return;

  root.innerHTML = TIMELINE.filter((item) => item.type === type).map(
    (item, i) => `
    <article class="timeline__item timeline__item--${escapeHtml(item.type)} reveal" style="--delay: ${i * 0.06}s">
      <div class="timeline__marker" aria-hidden="true"></div>
      <div class="timeline__body">
        <p class="timeline__meta">
          <span class="timeline__type">${item.type === "education" ? "Education" : item.type === "volunteer" ? "Volunteering" : "Experience"}</span>
          <span class="timeline__period">${escapeHtml(item.period)}</span>
        </p>
        <h3 class="timeline__title">${escapeHtml(item.title)}</h3>
        <p class="timeline__org">${escapeHtml(item.org)}${item.place ? ` · ${escapeHtml(item.place)}` : ""}</p>
        ${item.summary ? `<p class="timeline__summary">${escapeHtml(item.summary)}</p>` : ""}
      </div>
    </article>`
  ).join("");
}

function renderContact() {
  const emailEl = $("#contact-email");
  if (!emailEl) return;

  if (PROFILE.email) {
    emailEl.href = `mailto:${PROFILE.email}`;
    emailEl.textContent = PROFILE.email;
    emailEl.hidden = false;
    return;
  }

  emailEl.outerHTML =
    '<p class="contact-block__email contact-block__email--muted">Add your email in <code>js/config.js</code> — or reach out on LinkedIn below.</p>';
}

function projectLinksHtml(links) {
  if (!links) return "";
  const parts = [];
  if (links.live)
    parts.push(
      `<a class="project-card__link" href="${escapeHtml(links.live)}" target="_blank" rel="noopener noreferrer">Live</a>`
    );
  if (links.demo)
    parts.push(
      `<a class="project-card__link" href="${escapeHtml(links.demo)}" target="_blank" rel="noopener noreferrer">Demo</a>`
    );
  if (links.github)
    parts.push(
      `<a class="project-card__link" href="${escapeHtml(links.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`
    );
  if (links.article)
    parts.push(
      `<a class="project-card__link" href="${escapeHtml(links.article)}" target="_blank" rel="noopener noreferrer">Read more</a>`
    );
  if (links.linkedin)
    parts.push(
      `<a class="project-card__link" href="${escapeHtml(links.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>`
    );
  if (links.itch)
    parts.push(
      `<a class="project-card__link" href="${escapeHtml(links.itch)}" target="_blank" rel="noopener noreferrer">Itch.io</a>`
    );
  return parts.length
    ? `<div class="project-card__links">${parts.join("")}</div>`
    : "";
}

function renderProjectCard(project) {
  const tech = (project.tech || [])
    .map((t) => `<li>${escapeHtml(t)}</li>`)
    .join("");
  const badge = project.badge
    ? `<span class="project-card__badge">${escapeHtml(project.badge)}</span>`
    : project.fork
      ? `<span class="project-card__badge project-card__badge--muted">Fork</span>`
      : "";

  return `
  <article class="project-card reveal" data-project-id="${escapeHtml(project.id)}">
    <header class="project-card__head">
      <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
      ${badge}
    </header>
    <p class="project-card__desc">${escapeHtml(project.description)}</p>
    ${tech ? `<ul class="project-card__tech" role="list">${tech}</ul>` : ""}
    ${projectLinksHtml(project.links)}
  </article>`;
}

async function fetchGitHubRepos() {
  const url = `https://api.github.com/users/${PROFILE.githubUsername}/repos?sort=updated&per_page=100`;
  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return res.json();
}

function mergeProjects(repos) {
  const byName = new Map(repos.map((r) => [r.name, r]));
  const usedRepos = new Set();
  const merged = [];

  for (const highlight of PROJECT_HIGHLIGHTS) {
    const repo = highlight.githubRepo
      ? byName.get(highlight.githubRepo)
      : null;
    if (repo) usedRepos.add(repo.name);

    const links = { ...(highlight.links || {}) };
    if (highlight.hideLive) {
      delete links.live;
    }
    if (repo) {
      links.github = repo.html_url;
      if (!highlight.hideLive && repo.homepage && !links.live) {
        links.live = repo.homepage;
      }
    }

    merged.push({
      id: highlight.id,
      title: highlight.title || repo?.name,
      description:
        highlight.description || repo?.description || repo?.name || "",
      tech:
        highlight.tech ||
        (repo?.language ? [repo.language] : []),
      links,
      badge: highlight.badge,
      featured: highlight.featured !== false,
      fork: repo?.fork ?? false,
    });
  }

  const extras = repos
    .filter(
      (r) =>
        !usedRepos.has(r.name) &&
        !r.fork &&
        typeof r.description === "string" &&
        r.description.trim().length > 0
    )
    .map((r) => ({
      id: `gh-${r.name}`,
      title: r.name.replace(/_/g, " "),
      description: r.description,
      tech: r.language ? [r.language] : [],
      links: {
        github: r.html_url,
        ...(r.homepage ? { live: r.homepage } : {}),
      },
      featured: false,
      fork: r.fork,
    }));

  return [...merged, ...extras];
}

function renderItchSection() {
  const root = $("#itch-games");
  if (!root || !ITCH_GAMES.length) return;

  root.innerHTML = ITCH_GAMES.map(
    (g) => `
    <a class="itch-card reveal" href="${escapeHtml(g.url)}" target="_blank" rel="noopener noreferrer">
      <span class="itch-card__title">${escapeHtml(g.title)}</span>
      <span class="itch-card__desc">${escapeHtml(g.description)}</span>
      <span class="itch-card__arrow" aria-hidden="true">→</span>
    </a>`
  ).join("");
}

async function renderProjects() {
  const featuredRoot = $("#projects-featured");
  const moreRoot = $("#projects-more");
  const status = $("#projects-status");
  if (!featuredRoot || !moreRoot) return;

  try {
    const repos = await fetchGitHubRepos();
    const projects = mergeProjects(repos).filter(
      (project) =>
        typeof project.description === "string" &&
        project.description.trim().length > 0
    );
    const featured = projects.filter((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    featuredRoot.innerHTML = featured.map(renderProjectCard).join("");
    moreRoot.innerHTML = rest.length
      ? rest.map(renderProjectCard).join("")
      : "";

    const moreHeading = $("#projects-more-heading");
    if (moreHeading) moreHeading.hidden = rest.length === 0;

    if (status) status.textContent = "";
    initScrollReveal();
  } catch (err) {
    console.error(err);
    if (status) {
      status.textContent =
        "Could not load GitHub projects — showing highlights only.";
    }
    const fallback = PROJECT_HIGHLIGHTS.map((h) =>
      renderProjectCard({
        ...h,
        links: h.links || {},
        tech: h.tech || [],
      })
    );
    featuredRoot.innerHTML = fallback.join("");
    initScrollReveal();
  }
}

function initNavActive() {
  const sections = $$("main section[id]");
  const links = $$('.nav-panel a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        links.forEach((a) => {
          a.classList.toggle("is-active", a.getAttribute("href") === id);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

function initYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initMobileNav();
  initHeroCursor();
  renderSkills();
  renderTimeline("timeline-experience", "work");
  renderTimeline("timeline-education", "education");
  renderTimeline("timeline-volunteer", "volunteer");
  renderContact();
  renderItchSection();
  renderProjects();
  initScrollReveal();
  initNavActive();
  initYear();
});
