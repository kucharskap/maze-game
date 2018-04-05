var maze =[
    //ctx.strokeRect(x, y, width, height, "N"),
        new wall(50, 50, 500, 5, "N"),
        new wall(50, 100, 350, 5, "N"),
        new wall(450, 100, 50, 5, "N"),
        new wall(100, 150, 150, 5, "N"),
        new wall(300, 150, 200, 5, "N"),
        new wall(150, 200, 50, 5, "N"),
        new wall(100, 250, 50, 5, "N"),
        new wall(200, 250, 50, 5, "N"),
        new wall(350, 250, 100, 5, "N"),
        new wall(500, 250, 50, 5, "N"),
        new wall(150, 300, 150, 5, "N"),
        new wall(450, 300, 100, 5, "N"),
        new wall(50, 350, 200, 5, "N"),
        new wall(450, 350, 100, 5, "N"),
        new wall(100, 400, 150, 5, "N"),
        new wall(400, 400, 100, 5, "N"),
        new wall(50, 450, 100, 5, "N"),
        new wall(350, 450, 100, 5, "N"),
        new wall(100, 500, 300, 5, "N"),
        new wall(450, 500, 50, 5, "N"),
        new wall(50, 550, 500, 5, "N"), //horizontals end
        new wall(50, 50, 5, 500, "N"),
        new wall(100, 150, 5, 100, "N"),
        new wall(100, 300, 5, 50, "N"),
        new wall(150, 250, 5, 50, "N"),
        new wall(200, 200, 5, 50, "N"),
        new wall(200, 400, 5, 100, "N"),
        new wall(250, 150, 5, 105, "N"),
        new wall(250, 400, 5, 50, "N"),
        new wall(300, 150, 5, 350, "N"),
        new wall(350, 200, 5, 250, "N"),
        new wall(400, 150, 5, 50, "N"),
        new wall(400, 300, 5, 100, "N"),
        new wall(450, 100, 5, 50, "N"),
        new wall(450, 200, 5, 100, "N"),
        new wall(450, 450, 5, 50, "N"),
        new wall(500, 150, 5, 100, "N"),
        new wall(500, 400, 5, 105, "N"),
        new wall(550, 50, 5, 205, "N"),
        new wall(550, 300, 5, 255, "N")    
]

finish.y = 260; //finish line

// ball.onload  = function(){
//     maze.forEach(function(oneWall){
//         oneWall.drawMe();
//     });
//     finish.drawMe();
//     ball.drawMe();
// }


// UPDATE STUFF***********************************************************************/



function updateStuff(){

    ctx.clearRect(0,0,700,700);

    maze.forEach(function(oneWall){
        oneWall.drawMe();
    });
    
    ball.drawMe();
    finish.drawMe();
    finishIt();
    lost();
    
    requestAnimationFrame(function(){
        updateStuff();
    });
}

updateStuff();