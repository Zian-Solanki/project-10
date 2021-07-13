var ship
var shipimg
var seaimg
var sea;
function preload(){
shipimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg=loadImage("sea.png")
}

function setup(){
  createCanvas(600,300);
 
  sea=createSprite(300,130,600,300)
   sea.addImage("seapicture",seaimg)
   ship=createSprite(70,140,100,78)
   ship.addAnimation("ship photo",shipimg)
   sea.velocityX=-5
   sea.scale=0.5
ship.scale=0.2
}

function draw() {
  background("blue");
if(sea.x<0){
  sea.x=sea.width/22;
}


  drawSprites()
 
}