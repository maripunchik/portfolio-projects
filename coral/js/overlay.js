"use strict";

const overlay = document.querySelector("[data-overlay]");

export function openOverlay() {
	const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollBarWidth + "px";

  overlay.classList.add("overlay--active");
  document.body.classList.add("no-scroll");
}

export function closeOverlay() {
	  document.body.style.paddingRight = "";

  overlay.classList.remove("overlay--active");
  document.body.classList.remove("no-scroll");
}

export function onOverlayClick(callback) {
  overlay.addEventListener("click", () => {
    callback();
    closeOverlay();
  });
}
