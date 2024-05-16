let playerX, playerY;
let playerSpeed = 200;
let originalPlayerX;

function setup() {
  createCanvas(800, 800);
  playerX = width / 2;
  playerY = height / 1.2;
  originalPlayerX = playerX;
}

function draw() {
  background(220);
  drawPlayer();
}

function drawPlayer() {
  fill(255, 1, 1);
  ellipse(playerX, playerY, 50, 50);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && playerX > 0) {
    playerX -= playerSpeed;
  } else if (keyCode === RIGHT_ARROW && playerX < width) {
    playerX += playerSpeed;
  }
}

function keyReleased() {
  playerX = originalPlayerX;
}