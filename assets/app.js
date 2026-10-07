(() => {
  "use strict";
  const root = document.documentElement;
  const languageButton = document.getElementById("language-button");
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("mobile-menu");
  const mobileQuery = window.matchMedia("(max-width: 900px)");
  let language = "en";
  try {
    if (localStorage.getItem("portfolio-language") === "ar") language = "ar";
  } catch (_) {}
  function menuLabel() {
    return language === "ar"
      ? menu.hidden
        ? "افتح القائمة"
        : "أغلق القائمة"
      : menu.hidden
        ? "Open menu"
        : "Close menu";
  }
  function setMenu(open, restoreFocus = false) {
    menu.hidden = !open;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", menuLabel());
    if (restoreFocus) menuButton.focus();
  }
  function applyLanguage() {
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-en][data-ar]").forEach((el) => {
      el.textContent = el.dataset[language];
    });
    languageButton.textContent = language === "ar" ? "EN" : "عربي";
    languageButton.setAttribute(
      "aria-label",
      language === "ar" ? "Switch to English" : "Switch to Arabic",
    );
    menuButton.setAttribute("aria-label", menuLabel());
    if (!document.querySelector(".case-page"))
      document.title =
        language === "ar"
          ? "حسين أبوزينة — مطور تطبيقات موبايل"
          : "Hussein Abozina — Mobile App Developer";
    try {
      localStorage.setItem("portfolio-language", language);
    } catch (_) {}
  }
  languageButton.hidden = false;
  menuButton.hidden = !mobileQuery.matches;
  applyLanguage();
  languageButton.addEventListener("click", () => {
    language = language === "en" ? "ar" : "en";
    applyLanguage();
  });
  menuButton.addEventListener("click", () => setMenu(menu.hidden));
  menu
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) setMenu(false, true);
  });
  document.addEventListener("click", (event) => {
    if (!menu.hidden && !event.target.closest(".site-header")) setMenu(false);
  });
  mobileQuery.addEventListener("change", (event) => {
    menuButton.hidden = !event.matches;
    setMenu(false);
  });
  document.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", () => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    }),
  );
})();
