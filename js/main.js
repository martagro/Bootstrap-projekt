//efekt zanikania po kliknięciu w link, który przenosi na inną stronę 
$('a[href*="http"]').click(function (e) {
    e.preventDefault();
    console.log('test');

    var url = $(this).attr('href');
    $('body').fadeOut(5000, function () {
        window.location.href = url;
    });
});


$(window).scroll(function () {

    var scrollTop = $(this).scrollTop();

    //przezroczysty niebieski pasek menu po scrollu
    if (scrollTop > 70) {
        $('.navbar').addClass('scroll');
    } else {
        $('.navbar').removeClass('scroll');
    }

    //Progress bar 
    var percent = (scrollTop * 100) / ($('body').height() - $(this).height());
    $('.progressbar').css({
        width: (percent + '%')
    });
});

$('a[href*="#"]').click(function () {
    var anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top - 70
    }, 1000);
});
