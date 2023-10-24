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

window.addEventListener('scroll', (e) => {
 
  links.forEach(link => {
    //console.log("scroll: "+ String(window.scrollY));
    const href = link.getAttribute("href");
    //console.log(document.querySelector(href).offsetTop);
    //console.log(document.querySelector(href));
    //console.log("scroll: "+ String(window.scrollY+100));
    //console.log(window.scrollY >= document.querySelector(href).offsetTop-100);
    if (window.scrollY+100 >= document.querySelector(href).offsetTop) {
      console.log(href);
    }
  })

})

export { links, clickHandler };
