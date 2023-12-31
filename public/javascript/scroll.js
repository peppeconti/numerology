const links = Array.from(document.querySelectorAll(".nav__bar ul li a"));

const clickHandler = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop - 100,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", setActive());

// CLOSURE
function setActive() {
  let activeLink = document.querySelector(".active");
  return () => {
    links.forEach(link => {
      const href = link.getAttribute("href");
      const item = document.querySelector(href);
      if (
        window.scrollY + 100 >= item.offsetTop &&
        window.scrollY + 100 <= item.offsetHeight + item.offsetTop
      ) {
        if (link !== activeLink) {
          activeLink.classList.remove("active");
          link.classList.add("active");
          activeLink = link;
        }
      }
    });
  };
}

export { links, clickHandler };

/*function setActive() {
  links.forEach((link) => {
    const href = link.getAttribute("href");
    const item = document.querySelector(href);
    if (window.scrollY + 100 >= item.offsetTop) {
      links.forEach((e) => e.classList.remove("active"));
      link.classList.add("active");
    }
  });
}*/
