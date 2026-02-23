"use strict";

export default function initActiveNavLinks(selector, activeClass) {
  const links = document.querySelectorAll(selector);

  if (links.length === 0) return;

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove(activeClass));
      link.classList.add(activeClass);
    });
  });
}
