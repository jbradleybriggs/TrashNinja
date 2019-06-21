let ninja;
var paused = false ;
var obstacles = [] ;
let sound ;
var playerScore = 0 ;
let level;

function setup()
{
    createCanvas(1200, 500) ;
    level = new Level(1, 
        loadImage('./resources/scenes/scene1.png'),
        loadImage('./resources/ninja4.png'),
        loadImage('./resources/can2.png'), 151, 250) ;
    level.levelSetup() ;
}

function draw()
{
    level.levelDraw() ;
}


function showPauseScreen()
{
    background(0, 0, 0, 200) ;
    fill(205) ;
    textAlign(CENTER);
    textSize(30) ;
    fill(255) ;
    text("Paused", width/2, height/2 - 50) ;
    textSize(50);
    text("Are you running away like a bitch?", width/2, height/2);
}

function showPlayerInfo(level)
{
    fill(255) ;
    textAlign(LEFT) ;
    textSize(20) ;
    text("Score: "+playerScore, 15, 25) ;

    textAlign(RIGHT) ;
    textSize(20) ;
    text("Level "+level, width-15, 25) ;
}

function keyPressed()
{
    if (key == ' ')
    {
        if (paused) togglePause() ;
        level.character.jump() ;
    }
    else if (key == 'p' || key =='Escape' || key == 'F12') 
    {
        togglePause() ;
    }
}

function togglePause()
{   
    paused = !paused ;
    if (paused) 
    {
        noLoop() ;
        //sound.pause() ;
    }
    else 
    {
        loop() ;
        //sound.play() ;
    }
}
