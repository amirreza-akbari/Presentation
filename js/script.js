$(document).ready(function(){

    $("#toggleBoxes").click(function(){
        $(".box").toggle(1000);
    });

    $("#changeText").click(function(){
        $("#box1").text("متن جدید باکس ۱!");
        $("#box2").text("متن جدید باکس ۲!");
        $("#box3").text("متن جدید باکس ۳!");
    });

    $("#changeColor").click(function(){
        $("#box1").css("background-color", "#ff6347");
        $("#box2").css("background-color", "#3cb371");
        $("#box3").css("background-color", "#ffa500");
    });

    $("#fadeBoxes").click(function(){
        $(".box").fadeToggle(1000); 
    });

});
