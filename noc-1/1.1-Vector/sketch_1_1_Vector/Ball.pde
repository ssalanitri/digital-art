
class Ball
{
  float x;
  float y;
  float xspeed;
  float yspeed;
  int f = 0;
  
  Ball()
  {
    x = width/2;
    y = height/2;
    xspeed = 2.5;
    yspeed = -1;
  }
  
  void move()
  {
    x = x + xspeed;
    y = y + yspeed;
  }
  
  void bounce()
  {
    if((x > width) || (x < 0)){
      xspeed = xspeed * -1;
    }
    if((y > height) || (y < 0)){
      yspeed = yspeed * -1;
    }
  }
  
  void display()
  {
    stroke(0);
    strokeWeight(2);
    if(f < 255) 
      fill(f++);
    else 
      f = 0;
    ellipse(x,y,48,48);
  }
}
