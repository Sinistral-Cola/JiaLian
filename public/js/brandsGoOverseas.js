$(function () {
    $(document).scroll(() => {
        if ($(document).scrollTop() > 150) {
            $(".contentBig>h2").addClass('animated fadeInLeft')
            $(".contentBig>p").addClass('animated fadeInRight')
        }
        if ($(document).scrollTop() > 500) {
            $(".contentMiddle h2").addClass('animated fadeInLeft')
            $(".contentMiddle p").addClass('animated fadeInRight')
            $(".contentMiddle h4").addClass('animated fadeInDownBig')
            $(".contentMiddle img").addClass('animated bounceInDown')
        }
        if ($(document).scrollTop() > 700) {
            $(".contentBottom>h2").addClass('animated rollIn')
            $(".contentBottom>p").addClass('animated fadeInDownBig')
        }
    })
})