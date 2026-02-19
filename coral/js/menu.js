"use strict";

const menuBtn = document.querySelector(".header__top-icon");
const navList = document.querySelector(".nav-header__list");

export function initMenu() {
  if (!menuBtn || !navList) return;

  menuBtn.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  document.documentElement.classList.toggle("menu-open");
}

function closeMenu() {
  document.documentElement.classList.remove("menu-open");
}
