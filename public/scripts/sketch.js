let jugador
let enemigos = []
let spawn

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
    background(0,0,50)
    keyboardInputs()
    jugador.show()
    spawn.update()
  
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

class Spawns{
    constructor(){
        this.offset = 100;
        this.spawnPoints = [];
        this.spawnPoints.push(new Spawn(width / 2, 0));
        this.spawnPoints.push(new Spawn(width / 2 + this.offset, 0));
        this.spawnPoints.push(new Spawn(width / 2 - this.offset, 0));
    }

    update(){
        this.spawnPoints.forEach(spawn => spawn.show())
        
        
        if(frameCount % 100 === 0){
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