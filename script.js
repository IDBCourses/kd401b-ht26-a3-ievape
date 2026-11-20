const link = document.querySelector("#palette");
const button = document.querySelector("#theme");
const typeLink = document.querySelector("#type");
const readModeButton = document.querySelector("#readingmode");

button.addEventListener("click", function () {
  const isDark = link.getAttribute("href") === "dark.css";
  //link.setAttribute("href", dark ? "light.css" : "dark.css");
  if (isDark) {
    link.setAttribute("href", "light.css");
    button.textContent = "Dark Mode";
  } else {
    link.setAttribute("href", "dark.css");
    button.textContent = "Light Mode";
  }
});

readModeButton.addEventListener("click", function () {
  const mode = typeLink.getAttribute("href") === "readmode.css";

  if (mode) {
    typeLink.setAttribute("href", "type.css");
    readModeButton.textContent = "Reading mode";
  } else {
    typeLink.setAttribute("href", "readmode.css");
    readModeButton.textContent = "Normal mode";
  }
});
