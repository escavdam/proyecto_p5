let jugador
let enemigos = []
let spawns

function setup(){
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    background(0,0,50)
    jugador = new Jugador()
    spawns = new Spawns()
    rectMode(CENTER)
    ellipseMode(CENTER)
}
function draw(){
    background(0,0,50)
    keyboardInputs()
    jugador.show()
    spawns.update()
    spawns.show()
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
        this.x = width / 2 - 200
    }

    moveRight(){
        this.x = width / 2 + 200
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

class Spawns{
    constructor(){
        this.offset = 200
        this.spawnPoints = []
        this.spawnPoints.push(new Spawn(width / 2, 0))
        this.spawnPoints.push(new Spawn(width / 2 + this.offset, 0))
        this.spawnPoints.push(new Spawn(width / 2 - this.offset, 0))
    }
    update(){
        // frameCount % 50 === 0 es casi el limite de velocidad que usaremos

        if(frameCount % 100 === 0){
            const moneda = random()
            console.log(moneda)
            if(moneda > 0.5){
                const elemento = random(this.spawnPoints)
                elemento.spawn()

            } else {
                const elemento = random(this.spawnPoints)
                elemento.spawn()
                const elemento2 = random(this.spawnPoints)
                elemento2.spawn()

            }
        }
    }
    show(){
        this.spawnPoints.forEach(spawn => spawn.show())
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
