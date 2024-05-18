let imagenMouse;
let imagenes;
function preload(){
    imagenMouse = loadImage('assets/1.gif');
    imagenes = [
        loadImage('assets/2.gif'), 
        loadImage('assets/3.gif')];
}
function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(0);
    imageMode(CENTER)
    image(imagenMouse, mouseX, mouseY)
    imageMode(CORNER)
    image(imagenes[0], 0, 0);
    image(imagenes[1], 0, 100);
}