"use strict";

// MENUS
const mobileMenu = document.querySelector(".mobile-menu-list");
const allMenus = document.querySelectorAll(".menu-list");
const mobileOpen = document.querySelector(".mobile-open");
const allNavOpen = document.querySelectorAll(".nav-open-menu");
const circle = document.querySelector(".circle");

const closeMenus = function () {
  allNavOpen.forEach((nav) => {
    nav.classList.remove("hidden");
  });
};

console.log(allMenus);
allMenus.forEach((menu, index) => {
  menu.addEventListener("click", () => {
    closeMenus();
    allNavOpen[index].classList.toggle("hidden");
  });
});

mobileMenu.addEventListener("click", () => {
  mobileOpen.classList.toggle("hidden");
  circle.classList.toggle("hidden");
});

// CAROUSEL
const allImages = document.querySelectorAll(".image");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const allDots = document.querySelectorAll(".nav-dot");

const removeHidden = function (current) {
  allImages[current].classList.remove("image-hidden");
};

const removeOther = function () {
  allImages.forEach((img) => {
    img.classList.add("image-hidden");
  });

  allDots.forEach((dot) => {
    dot.classList.remove("red");
  });
};

allDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    removeOther();
    removeHidden(dot.dataset.curr);
    dot.classList.add("red");
  });
});

const displayRight = function () {
  let currentRed = Number(document.querySelector(".red").dataset.curr);
  let nextRed = currentRed + 1;
  allDots[currentRed].classList.remove("red");
  allImages[currentRed].classList.add("image-hidden");

  if (nextRed === allImages.length) {
    currentRed = 0;
    nextRed = 0;
  }
  allImages[nextRed].classList.remove("image-hidden");
  allDots[nextRed].classList.add("red");
};

const displayLeft = function () {
  let currentRed = Number(document.querySelector(".red").dataset.curr);
  let nextRed = currentRed - 1;
  allDots[currentRed].classList.remove("red");
  allImages[currentRed].classList.add("image-hidden");

  if (nextRed < 0) {
    currentRed = allImages.length - 1;
    nextRed = allImages.length - 1;
  }
  allImages[nextRed].classList.remove("image-hidden");
  allDots[nextRed].classList.add("red");
};

rightArrow.addEventListener("click", () => {
  displayRight();
});

leftArrow.addEventListener("click", () => {
  displayLeft();
});

setInterval(displayRight, 5000);

// when we press an arrow.
// next image needs to display
// red circle needs to move
