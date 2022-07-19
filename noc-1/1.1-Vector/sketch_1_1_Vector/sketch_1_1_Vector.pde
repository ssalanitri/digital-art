
Ball b;

void setup(){
  
  size(400,300);
  b = new Ball();

}

void draw()
{
  background(255);
  b.move();
  b.bounce();
  b.display();

}

//PVector v1 = new PVector(100,-100);
//PVector v2 = new PVector(200,100);
