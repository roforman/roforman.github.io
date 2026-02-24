class SiteHeader extends HTMLElement {
  static styleTextPromise;

  static async loadStyleText() {
    if (!SiteHeader.styleTextPromise) {
      SiteHeader.styleTextPromise = fetch("/assets/css/components/site-header.css").then((res) => {
        if (!res.ok) throw new Error("Failed to load site-header.css");
        return res.text();
      });
    }
    return SiteHeader.styleTextPromise;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styleText}</style>
      <header>
        <div class="header-inner">
          <div class="logo">
            <a href="/">
              <img src="/assets/images/roforman_logo.png" alt="Company logo" />
            </a>
          </div>
          <div class="header-actions">
            <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="site-nav">
              <span class="menu-toggle__line"></span>
              <span class="menu-toggle__line"></span>
              <span class="menu-toggle__line"></span>
            </button>
            <nav id="site-nav" class="nav-menu">
              <a href="/company/" data-key="header.company">Company</a>
              <a href="/careers/" data-key="header.careers">Careers</a>
              <a href="/product/" data-key="header.products">Products</a>
              <a href="/contact/" data-key="header.contact">Contact</a>
            </nav>
            <div class="lang-switch" role="group" aria-label="Language">
              <button type="button" class="lang-switch__btn" data-lang="ko">KO</button>
              <button type="button" class="lang-switch__btn" data-lang="en">EN</button>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  applyTranslations() {
    const i18n = window.roformanI18n;
    if (!i18n || !this.shadowRoot) return;

    const menuToggle = this.shadowRoot.querySelector(".menu-toggle");
    if (menuToggle) {
      menuToggle.setAttribute("aria-label", i18n.t("header.menuToggle"));
    }

    const langSwitch = this.shadowRoot.querySelector(".lang-switch");
    if (langSwitch) {
      langSwitch.setAttribute("aria-label", i18n.t("header.langLabel"));
    }

    this.shadowRoot.querySelectorAll(".nav-menu a[data-key]").forEach((anchor) => {
      anchor.textContent = i18n.t(anchor.dataset.key);
    });

    const currentLang = i18n.getLang();
    this.shadowRoot.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      const isActive = btn.dataset.lang === currentLang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  bindEvents() {
    const toggle = this.shadowRoot.querySelector(".menu-toggle");
    const menu = this.shadowRoot.querySelector(".nav-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const isActive = menu.classList.toggle("active");
        toggle.setAttribute("aria-expanded", String(isActive));
      });
    }

    this.shadowRoot.querySelectorAll(".lang-switch__btn").forEach((button) => {
      button.addEventListener("click", async () => {
        const nextLang = button.dataset.lang;
        if (!nextLang || !window.roformanI18n) return;
        await window.roformanI18n.setLang(nextLang);
      });
    });
  }

  async connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }

    this.styleText = await SiteHeader.loadStyleText();
    this.render();
    this.bindEvents();
    this.applyTranslations();
    if (window.roformanI18n?.ensureReady) {
      void window.roformanI18n.ensureReady().then(() => this.applyTranslations());
    }

    this.onI18nChange = () => this.applyTranslations();
    document.addEventListener("i18n:change", this.onI18nChange);
  }

  disconnectedCallback() {
    if (this.onI18nChange) {
      document.removeEventListener("i18n:change", this.onI18nChange);
    }
  }
}

if (!customElements.get("site-header")) {
  customElements.define("site-header", SiteHeader);
}
