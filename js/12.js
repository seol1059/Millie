$(document).ready(function () {
    $(".dk2_1").show();
    $(".dk3 img:nth-of-type(2)").show();
    $(".dk3 img:nth-of-type(3)").hide();
    $(".dk3 img:nth-of-type(4)").hide();
    $(".dk3 video").hide();
    $(".dk2_12").hide();
    $(".dk2_13").hide();
    $(".dk2_14").hide();

});


$(function () {
    $('.a1 ').click(function () {
        $(".dk2_1").show();
        $(".dk3 img:nth-of-type(2)").show();
        $(".dk3 img:nth-of-type(3)").hide();
        $(".dk3 img:nth-of-type(4)").hide();
        $(".dk3 video").hide();
        $(".dk2_12").hide();
        $(".dk2_13").hide();
        $(".dk2_14").hide();

    });


    $('.a2 ').click(function () {
        $(".dk2_12").show();
        $(".dk3 video").show();
        $(".dk3 img:nth-of-type(2)").hide();
        $(".dk3 img:nth-of-type(4)").hide();
        $(".dk3 img:nth-of-type(3)").hide();
        $(".dk2_1").hide();
        $(".dk2_13").hide();
        $(".dk2_14").hide();
    });


    $('.a3 ').click(function () {
        $(".dk2_13").show();
        $(".dk3 img:nth-of-type(3)").show();
        $(".dk3 img:nth-of-type(4)").hide();
        $(".dk3 img:nth-of-type(2)").hide();
        $(".dk3 video").hide();
        $(".dk2_1").hide();
        $(".dk2_12").hide();
        $(".dk2_14").hide();
    });

    $('.a4 ').click(function () {
        $(".dk2_14").show();
        $(".dk3 img:nth-of-type(4)").show();
        $(".dk3 img:nth-of-type(3)").hide();
        $(".dk3 img:nth-of-type(2)").hide();
        $(".dk3 video").hide();
        $(".dk2_1").hide();
        $(".dk2_12").hide();
        $(".dk2_13").hide();
    });


});










$(document).ready(function () {
    a1.style.backgroundColor = "#666";
    a1.style.color = "white";

});

a1.onclick = function (e) {

    if (e.target.id == "a1") {
        a1.style.backgroundColor = "#666";
        a1.style.color = "antiquewhite";

        a2.style.backgroundColor = "antiquewhite";
        a2.style.color = "#666";
        a3.style.backgroundColor = "antiquewhite";
        a3.style.color = "#666";
        a4.style.backgroundColor = "antiquewhite";
        a4.style.color = "#666";
    }
}


a2.onclick = function (e) {
    if (e.target.id == "a2") {
        a2.style.backgroundColor = "#666";
        a2.style.color = "antiquewhite";

        a1.style.backgroundColor = "antiquewhite";
        a1.style.color = "#666";
        a3.style.backgroundColor = "antiquewhite";
        a3.style.color = "#666";
        a4.style.backgroundColor = "antiquewhite";
        a4.style.color = "#666";
    }
}
a3.onclick = function (e) {
    if (e.target.id == "a3") {
        a3.style.backgroundColor = "#666";
        a3.style.color = "antiquewhite";

        a1.style.backgroundColor = "antiquewhite";
        a1.style.color = "#666";
        a2.style.backgroundColor = "antiquewhite";
        a2.style.color = "#666";
        a4.style.backgroundColor = "antiquewhite";
        a4.style.color = "#666";
    }
}
a4.onclick = function (e) {

    if (e.target.id == "a4") {
        a4.style.backgroundColor = "#666";
        a4.style.color = "antiquewhite";

        a1.style.backgroundColor = "antiquewhite";
        a1.style.color = "#666";
        a3.style.backgroundColor = "antiquewhite";
        a3.style.color = "#666";
        a2.style.backgroundColor = "antiquewhite";
        a2.style.color = "#666";
    }
}
