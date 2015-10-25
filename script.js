var fadeUntil = 750;

$(window).scroll(function () {

    var fading = $('.sidebar').find('img, h2, h3')
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    var offset = scrollBottom,
        opacity = 0;
    opacity = offset / fadeUntil;
    console.log(fading.length)
    fading.fadeTo(0, opacity)
});