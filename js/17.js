$(function () {


    $(window).ready(function () {

        var ws = $(this).scrollTop();


        if (ws > -10) {

            $('.sl p:nth-of-type(1)').css("transform", "translateY(0px)").css("opacity", "1");
            $('.de').css("transform", "translateY(0px)").css("opacity", "1");



        }


    });

});




$(function () {
    if (window.matchMedia("(min-width: 1200px)").matches) {

        $(window).scroll(function () {

            var ws = $(this).scrollTop();



            if (ws > 250) {

                $('.an p:nth-of-type(1)').css("transform", "translateY(0px)").css("opacity", "1");
                $('.an p:nth-of-type(2)').css("transform", "translateY(0px)").css("opacity", "1");

            }

            if (ws > 720) {

                $('#anwpgks').css("transform", "translateY(0px)").css("opacity", "1");


            }

            if (ws > 1500) {

                $('.box1').css("transform", "translateY(0px)").css("opacity", "1");



            }

            if (ws > 2000) {

                $('.box2').css("transform", "translateY(0px)").css("opacity", "1");



            }

            if (ws > 2500) {

                $('.box3').css("transform", "translateY(0px)").css("opacity", "1");



            }

            if (ws > 2900) {

                $('#rhkstla').css("transform", "translateY(0px)").css("opacity", "1");
                // $('.diimg').css("transform", "translateY(0px)").css("opacity", "1");


            }


            if (ws > 3000) {

                $('.box4').css("transform", "translateY(0px)").css("opacity", "1");



            }




            if (ws > 3500) {

                $('.box5').css("transform", "translateY(0px)").css("opacity", "1");
                $('.box6').css("transform", "translateY(0px)").css("opacity", "1");
                $('.box7').css("transform", "translateY(0px)").css("opacity", "1");
                $('.box8').css("transform", "translateY(0px)").css("opacity", "1");
                $('.box9').css("transform", "translateY(0px)").css("opacity", "1");



            }

            if (ws > 4000) {

                $('.tt').css("transform", "translateY(0px)").css("opacity", "1");
                $('.phon img:nth-of-type(3)').css("transform", "translateY(0px)").css("opacity", "1");
                $('.phon img:nth-of-type(4)').css("transform", "translateY(0px)").css("opacity", "1");
                $('.phon img:nth-of-type(5)').css("transform", "translateY(0px)").css("opacity", "1");
                $('.phon img:nth-of-type(6)').css("transform", "translateY(0px)").css("opacity", "1");


            }

            if (ws > 4800) {

                $('.dj1').css("transform", "translateY(0px)").css("opacity", "1");



            }
            if (ws > 6000) {

                $('.dk1_1').css("transform", "translateY(0px)").css("opacity", "1");
                $('.dk3').css("transform", "translateY(0px)").css("opacity", "1");
                $('.dk1_12').css("transform", "translateY(0px)").css("opacity", "1");
                $('.dk32').css("transform", "translateY(0px)").css("opacity", "1");
                $('.dk1_13').css("transform", "translateY(0px)").css("opacity", "1");
                $('.dk33').css("transform", "translateY(0px)").css("opacity", "1");



            }
            if (ws > 7000) {

                $('.kd2').css("transform", "translateY(0px)").css("opacity", "1");




            }

        });

    } else {

        /* 뷰포트 너비가 400 픽셀 미만 */

    }
});


