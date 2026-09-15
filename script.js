console.log("JS is connected! 🚀");

const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
  }
});
