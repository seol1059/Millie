$(document).ready(function () {
    bt1.style.borderColor = "#666";
    bt2.style.bordercolor = "white";
    bt3.style.bordercolor = "white";
    p1.style.borderColor = "#666";
    p1.style.fontWeight = "bold";
    p2.style.bordercolor = "white";
    p2.style.fontWeight = "normal";
    p3.style.bordercolor = "white";
    p3.style.fontWeight = "normal";

});

this.onclick = function (e) {

    if (e.target.id == "bt1") {
        bt1.style.borderColor = "#666";
        bt2.style.borderColor = "white";
        bt3.style.borderColor = "white";
        p1.style.borderColor = "#666";
        p1.style.fontWeight = "bold";
        p2.style.borderColor = "white";
        p2.style.fontWeight = "normal";
        p3.style.borderColor = "white";
        p3.style.fontWeight = "normal";

    }

    if (e.target.id == "bt2") {
        bt2.style.borderColor = "#666";
        bt1.style.borderColor = "white";
        bt3.style.borderColor = "white";
        p2.style.borderColor = "#666";
        p2.style.fontWeight = "bold";
        p1.style.borderColor = "white";
        p1.style.fontWeight = "normal";
        p3.style.borderColor = "white";
        p3.style.fontWeight = "normal";

    }

    if (e.target.id == "bt3") {
        bt3.style.borderColor = "#666";
        bt2.style.borderColor = "white";
        bt1.style.borderColor = "white";
        p3.style.borderColor = "#666";
        p3.style.fontWeight = "bold";
        p2.style.borderColor = "white";
        p2.style.fontWeight = "normal";
        p1.style.borderColor = "white";
        p1.style.fontWeight = "normal";

    }
}














$(document).ready(function () {
    p1.style.borderColor = "#666";
    p1.style.fontWeight = "bold";
    p2.style.bordercolor = "white";
    p2.style.fontWeight = "normal";
    p3.style.bordercolor = "white";
    p3.style.fontWeight = "normal";

});

this.onclick = function (e) {

    if (e.target.id == "p1") {
        p1.style.borderColor = "#666";
        p1.style.fontWeight = "bold";
        p2.style.borderColor = "white";
        p2.style.fontWeight = "normal";
        p3.style.borderColor = "white";
        p3.style.fontWeight = "normal";

    }

    if (e.target.id == "p2") {
        p2.style.borderColor = "#666";
        p2.style.fontWeight = "bold";
        p1.style.borderColor = "white";
        p1.style.fontWeight = "normal";
        p3.style.borderColor = "white";
        p3.style.fontWeight = "normal";

    }

    if (e.target.id == "p3") {
        p3.style.borderColor = "#666";
        p3.style.fontWeight = "bold";
        p2.style.borderColor = "white";
        p2.style.fontWeight = "normal";
        p1.style.borderColor = "white";
        p1.style.fontWeight = "normal";

    }
}