const hamb = document.querySelector(".hamb__menu");
const nav = document.querySelector(".nav__bar");

function showMenu() {
    console.log(nav.classList.contains('visible'));
    if (nav.classList.contains('visible')) {
        nav.classList.add('back');
        setTimeout(() => {
            hamb.children[0].classList.toggle('fa-times');
            nav.classList.toggle('visible');
        }, 500)
    } else if (!nav.classList.contains('visible')) {
        hamb.children[0].classList.toggle('fa-times');
        nav.classList.remove('back');
        nav.classList.toggle('visible');
    }
}

export { hamb, showMenu };