$(document).ready(function () {
    $(".dkbg").fadeIn();
    $(".dkbg2").hide();
    $(".dkbg3").hide();
    $(".dk2_12").hide();
    $(".dk2_13").hide();

});


$(function () {
    $('.o1 ').click(function () {
        $(".dkbg").fadeIn();
        $(".dkbg2").hide();
        $(".dkbg3").hide();
        $(".dk2_12").hide();
        $(".dk2_13").hide();

    });


    $('.o2').click(function () {
        $(".dkbg2").fadeIn();
        $(".dk2_12").fadeIn();
        $(".dkbg").hide();
        $(".dkbg3").hide();
    });


    $('.o3 ').click(function () {
        $(".dkbg3").fadeIn();
        $(".dk2_13").fadeIn();
        $(".dkbg2").hide();
        $(".dkbg").hide();
    });

});





$(document).ready(function () {
    o1.style.backgroundColor = "antiquewhite";
    o1.style.color = "black";

});

o1.onclick = function (e) {

    if (e.target.id == "o1") {
        o1.style.backgroundColor = "antiquewhite";
        o1.style.color = "black";

        o2.style.backgroundColor = "#fff";
        o2.style.color = "black";
        o3.style.backgroundColor = "#fff";
        o3.style.color = "black";

    }
}

o2.onclick = function (e) {

    if (e.target.id == "o2") {
        o2.style.backgroundColor = "antiquewhite";
        o2.style.color = "black";

        o1.style.backgroundColor = "#fff";
        o1.style.color = "black";
        o3.style.backgroundColor = "#fff";
        o3.style.color = "black";

    }
}

o3.onclick = function (e) {

    if (e.target.id == "o3") {
        o3.style.backgroundColor = "antiquewhite";
        o3.style.color = "black";

        o1.style.backgroundColor = "#fff";
        o1.style.color = "black";
        o2.style.backgroundColor = "#fff";
        o2.style.color = "black";


    }





}







$(document).ready(function () {
    o1.style.backgroundColor = "antiquewhite";
    o1.style.color = "black";

});

z1.onclick = function (e) {

    if (e.target.id == "z1") {
        o1.style.backgroundColor = "antiquewhite";
        o1.style.color = "black";

        o2.style.backgroundColor = "#fff";
        o2.style.color = "black";
        o3.style.backgroundColor = "#fff";
        o3.style.color = "black";

    }
}

z2.onclick = function (e) {

    if (e.target.id == "z2") {
        o2.style.backgroundColor = "antiquewhite";
        o2.style.color = "black";

        o1.style.backgroundColor = "#fff";
        o1.style.color = "black";
        o3.style.backgroundColor = "#fff";
        o3.style.color = "black";

    }
}

z3.onclick = function (e) {

    if (e.target.id == "z3") {
        o3.style.backgroundColor = "antiquewhite";
        o3.style.color = "black";

        o1.style.backgroundColor = "#fff";
        o1.style.color = "black";
        o2.style.backgroundColor = "#fff";
        o2.style.color = "black";


    }





}