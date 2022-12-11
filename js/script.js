{
  const welcome = () => console.log("Witam witam, i o zdrowie pytam?");

  const changeTheme = () => {
    const theme = document.querySelector(".mainBody");
    const themeName = document.querySelector(".themeName");

    theme.classList.toggle("lightMode");

    themeName.innerText = theme.classList.contains("lightMode")
      ? "Dark"
      : "Light";
  };

  const init = () => {
    const buttonElement = document.querySelector(".themeButton");

    buttonElement.addEventListener("click", changeTheme);
  };

  welcome();

  init();
}
