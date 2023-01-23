"use strict";

const openBurgerButton = document.querySelector(".nav .burger-menu__button");
const closeBurgerButton = document.querySelector(".nav-list__close-item");
const navigation = document.querySelector(".header .nav-list");
const body = document.querySelector("body");

openBurgerButton.addEventListener("click", (e) => {
  navigation.classList.remove("nav-list--close");
  navigation.classList.add("nav-list--open");
  body.classList.add("hidden");
  clickNavItem();
});

closeBurgerButton.addEventListener("click", (e) => {
  // navigation.class='nav-list';
  navigation.classList.remove("nav-list--open");
  body.classList.remove("hidden");
  navigation.classList.add("nav-list--close");
});

const clickNavItem = () => {
  const navItems = document.querySelectorAll(
    ".nav-list.nav-list--open .nav-list__item"
  );
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      navigation.classList.remove("nav-list--open");
      body.classList.remove("hidden")
    });
  });
};
