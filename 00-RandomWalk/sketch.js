
let x;
let y;

function setup() {
  createCanvas(400 , 400);
  x = width / 2;
  y = height / 2;
  background(0);
}

function draw() {
  stroke(255,100);
  strokeweights(255,100);
  point(x,y);

  const r = floor(random(4));

  switch (r) {
    case 0: 
      x += 1;
      break;
    case 1: 
      x -= 1;
      break;
    case 2: 
      y += 1;
      break;
    case 3: 
      y -= 1;
      break;
  }
}
