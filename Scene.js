class Scene
{
    constructor(image, speed=2)
    {
        this.x = 0 ;
        this.y = 0 ;
        this.width = width*1.2;
        this.height = height ;
        this.image = image;
        this.speed = speed ;
        this.positions = [] ;
        this.positions.push(this.x, this.x+this.width) ;
    }

    show()
    {
        this.move() ;
        if (this.x <= (0-this.width))
        {
            image(this.image, this.x+this.width*2, this.y, this.width, this.height) ;
            image(this.image, this.x+this.width,   this.y, this.width, this.height) ;
            if (this.x == -this.width*2) this.x = 0 ;
        }
        else
        {
            image(this.image, this.x,            this.y, this.width, this.height) ;
            image(this.image, this.x+this.width, this.y, this.width, this.height) ;
        }
        
    }

    move()
    {
        this.x -= this.speed ;
    }
}