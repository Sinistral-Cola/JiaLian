$(function () {
    $('#dongHua').hover(
        function () {
            $('#dongHua ul').css('animation-play-state','paused')
        },
        function () {
            $('#dongHua ul').css('animation-play-state','running')
        }
    )

})
