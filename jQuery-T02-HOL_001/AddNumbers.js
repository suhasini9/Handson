$(document).ready(function(){

    $("button").click(function(){
    var x=parseInt($("#n1").val());
    var y=parseInt($("#n2").val());
    
    if(x>=0 && y>=0){
    var r=x+y;
    $("#mes").text(r).css("color", "green");
    $("#test1").val(r);
    }
    else{
    
    $("#mes").text("Pls. Enter the Values").css("color", "red");
    }
    
    });
    
    });