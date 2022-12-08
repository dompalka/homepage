console.log("Witam witam, i o zdrowie pytam?");

let buttonElement = document.querySelector(".themeButton");
let theme = document.querySelector(".mainBody");
let themeName = document.querySelector(".themeName");

buttonElement.addEventListener("click", () => {
  theme.classList.toggle("lightMode");

  themeName.innerText = theme.classList.contains("lightMode")
    ? "Dark"
    : "Light";
});
