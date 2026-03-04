import Swiper from "./node_modules/swiper/swiper-bundle.esm.browser.min.js";
import {
  Navigation,
  Pagination,
} from "./node_modules/swiper/modules/index.mjs";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  // Default parameters
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Copyright Year
document.getElementById("year").textContent = new Date().getFullYear();
