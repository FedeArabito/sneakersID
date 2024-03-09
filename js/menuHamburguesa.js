const menuHamburguesa = document.querySelector(".hamburguer");
menuHamburguesa.onclick = function () {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}
