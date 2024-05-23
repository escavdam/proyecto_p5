let jugador;
let enemigos = [];
let spawn;
let puntuacion = 0;
let velocidad = 1;
let jugadorImg, enemigoImg;

function preload(){
    jugadorImg = loadImage('assets/jugador.png');
    enemigoImg = loadImage('assets/enemigo.png');
}

function setup(){
    createCanvas(600, 900);
    colorMode(HSB, 360, 100, 100, 100);
    background(0,0,50);
    jugador = new Jugador();
    spawn = new Spawns();
    rectMode(CENTER);
    ellipseMode(CENTER);
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
            velocidad += 0.25;
            spawn.delay = max(spawn.delay - 1, 20);
            console.log(velocidad);
        }
    });
    enemigos = enemigos.filter(enemigo => enemigo.isOnScreen());
  
    if(jugador.checkCollision(enemigos)){
        jugador.vida--;
        if (jugador.vida <= 0) {
            console.log("Game Over block executed");
            noLoop(); 
            textSize(32);
            fill(255,0,0);
            console.log("Text color set to red");
            textAlign(CENTER, CENTER);
            text("Game Over", width / 2, height / 2);
        }
    }

    puntuacion = Math.floor(frameCount / 90);

    textSize(20);
    fill(0);
    textAlign(LEFT);
    text("Puntuación: " + puntuacion, 10, 30);
    text("Vida: " + jugador.vida, 10, 50);
}

class Jugador{
    constructor(){
        this.x = width / 2;
        this.y = height - 100;
        this.s = 30;
        this.vida = 3;
    }

    show(){
        noSmooth();
        imageMode(CENTER);
        image(jugadorImg, this.x, this.y, this.s, this.s/2);
    }

    moveLeft(){
        this.x = width / 2 - 100;
    }

    moveRight(){
        this.x = width / 2 + 100;
    }

    moveCenter(){
        this.x = width / 2;
    }

    checkCollision(enemigos){
        for(let i = 0; i < enemigos.length; i++){
            let enemigo = enemigos[i];
            let distancia = dist(this.x, this.y, enemigo.x, enemigo.y);
            if(distancia < (this.s / 2 + enemigo.s / 2)){
                enemigos.splice(i, 1);
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
        this.s = random(20, 50);
    }

    show(){
        imageMode(CENTER);
        image(enemigoImg, this.x, this.y, this.s, this.s);
    }

    move(){
        this.y += velocidad;
    }

    isOnScreen(){
        return this.y < height + this.s;
    }
}

class Spawn{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    show(){
    }

    spawn(){
        enemigos.push(new Enemigo(this.x, this.y));
    }
}

class Spawns{
    constructor(){
        this.offset = 100;
        this.delay = 100;
        this.spawnPoints = [];
        this.spawnPoints.push(new Spawn(width / 2, 0));
        this.spawnPoints.push(new Spawn(width / 2 + this.offset, 0));
        this.spawnPoints.push(new Spawn(width / 2 - this.offset, 0));
    }

    update(){
        this.spawnPoints.forEach(spawn => spawn.show());
        
        if(frameCount % this.delay === 0){
            const moneda = random();
            const shuffledArray = shuffle(this.spawnPoints);
            if(moneda > 0.5){
                shuffledArray[0].spawn();
                shuffledArray[1].spawn();
            } else {
                shuffledArray[0].spawn();
            }
        }
    }
}

function keyboardInputs(){
    if(keyIsPressed){
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { 
            jugador.moveLeft();
        }
  
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            jugador.moveRight();
        }     
    } else {
        jugador.moveCenter();
    }    
}

function gameOver() {
    noLoop();
    textSize(32);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
    
    // Crear el formulario para ingresar el nombre
    const form = document.createElement('form');
    form.innerHTML = `
        <label for="nombre">Ingresa tu nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <button type="submit">Enviar</button>
    `;
    document.body.appendChild(form);

    // Manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        if (nombre.trim() !== "") {
            enviarPuntuacion(nombre);
        } else {
            alert('Por favor, ingresa tu nombre antes de enviar.');
        }
    });
}

function enviarPuntuacion(nombre) {
    const url = '/puntos';
    const data = {
        nombre: nombre,
        puntuacion: puntuacion // Aquí debes usar la puntuación actual del juego
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Puntuación guardada:', data);
    })
    .catch(error => {
        console.error('Hubo un problema con la petición:', error);
    });
}
function detectarColision() {
    if (jugador && enemigos) {
        if (jugador.checkCollision(enemigos)) {
            jugador.vida--;
            if (jugador.vida <= 0) {
                gameOver();
            }
        }
    }
}

