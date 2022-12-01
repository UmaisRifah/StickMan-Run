var h1 = 360,h2=250,l1,l2;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(147, 222, 255);  // r g b  (0-255)
  stroke(255, 255, 0);
  fill('black');
  text("x: " + mouseX, 10, 20); // displays the mouse's x location
  text("y: " + mouseY, 10, 40); // displays the mouse's y location
  // background(220);
  fill('black');
  stroke('grey');
  strokeWeight(0)
  circle(200, 195, 100);
  strokeWeight(10);
  stroke('black');
  line(200, 240, 200, 350);
  // fill('black');
  // stroke('black');
  
  line(200, 250, 250, 320);
  line(200, 250, 150, 320);
  // stroke('black');
  line(200, 350, h2, h1);
  line(200, 350, 180, 410);
  // stroke(255, 255, 0);
  line(250, 320, 280, 280);
  line(150,320,195,340);
  stroke('black');
  // stroke('black');
  line(h2,h1,240,420);
  line(180,410,120,400); 

  fill('white');
  strokeWeight(1);
  
  rect(215, 165, 25, 20, 15);
  fill('black');
  stroke('black')
  circle(229,175,15);
  fill('white');
  rotate();
  rect(225,211,20,10,0,0,10,0);
  stroke('black');

  strokeWeight(3);
  line(100,480,320,480);
  
  // if(h1>=360&&h1<380){
  //   h2 = h2 - 2.5;
  //   h1 = h1 +1;
  // }else{
  // h2 = h2 - 10;
  // h1 = h1 + 4;
  // }
}
function mousePressed(){
  
}

