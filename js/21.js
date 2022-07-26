$(document).ready(function () {
    $("#hid").show();
    $(".#hid2").hide();
    $("#hid3").hide();
});


$(function () {
    $('.bt1').click(function () {
        $("#hid").show();
        $("#hid2").hide();
        $("#hid3").hide();


    });


    $('.bt2').click(function () {

        $("#hid2").show();
        $("#hid").hide();
        $("#hid3").hide();
    });


    $('.bt3 ').click(function () {
        $("#hid3").show();
        $("#hid2").hide();
        $("#hid").hide();
    });

});
