'use strict';

$(function () {
    // Section One Height
    var windowH = $(window).height();
    $('.sectionOne').height(windowH);

    // Menu change when click
    $('.menuRoute').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionRoute').offset().top - 60
        }, 'slow');
        $('#menu li').removeClass('underLineActive');
        $('.menuRoute').addClass('underLineActive');
    });

    $('.menuArea').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionArea').offset().top - 60
        }, 'slow');
        $('#menu li').removeClass('underLineActive');
        $('.menuArea').addClass('underLineActive');
    });

    $('.menuBlogger').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionBlogger').offset().top - 60
        }, 'slow');
        $('#menu li').removeClass('underLineActive');
        $('.menuBlogger').addClass('underLineActive');
    });

    $('.menuFlight').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionFlight').offset().top - 60
        }, 'slow');
        $('#menu li').removeClass('underLineActive');
        $('.menuFlight').addClass('underLineActive');
    });

    $('.menuLottery').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionLottery').offset().top - 60
        }, 'slow');
        $('#menu li').removeClass('underLineActive');
        $('.menuLottery').addClass('underLineActive');
    });

    // Menu change when scrolling
    $(window).on('scroll', function () {
        var $sectionRoute = $('#sectionRoute').offset().top,
            $sectionArea = $('#sectionArea').offset().top,
            $sectionBlogger = $('#sectionBlogger').offset().top,
            $sectionFlight = $('#sectionFlight').offset().top,
            $sectionLottery = $('#sectionLottery').offset().top;
        $('#menu li').removeClass('underLineActive');

        if ($(this).scrollTop() < $sectionRoute - 300) {
            $('#menu li').removeClass('underLineActive');
        } else if ($(this).scrollTop() < $sectionRoute - 300) {
            $('.menuRoute').addClass('underLineActive');
        } else if ($(this).scrollTop() < $sectionArea - 300) {
            $('.menuRoute').addClass('underLineActive');
        } else if ($(this).scrollTop() < $sectionBlogger - 300) {
            $('.menuArea').addClass('underLineActive');
        } else if ($(this).scrollTop() < $sectionFlight - 300) {
            $('.menuBlogger').addClass('underLineActive');
        } else if ($(this).scrollTop() < $sectionLottery - 300) {
            $('.menuFlight').addClass('underLineActive');
        } else {
            $('.menuLottery').addClass('underLineActive');
        }
    });

    // Menu hamburger
    $('.buttonContainer').on('click', function () {
        if ($('.buttonContainer').hasClass('active')) {
            $('.buttonContainer').removeClass('active');
            $('#overlay').removeClass('open');
        } else {
            $('.buttonContainer').addClass('active');
            $('#overlay').addClass('open');
        }
    });
    $('#menu li').on('click', function () {
        $('.buttonContainer').removeClass('active');
        $('#overlay').removeClass('open');
    });

    //slick
    $('#areaTxtList01').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#areaPicList01',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: true,
                adaptiveHeight: true
            }
        }]
    });
    $('#areaPicList01').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#areaTxtList01',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: false
            }
        }]
    });

    $('#areaTxtList02').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#areaPicList02',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: true,
                adaptiveHeight: true
            }
        }]
    });
    $('#areaPicList02').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#areaTxtList02',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: false
            }
        }]
    });

    $('#areaTxtList03').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#areaPicList03',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: true,
                adaptiveHeight: true
            }
        }]
    });
    $('#areaPicList03').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#areaTxtList03',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: false
            }
        }]
    });

    $('#areaTxtList04').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#areaPicList04',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: true,
                adaptiveHeight: true
            }
        }]
    });
    $('#areaPicList04').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#areaTxtList04',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: false
            }
        }]
    });

    $('#areaTxtList05').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#areaPicList05',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: true,
                adaptiveHeight: true
            }
        }]
    });
    $('#areaPicList05').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#areaTxtList05',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: false
            }
        }]
    });

    $('#areaTxtList06').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#areaPicList06',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: true,
                adaptiveHeight: true
            }
        }]
    });
    $('#areaPicList06').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#areaTxtList06',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: false
            }
        }]
    });

    $('#areaTxtList07').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#areaPicList07',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: true,
                adaptiveHeight: true
            }
        }]
    });
    $('#areaPicList07').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#areaTxtList07',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: false
            }
        }]
    });

    $('.bloggerSlider').slick({
        arrows: true,
        slidesPerRow: 4,
        rows: 2,
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesPerRow: 3,
                rows: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesPerRow: 2,
                rows: 2,
                arrows: false,
                dots: true
            }
        }]
    });
});