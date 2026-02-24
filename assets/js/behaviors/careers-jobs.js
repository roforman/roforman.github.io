let jobsCachePromise;
const DEFAULT_APPLY_URL = "https://forms.google.com";

function fetchJobs() {
  if (!jobsCachePromise) {
    jobsCachePromise = fetch("/assets/data/jobs.json", { cache: "no-store" }).then((res) => {
      if (!res.ok) throw new Error("Failed to load jobs.json");
      return res.json();
    });
  }
  return jobsCachePromise;
}

function createJobCard(job) {
  const i18n = window.roformanI18n;
  const article = document.createElement("article");
  article.className = "job-card";

  const header = document.createElement("div");
  header.className = "job-card__header";

  const title = document.createElement("h3");
  title.textContent = job.title || "Untitled Position";

  const badge = document.createElement("span");
  const isIntern = (job.employmentType || "").toLowerCase().includes("intern");
  badge.className = isIntern ? "job-card__badge job-card__badge--alt" : "job-card__badge";
  badge.textContent = job.employmentType || "Open";

  header.append(title, badge);

  const meta = document.createElement("p");
  meta.className = "job-card__meta";
  meta.textContent = [job.team, job.location, job.experience].filter(Boolean).join(" | ");

  const desc = document.createElement("p");
  desc.className = "job-card__desc";
  desc.textContent = job.description || "";

  const actions = document.createElement("div");
  actions.className = "job-card__actions";

  const applyButton = document.createElement("a");
  applyButton.className = "job-card__apply";
  applyButton.href = typeof job.applyUrl === "string" && job.applyUrl.trim() ? job.applyUrl : DEFAULT_APPLY_URL;
  applyButton.target = "_blank";
  applyButton.rel = "noopener noreferrer";
  applyButton.textContent = i18n ? i18n.t("careers.applyButton") : "Apply";

  actions.append(applyButton);

  article.append(header, meta, desc, actions);
  return article;
}

function updateCount(container, count) {
  const i18n = window.roformanI18n;
  const countEl = container.closest(".careers-openings")?.querySelector(".careers-count");
  if (!countEl) return;
  if (!i18n) {
    countEl.textContent = `${count} role${count === 1 ? "" : "s"}`;
    return;
  }
  countEl.textContent = i18n.t(count === 1 ? "careers.roleCountOne" : "careers.rolesCount", { count });
}

function renderJobs(container, jobs) {
  container.innerHTML = "";

  if (!Array.isArray(jobs) || jobs.length === 0) {
    const empty = document.createElement("p");
    empty.className = "job-list__empty";
    empty.textContent = window.roformanI18n
      ? window.roformanI18n.t("careers.noJobs")
      : "There are no open positions at the moment. Please check back later.";
    container.append(empty);
    updateCount(container, 0);
    return;
  }

  const fragment = document.createDocumentFragment();
  jobs.forEach((job) => {
    fragment.append(createJobCard(job));
  });

  container.append(fragment);
  updateCount(container, jobs.length);
}

function renderError(container) {
  container.innerHTML = "";
  const error = document.createElement("p");
  error.className = "job-list__empty";
  error.textContent = window.roformanI18n
    ? window.roformanI18n.t("careers.jobsLoadError")
    : "Failed to load open positions. Please try again later.";
  container.append(error);
  updateCount(container, 0);
}

async function initCareersJobs(root = document) {
  const containers = root.querySelectorAll("[data-jobs-list]");
  if (containers.length === 0) return;

  try {
    const jobs = await fetchJobs();
    containers.forEach((container) => renderJobs(container, jobs));
  } catch {
    containers.forEach((container) => renderError(container));
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    void initCareersJobs();
  });
} else {
  void initCareersJobs();
}

document.addEventListener("page:navigated", (event) => {
  const root = event.detail?.root instanceof Element ? event.detail.root : document;
  void initCareersJobs(root);
});

document.addEventListener("i18n:change", () => {
  void initCareersJobs(document);
});
