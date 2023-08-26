/*!function ($) {
    $(function () {
        $('nav li a').click(function () {
            var a = $(this);
            if (a.attr('href') == '#top') {
                console.log(a);
                $('html,body').animate({ 'scrollTop': 0 }, 1000);
            }
            else {
                var b = $(a.attr('href'));
                console.log(b);
                $('html,body').animate({ 'scrollTop': b.offset().top - 50 }, 1000);
            }
            return false
        });
    })
} (window.jQuery);*/

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav__bar li a");

  const clickHandler = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop - 50,
      behavior: "smooth",
    });
  };

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
});
