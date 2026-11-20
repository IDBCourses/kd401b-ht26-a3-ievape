const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "dark.css";
  const light = link.getAttribute("href") === "light.css";
  link.setAttribute("href", dark ? "light.css" : "dark.css");
  link.setAttribute("href", light ? "dark.css" : "light.css");
});
