const persona = {
    nombre: "Fede",
    edad: 24,
    cuidadNatal: "Lanus",
};

const menuHamburguesa = document.querySelector(".hamburguer");
menuHamburguesa.onclick = function () {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}