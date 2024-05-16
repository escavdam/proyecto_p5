function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    let x = width/2;
    let y = height - 50;
    line(width/3, 0, width/3, height);
    line(width/3*2, 0, width/3*2, height);
    if (keyCode === LEFT_ARROW) {
      x = width/6;
    }else if (keyCode === RIGHT_ARROW) {
      x = width/6*5;
    }else{
      x = width/2;
    }
    ellipse(x, y, 50);
  }