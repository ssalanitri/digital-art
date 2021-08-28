
var R = 0;
var G = 0;
var B = 0;
var A = 100;
var r = 10;

function setup() {
  createCanvas(100 , 1200);
}

function draw() {
  stroke(R, G, B, A)
  circle(mouseX, mouseY, r);
  
  
  if(r < 100) r += 1;
  else 
  {
    r = 10;
    R += 5;
    if(R > 255) 
    {
      R = 0;
      G += 10;
      if(G > 255) 
      {
        R = 0;
        G = 0;
        B += 10;
        if(B > 255) 
        {
          R = 0;
          G = 0;
          B = 0;
          A += 10;
          if(A > 255) 
          {
            R = 0;
            G = 0;
            B = 0;
            A = 100;
          }
          else
          {
            R = 255;
            G = 0;
            B = 0;
            A = 255;
            r = 10;
          }
        }
      }
    }
  }
}

