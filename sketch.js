var climber,climberImage,door,doorImage;
var gameState = "play";
var spooky,spookyImage,tower,towerImage;
var ghostJumping, ghostStanding;
var climberGroup,doorGroup,invisiblefloorGroup;
var invisblefloor;






function preload(){
  climberImage = loadImage("climber.png");
  doorImage = loadImage("door.png")
  spookyImage = loadImage("ghost-standing.png");
  towerImage = loadImage("tower.png")
  
  
}


function setup(){
  createCanvas(500,500);
  tower = createSprite(250,0,0);
  tower.addImage(towerImage);
  //tower.y = tower.height/2;
  tower.scale = 0.9;
  
  
  
  
  
  spooky = createSprite(200,200,10,10);
  spooky.addImage(spookyImage);
  spooky.scale = 0.35;
  
 
  climberGroup = new Group();
  invisiblefloorGroup = new Group();
  
}

function draw(){
  background("white");
  if(gameState ==="play"){
  climberObstacle();
  tower.velocityY = 4;
  if(tower.y>500){
    tower.y = 250
  }
  
  if(keyDown("space")){
    spooky.velocityY = -5;
  }
  
  spooky.velocityY = spooky.velocityY + 0.8;
  
  if(keyDown(LEFT_ARROW)){
    spooky.x = spooky.x-5;
  }
  
  if(keyDown(RIGHT_ARROW)){
    spooky.x = spooky.x+5;
  }
  
  if(spooky.isTouching(climberGroup)){
    spooky.velocityY = 0;
    
  }
  
  if(spooky.isTouching(invisiblefloorGroup)){
      gameState = "end";
  }
  if(spooky.y>500){
    gameState = "end"
  }
  
  
  drawSprites();
  }
    else if(gameState == "end"){
      background("black");
      textSize(35);
      fill("yellow")
      text("Game Over",150,100);
      
    }
}

function climberObstacle(){
  if(frameCount%120==0){
    climber = createSprite(0,0,10,10);
    door = createSprite(0,-70,10,10);
    invisiblefloor = createSprite(0,10,80,10);
    door.addImage(doorImage);
    climber.addImage(climberImage);
    climber.x = Math.round(random(100,450));
    climber.velocityY = 3;
    door.x = climber.x;
    invisiblefloor.x = climber.x;
    invisiblefloor.velocityY = 3;
    invisiblefloor.visible = false;
    door.velocityY = 3;
    door.depth = spooky.depth
    climber.depth = spooky.depth
    spooky.depth = spooky.depth +1;
    climberGroup.add(climber);
    invisiblefloorGroup.add(invisiblefloor)
  }
}