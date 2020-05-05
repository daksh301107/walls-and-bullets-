var wall,thickness;
var speed,bullet,weight;
function setup()
{
  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height);
  bullet = createSprite(0,random(0,400),50,20)
}
function draw(){
  background(0);
  wall.shapeColor=rgb(80,80,80);
 // wall.thickness=random(50,100);
  
  speed=random(223,321);
  weight=random(30,52);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  bullet.mass=weight;
  if(bullet.isTouching(wall)){
    bullet.velocity=0;
    Damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(Damage>10){
      wall.shapeColor="red";

    }
    else{
      wall.shapeColor="green";
    }
  }
  drawSprites();
}

