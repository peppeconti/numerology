const hamb = document.querySelector(".hamb__menu");
const nav = document.querySelector(".nav__bar");

const fadeInKeyframes = new KeyframeEffect(
  nav,
  [{ right: "-100%" }, { right: 0 }],
  { duration: 500, fill: "forwards" }
);

const fadeOutKeyframes = new KeyframeEffect(
  nav,
  [{ right: 0 }, { right: "-100%" }],
  { duration: 500, fill: "forwards" }
);

function showMenu() {
  let animateNav;
  hamb.children[0].classList.contains("fa-times")
    ? (animateNav = new Animation(fadeOutKeyframes, document.timeline))
    : (animateNav = new Animation(fadeInKeyframes, document.timeline));
  hamb.children[0].classList.toggle("fa-times");
  animateNav.play();
}

export { hamb, showMenu };
