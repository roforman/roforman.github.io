class AppLayout extends HTMLElement {
  connectedCallback() {
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
