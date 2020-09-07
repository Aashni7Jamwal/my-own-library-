var fixedRect, movingRect,gameObj1,gameObj2,gameObj3,gameObj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  //fixedRect.velocityY = +5;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //movingRect.velocityY = -5;
  
  gameObj1=createSprite(600,200,100,50);
  gameObj1.velocityX=15;

  gameObj2=createSprite(1100,200,40,40);
  gameObj2.velocityX=-10;

  gameObj3=createSprite(200,100,100,50);
  gameObj3.velocityY=15;

  gameObj4=createSprite(200,700,40,40);
  gameObj4.velocityY=-10;

}

function draw() {
  background(0,0,0);  

  bounceOff(gameObj1,gameObj2);
  bounceOff(gameObj3,gameObj4);

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if (isTouching(fixedRect,movingRect)===true){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }

  drawSprites();
}

