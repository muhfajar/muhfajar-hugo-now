// Mobile menu

const menuTrigger = document.querySelector(".menu-trigger");
const menu = document.querySelector(".menu");
const mobileQuery = window.matchMedia("(max-width: 767px)");
const isMobile = () => window.matchMedia(mobileQuery).matches;
const isMobileMenu = () => {
  menuTrigger && menuTrigger.classList.toggle("hidden", !isMobile());
  menu && menu.classList.toggle("hidden", isMobile());
};

isMobileMenu();

menuTrigger && menuTrigger.addEventListener("click", () => menu && menu.classList.toggle("hidden"));

window.addEventListener("resize", isMobileMenu);
