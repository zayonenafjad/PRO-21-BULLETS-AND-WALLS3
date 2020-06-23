var bullet,wall;
var speed,weight;
var thickness
var bulletrightedge,wallLeftedge



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  bullet=createSprite(50, 200, 30, 20);
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
  wall.shapeColor=color(80,80,80)
  bullet.collide(wall)
}
  


function draw() {
  background(0);

hasCollided(bullet,wall)

if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/thickness*thickness*thickness;

if(damage>10){
bullet.shapeColor=color("red")

}

if(damage<10){
 bullet.shapeColor("green")
}

if(damage===10){
bullet.shapeColor=color("yellow")

}
}
   drawSprites()
}


function hasCollided(bullet,wall){
bulletrightedge=bullet.x+bullet.width;
wallLeftedge=wall.x;
if(bulletrightedge>=wallLeftedge){
  return true
}
return false;


}