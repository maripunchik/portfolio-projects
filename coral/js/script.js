"use strict";

import { initCategoryFilter } from "./filters.js";
import initSwiper from "./initSwiper.js";
import { initThemeSwitcher } from "./changeTheme.js";
import { initSearch } from "./search.js";
import { initMenu } from "./menu.js";

const bestsellersSwiper = initSwiper(
  ".bestsellers__cards",
  ".bestsellers__arrow--next",
  ".bestsellers__arrow--prev"
);

initCategoryFilter(bestsellersSwiper);
initThemeSwitcher();
initSearch();
initMenu();
