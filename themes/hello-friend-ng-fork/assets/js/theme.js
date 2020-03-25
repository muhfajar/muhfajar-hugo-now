// Toggle theme

const getTheme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const isDark = getTheme === "dark";
const metaThemeColor = document.querySelector("meta[name=theme-color]");
const homepageImage = document.querySelector("#homepage-image");

const invertImgColor = () => {
  if (homepageImage) {
    document.body.classList.contains("dark-theme") ? homepageImage.src = "/img-home/light.png" : homepageImage.src = "/img-home/dark.png";
  }
};

if (getTheme !== null) {
  document.body.classList.toggle("dark-theme", isDark);
  if (isDark) {
    metaThemeColor.setAttribute("content", "#252627");
    invertImgColor();
  } else {
    metaThemeColor.setAttribute("content", "#fafafa");
    invertImgColor();
  }
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  invertImgColor();
  window.localStorage &&
    window.localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light",
    );
  document.body.classList.contains("dark-theme") ? metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");
});
