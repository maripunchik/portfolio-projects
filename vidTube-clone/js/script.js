"use strict";

import initActiveNavLinks from "./initActive.js";
import initSidebar from "./initSidebarToggle.js";

initActiveNavLinks(".nav__section-link", "nav__section-link--active");

initActiveNavLinks(".shortcut__item", "shortcut__item--active");

initSidebar(".menu-icon", ".sidebar", ".container");


