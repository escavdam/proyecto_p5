let playerX = 0;
let playerY = 0;
let cellSize = 50; // Tamaño de cada celda
let playerSpeed = 5; // Velocidad de movimiento del jugador

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Dibujar al jugador
  fill(255, 0, 0);
  rect(playerX, playerY, cellSize, cellSize);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    playerX -= playerSpeed;
  } else if (keyCode === RIGHT_ARROW) {
    playerX += playerSpeed;
  } else if (keyCode === UP_ARROW) {
    playerY -= playerSpeed;
  } else if (keyCode === DOWN_ARROW) {
    playerY += playerSpeed;
  }
}


//PRUEBAS