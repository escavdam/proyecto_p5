let X, Y;
let step = 200;
let originalX;

function setup() {
  createCanvas(800, 800);
  X = width / 2;
  Y = height / 1.2;
  originalX = X;
}

function draw() {
  background(220);
  drawPlayer();
}

function drawPlayer() {
  fill(255, 1, 1);
  ellipse(X, Y, 50, 50);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && X > 0) {
    X -= step;
  } else if (keyCode === RIGHT_ARROW && X < width) {
    X += step;
  }
}

function keyReleased() {
  X = originalX;
}