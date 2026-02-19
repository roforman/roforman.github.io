class SiteFooter extends HTMLElement {
  static styleTextPromise;

  static async loadStyleText() {
    if (!SiteFooter.styleTextPromise) {
      SiteFooter.styleTextPromise = fetch(
        "/assets/css/components/site-footer.css",
      ).then((res) => {
        if (!res.ok) throw new Error("Failed to load site-footer.css");
        return res.text();
      });
    }
    return SiteFooter.styleTextPromise;
  }

  async connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }

    const styleText = await SiteFooter.loadStyleText();
    this.shadowRoot.innerHTML = `
      <style>${styleText}</style>
      <footer>
        Robotics for Mankind<br>
        ROFORMAN Inc.<br>
        Address: 6th floor, 214, Yulgok-ro, Jongno-gu, Seoul, Korea<br>
        e-mail: info@roforman.com / ybbang@snu.ac.kr
      </footer>
    `;
  }
}

if (!customElements.get("site-footer")) {
  customElements.define("site-footer", SiteFooter);
}
