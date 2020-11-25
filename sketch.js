var thickness,wall;
var speed,weight,bullet;

function setup() {
  background("black");
  createCanvas(1600,400);
  bullet=createSprite(10,200,10,70);
  bullet.shapeColor="white";
  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321)
  weight=random(30,52)
}

function draw() { 
  background(0,0,0);
  function hasCollided(lbullet, lwall){
bullet.RightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
  }
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  }
  if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}
if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}

  drawSprites();
}