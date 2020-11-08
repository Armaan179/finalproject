var playerName;
var gameState=0;
var form;
var plr, plr2;
var bgimage,plrimage,compimage;
var wall,wall2,wall3,wall4wall5;
var wallImage,wall2Image,wall3Image,wall4Image,wall5image;


function preload(){
  bgimage = loadImage("track.png");
  plrimage = loadImage("running-removebg-preview.png");
  compimage = loadImage("pic.png");
  wallImage = loadImage("wall.png");

}

function setup() {

  createCanvas(displayWidth,displayHeight);
  if (gameState===0) {
    form = new Form();
    form.display();
    plr = createSprite(1225,825,50,200);
    plr.scale = 0.3
    plr2 = createSprite(200,825,50,200);
    plr2.scale = 0.5
    wall = createSprite(1220,500,250,50);
    wall.scale = 0.4
    wall2 = createSprite(890,280,280,50);
    wall2.scale = 0.4
    wall3 = createSprite(560,480,280,50);
    wall3.scale = 0.4
    wall4 = createSprite(230,660,280,50);    
    wall4.scale = 0.4
    wall5 = createSprite(230,260,280,50);
    wall5.scale = 0.4
//    plr2.debug=true;

  }
  
 
}

function draw() {

  if (gameState === 1) {
    playGame();
  }

}
function playGame(){
   background(255,255,255);
  image(bgimage, 0,-displayHeight*3.5,displayWidth, displayHeight*5);
  plr.addImage("plr",plrimage);
//  plr.debug=true;
  plr.setCollider("rectangle",0,0,75,250);
  plr2.addImage("plr2",compimage);
  plr2.setCollider("rectangle",0,0,75,250);
  wall.addImage("wall",wallImage)
//  wall.debug=true;
  wall.setCollider("rectangle",0,0, 510,200,10);
  wall2.addImage("wall2",wallImage)
  wall2.setCollider("rectangle",0,0, 510,200,10);
  wall3.addImage("wall3",wallImage)
  wall3.setCollider("rectangle",0,0, 510,200,10);
  wall4.addImage("wall4",wallImage)
  wall4.setCollider("rectangle",0,0, 510,200,10);
  wall5.addImage("wall5",wallImage)
  wall5.setCollider("rectangle",0,0, 510,200,10);

  //add movement here

  if (keyDown("UP_ARROW")) {
    plr.velocityY=-3;
  }
  if (keyDown("RIGHT_ARROW")) {
    plr.velocityX=3;
  }
  if (keyDown("LEFT_ARROW")) {
    plr.velocityX=-3;
  }
  if (keyDown("DOWN_ARROW")) {
    plr.velocityY=3;
  }



  if (keyDown("w")) {
    plr2.velocityY=-3;
  }
  if (keyDown("d")) {
    plr2.velocityX=3;
  }
  if (keyDown("a")) {
    plr2.velocityX=-3;
  }
  if (keyDown("s")) {
    plr2.velocityY=3;
  }
  


  if (plr.isTouching(wall)||plr.isTouching(wall3)) {
    plr.x=1225;
    plr.y=825;
  }
  if(plr.x<730) {
    plr.x=1225;
    plr.y=825;
  }

 if (plr2.isTouching(wall3)||plr2.isTouching(wall4)||plr2.isTouching(wall5)) {
   plr2.x=200;
   plr2.y=825;
  }
  if(plr2.x>730) {
    plr2.x=200;
    plr2.y=825;
  }
  if (plr.y<100) {
 text(playerName + " Wins! Refresh to play again.",730,200);
  }
  if (plr2.y<100) {
    text("Arnav Wins! Refresh to play again.",730,200);
     }

  drawSprites();
}
