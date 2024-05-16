let jugador
let enemigos = []
let spawnTest

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    background(0,0,50)
    jugador = new Jugador()
    spawnTest = new Spawn(width/2, 0)
    rectMode(CENTER)
    ellipseMode(CENTER)
}
function draw(){
    background(0,0,50)
    keyboardInputs()
    jugador.show()
    spawnTest.show()
    if(frameCount%100 === 0){
        spawnTest.spawn()
    }
    enemigos.forEach(enemigo => enemigo.show())
    enemigos.forEach(enemigo => enemigo.move())
}

class Jugador{
    constructor(){
        this.x = width / 2
        this.y = height - 100
        this.s = 50
    }

    show(){
        ellipse(this.x, this.y, this.s)
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
}

class Enemigo{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.s = 50;
    }

    show(){
        rect(this.x, this.y, this.s)
    }

    move(){
        this.y++;
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
