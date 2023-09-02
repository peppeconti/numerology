const links = document.querySelectorAll(".nav__bar ul li a");

const clickHandler = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop - 100,
    behavior: "smooth",
  });
};

export { links, clickHandler };
