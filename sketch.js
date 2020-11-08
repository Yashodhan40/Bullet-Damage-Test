var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);
  weight=random(30,52);
  thickness = random(22,83);
  speed=random(223,321);
  
  
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor="black";

  
  
}

function draw() {
  background(20,100,230); 
  if (collision(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * speed * speed * weight/(thickness * thickness *thickness);
     
      if (damage<10)
      {
        wall.shapeColor="green";
      }
      if (damage>10)
      {
        wall.shapeColor="red";
      }
  }
  drawSprites();
}

function collision(bullet,wall){
   bulletRightEdge=bullet.x + bullet.width; wallLeftEdge=wall.x;

   if (bulletRightEdge>=wallLeftEdge)
   {
     return true;
   }
   else {
     return false;
   }
}