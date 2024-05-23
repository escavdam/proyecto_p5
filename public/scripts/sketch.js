let jugador
let enemigos = []
let spawn
let puntuacion = 0;
let velocidad = 1
let jugadorImg;
let enemigoImg;

function preload() {
    jugadorImg = loadImage('assets/player.png');
    enemigoImg = loadImage('assets/enemy.png');
}
function setup(){
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100, 100);
    background(0,0,50)
    jugador = new Jugador()
    spawn = new Spawns()
    rectMode(CENTER)
    ellipseMode(CENTER)
}
function draw(){
  background(0,0,50);
  keyboardInputs();
  jugador.show();
  spawn.update();

  enemigos.forEach(enemigo => enemigo.show());
  enemigos.forEach(enemigo => enemigo.move());
  enemigos.forEach(enemigo => {
    if(!enemigo.isOnScreen()){
      velocidad += 0.25
      spawn.delay -= 1
      console.log(velocidad)
    }
  })
  enemigos = enemigos.filter(enemigo => enemigo.isOnScreen());
  
  if(jugador.checkCollision(enemigos)){
    console.log("Game Over block executed");
    noLoop(); 
    textSize(32);
    fill(255,0,0); // Cambio el color a rojo (255,0,0)
    console.log("Text color set to red");
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
}

  puntuacion = Math.floor(frameCount / 90);

  textSize(20);
  fill(0);
  textAlign(LEFT);
  text("Puntuación: " + puntuacion, 10, 30);
}


class Jugador{
  constructor(){
      this.x = width / 2
      this.y = height - 100
      this.s = 30
  }

  show(){
    image(jugadorImg, this.x - this.s / 2, this.y - this.s / 2, this.s, this.s);
  }

  moveLeft(){
      this.x = width / 2 - 100
  }

  moveRight(){
      this.x = width / 2 + 100
  }

  moveCenter(){
      this.x = width / 2
  }

  checkCollision(enemigos){
      for(let i = 0; i < enemigos.length; i++){
          let enemigo = enemigos[i];
          let distancia = dist(this.x, this.y, enemigo.x, enemigo.y);
          if(distancia < (this.s / 2 + enemigo.s / 2)){
              return true; 
          }
      }
      return false; 
  }
}

class Enemigo {
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.s = 50;
  }

    show(){
        image(enemigoImg, this.x - this.s / 2, this.y - this.s / 2, this.s, this.s);

    }

    move(){
        this.y+= velocidad;
    }

    isOnScreen(){
      return this.y < height + this.s;
    }
}

class Spawn{
    constructor(x, y){
        this.x = x
        this.y = y
    }

    show(){
        rect(this.x, this.y, 20)
    }

    spawn(){
        enemigos.push(new Enemigo(this.x, this.y))
    }
}

class Spawns{
    constructor(){
        this.offset = 100;
        this.delay = 100
        this.spawnPoints = [];
        this.spawnPoints.push(new Spawn(width / 2, 0));
        this.spawnPoints.push(new Spawn(width / 2 + this.offset, 0));
        this.spawnPoints.push(new Spawn(width / 2 - this.offset, 0));
    }

    update(){
        this.spawnPoints.forEach(spawn => spawn.show())
        
        if(frameCount % this.delay === 0){
            const moneda = random()
            const shuffledArray = shuffle(this.spawnPoints)
            if(moneda > 0.5){
                shuffledArray[0].spawn()
                shuffledArray[1].spawn()
            } else {
                shuffledArray[0].spawn()
            }
        }

    }
}

function keyboardInputs(){
    if(keyIsPressed){
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { //65
            jugador.moveLeft();
        }
  
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            jugador.moveRight()
        }     
    } else {
        jugador.moveCenter()
    }    
}