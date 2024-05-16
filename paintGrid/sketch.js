let numCols = 25;
let numRows = numCols;
let cellSize;
let escenario = [];

function setup() {
  createCanvas(1980, 1980);
  cellSize = width / numRows;

 
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      let cell = {
        x: x * cellSize,
        y: y * cellSize
      };
      escenario.push(cell);
    }
  }
}

function draw() {
  background(255);
  for (let i = 0; i < escenario.length; i++) {
    let cell = escenario[i];
    fill(255);
    stroke(0);
    rect(cell.x, cell.y, cellSize, cellSize);
  }
}
