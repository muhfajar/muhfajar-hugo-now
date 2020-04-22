// Toggle theme
const getTheme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleText = document.querySelector("#theme-toggle-button");
const isDark = getTheme === "dark";
const metaThemeColor = document.querySelector("meta[name=theme-color]");
const homepageImage = document.querySelector("#homepage-image");
const notFoundImage = document.querySelector("#notfound-image");

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
    document.body.classList.contains("dark-theme") ? homepageImage.src = "/assets/img/light.png" : homepageImage.src = "/assets/img/dark.png";
  }
  if (notFoundImage) {
    document.body.classList.contains("dark-theme") ? notFoundImage.src = "/assets/img/404-light.png" : notFoundImage.src = "/assets/img/404-dark.png";
  }
};

if (getTheme !== null) {
  document.body.classList.toggle("dark-theme", isDark);
  if (isDark) {
    metaThemeColor.setAttribute("content", "#252627");
    themeToggleText.textContent = buttonTextDark;
    // invertImgColor();
  } else {
    metaThemeColor.setAttribute("content", "#fafafa");
    themeToggleText.textContent = buttonTextLight;
    // invertImgColor();
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
  document.body.classList.contains("dark-theme") ? themeToggleText.textContent = buttonTextDark : themeToggleText.textContent = buttonTextLight;
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
