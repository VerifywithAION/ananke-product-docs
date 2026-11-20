// ANANKE public-site interactions.
// Educational presentation only — no engine logic, API calls or customer data.
(() => {
  "use strict";

  const scenarioData = {
    novel: {
      input: "New obligation",
      result: "Fresh intelligence",
      detail: "Authorized model execution may be required",
      note: "A genuinely new task may need fresh model reasoning. ANANKE must not suppress necessary inference.",
      position: "01 / 03",
    },
    repeat: {
      input: "Prior task, unchanged",
      result: "Validated reuse",
      detail: "No new model call when eligibility is proven",
      note: "A prior result can be considered only when source, scope, validity and applicable authority still hold.",
      position: "02 / 03",
    },
    changed: {
      input: "Source revision detected",
      result: "Re-evaluate affected work",
      detail: "Stale reuse is blocked; fresh work may be needed",
      note: "Changed dependencies invalidate affected results. Independent, still-valid work should not be discarded without cause.",
      position: "03 / 03",
    },
  };

  const $ = (selector) => document.querySelector(selector);
  const menu = $(".menu-toggle");
  const links = $("#nav-links");

  function closeMenu() {
    if (!menu || !links) return;
    menu.setAttribute("aria-expanded", "false");
    links.classList.remove("is-open");
  }

  if (menu && links) {
    menu.addEventListener("click", () => {
      const isOpen = menu.getAttribute("aria-expanded") === "true";
      menu.setAttribute("aria-expanded", String(!isOpen));
      links.classList.toggle("is-open", !isOpen);
    });

    links.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", closeMenu)
    );

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !links.contains(event.target)) closeMenu();
    });
  }

  const scenarioButtons = Array.from(document.querySelectorAll("[data-scenario]"));
  function setScenario(key) {
    const scenario = scenarioData[key];
    if (!scenario) return;

    const fields = {
      "#scenario-input": scenario.input,
      "#scenario-result": scenario.result,
      "#scenario-detail": scenario.detail,
      "#scenario-note": scenario.note,
      "#scenario-indicator": scenario.position,
    };
    for (const [selector, value] of Object.entries(fields)) {
      const element = $(selector);
      if (element) element.textContent = value;
    }
    scenarioButtons.forEach((button) => {
      const active = button.dataset.scenario === key;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  scenarioButtons.forEach((button) =>
    button.addEventListener("click", () => setScenario(button.dataset.scenario))
  );

  const animatedElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.09, rootMargin: "0px 0px -35px 0px" });
    animatedElements.forEach((element) => observer.observe(element));
  } else {
    animatedElements.forEach((element) => element.classList.add("is-visible"));
  }
})();
