"use strict";

export function initThemeSwitcher() {
  const htmlBlock = document.documentElement;
  const switchBox = document.querySelector(".switch-box");
  const themeSwitch = document.querySelector(".switch-box__input");

  if (!switchBox || !themeSwitch) return;

  const savedTheme = localStorage.getItem("user-theme");
  if (savedTheme) {
    htmlBlock.dataset.theme = savedTheme;

    if (savedTheme === "dark") {
      switchBox.classList.add("switch-box--active");
    }
  }

  // Функція зміни теми
  function changeTheme(saveTheme = false) {
    const currentTheme = htmlBlock.dataset.theme === "light" ? "light" : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    //  htmlBlock.classList.remove(currentTheme);
    //  htmlBlock.classList.add(newTheme);

    htmlBlock.dataset.theme = newTheme;

    if (saveTheme) {
      localStorage.setItem("user-theme", newTheme);
    }
  }
  //Перемикач
  function toggleTheme() {
    switchBox.classList.toggle("switch-box--active");
    changeTheme(true);
  }

  themeSwitch.addEventListener("click", toggleTheme);
}
