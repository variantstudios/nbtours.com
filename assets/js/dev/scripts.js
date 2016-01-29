$(document).ready(function() {

    $('.js nav.top-nav').prepend('<button class="menu-btn">Menu</button>');
    $('.js nav.top-nav ul').addClass('hide');

    $(".menu-btn").click(function() {
        $(".js nav ul").toggleClass('hide');
        $(".menu-btn").toggleClass('close');
    });

    // Modernizer Code
    if (Modernizr.mq('only all')) {
        $('html').addClass('mq');
    } else {
        $('html').addClass('no-mq');
    };

});