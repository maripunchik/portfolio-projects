"use strict";

import { openOverlay, closeOverlay, onOverlayClick } from "./overlay.js";

const searchBtn = document.querySelector(".header__top-activation-button");
const searchBox = document.querySelector(".header__search");

export function initSearch() {
  if (!searchBox || !searchBtn) return;

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleSearch();
  });

  onOverlayClick(closeSearch);
}

function toggleSearch() {
  const isActive = searchBox.classList.toggle("header__search--active");
  isActive ? openOverlay() : closeOverlay();
}

function closeSearch() {
  searchBox.classList.remove("header__search--active");
  closeOverlay();
}
