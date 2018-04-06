var maze =[
    //ctx.strokeRect(x, y, width, height, "N"),
        new wall(50, 50, 500, 5, "N"),
        new wall(150, 100, 200, 5, "N"),
        new wall(450, 100, 50, 5, "N"),
        new wall(100, 150, 100, 5, "N"),
        new wall(250, 150, 50, 5, "N"),
        new wall(500, 150, 50, 5, "N"),
        new wall(300, 200, 50, 5, "N"),
        new wall(50, 250, 100, 5, "N"),
        new wall(350, 250, 50, 5, "N"),
        new wall(250, 300, 200, 5, "N"),
        new wall(200, 350, 100, 5, "N"),
        new wall(400, 350, 100, 5, "N"),
        new wall(250, 400, 100, 5, "N"),
        new wall(450, 400, 100, 5, "N"),
        new wall(250, 450, 50, 5, "N"),
        new wall(350, 450, 50, 5, "N"),
        new wall(500, 450, 50, 5, "N"),
        new wall(100, 500, 50, 5, "N"),
        new wall(200, 500, 50, 5, "N"),
        new wall(350, 500, 150, 5, "N"),
        new wall(50, 550, 500, 5, "N"),
        new wall(50, 50, 5, 500, "N"),
        new wall(100, 50, 5, 150, "N"),
        new wall(100, 300, 5, 200, "N"),
        new wall(150, 200, 5, 305, "N"),
        new wall(200, 150, 5, 350, "N"),
        new wall(250, 100, 5, 200, "N"),
        new wall(250, 400, 5, 50, "N"),
        new wall(300, 200, 5, 50, "N"),
        new wall(300, 450, 5, 100, "N"),
        new wall(350, 100, 5, 105, "N"),
        new wall(350, 300, 5, 105, "N"),
        new wall(400, 50, 5, 205, "N"),
        new wall(400, 350, 5, 105, "N"),
        new wall(450, 100, 5, 250, "N"),
        new wall(450, 400, 5, 100, "N"),
        new wall(500, 150, 5, 150, "N"),
        new wall(550, 50, 5, 355, "N"),
        new wall(550, 450, 5, 105, "N"),
        new wall(50, 50, 5, 50, "N")
]



// UPDATE STUFF***********************************************************************/

function updateStuff(){

    ctx.clearRect(0,0,700,700);

    maze.forEach(function(oneWall){
        oneWall.drawMe();
    });
       
    ball.drawMe();
    finish.drawMe();
    finishIt();
    lostWall();

    requestAnimationFrame(function(){
        updateStuff();
    });
}

updateStuff();




      



