$(function () {
    $('.a12 ').click(function () {
        $(".dk2_12").show();

        $(".dk32 video:nth-of-type(1)").show();
        $(".dk32 img:nth-of-type(2)").hide();
        $(".dk32 video:nth-of-type(3)").hide();
        $(".dk32 video:nth-of-type(2)").hide();
        $(".dk2_122").hide();
        $(".dk2_132").hide();
        $(".dk2_142").hide();

    });


    $('.a22 ').click(function () {
        $(".dk2_122").show();
        $(".dk32 img:nth-of-type(2)").show();
        $(".dk32 video:nth-of-type(1)").hide();
        $(".dk32 video:nth-of-type(2)").hide();
        $(".dk32 video:nth-of-type(3)").hide();
        $(".dk2_12").hide();
        $(".dk2_132").hide();
        $(".dk2_142").hide();
    });


    $('.a32 ').click(function () {
        $(".dk2_132").show();
        $(".dk32 video:nth-of-type(2)").show();
        $(".dk32 img:nth-of-type(2)").hide();
        $(".dk32 video:nth-of-type(3)").hide();
        $(".dk32 video:nth-of-type(1)").hide();
        $(".dk2_12").hide();
        $(".dk2_122").hide();
        $(".dk2_142").hide();
    });

    $('.a42 ').click(function () {
        $(".dk2_142").show();
        $(".dk32 video:nth-of-type(3)").show();
        $(".dk32 img:nth-of-type(2)").hide();
        $(".dk32 video:nth-of-type(1)").hide();
        $(".dk32 video:nth-of-type(2)").hide();
        $(".dk2_12").hide();
        $(".dk2_122").hide();
        $(".dk2_132").hide();
    });


});



$(document).ready(function () {
    a12.style.backgroundColor = "#666";
    a12.style.color = "white";

});

a12.onclick = function (e) {

    if (e.target.id == "a12") {
        a12.style.backgroundColor = "#666";
        a12.style.color = "antiquewhite";

        a22.style.backgroundColor = "antiquewhite";
        a22.style.color = "#666";
        a32.style.backgroundColor = "antiquewhite";
        a32.style.color = "#666";
        a42.style.backgroundColor = "antiquewhite";
        a42.style.color = "#666";
    }
}

a22.onclick = function (e) {

    if (e.target.id == "a22") {
        a22.style.backgroundColor = "#666";
        a22.style.color = "antiquewhite";

        a12.style.backgroundColor = "antiquewhite";
        a12.style.color = "#666";
        a32.style.backgroundColor = "antiquewhite";
        a32.style.color = "#666";
        a42.style.backgroundColor = "antiquewhite";
        a42.style.color = "#666";
    }
}

a32.onclick = function (e) {

    if (e.target.id == "a32") {
        a32.style.backgroundColor = "#666";
        a32.style.color = "antiquewhite";

        a12.style.backgroundColor = "antiquewhite";
        a12.style.color = "#666";
        a22.style.backgroundColor = "antiquewhite";
        a22.style.color = "#666";
        a42.style.backgroundColor = "antiquewhite";
        a42.style.color = "#666";
    }
}

a42.onclick = function (e) {

    if (e.target.id == "a42") {
        a42.style.backgroundColor = "#666";
        a42.style.color = "antiquewhite";

        a12.style.backgroundColor = "antiquewhite";
        a12.style.color = "#666";
        a32.style.backgroundColor = "antiquewhite";
        a32.style.color = "#666";
        a22.style.backgroundColor = "antiquewhite";
        a22.style.color = "#666";
    }
}

