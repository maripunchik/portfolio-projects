"use strict";

export function initCategoryFilter(swiper) {
  const buttons = document.querySelectorAll(".menu__button-choice");
  const slides = document.querySelectorAll(".swiper-slide");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      slides.forEach((slide) => {
        const slideCategory = slide.dataset.category;

        if (filter === "all" || slideCategory === filter) {
          slide.style.display = "";
        } else {
          slide.style.display = "none";
        }
      });

      swiper.update();
    });
  });
}
