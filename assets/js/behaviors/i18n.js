const I18N_STORAGE_KEY = "roforman:lang";
const SUPPORTED_LANGS = ["ko", "en"];

function deepGet(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && key in acc ? acc[key] : undefined), obj);
}

function formatMessage(template, params = {}) {
  if (typeof template !== "string") return template;
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => String(params[key] ?? ""));
}

class RoformanI18n {
  constructor() {
    this.lang = this.readInitialLang();
    this.messages = {};
    this.loadPromises = {};
    this.listeners = new Set();
    this.initialized = false;
  }

  readInitialLang() {
    try {
      const saved = localStorage.getItem(I18N_STORAGE_KEY);
      if (SUPPORTED_LANGS.includes(saved)) return saved;
    } catch {}
    return "ko";
  }

  async loadLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = "en";
    if (this.messages[lang]) return this.messages[lang];
    if (this.loadPromises[lang]) return this.loadPromises[lang];

    this.loadPromises[lang] = fetch(`/assets/i18n/${lang}.json`, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load i18n file: ${lang}`);
        return res.json();
      })
      .then((json) => {
        this.messages[lang] = json;
        return json;
      })
      .finally(() => {
        delete this.loadPromises[lang];
      });

    return this.loadPromises[lang];
  }

  async ensureReady() {
    await Promise.all([this.loadLanguage("en"), this.loadLanguage(this.lang)]);
    this.initialized = true;
  }

  getLang() {
    return this.lang;
  }

  t(key, params) {
    const current = deepGet(this.messages[this.lang], key);
    if (current != null) return formatMessage(current, params);
    const fallback = deepGet(this.messages.en, key);
    return formatMessage(fallback ?? key, params);
  }

  async setLang(nextLang) {
    if (!SUPPORTED_LANGS.includes(nextLang)) return;
    if (nextLang === this.lang && this.initialized) return;

    await this.loadLanguage(nextLang);
    this.lang = nextLang;

    try {
      localStorage.setItem(I18N_STORAGE_KEY, nextLang);
    } catch {}

    await this.applyDocument(document);
    this.emitChange();
  }

  routeKeyFromPath(pathname) {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/company/")) return "company";
    if (pathname.startsWith("/product/")) return "product";
    if (pathname.startsWith("/contact/")) return "contact";
    if (pathname.startsWith("/careers/")) return "careers";
    return null;
  }

  applyTitle() {
    const routeKey = this.routeKeyFromPath(window.location.pathname);
    if (!routeKey) return;
    const title = this.t(`meta.${routeKey}`);
    if (title && title !== `meta.${routeKey}`) {
      document.title = title;
    }
  }

  applyElement(el) {
    const textKey = el.dataset.i18n;
    if (textKey) el.textContent = this.t(textKey);

    const htmlKey = el.dataset.i18nHtml;
    if (htmlKey) el.innerHTML = this.t(htmlKey);

    const attrs = el.dataset.i18nAttr;
    if (attrs) {
      attrs.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((v) => v && v.trim());
        if (!attr || !key) return;
        el.setAttribute(attr, this.t(key));
      });
    }
  }

  async applyDocument(root = document) {
    await this.ensureReady();
    const scope = root instanceof Document ? root : root;
    const elements = scope.querySelectorAll("[data-i18n], [data-i18n-html], [data-i18n-attr]");
    elements.forEach((el) => this.applyElement(el));

    document.documentElement.lang = this.lang;
    this.applyTitle();
  }

  onChange(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  emitChange() {
    const detail = { lang: this.lang };
    document.dispatchEvent(new CustomEvent("i18n:change", { detail }));
    this.listeners.forEach((listener) => listener(detail));
  }

  async init(root = document) {
    await this.applyDocument(root);
    this.emitChange();
  }
}

if (!window.roformanI18n) {
  window.roformanI18n = new RoformanI18n();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    void window.roformanI18n.init(document);
  });
} else {
  void window.roformanI18n.init(document);
}

document.addEventListener("page:navigated", (event) => {
  const root = event.detail?.root instanceof Element ? event.detail.root : document;
  void window.roformanI18n.init(root);
});
