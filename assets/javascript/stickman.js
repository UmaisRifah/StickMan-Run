class Stickman {
    constructor() {
        this.r = 100;
        this.x = 80;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 2.2;
        // height= height-200;
    }

    jump() {
        if (this.y == height - this.r) {
            this.vy = -40;
        }

    }

    hits_d(train) {
        let x1 = this.x + this.r * 0.5;
        let y1 = this.y + this.r * 0.5;
        let x2 = train.x + this.r * 0.5;
        let y2 = train.y + this.r * 0.5;
        return collideCircleCircle(x1+550, y1, this.r, x2-60, y2, train.r);
    }

    hits_u(train) {
        let x1 = this.x + this.r * 0.5;
        let y1 = this.y + this.r * 0.5;
        let x2 = train.x + this.r * 0.5;
        let y2 = train.y + this.r * 0.5;
        return collideCircleCircle(x1+570 , y1-50, this.r, x2 -120 , y2, train.r);
    }
    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }
    show_walk() {
        image(sImg, this.x / 2 +300, this.y / 2 + 80, this.r-20, this.r + 50);
        // fill(255, 50);
        // ellipse(CORNER);
        // ellipse(this.x / 2 + 40 +300, this.y / 2 + 150, this.r+10, this.r + 50+10);
    }

    show_bend(){
        image(sbImg, this.x / 2 + 328, this.y / 2 + 115, this.r+10 , this.r+16 );
        // fill(255, 50);
        // rect(this.x / 2 + 326, this.y / 2 + 115, this.r + 10, this.r + 16);

    }
}