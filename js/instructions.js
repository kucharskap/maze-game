var body = document.querySelector("body");

body.onkeydown = function (){
    switch(event.keyCode){
        case 83: //S
        $(".btn-s").addClass("onkey");
        console.log("s")
        break;
        case 68: //D
        $(".btn-d").addClass("onkey");
        break;
        case 39: //right
        $("#right").addClass("onkey-arrows");
        break;
        case 37: //left
        $("#left").addClass("onkey-arrows");
        break;
    }
}

body.onkeyup = function (){
    switch(event.keyCode){
        case 83: //S
        $(".btn-s").removeClass("onkey");
        console.log("s-r");
        break;
        case 68: //D
        $(".btn-d").removeClass("onkey");
        break;
        case 39: //right
        $("#right").removeClass("onkey-arrows");
        break;
        case 37: //left
        $("#left").removeClass("onkey-arrows");
        break;
    }
}