let stickman;
let sImg;
let sbImg;
let tImg;
let t2Img;
let bImg;
let trains = []
let trains2 = []
var x1 = 0;
var x2;
var scrollSpeed = 2;


function preload() {
    sImg = loadImage('../assets/images/walk.gif');
    sbImg = loadImage('../assets/images/bend.gif');
    tImg = loadImage('../assets/images/abs1.png');
    t2Img = loadImage('../assets/images/abs2.png');
    bImg = loadImage('../assets/images/b1.png');
}

function setup() {
    createCanvas(1510, 500);
    stickman = new Stickman();
    x2 = width;
}

function mousePressed() {
    stickman.jump();
}


function keyPressed() {
    if (key == ' ') {
        stickman.jump();
    }
    if (keyIsDown(UP_ARROW)) {
        stickman.jump();

    }
}

function draw() {
    if (random(1) < 0.005) {
        trains2.push(new Train2());
    }else if (random(1) < 0.009) {
        trains.push(new Train());
    }

    // collideRectRect(200,200,100,150,mouseX,mouseY,50,75);
    // background(bImg);

    image(bImg, x1, 0, width, height);
    image(bImg, x2, 0, width, height);

    x1 -= scrollSpeed;
    x2 -= scrollSpeed;

    if (x1 < -width) {
        x1 = width;
    }
    if (x2 < -width) {
        x2 = width;
    }

    for (let t of trains) {
        t.move();
        t.show();
        if (stickman.hits_d(t)) {
            console.log('game over');
            noLoop();
        }
    }

    for (let t2 of trains2) {
        t2.move();
        t2.show();
        if (stickman.hits_u(t2) && !keyIsDown(DOWN_ARROW)) {
            console.log('game over');
            noLoop();
        } else if (stickman.hits_u(t2) && keyIsDown(UP_ARROW)){
            console.log('game over');
            noLoop();
        }
    }

    if(keyIsDown(DOWN_ARROW)){
        stickman.show_bend();

    }
    if (!keyIsDown(DOWN_ARROW)){
        stickman.show_walk();
    }
    
    stickman.move(); 
}