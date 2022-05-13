$(function () {
    $(document).scroll(() => {
        if ($(document).scrollTop() > 150) {
            $(".contentMiddle>div:first-child>img").addClass('animated fadeInLeft')
            $(".contentMiddle>div:last-child").addClass('animated fadeInRight')
        }
        if ($(document).scrollTop() > 500) {
            $(".contentBottom>div").addClass('animated fadeInDown')
            $(".contentBottom>ul").addClass('animated bounceIn')
        }
        if ($(document).scrollTop() > 900) {
            $(".list>div").addClass('animated rollIn')
            $(".list>li>p").addClass('animated fadeInRight')
            $(".list>li>h3").addClass('animated fadeInDownBig')
        }
    })
})