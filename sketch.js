let x = 200;
const originalX =200;
const y = 300;


function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  background(220);
  line (150, 0, 150, height);
  line (250, 0, 250, height);
  fill(200, 150, 150);
  ellipse(200, 300, 80, 80);
}

function keyPressed() {
  if (key === 'd' || key === 'D') {
    x += 50; // Mueve el personaje 50 píxeles a la derecha
  }
}

function keyReleased() {
  if (key === 'd' || key === 'D') {
    x = originalX; // Vuelve a la posición original
  }
}