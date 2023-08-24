!function ($) {
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
} (window.jQuery);