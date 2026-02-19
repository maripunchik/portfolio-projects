"use strict";

const overlay = document.querySelector("[data-overlay]");

export function openOverlay() {
  overlay.classList.add("overlay--active");
  document.body.classList.add("no-scroll");
}

export function closeOverlay() {
  overlay.classList.remove("overlay--active");
  document.body.classList.remove("no-scroll");
}

export function onOverlayClick(callback) {
  overlay.addEventListener("click", () => {
    callback();
    closeOverlay();
  });
}
