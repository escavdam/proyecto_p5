let imagenPlayer
let imagenEnemy
let imagenFondo
let jugador
let enemigos = []
let spawn
let puntuacion = 0;
let velocidad = Math.floor(Math.random() * (4 - 1) + 1)
function preload(){
    imagenPlayer = loadImage('imagenes/Player.gif')
    imagenEnemy = loadImage('imagenes/Enemy.gif')
    imagenFondo = loadImage('imagenes/background.jpg')
}
function setup(){
    createCanvas(600, 1000);
    colorMode(HSB, 360, 100, 100, 100);
    background(0,0,50)
    jugador = new Jugador()
    spawn = new Spawns()
    rectMode(CENTER)
    //ellipseMode(CENTER)
    imageMode(CENTER)
}
function draw(){
  background(0,0,250);
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
    fill(255,0,0); 
    console.log("Text color set to red");
    textAlign(CENTER, CENTER);
    text("Skill issue", width / 2, height / 2);
    let form = document.getElementById('gameOverScreen')
    form.style.display = 'block';
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
      this.s = 50
  }

  show(){
    imageMode()
    image(imagenPlayer, this.x, this.y, this.s, this.s)
      //ellipse(this.x, this.y, this.s)
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
          let distancia = dist(this.x + 2, this.y + 2, enemigo.x, enemigo.y);
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
      this.s = Math.floor(Math.random() * (60 - 20) + 20);
  }

    show(){
        imageMode()
        image(imagenEnemy, this.x, this.y, this.s, this.s)
        //rect(this.x, this.y, this.s)
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
        //rect(this.x, this.y, 20)
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