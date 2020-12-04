var bullet,wall,thickness;
var speed,weight;
function setup(){
    createCanvas(1600,200)
    thickness=random(22,38);
    weight=random(30,52);
    speed=random(223,321);
    weight=random(400,1500);
    car=createSprite(50,200,50,50);
    wall=createSprite(1500,200,60,height/2);
    wall.shapeColor=color(80,80,80);
}
function draw(){
    background(0);
    car.velocityX=speed;
if(wall.x-car.x <(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation>180)
{
  car.shapecolor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,10);
}
if(deformation<100)
{
  car.shapecolor=color(0,255,0);
}
}
if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
  wall.shapeColor=colour(255,0,0);
}

if(damage<10)
{
  wall.shapeColour(0,255,0)
}
}
    drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}