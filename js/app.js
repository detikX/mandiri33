$(".scroll").click(function () {

    $('html, body').animate({
        scrollTop: $(".opening").offset().top
    }, 800);
});