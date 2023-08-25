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
  const anchors = document.querySelectorAll("nav li a");
  console.log(anchors);
  Array.from(anchors).forEach((e) => {
    e.addEventListener("click", () => {
      if (e.attributes.href.value === "#top") {
        console.log('co')
      } else {
        console.log(e.attributes.href.value)
        console.log(document.getElementById(e.getAttribute( "href" ).substring(1)))
      }
      return false;
    });
  });
});
