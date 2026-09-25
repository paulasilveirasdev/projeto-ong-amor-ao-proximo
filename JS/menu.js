const menuHamburguer = document.querySelector(".menu-hamburguer");
const menuLinks = document.querySelector(".menu-links");

if (menuHamburguer && menuLinks) {
  menuHamburguer.addEventListener("click", function () {
    if (menuLinks.style.display === "block") {
      menuLinks.style.display = "none";
    } else {
      menuLinks.style.display = "block";
    }
  });
}
