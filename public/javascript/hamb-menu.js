const hamb = document.querySelector(".hamb__menu");
const nav = document.querySelector(".nav__bar");

function showMenu() {
    hamb.children[0].classList.toggle('fa-times');
    nav.classList.toggle('visible');
}

export { hamb, showMenu };