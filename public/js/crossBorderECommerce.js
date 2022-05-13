$(function () {
    let mySwiper = new Swiper('.swiper', {
        loop: true,
        autoplay: true,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
    });
    $(document).scroll(() => {
        if ($(document).scrollTop() > 150) {
            $(".contentMiddle>h1").addClass('animated fadeInLeft')
            $(".contentMiddle>p").addClass('animated fadeInRight')
            $(".contentMiddle>ul").addClass('animated fadeInDownBig')
        }
        if ($(document).scrollTop() > 500) {
            $(".contentBottom>li>div").addClass('animated rollIn')
            $(".contentBottom>li>p").addClass('animated fadeInRight')
            $(".contentBottom>li>h3").addClass('animated fadeInDownBig')
        }
        if ($(document).scrollTop() > 900) {
            $(".list>div").addClass('animated rollIn')
            $(".list>li>p").addClass('animated fadeInRight')
            $(".list>li>h3").addClass('animated fadeInDownBig')
        }
    })
})