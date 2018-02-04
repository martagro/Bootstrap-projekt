$('a[href*="http"]').click(function (e) {
    e.preventDefault();
    console.log('test');

    var url = $(this).attr('href');
    $('body').fadeOut(5000, function () {
        window.location.href = url;
    });


});
