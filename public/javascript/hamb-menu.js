const hamb = document.querySelector(".hamb__menu");
const nav = document.querySelector(".nav__bar");

function showMenu() {
    nav.classList.toggle('visible');
}

export { hamb, showMenu };