$(function() {

    // Menu change when click
    $('.menuRoute').click(function() {
        window.location = "/matsueshi/2018/luckydraw/index.html#sectionRoute";
    });

    $('.menuArea').click(function() {
        window.location = "/matsueshi/2018/luckydraw/index.html#sectionArea";
    });

    $('.menuBlogger').click(function() {
        window.location = "/matsueshi/2018/luckydraw/index.html#sectionBlogger";
    });

    $('.menuFlight').click(function() {
        window.location = "/matsueshi/2018/luckydraw/index.html#sectionFlight";
    });

    $('.menuLottery').click(function() {
        window.location = "/matsueshi/2018/luckydraw/index.html#sectionLottery";
    });

    // Menu hamburger
    $('.buttonContainer').on('click', function() {
        if ($('.buttonContainer').hasClass('active')) {
            $('.buttonContainer').removeClass('active');
            $('#overlay').removeClass('open');
        } else {
            $('.buttonContainer').addClass('active');
            $('#overlay').addClass('open');
        }
    });
    $('#menu li').on('click', function() {
        $('.buttonContainer').removeClass('active');
        $('#overlay').removeClass('open');
    });

    // Button top
    if (window.matchMedia("(min-width: 768px)").matches) {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() < 1000) {
                $('.buttonTop').css('display', 'none');
            } else {
                $('.buttonTop').css('display', 'block');
            }
        });
        $('.buttonTop').on('click', function() {
            $('html,body').animate({
                scrollTop: 0
            }, 'slow');
        });
    }
});