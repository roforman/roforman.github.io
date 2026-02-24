function setupAccordion(container) {
  if (!container || container.dataset.accordionBound === "true") return;

  const items = Array.from(container.querySelectorAll("details"));

  items.forEach((item) => {
    const answer = item.querySelector(".accordion-panel");
    if (!answer) return;

    if (item.open) {
      item.classList.add("is-expanded");
      answer.style.height = "auto";
    } else {
      item.classList.remove("is-expanded");
      answer.style.height = "0px";
    }
  });

  const animateOpen = (item) => {
    const answer = item.querySelector(".accordion-panel");
    if (!answer || item.dataset.animating === "true") return;

    item.dataset.animating = "true";
    item.open = true;
    item.classList.add("is-expanded");

    answer.style.height = "0px";
    const endHeight = answer.scrollHeight;

    requestAnimationFrame(() => {
      answer.style.height = `${endHeight}px`;
    });

    const onEnd = (event) => {
      if (event.target !== answer || event.propertyName !== "height") return;
      answer.style.height = "auto";
      delete item.dataset.animating;
      answer.removeEventListener("transitionend", onEnd);
    };

    answer.addEventListener("transitionend", onEnd);
  };

  const animateClose = (item) => {
    const answer = item.querySelector(".accordion-panel");
    if (!answer || item.dataset.animating === "true") return;

    item.dataset.animating = "true";
    const startHeight = answer.scrollHeight;
    answer.style.height = `${startHeight}px`;

    requestAnimationFrame(() => {
      item.classList.remove("is-expanded");
      answer.style.height = "0px";
    });

    const onEnd = (event) => {
      if (event.target !== answer || event.propertyName !== "height") return;
      item.open = false;
      delete item.dataset.animating;
      answer.removeEventListener("transitionend", onEnd);
    };

    answer.addEventListener("transitionend", onEnd);
  };

  container.addEventListener("click", (event) => {
    const summary = event.target.closest("summary");
    if (!summary || !container.contains(summary)) return;

    const item = summary.parentElement;
    if (!(item instanceof HTMLDetailsElement)) return;

    event.preventDefault();

    if (item.classList.contains("is-expanded")) {
      animateClose(item);
    } else {
      animateOpen(item);
    }
  });

  container.dataset.accordionBound = "true";
}

function initAccordions(root = document) {
  const containers = root.querySelectorAll("[data-accordion]");
  containers.forEach(setupAccordion);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initAccordions());
} else {
  initAccordions();
}
