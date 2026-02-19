"use strict";

export default function initSwiper(selector, next, prev, options = {}) {
  return new Swiper(selector, {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: false,

    navigation: {
      nextEl: next,
      prevEl: prev,
    },

    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 24 },
    },

    ...options,
  });
}

