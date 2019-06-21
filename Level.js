class Level
{
    constructor(number, sceneImage, characterImage, obstacleImage, obstacleWidth, obstacleHeight)
    {
        this.number = number ;
        this.scene = new Scene(sceneImage, 2.5);
        this.character = new Ninja(characterImage) ;
        this.obstacleImage = obstacleImage;
        this.obstacleWidth = obstacleWidth; 
        this.obstacleHeight = obstacleHeight;
        this.obstacle = new Obstacle(obstacleImage, obstacleWidth, obstacleHeight, 16) ;
        this.obstacles = [] ;
    }

    levelSetup()
    {
        this.addObstacle(this.obstacle) ;
    }

    addObstacle(obstacle)
    {
        this.obstacles.push(obstacle) ; 
    }

    maybeCreateObstacle(image, imageWidth, imageHeight)
    {
        if (Math.random() < 0.006)
        {
            var newObstacle = new Obstacle(image, imageWidth, imageHeight) ;
            return newObstacle ;
        }
        else return null ;
    }

    levelDraw()
    {
        /* BACKGROUND -------------------------------------------------- */
            this.scene.show() ;
            showPlayerInfo(this.number) ;
            background(255, 255, 255, 90) ;

        /* FOREGROUND --------------------------------------------------*/

            //obstacles
            var newObstacle = this.maybeCreateObstacle(this.obstacleImage, this.obstacleWidth, this.obstacleHeight) ;
            if (newObstacle != null) this.addObstacle(newObstacle) ;
            for (var i=0; i<this.obstacles.length; i++)
            {
                this.obstacles[i].move() ;
                //if (obstacles[i].finished()) obstacles[i].shift() ;
            }

            //character
            this.character.show() ;
    
        /* FINAL --------------------------------------------------------*/
        if (paused) showPauseScreen() ;
    }
    
}