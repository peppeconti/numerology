const links = document.querySelectorAll(".nav__bar ul li a");

const clickHandler = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  //console.log("click: "+ String(offsetTop));

  scroll({
    top: offsetTop - 100,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", setActive);

/*function setActive() {
  let items = 1;
  return () => {
    let itemsArray = [];
    links.forEach((link) => {
      const href = link.getAttribute("href");
      const item = document.querySelector(href);
      if (window.scrollY + 100 >= item.offsetTop) {
        
      };
    });
  };
}*/

function setActive() {
    links.forEach(link => {
      const href = link.getAttribute("href");
      const item = document.querySelector(href);
      if (window.scrollY + 100 >= item.offsetTop) {
        links.forEach(e => e.classList.remove('active'));
        link.classList.add('active');
      };
    });
}

export { links, clickHandler };
