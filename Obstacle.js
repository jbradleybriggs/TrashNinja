class Obstacle
{
    constructor(image, imageWidth, imageHeight, speed=5)
    {
        this.image = image ;
        this.height = imageHeight ;
        this.width = imageWidth ; 
        this.x = width + 10 ;
        this.y = height - imageHeight ;
        this.speed = speed ;
    }

    show()
    {
        image(this.image, this.x, this.y, this.width, this.height) ;
    }

    finished()
    {
        return this.x < 0-this.width-5 ;
    }

    move()
    {
        this.x -= this.speed ;
        this.show() ;
    }
}