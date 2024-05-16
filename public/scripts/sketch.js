let y1, y2, y3;
let objects = [];
let objectSpeed = 3;
let objectSize = 20;

function setup() {
  createCanvas(400, 600);
  y1 = 0;
  y2 = height / 4;
  y3 = height / 2;
}

function draw() {
  background(220);
  
  // Dibujar líneas
  for (let i = 1; i <= 3; i++) {
    let x = i * width / 3;
    line(x, 0, x, height);
  }
  
  // Mover objetos
  for (let i = objects.length - 1; i >= 0; i--) {
    let obj = objects[i];
    obj.y += objectSpeed;
    fill(255, 0, 0);
    ellipse(obj.x, obj.y, objectSize);
    if (obj.y > height) {
      objects.splice(i, 1); // Elimina objetos que salen de la pantalla
    }
  }
  

  if (frameCount % 60 === 0) {
    let randomLane = floor(random(3));
    let objectY;
    if (randomLane === 0) {
      objectY = y2;
    } else if (randomLane === 1) {
      objectY = y3;
    } else {
      objectY = y2 + (y3 - y2) / 2; // Entre y2 y y3
    }
    objects.push({x: width / 2, y: 0});
  }
}






































// let playerX = 0;
// let playerY = 0;
// let cellSize = 50; // Tamaño de cada celda
// let playerSpeed = 5; // Velocidad de movimiento del jugador

// // Flags para registrar el estado de las teclas
// let moveLeft = false;
// let moveRight = false;
// let moveUp = false;
// let moveDown = false;

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
  
//   // Mover al jugador según el estado de las teclas
//   if (moveLeft) {
//     playerX -= playerSpeed;
//   }
//   if (moveRight) {
//     playerX += playerSpeed;
//   }
//   if (moveUp) {
//     playerY -= playerSpeed;
//   }
//   if (moveDown) {
//     playerY += playerSpeed;
//   }
  
//   // Dibujar al jugador
//   fill(255, 0, 0);
//   rect(playerX, playerY, cellSize, cellSize);
// }

// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     moveLeft = true;
//   } else if (keyCode === RIGHT_ARROW) {
//     moveRight = true;
//   } else if (keyCode === UP_ARROW) {
//     moveUp = true;
//   } else if (keyCode === DOWN_ARROW) {
//     moveDown = true;
//   }
// }

// function keyReleased() {
//   if (keyCode === LEFT_ARROW) {
//     moveLeft = false;
//   } else if (keyCode === RIGHT_ARROW) {
//     moveRight = false;
//   } else if (keyCode === UP_ARROW) {
//     moveUp = false;
//   } else if (keyCode === DOWN_ARROW) {
//     moveDown = false;
//   }
// }