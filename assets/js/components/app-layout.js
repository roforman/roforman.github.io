class AppLayout extends HTMLElement {
  static modulesLoaded = false;

  static async ensureModules() {
    if (AppLayout.modulesLoaded) return;
    await Promise.all([
      import("/assets/js/components/site-header.js"),
      import("/assets/js/components/site-footer.js"),
    ]);
    AppLayout.modulesLoaded = true;
  }

  async connectedCallback() {
    await AppLayout.ensureModules();

    if (!this.querySelector("site-header")) {
      const header = document.createElement("site-header");
      this.prepend(header);
    }

    if (!this.querySelector("site-footer")) {
      const footer = document.createElement("site-footer");
      this.append(footer);
    }
  }
}

if (!customElements.get("app-layout")) {
  customElements.define("app-layout", AppLayout);
}
