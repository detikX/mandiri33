$(document).ready(function () {

    AOS.init();
})

$(".konsistensi .imgs, .kualitas .gambars, .dpk .data-dpk").attr({ "data-aos": "zoom-in", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".dpk .img, .kredit .img").attr({ "data-aos": "fade-up", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".kualitas .orangs").attr({ "data-aos": "fade-left", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".konsistensi .logo").attr({ "data-aos": "fade-right", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".scroll").click(function () {

    $('html, body').animate({
        scrollTop: $(".opening").offset().top
    }, 800);
});