class AppRouter {
  constructor() {
    this.cache = new Map();
    this.onClick = this.onClick.bind(this);
    this.onPopState = this.onPopState.bind(this);
  }

  init() {
    document.addEventListener("click", this.onClick);
    window.addEventListener("popstate", this.onPopState);
  }

  getAnchorFromEvent(event) {
    const path = typeof event.composedPath === "function" ? event.composedPath() : [];
    for (const node of path) {
      if (node instanceof HTMLAnchorElement) return node;
    }
    if (event.target instanceof Element) {
      return event.target.closest("a");
    }
    return null;
  }

  isRoutableAnchor(anchor) {
    if (!anchor) return false;
    if (anchor.target && anchor.target !== "_self") return false;
    if (anchor.hasAttribute("download")) return false;
    if (anchor.dataset.noRouter === "true") return false;

    const href = anchor.getAttribute("href");
    if (!href) return false;
    if (href.startsWith("#")) return false;
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return false;

    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin) return false;
    return true;
  }

  async fetchPage(url) {
    const key = url.pathname;
    if (this.cache.has(key)) return this.cache.get(key);

    const res = await fetch(url.href, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch page: ${url.href}`);
    const html = await res.text();
    this.cache.set(key, html);
    return html;
  }

  parsePage(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const nextLayout = doc.querySelector("app-layout");
    if (!nextLayout) return null;

    return {
      title: doc.title,
      lang: doc.documentElement.lang || "en",
      layoutInnerHTML: nextLayout.innerHTML,
    };
  }

  async navigate(url, { push = true } = {}) {
    const currentLayout = document.querySelector("app-layout");
    if (!currentLayout) {
      window.location.href = url.href;
      return;
    }

    try {
      const html = await this.fetchPage(url);
      const page = this.parsePage(html);
      if (!page) {
        window.location.href = url.href;
        return;
      }

      currentLayout.innerHTML = page.layoutInnerHTML;
      document.title = page.title;
      document.documentElement.lang = page.lang;

      if (push) {
        window.history.pushState({}, "", url.pathname + url.search + url.hash);
      }

      window.scrollTo({ top: 0, behavior: "auto" });
    } catch {
      window.location.href = url.href;
    }
  }

  onClick(event) {
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const anchor = this.getAnchorFromEvent(event);
    if (!this.isRoutableAnchor(anchor)) return;

    const url = new URL(anchor.href, window.location.href);
    if (url.pathname === window.location.pathname && url.search === window.location.search) return;

    event.preventDefault();
    void this.navigate(url, { push: true });
  }

  onPopState() {
    const url = new URL(window.location.href);
    void this.navigate(url, { push: false });
  }
}

const appRouter = new AppRouter();
appRouter.init();
