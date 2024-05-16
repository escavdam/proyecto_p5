let canvasWidth;
let playerStart;

function setup() {
  createCanvas(400, 400);
  canvasWidth = width / 3; // Dividir el ancho del canva en tres carriles
  playerStart = 2; // Iniciar al jugador en el carril medio
}

function draw() {
  background(220);
  
  // Dibujar los carriles
  stroke(0);
  strokeWeight(2);
  for (let i = 1; i <= 3; i++) {
    line(i * canvasWidth, width, i * canvasWidth, 0);
  }
  
  // Dibujar al jugador en su carril
  fill(255, 0, 0);
  circle(playerStart * canvasWidth - canvasWidth / 2, height / 2, 50);
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