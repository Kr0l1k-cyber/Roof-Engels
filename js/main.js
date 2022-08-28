var menuButton = document.querySelector(".mobile-menu");
menuButton.addEventListener("click", function () {
  console.log("клик по кнопке");
  document
    .querySelector(".navbar-menu")
    .classList.toggle("navbar-menu--visible");
});
