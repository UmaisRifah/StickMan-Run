class Train2 {
    constructor() {
        this.r = 70;
        this.x = width*2 ;
        this.y = height - this.r;
    }
    move() {
        this.x -= 10;
    }
    show() {
        image(t2Img, this.x / 2, this.y / 2 +20 , this.r+50, this.r+20);
        // fill(255, 50);
        // ellipse(CORNER);
        // ellipse(this.x / 2+30, this.y / 2 + 200, this.r, this.r);
    }
}