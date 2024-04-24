'use strict';

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggleBtn.classList.toggle("active");
});

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
});

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const toggleSearchBox = () => {
  searchContainer.classList.toggle("active");
  document.body.classList.toggle("active");
};

searchBtn.addEventListener("click", toggleSearchBox);
searchSubmitBtn.addEventListener("click", toggleSearchBox);
searchCloseBtn.addEventListener("click", toggleSearchBox);

const deliveryBoy = document.querySelector("[data-delivery-boy]");
let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", () => {
  const deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    const activeScrollPos = window.scrollY;
    deliveryBoyMove += lastScrollPos < activeScrollPos ? 1 : -1;
    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});
