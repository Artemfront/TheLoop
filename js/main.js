$(function() {
    
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        windowW = $(window).innerWidth(),

        scrollOffset = $(window).scrollTop();

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    })


    //  smooth scroll
    $("[data-scroll]").on('click', function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('html, body').animate ({
            scrollTop: blockOffset - 250
        })

    })


    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass('fixed')
        } else {
            header.removeClass('fixed')
        }
    }

    
});