(() => {
  const root = document.documentElement;
  root.classList.add("js");
  const savedLanguage = localStorage.getItem("nexus-site-language");
  const preferredLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";

  function setLanguage(language) {
    const next = language === "zh" ? "zh" : "en";
    root.dataset.language = next;
    root.lang = next === "zh" ? "zh-CN" : "en";
    localStorage.setItem("nexus-site-language", next);

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.textContent = next === "zh" ? "EN" : "中文";
      button.setAttribute(
        "aria-label",
        next === "zh" ? "Switch to English" : "切换到中文"
      );
    });
  }

  setLanguage(savedLanguage || preferredLanguage);

  const savedTheme = localStorage.getItem("nexus-site-theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  function setTheme(theme) {
    const next = theme === "dark" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("nexus-site-theme", next);
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-label", next === "dark" ? "Switch to light theme" : "切换到深色主题");
      button.setAttribute("aria-pressed", String(next === "dark"));
    });
  }

  setTheme(savedTheme || systemTheme);

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });
  });

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(root.dataset.language === "zh" ? "en" : "zh");
    });
  });

  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-site-navigation]");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 }
  );

  document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
})();
