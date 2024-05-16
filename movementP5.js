let x, y;
let step = 200;
let center;

function setup() {
  createCanvas(800, 800);
  x = width / 2;
  y = height / 1.2;
  center = x;
}

function draw() {
  background(220);
  drawPlayer();
}

function drawPlayer() {
  fill(255, 1, 1);
  ellipse(x, y, 50, 50);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && x > 0) {
    x -= step;
  } else if (keyCode === RIGHT_ARROW && x < width) {
    x += step;
  }
}

function keyReleased() {
  x = center;
}