class ScrollCtaButton extends HTMLElement {
  static styleTextPromise;

  static async loadStyleText() {
    if (!ScrollCtaButton.styleTextPromise) {
      ScrollCtaButton.styleTextPromise = fetch("/assets/css/components/scroll-cta-button.css")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load scroll-cta-button.css");
          return res.text();
        });
    }
    return ScrollCtaButton.styleTextPromise;
  }

  async connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }

    const href = this.getAttribute("href") || "/product/";
    const label = this.getAttribute("label") || "View Products";
    const threshold = Number(this.getAttribute("threshold") || "300");
    const styleText = await ScrollCtaButton.loadStyleText();

    this.shadowRoot.innerHTML = `
      <style>${styleText}</style>
      <a href="${href}" class="scroll-cta">${label}</a>
    `;
    this.button = this.shadowRoot.querySelector(".scroll-cta");

    this.handleScroll = () => {
      if (!this.button) return;
      if (window.scrollY > threshold) {
        this.button.classList.add("visible");
      } else {
        this.button.classList.remove("visible");
      }
    };

    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  }

  disconnectedCallback() {
    if (this.handleScroll) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
}

if (!customElements.get("scroll-cta-button")) {
  customElements.define("scroll-cta-button", ScrollCtaButton);
}