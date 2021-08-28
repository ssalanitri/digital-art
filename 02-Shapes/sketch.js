var x = 20;
var y = 10;
var z = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  circle(mouseX, mouseY, 50);
  stroke(y,z,x);
  strokeWeight(9)

  if(x < 255) x = x + 1;
  else x = 0;
  if(y < 100) y = y + 1;
  else y = 0;
  if(z < 70) z = z + 1;
  else z = 0;
}