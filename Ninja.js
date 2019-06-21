class Ninja
{
    constructor(image)
    {
        this.r = 148 ;
        this.x = 50 ;
        this.bottom = height-this.r ;
        this.y = this.bottom ;
        this.vy = 0 ;
        this.gravity = 0.6 ;
        this.image = image ;
    }

    jump()
    {
        this.vy = -20;
    }

    move()
    {
        this.y += this.vy ;
        this.vy += this.gravity ;
        this.y = constrain(this.y, 0, this.bottom)
    }

    show()
    {
        image(this.image, this.x, this.y, 250, this.r) ;
        this.move() ;
    }

    hit(obstacle)
    {

    }
}