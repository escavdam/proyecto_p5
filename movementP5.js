
let cols, rows;
let cellSize = 50;
let playerX = 0.5, playerY = 0.5;

function setup() {
  createCanvas(400, 400);
  cols = width / cellSize;
  rows = height / cellSize;
}

function draw() {
  background(220);
  drawGrid();
  drawPlayer();
}

function drawGrid() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill(255);
      stroke(0);
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}

function drawPlayer() {
  fill(255, 0, 0);
  ellipse(playerX * cellSize, playerY * cellSize, cellSize, cellSize);
}

// max y min para que el player 
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    playerX = max(0.5, playerX - 1);
  } else if (keyCode === RIGHT_ARROW) {
    playerX = min(cols - 0.5, playerX + 1);
  } else if (keyCode === UP_ARROW) {
    playerY = max(0.5, playerY - 1);
  } else if (keyCode === DOWN_ARROW) {
    playerY = min(rows - 0.5, playerY + 1);
  }
}