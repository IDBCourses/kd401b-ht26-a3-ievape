const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

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
