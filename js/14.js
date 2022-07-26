$(document).ready(function () {

    $(".dk33 img:nth-of-type(1)").show();
    $(".dk33 img:nth-of-type(2)").show();
    $(".dk33 img:nth-of-type(3)").hide();
    $(".dk33 img:nth-of-type(4)").hide();
    $(".dk2_13").hide();
    $(".dk2_123").hide();
    $(".dk2_133").hide();
    $(".dk2_143").hide();

});


$(function () {
    $('.a13 ').click(function () {
        $(".dk2_13").show();
        $(".dk33 img:nth-of-type(1)").show();
        $(".dk33 img:nth-of-type(2)").show();
        $(".dk33 img:nth-of-type(3)").hide();
        $(".dk33 img:nth-of-type(4)").hide();

        $(".dk2_123").hide();
        $(".dk2_133").hide();
        $(".dk2_143").hide();

    });


    $('.a23 ').click(function () {
        $(".dk2_123").show();
        $(".dk33 img:nth-of-type(1)").show();
        $(".dk33 img:nth-of-type(3)").show();
        $(".dk33 img:nth-of-type(4)").hide();
        $(".dk33 img:nth-of-type(2)").hide();

        $(".dk2_13").hide();
        $(".dk2_133").hide();
        $(".dk2_143").hide();
    });


    $('.a33 ').click(function () {
        $(".dk2_133").show();
        $(".dk33 img:nth-of-type(1)").show();
        $(".dk33 img:nth-of-type(4)").show();
        $(".dk33 img:nth-of-type(3)").hide();
        $(".dk33 img:nth-of-type(2)").hide();

        $(".dk2_13").hide();
        $(".dk2_123").hide();
        $(".dk2_143").hide();
    });



});













$(document).ready(function () {
    a13.style.backgroundColor = "#666";
    a13.style.color = "white";

});

this.onclick = function (e) {

    if (e.target.id == "a13") {
        a13.style.backgroundColor = "#666";
        a13.style.color = "antiquewhite";

        a23.style.backgroundColor = "antiquewhite";
        a23.style.color = "#666";
        a33.style.backgroundColor = "antiquewhite";
        a33.style.color = "#666";
        a43.style.backgroundColor = "antiquewhite";
        a43.style.color = "#666";
    }

    if (e.target.id == "a23") {
        a23.style.backgroundColor = "#666";
        a23.style.color = "antiquewhite";

        a13.style.backgroundColor = "antiquewhite";
        a13.style.color = "#666";
        a33.style.backgroundColor = "antiquewhite";
        a33.style.color = "#666";
        a43.style.backgroundColor = "antiquewhite";
        a43.style.color = "#666";
    }

    if (e.target.id == "a33") {
        a33.style.backgroundColor = "#666";
        a33.style.color = "antiquewhite";

        a13.style.backgroundColor = "antiquewhite";
        a13.style.color = "#666";
        a23.style.backgroundColor = "antiquewhite";
        a23.style.color = "#666";
        a43.style.backgroundColor = "antiquewhite";
        a43.style.color = "#666";
    }

    if (e.target.id == "a43") {
        a43.style.backgroundColor = "#666";
        a4.style.color = "antiquewhite";

        a13.style.backgroundColor = "antiquewhite";
        a13.style.color = "#666";
        a33.style.backgroundColor = "antiquewhite";
        a33.style.color = "#666";
        a23.style.backgroundColor = "antiquewhite";
        a23.style.color = "#666";
    }



}