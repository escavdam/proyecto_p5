let playerPositionX = 175
let playerPositionY = 500
let player;
let obstacles = [];
let groundLevel = 300;
let score = 0;
let gameOver = false;
let img;

function setup() {
  createCanvas(400, 500);
  player = new Player();
}

function draw() {
  background(220);
  
  if (!gameOver) {
    player.show();
    player.update();
    generateObstacles();
    moveObstacles();
    checkCollisions();
    displayScore();
  } else {
    displayGameOver();
  }
  
  line(100, 0, 100, height);
  line(200, 0, 200, height);
  line(300, 0, 300, height);

}

function generateObstacles() {
  if (frameCount % 20 == 0) {
    let obstacle = new Obstacle();
    obstacles.push(obstacle);
  }
}

function moveObstacles() {
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].move();
    obstacles[i].show();
    if (obstacles[i].offscreen()) {
      obstacles.splice(i, 1);
      score++;
    }
  }
}

function checkCollisions() {
  for (let obstacle of obstacles) {
    if (player.hits(obstacle)) {
      gameOver = true;
    }
  }
}

function displayScore() {
  fill(0);
  textSize(20);
  text("Score: " + score, 20, 30);
}

function displayGameOver() {
  fill(255, 0, 0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
  textSize(20);
  text("Final Score: " + score, width / 2, height / 2 + 50);
}


function keyPressed() { 
   if (keyCode === LEFT_ARROW && playerPositionX > 75) {
    player.x -= 100;
  } else if (keyCode === RIGHT_ARROW && playerPositionX < 275) {
    player.x  += 100;
  }
  
}

class Player {
  constructor() {
    this.x = 190;
    this.y = groundLevel;
    this.width = 20;
    this.height = 20
    this.speed = 0;
  }

  update() {
    
    
  }

  show() {
    fill(255, 0, 0);
    img = loadImage('scripts/insecto.png');
    rect(this.x, this.y - this.height, this.width, this.height);
    
  }

  hits(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    );
  }
}

class Obstacle {
  constructor() {
    let val = [90, 190,290];
    this.x = random([90, 190,290]);
    this.y = -20; // Starting position from the top
    this.width = 20;
    this.height = 20;
    this.speed = 7;
  }

  move() {
    this.y += this.speed;
  }

  show() {
    fill(0);
    rect(this.x, this.y, this.width, this.height);
  }

  offscreen() {
    return this.y > height;
  }
}