var canvas = document.querySelector(".board");
var ctx = canvas.getContext("2d");
var body = document.querySelector("body");


/****************************MAZE************************* */
function wall (myX, myY, myW, myH, myDir) {
    this.x = myX;
    this.y = myY;
    this.width = myW;
    this.height = myH;
    this.direction = myDir;
}
  
wall.prototype.drawMe = function () {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height, this.direction);
};

/*******************************BALL ********************/
var ball = {
    x: 65,
    y: 65,
    width: 20,
    height: 20,
    direction: "N",
    drawMe: function(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

/********************************FINISH LINE*********** */
var finish = {
    x: 560,
    y: 410,
    width: 30,
    height: 30,
    drawMe: function(){
        ctx.fillStyle = "pink";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

/************************TURNS AND MOVES************************** */

function turnLeft(){
  
  ctx.clearRect(0, 0, 700, 700);       
  ctx.translate(300, 300);         
  ctx.rotate(-(Math.PI / 180));  
  ctx.translate(-300, -300);
         
  ctx.fillRect(100,100,400,400);
  ctx.clearRect(200,200,100,50);

  console.log(ball.direction);
}


function turnRight (){

  ctx.clearRect(0, 0, 700, 700);       
  ctx.translate(300, 300);         
  ctx.rotate((Math.PI / 180));  
  ctx.translate(-300, -300);
         
  ctx.fillRect(100,100,400,400);
  ctx.clearRect(200,200,100,50);
    
  console.log(ball.direction);
};

function moveRight(){ 
 var oldPositionX = ball.x;
 var oldPositionY = ball.y;

    if(ball.direction === "N"){
        if (wallCollision()==false){
            ball.x += 5;
        } else{
            ball.x = oldPositionX - 5;
        }
    }else if (ball.direction ==="E"){
        if (wallCollision()==false){
            ball.y -= 5;
        } else{
            ball.y = oldPositionY + 5;
        }
    }else if(ball.direction === "W"){
        if (wallCollision()==false){
            ball.y += 5;
        } else{
            ball.y = oldPositionY - 5;
        }
       
    }else {
        if (wallCollision ()==false){
            ball.x -=5;
        } else{
            ball.x = oldPositionX + 5;
        } 
    } 
}



function moveLeft(){
var oldPositionX = ball.x;
var oldPositionY = ball.y;
    
    if(ball.direction === "N"){
        if (wallCollision()==false){
            ball.x -=5;
        } else{
            ball.x = oldPositionX + 5;
        }
    }else if (ball.direction ==="E"){
        if (wallCollision()==false){
            ball.y += 5;
        } else{
            ball.y = oldPositionY - 5;
        }
    }else if(ball.direction === "W"){
        if (wallCollision()==false){
            ball.y -= 5;
        } else{
            ball.y = oldPositionY + 5;
        }
    }else {
        if (wallCollision()==false){
            ball.x += 5;
        } else{
            ball.x = oldPositionX-5;
        }
    }
}

// function moveUp(){
//     ball.y -= 5;
// }

// function moveDown(){
//     ball.y +=5;
// }

// COLLISIONS*******************************************************************///////
function getTop (obj) {
    return obj.y;
}
function getBottom (obj) {
    return obj.y + obj.height;
}
function getLeft (obj) {
    return obj.x;
}
function getRight (obj) {
    return obj.x + obj.width;
}
  
function collision (objA, objB) {
    return getBottom(objA) >= getTop(objB)    &&
           getTop(objA)    <= getBottom(objB) &&
           getRight(objA)  >= getLeft(objB)   &&
           getLeft(objA)   <= getRight(objB);
}
  
function wallCollision () {
    var hasCollided = false;
  
    maze.forEach(function (oneWall) {
      if (collision(ball, oneWall)) {
         hasCollided = true;
        }
    });
    
 return hasCollided;
}
  
function finishIt(){
  if( (ball.x+ball.width) >= finish.x && ball.y>=finish.y && (ball.y + ball.height)<=(finish.y + finish.height)){
    $( "canvas" ).hide();
    $(".starthidden").show();
   }
}

// KEYCOMMAND**************************************************************************/

body.onkeydown = function(){

    switch(event.keyCode){
        case 83:  //button S //turn left
            if(ball.direction === "N"){
                ball.direction = "W";
            } else if(ball.direction === "E"){
                ball.direction = "N";
            } else if(ball.direction === "S"){
                ball.direction = "E";
            } else if(ball.direction === "W"){
                ball.direction = "S";
            }
    
            var counter = 90;
            var countdown = setInterval(function(){
                turnLeft();
                counter--
                if (counter === 0) {
                    clearInterval(countdown);
                }
            }, 1000/100);
        
        break;
 
        case 68: // button D //turn right
            if(ball.direction === "N"){
                ball.direction = "E";
            } else if(ball.direction === "E"){
                ball.direction = "S";
            } else if(ball.direction === "S"){
                ball.direction = "W";
            } else if(ball.direction === "W"){
                ball.direction = "N";
            }
          
            var counter = 90;
            var countdown = setInterval(function(){
                turnRight();
                counter--
                if (counter === 0) {
                    clearInterval(countdown);
                }
            }, 1000/100);
        break;
 
        case 39: //right arrow
        if(wallCollision()){
            moveLeft()===false;
        }
         moveRight();
        break;

        case 37: // left arrow
        if(wallCollision()){
            moveRight()===false;
        }
         moveLeft();
        break;
        
        case 40:
         moveDown();
        break;

        case 38:
         moveUp();
        break;
    }
     
 };

 