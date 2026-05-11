// ハンバーガーメニュー
const hamburger = document.querySelector('[data-js="hamburger"]');
const navMenu = document.querySelector('[data-js="nav-menu"]');

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("header__hamburger--open");

    navMenu.classList.toggle("header__nav--open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute(
      "aria-label",
      isOpen ? "メニューを閉じる" : "メニューを開く"
    );
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      hamburger.classList.remove("header__hamburger--open");
      navMenu.classList.remove("header__nav--open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "メニューを開く");
      document.body.style.overflow = "";
    }
  });
}