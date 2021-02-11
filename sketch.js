var bgimg;
var ground;
var PLAY = 1,END = 0;
var gameState = PLAY;

function preload(){
  bgimg = loadImage("images/bg5.jpg");
  bubble1 = loadImage("images/bubble1.png");
  bubble2 = loadImage("images/bubble2.png");
  bubble3 = loadImage("images/bubble3.png");
  bubble4 = loadImage("images/bubble4.png");
}
function setup() {
  createCanvas(displayWidth-10, displayHeight-100);
  bg=createSprite(displayWidth/2, displayHeight-450,displayWidth, displayHeight);
  bg.addImage(bgimg);
  bg.scale= 2.6;

  bubbleGroup = new Group();
  
}

function draw() {
  //background(bgimg)
  if(gameState==PLAY){
    bg.velocityX = -2;
    if(bg.x <600){
      bg.x = displayWidth/2+10 ;
    }
    spwanBubbles();
  }
  else if(gameState==END){

  }
  drawSprites();
}

function spwanBubbles(){
  if(frameCount % 100 == 0){
    var bubble = createSprite(random(displayWidth/2-600,displayWidth/2+600),displayHeight/2+200);
    bubble.velocityY = -4;
    var rand= Math.round(random(1,4));
    switch(rand){
      case 1: bubble.addImage(bubble1);
      break;
      case 2: bubble.addImage(bubble2);
      break;
      case 3: bubble.addImage(bubble3);
      break;
      case 4: bubble.addImage(bubble4);
      break;
      default: break;
    }
    bubble.scale = 0.5;
    bubble.liftime = 300;
    bubbleGroup.add(bubble);
  }
}
  
  
