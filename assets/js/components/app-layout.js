class AppLayout extends HTMLElement {
  static modulesLoaded = false;
  static styleTextPromise;

  static async ensureModules() {
    if (AppLayout.modulesLoaded) return;
    await Promise.all([
      import("/assets/js/components/site-header.js"),
      import("/assets/js/components/site-footer.js"),
      import("/assets/js/behaviors/accordion.js"),
      import("/assets/js/behaviors/careers-jobs.js"),
    ]);
    AppLayout.modulesLoaded = true;
  }

  static async loadStyleText() {
    if (!AppLayout.styleTextPromise) {
      AppLayout.styleTextPromise = fetch("/assets/css/components/app-layout.css")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load app-layout.css");
          return res.text();
        });
    }
    return AppLayout.styleTextPromise;
  }

  async connectedCallback() {
    const [styleText] = await Promise.all([
      AppLayout.loadStyleText(),
      AppLayout.ensureModules(),
    ]);

    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <style>${styleText}</style>
        <site-header></site-header>
        <main class="layout-content"><slot></slot></main>
        <site-footer></site-footer>
      `;
    }
  }
}

if (!customElements.get("app-layout")) {
  customElements.define("app-layout", AppLayout);
}
