let jugadorImg;
let enemigoImg;
let jugador;
let enemigos = [];
let spawn;
let puntuacion = 0;
let mejorPuntuacion = 0; // Mejor puntuación guardada
let velocidad = 1;
let vidas = 3; // Vidas del jugador

function preload() {
  jugadorImg = loadImage('hutao.jpg');
  enemigoImg = loadImage('discordmod.jpg');
}

function setup() {
  createCanvas(600, 800);
  colorMode(HSB, 360, 100, 100, 100);
  textFont('Arial');
  textAlign(CENTER, CENTER);
  jugador = new Jugador();
  spawn = new Spawns();
  rectMode(CENTER);
  imageMode(CENTER);

  // Cargar la mejor puntuación anteriormente guardada
  let puntuacionGuardada = localStorage.getItem('mejorPuntuacion');
  if (puntuacionGuardada !== null) {
    mejorPuntuacion = parseInt(puntuacionGuardada);
  }
}

function draw() {
  background(240, 30, 95); // Fondo en tono pastel

  keyboardInputs();
  jugador.show();
  spawn.update();

  // Update and show enemies
  for (let i = enemigos.length - 1; i >= 0; i--) {
    let enemigo = enemigos[i];
    enemigo.show();
    enemigo.move();

    if (!enemigo.isOnScreen()) {
      enemigos.splice(i, 1);
      // Increase difficulty
      velocidad += 0.25;
      spawn.delay -= 1;
    }

    // Check collision with jugador
    if (jugador.checkCollision(enemigo)) {
      enemigos.splice(i, 1);
      vidas--; // Restar una vida
      if (vidas <= 0) {
        if (key === 'r' || key === 'R') {
            resetGame();
          }
        gameOver();
      }
    }
  }

  // Display vidas
  fill(30);
  textSize(20);
  text(`Vidas: ${vidas}`, width - 70, 30);

  // Update score
  puntuacion = Math.floor(frameCount / 90);

  // Display score on the left
  text(`Puntuación: ${puntuacion}`, 70, 30);

  // Display best score
  fill(30);
  text(`Mejor Puntuación: ${mejorPuntuacion}`, width / 2, height - 30);
}

class Jugador {
  constructor() {
    this.x = width / 2;
    this.y = height - 100;
    this.s = 50; // Tamaño del jugador
  }

  show() {
    image(jugadorImg, this.x, this.y, this.s, this.s); // Dibujar jugador con la imagen
  }

  moveLeft() {
    this.x = width / 2 - 100;
  }

  moveRight() {
    this.x = width / 2 + 100;
  }

  moveCenter() {
    this.x = width / 2;
  }

  checkCollision(enemigo) {
    let distancia = dist(this.x, this.y, enemigo.x, enemigo.y);
    if (distancia < this.s / 2 + enemigo.s / 2) {
      return true;
    }
    return false;
  }

  reset() {
    this.x = width / 2;
    this.y = height - 100;
  }
}

class Enemigo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.s = 50; // Tamaño del enemigo
  }

  show() {
    image(enemigoImg, this.x, this.y, this.s, this.s); // Dibujar enemigo con la imagen
  }

  move() {
    this.y += velocidad;
  }

  isOnScreen() {
    return this.y < height + this.s;
  }
}

class Spawn {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    fill(30);
    noStroke();
    rect(this.x, this.y, 20);
  }

  spawn() {
    enemigos.push(new Enemigo(this.x, this.y));
  }
}

class Spawns {
  constructor() {
    this.offset = 100;
    this.delay = 100;
    this.spawnPoints = [];
    this.spawnPoints.push(new Spawn(width / 2, 0));
    this.spawnPoints.push(new Spawn(width / 2 + this.offset, 0));
    this.spawnPoints.push(new Spawn(width / 2 - this.offset, 0));
  }

  update() {
    this.spawnPoints.forEach((spawn) => spawn.show());

    if (frameCount % this.delay === 0) {
      const moneda = random();
      const shuffledArray = shuffle(this.spawnPoints);
      if (moneda > 0.5) {
        shuffledArray[0].spawn();
        shuffledArray[1].spawn();
      } else {
        shuffledArray[0].spawn();
      }
    }
  }
}

function keyboardInputs() {
  if (keyIsPressed) {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      jugador.moveLeft();
    }

    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      jugador.moveRight();
    }

    // Resetear juego con la tecla R
    if (key === 'r' || key === 'R') {
      resetGame();
    }
  } else {
    jugador.moveCenter();
  }
}

function resetGame() {
  // Reiniciar variables
  puntuacion = 0;
  vidas = 3;
  velocidad = 1;
  enemigos = [];
  jugador.reset();
  loop(); // Reanudar el ciclo de draw
}

function gameOver() {
  // Guardar la mejor puntuación si la puntuación actual es mayor
  if (puntuacion > mejorPuntuacion) {
    mejorPuntuacion = puntuacion;
    localStorage.setItem('mejorPuntuacion', mejorPuntuacion);
  }
  if (key === 'r' || key === 'R') {
    resetGame();
  }
  noLoop();
  textSize(32);
  fill(255, 0, 0); // Color rojo para el texto de Game Over
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
}

// Evitar que la página se desplace al presionar teclas
window.addEventListener('keydown', function (e) {
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
    e.preventDefault();
  }
}, false);








