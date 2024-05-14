let playerX = 0;
let playerY = 0;
let cellSize = 50; // Tamaño de cada celda
let playerSpeed = 5; // Velocidad de movimiento del jugador

// Flags para registrar el estado de las teclas
let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Mover al jugador según el estado de las teclas
  if (moveLeft) {
    playerX -= playerSpeed;
  }
  if (moveRight) {
    playerX += playerSpeed;
  }
  if (moveUp) {
    playerY -= playerSpeed;
  }
  if (moveDown) {
    playerY += playerSpeed;
  }
  
  // Dibujar al jugador
  fill(255, 0, 0);
  rect(playerX, playerY, cellSize, cellSize);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    moveLeft = true;
  } else if (keyCode === RIGHT_ARROW) {
    moveRight = true;
  } else if (keyCode === UP_ARROW) {
    moveUp = true;
  } else if (keyCode === DOWN_ARROW) {
    moveDown = true;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    moveLeft = false;
  } else if (keyCode === RIGHT_ARROW) {
    moveRight = false;
  } else if (keyCode === UP_ARROW) {
    moveUp = false;
  } else if (keyCode === DOWN_ARROW) {
    moveDown = false;
  }
}