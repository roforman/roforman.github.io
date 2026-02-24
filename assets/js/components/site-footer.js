class SiteFooter extends HTMLElement {
  static styleTextPromise;

  static async loadStyleText() {
    if (!SiteFooter.styleTextPromise) {
      SiteFooter.styleTextPromise = fetch("/assets/css/components/site-footer.css").then((res) => {
        if (!res.ok) throw new Error("Failed to load site-footer.css");
        return res.text();
      });
    }
    return SiteFooter.styleTextPromise;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styleText}</style>
      <footer>
        <span data-line="footer.line1">Robotics for Mankind</span><br>
        <span data-line="footer.line2">ROFORMAN Inc.</span><br>
        <span data-line="footer.line3">Address: 6th floor, 214, Yulgok-ro, Jongno-gu, Seoul, Korea</span><br>
        <span data-line="footer.line4">e-mail: info@roforman.com / ybbang@snu.ac.kr</span>
      </footer>
    `;
  }

  applyTranslations() {
    const i18n = window.roformanI18n;
    if (!i18n || !this.shadowRoot) return;
    this.shadowRoot.querySelectorAll("[data-line]").forEach((node) => {
      node.textContent = i18n.t(node.dataset.line);
    });
  }

  async connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }

    this.styleText = await SiteFooter.loadStyleText();
    this.render();
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

if (!customElements.get("site-footer")) {
  customElements.define("site-footer", SiteFooter);
}
