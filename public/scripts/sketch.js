let canvasHeight;
let canvasSpeed = 1;
let canvasY = 0;
let playerStart;

function setup() {
  createCanvas(400, 400);
  canvasHeight = height / 3; // Dividir el ancho del lienzo en tres carriles
  playerStart = 2; // Iniciar al jugador en el carril medio
}

function draw() {
  background(220);
  
  // canvasY += canvasSpeed;
  // if (canvasY > canvasHeight) {
  //   canvasY = 0;
  // }

  // Dibujar los carriles
  stroke(0);
  strokeWeight(2);
  for (let i = 1; i <= 3; i++) {
    line(i * canvasHeight + canvasY, width, i * canvasHeight + canvasY, 0);
  }
  
  // Dibujar al jugador en su carril
  fill(255, 0, 0);
  circle(playerStart * canvasHeight - canvasHeight / 2, height / 2, 50);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && playerStart > 1) {
    playerStart--;
  } else if (keyCode === RIGHT_ARROW && playerStart < 3) {
    playerStart++; 
  }
}

function keyReleased(){
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    playerStart = 2;
  }
}