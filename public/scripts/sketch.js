const hello = "hello p5 👋"

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    background(255)
}
function draw(){
    background(360, 30)
    textSize(42);
    fill(frameCount%360, 100, 100, 100);
    stroke(0);
    strokeWeight(2)
    text(hello, noise(frameCount/100)*width, noise(frameCount/130)*height);
}