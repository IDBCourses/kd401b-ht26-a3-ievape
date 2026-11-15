const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "darkmode.css";
  const light = link.getAttribute("href") === "style.css";
  link.setAttribute("href", dark ? "style.css" : "darkmode.css");
  link.setAttribute("href", light ? "darkmode.css" : "style.css");
});
