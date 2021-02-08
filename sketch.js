var fixedRect, movingRect;
var fixedRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  fixedRect1 = createSprite(600, 400, 50, 80);
  fixedRect1.shapeColor = "yellow";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  
  if(isTouching(movingRect,fixedRect))
  {
movingRect.shapeColor = "blue";
fixedRect.shapeColor = "blue";
}
 else if (isTouching(movingRect,fixedRect1)){
  movingRect.shapeColor = "blue";
  fixedRect1.shapeColor = "blue";
 }
  else
  {
    movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";

fixedRect1.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(movingRect,fixedRect)
{
//collision detection algo

if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
return true;
}
else {
return false;
}
} 