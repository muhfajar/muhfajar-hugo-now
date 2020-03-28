// Toggle theme
const getTheme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const isDark = getTheme === "dark";
const metaThemeColor = document.querySelector("meta[name=theme-color]");
const homepageImage = document.querySelector("#homepage-image");

// Toggle font
const getFont = window.localStorage && window.localStorage.getItem("font");
const fontToggle = document.querySelector(".font-toggle");
const isNormal = getFont === "normal";

// Font size
const getFontSize = window.localStorage && window.localStorage.getItem("font-size");
const fontSizeIncrease = document.querySelector(".increase-font-size");
const fontSizeDecrease = document.querySelector(".decrease-font-size");
let fontSize = parseFloat(getFontSize) || 0.85;


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

if (getFont !== null ) {
  document.body.classList.toggle("normal-font", isNormal);
}

if (getFontSize !== null ) {
  document.body.style.fontSize = getFontSize + 'rem';
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  invertImgColor();
  window.localStorage && window.localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light",
    );
  document.body.classList.contains("dark-theme") ? metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");
});

fontToggle.addEventListener("click", () => {
  document.body.classList.toggle("normal-font");
  window.localStorage && window.localStorage.setItem(
      "font",
      document.body.classList.contains("normal-font") ? "normal" : "mono",
    );
});

fontSizeIncrease.addEventListener("click", () => {
  fontSize += 0.05;
  changeFontSize(fontSize)
});

fontSizeDecrease.addEventListener("click", () => {
  fontSize -= 0.05;
  changeFontSize(fontSize)
});

function changeFontSize(fontSize) {
  if (fontSize >= 0.85 && fontSize <= 1.85) {
    window.localStorage && window.localStorage.setItem(
        "font-size",
        String(fontSize),
    );
    document.body.style.fontSize = fontSize + 'rem';
  }
}
