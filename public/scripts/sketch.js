let playerPositionX = 175
let playerPositionY = 325

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  
  line(100, 0, 100, height);
  line(200, 0, 200, height);
  line(300, 0, 300, height);
  
  
  fill(255, 0, 0);
  rect(playerPositionX, playerPositionY, 50, 50);
}

function keyPressed() {
  
  if (keyCode === LEFT_ARROW && playerPositionX > 75) {
    playerPositionX -= 100;
  } else if (keyCode === RIGHT_ARROW && playerPositionX < 275) {
    playerPositionX += 100;
  }
}