let player;
let enemies = [];
let carriles = [100, 200, 300];
let carrilesAncho = 100;
let carrilJugador = 1;
let velocidadEnemigo = 5;
let enemySpawnRate = 50; 
let timeElapsed = 0;
let keyIsPressed = false;
let puntuacion = 0;

function setup() {
  createCanvas(400, 600);
  player = new Player();
}

function draw() {
  background(0);

  timeElapsed++;
  if (timeElapsed % 300 === 0) {
    velocidadEnemigo += 0.5;
  }

  puntuacion = Math.floor(timeElapsed / 90); 
  textSize(20);
  fill(255); 
  textAlign(LEFT);
  text("Puntos: " + puntuacion, 10, 30);

  handlePlayerInput();

  player.move();
  player.display();

  if (frameCount % enemySpawnRate == 0) {
    enemies.push(new Enemy());
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    enemies[i].move();
    enemies[i].display();

    if (enemies[i].y > height) {
      enemies.splice(i, 1);
    }

    if (enemies[i].hits(player)) {
      noLoop();
      textSize(32);
      fill(255);
      textAlign(CENTER, CENTER);
      text("Has perdido!", width / 2, height / 2);
    }
  }
}


function keyPressed() {
  keyIsPressed = true;
  if (keyCode === LEFT_ARROW && carrilJugador > 0) {
    carrilJugador--;
  } else if (keyCode === RIGHT_ARROW && carrilJugador < 2) {
    carrilJugador++;
  }
}

function keyReleased() {
  keyIsPressed = false;
}

function handlePlayerInput() {
  if (!keyIsPressed) {
    carrilJugador = 1;
  }
}

class Player {
  constructor() {
    this.x = carriles[carrilJugador];
    this.y = height - 50;
    this.size = 50;
  }

  move() {
    this.x = carriles[carrilJugador];
  }

  display() {
    fill(0, 255, 225);
    rect(this.x - carrilesAncho / 2, this.y, carrilesAncho, this.size);
  }
}

class Enemy {
  constructor() {
    this.lane = floor(random(3));
    this.x = carriles[this.lane];
    this.y = 0;
    this.size = 50;
  }

  move() {
    this.y += velocidadEnemigo;
  }

  display() {
    fill(255, 0, 0);
    rect(this.x - carrilesAncho / 2, this.y, carrilesAncho, this.size);
  }

  hits(player) {
    return (
      this.y + this.size > player.y &&
      this.y < player.y + player.size &&
      this.lane === carrilJugador
    );
  }
}