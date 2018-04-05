var maze =[
    //ctx.strokeRect(x, y, width, height, "N"),
    new wall(100, 100, 400, 5, "N"),
    new wall(100, 200, 300, 5, "N"),
    new wall(200, 300, 300, 5, "N"),
    new wall(100, 400, 100, 5, "N"),
    new wall(300, 400, 100, 5, "N"),
    new wall(100, 500, 400, 5, "N"),
    new wall(100, 100, 5, 400, "N"),
    new wall(300, 300, 5, 100, "N"),
    new wall(500, 100, 5, 205, "N"),
    new wall(500, 400, 5, 105, "N")
]

finish.y = 325; //finish line
finish.x = 500;
finish.width = 50;
finish.height = 50;

ball.x = 125;
ball.y = 130;
ball.width = 40;
ball.height = 40;

// UPDATE STUFF***********************************************************************/



function updateStuff(){

    ctx.clearRect(0,0,700,700);

    maze.forEach(function(oneWall){
        oneWall.drawMe();
    });
    
    ball.drawMe();
    finish.drawMe();
    finishIt();

    requestAnimationFrame(function(){
        updateStuff();
    });
}

updateStuff();