
var x = 0;
var y = 0;
var R = 0;
var G = 0;
var B = 0;
var A = 100;


function setup() {
  
  createCanvas(400, 400);
}

function draw() {

  background(R, G, B, A);
  stroke(0, 255, 100, 100)
  strokeWeight(2)
  circle(x,y, 50);
  stroke(255,0, 100, 100)
  //circle(200,200, 150);
  
  if(x < width)
  {
    x += 1;
  }
  else {
    x = 0;
    y += 20;
    R += 50;
    if(R > 255) 
    {
      R = 0;
      G += 50;
      if(G > 255) 
      {
        R = 0;
        G = 0;
        B += 50;
        if(B > 255) 
        {
          R = 0;
          G = 0;
          B = 0;
          A += 50;
          if(A > 255) 
          {
            R = 0;
            G = 0;
            B = 0;
            A = 100;
          }
        }
      }

    }

   } 
}
