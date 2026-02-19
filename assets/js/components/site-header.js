class SiteHeader extends HTMLElement {
  static styleTextPromise;

  static async loadStyleText() {
    if (!SiteHeader.styleTextPromise) {
      SiteHeader.styleTextPromise = fetch("/assets/css/components/site-header.css")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load site-header.css");
          return res.text();
        });
    }
    return SiteHeader.styleTextPromise;
  }

  async connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }

    const styleText = await SiteHeader.loadStyleText();
    this.shadowRoot.innerHTML = `
      <style>${styleText}</style>
      <header>
        <div class="header-inner">
          <div class="logo">
            <a href="/">
              <img src="/assets/images/roforman_logo.png" alt="Company logo" />
            </a>
          </div>
          <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="site-nav">
            <span class="menu-toggle__line"></span>
            <span class="menu-toggle__line"></span>
            <span class="menu-toggle__line"></span>
          </button>
          <nav id="site-nav" class="nav-menu">
            <a href="/company/">Company</a>
            <a href="/product/">Products</a>
            <a href="/technology/">Technology</a>
            <a href="/certification/">Certification</a>
            <a href="/contact/">Contact</a>
          </nav>
        </div>
      </header>
    `;

    const toggle = this.shadowRoot.querySelector(".menu-toggle");
    const menu = this.shadowRoot.querySelector(".nav-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const isActive = menu.classList.toggle("active");
        toggle.setAttribute("aria-expanded", String(isActive));
      });
    }
  }
}

if (!customElements.get("site-header")) {
  customElements.define("site-header", SiteHeader);
}
