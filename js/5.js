$(document).ready(function () {
    btn11.style.backgroundColor = "#666";
    btn11.style.color = "white";

});

btn11.onclick = function (e) {

    if (e.target.id == "btn11") {
        btn11.style.backgroundColor = "#666";
        btn11.style.color = "white";

        btn12.style.backgroundColor = "white";
        btn12.style.color = "#666";
        btn13.style.backgroundColor = "white";
        btn13.style.color = "#666";
        btn14.style.backgroundColor = "white";
        btn14.style.color = "#666";
        btn15.style.backgroundColor = "white";
        btn15.style.color = "#666";
    }

}

btn12.onclick = function (e) {

    if (e.target.id == "btn12") {
        btn12.style.backgroundColor = "#666";
        btn12.style.color = "white";

        btn11.style.backgroundColor = "white";
        btn11.style.color = "#666";
        btn13.style.backgroundColor = "white";
        btn13.style.color = "#666";
        btn14.style.backgroundColor = "white";
        btn14.style.color = "#666";
        btn15.style.backgroundColor = "white";
        btn15.style.color = "#666";
    }
}
btn13.onclick = function (e) {
    if (e.target.id == "btn13") {
        btn13.style.backgroundColor = "#666";
        btn13.style.color = "white";

        btn11.style.backgroundColor = "white";
        btn11.style.color = "#666";
        btn12.style.backgroundColor = "white";
        btn12.style.color = "#666";
        btn14.style.backgroundColor = "white";
        btn14.style.color = "#666";
        btn15.style.backgroundColor = "white";
        btn15.style.color = "#666";
    }
}
btn14.onclick = function (e) {
    if (e.target.id == "btn14") {
        btn14.style.backgroundColor = "#666";
        btn14.style.color = "white";

        btn11.style.backgroundColor = "white";
        btn11.style.color = "#666";
        btn13.style.backgroundColor = "white";
        btn13.style.color = "#666";
        btn12.style.backgroundColor = "white";
        btn12.style.color = "#666";
        btn15.style.backgroundColor = "white";
        btn15.style.color = "#666";
    }
}
btn15.onclick = function (e) {
    if (e.target.id == "btn15") {
        btn15.style.backgroundColor = "#666";
        btn15.style.color = "white";

        btn11.style.backgroundColor = "white";
        btn11.style.color = "#666";
        btn13.style.backgroundColor = "white";
        btn13.style.color = "#666";
        btn14.style.backgroundColor = "white";
        btn14.style.color = "#666";
        btn12.style.backgroundColor = "white";
        btn12.style.color = "#666";
    }


}








$(document).ready(function () {
    $(".sihi1").fadeIn();
    $(".sihi2").hide();
    $(".sihi3").hide();
    $(".sihi4").hide();
    $(".sihi5").hide();
});


$(function () {
    $('button:nth-of-type(1) ').click(function () {
        $(".sihi1").fadeIn();
        $(".sihi2").hide();
        $(".sihi3").hide();
        $(".sihi4").hide();
        $(".sihi5").hide();

    });


    $('button:nth-of-type(2) ').click(function () {
        $(".sihi2").fadeIn();
        $(".sihi1").hide();
        $(".sihi3").hide();
        $(".sihi4").hide();
        $(".sihi5").hide();
    });


    $('button:nth-of-type(3) ').click(function () {
        $(".sihi3").fadeIn();
        $(".sihi1").hide();
        $(".sihi2").hide();
        $(".sihi4").hide();
        $(".sihi5").hide();
    });

    $('button:nth-of-type(4) ').click(function () {
        $(".sihi4").fadeIn();
        $(".sihi1").hide();
        $(".sihi2").hide();
        $(".sihi3").hide();
        $(".sihi5").hide();
    });

    $('button:nth-of-type(5) ').click(function () {
        $(".sihi5").fadeIn();
        $(".sihi1").hide();
        $(".sihi2").hide();
        $(".sihi3").hide();
        $(".sihi4").hide();
    });




});