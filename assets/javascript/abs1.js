class Train {
    constructor() {
        this.r = 70;
        this.x = width * 2;
        this.y = height - this.r;
    }
    move() {
        this.x -= 10;
    }
    show() {
        image(tImg, this.x / 2, this.y / 2 + 160, this.r, this.r);
        // fill(255, 50);
        // ellipse(CORNER);
        // ellipse(this.x / 2+30, this.y / 2 + 200, this.r, this.r);
    }
}