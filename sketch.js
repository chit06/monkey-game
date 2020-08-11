
var  monkey,bananangroup,ground,monkeyimg,bananaimg,groundimg,ground,ground1;              
function preload(){
  monkeyimg=loadAnimation("monkey_01.png","monkey_02.png","monkey_03.png","monkey_04.png","monkey_05.png","monkey_06.png","monkey_07.png","monkey_08.png","monkey_09.png","monkey_10.png");
  groundimg=loadImage("jungle.jpg");
  bananaimg=loadImage("banana.png");
  
}


function setup() {
  createCanvas(600,300);
  monkey=createSprite(20,280,10,60)
  monkey.addAnimation("kar",monkeyimg);
}


function draw(){
 background(255);
  drawSprites();
}