$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $("header").css('background', 'rgba(255,255,255,1)');
            $(".nav-a").css('color', 'rgb(0,0,0)')
            $(".nav-logo").css('color', 'rgb(0,0,0)')
            $(".bar-menu>a").css('color', 'rgb(0,0,0)')
            $("header svg>path").css('fill', 'rgb(0,0,0)')
        } else {
            $("header").css('background', 'rgba(255,255,255,0)');
            $(".nav-a").css('color', 'rgba(255,255,255,1)')
            $(".nav-logo").css('color', 'rgba(255,255,255,1)')
            $(".bar-menu>a").css('color', 'rgba(255,255,255,1)')
            $("header svg>path").css('fill', 'rgba(255,255,255,1)')
        }
    })
    $('header').hover(
        () => {
            if ($(document).scrollTop() == 0) {
                $("header").css('background', 'rgba(255,255,255,1)')
                $(".bar-menu>a").css('color', 'rgb(0,0,0)')
                $("header svg>path").css('fill', 'rgb(0,0,0)')
                $(".nav-logo").css('color', 'rgb(0,0,0)')
                $(".nav-list > li > a").css('color', 'rgb(0,0,0)')
            }
        },
        () => {
            if ($(document).scrollTop() == 0) {
                $("header").css('background', 'rgba(255,255,255,.1)')
                $(".bar-menu>a").css('color','#fff')
                $("header svg>path").css('fill', '#fff')
                $(".nav-logo").css('color', '#fff')
                $(".nav-list > li > a").css('color', '#fff')
            }
        })
})


//下拉框
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const fifth = document.getElementById('fifth')
const sixth = document.getElementById('sixth')
const eighth = document.getElementById('eighth')

const down2 = document.getElementsByClassName('drop_down2')
const down3 = document.getElementsByClassName('drop_down3')
const down4 = document.getElementsByClassName('drop_down4')
const down5 = document.getElementsByClassName('drop_down5')
const down6 = document.getElementsByClassName('drop_down6')
const down8 = document.getElementsByClassName('drop_down8')
second.onmouseenter = function () {
    down2[0].style.display = 'block'
    down2[0].onmouseenter = function () {
        down2[0].style.display = 'block'
    }
    down2[0].onmouseleave = function () {
        down2[0].style.display = 'none'
    }
    second.onmouseleave = function () {
        down2[0].style.display = 'none'
    }
}

third.onmouseenter = function () {
    down3[0].style.display = 'block'
    down3[0].onmouseenter = function () {
        down3[0].style.display = 'block'
    }
    down3[0].onmouseleave = function () {
        down3[0].style.display = 'none'
    }
    third.onmouseleave = function () {
        down3[0].style.display = 'none'
    }
}

fourth.onmouseenter = function () {
    down4[0].style.display = 'block'
    down4[0].onmouseenter = function () {
        down4[0].style.display = 'block'
    }
    down4[0].onmouseleave = function () {
        down4[0].style.display = 'none'
    }
    fourth.onmouseleave = function () {
        down4[0].style.display = 'none'
    }
}

fifth.onmouseenter = function () {
    down5[0].style.display = 'block'
    down5[0].onmouseenter = function () {
        down5[0].style.display = 'block'
    }
    down5[0].onmouseleave = function () {
        down5[0].style.display = 'none'
    }
    fifth.onmouseleave = function () {
        down5[0].style.display = 'none'
    }
}

sixth.onmouseenter = function () {
    down6[0].style.display = 'block'
    down6[0].onmouseenter = function () {
        down6[0].style.display = 'block'
    }
    down6[0].onmouseleave = function () {
        down6[0].style.display = 'none'
    }
    sixth.onmouseleave = function () {
        down6[0].style.display = 'none'
    }
}

eighth.onmouseenter = function () {
    down8[0].style.display = 'block'
    down8[0].onmouseenter = function () {
        down8[0].style.display = 'block'
    }
    down8[0].onmouseleave = function () {
        down8[0].style.display = 'none'
    }
    eighth.onmouseleave = function () {
        down8[0].style.display = 'none'
    }
}