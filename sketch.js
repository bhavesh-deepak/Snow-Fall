 const Engine = Matter.Engine; 
 const World= Matter.World;
  const Bodies = Matter.Bodies;
   const Constraint = Matter.Constraint; 


function preload(){
backGround = loadImage("snow1.jpg")
shivaImg = loadImage("snow3.jpg")

}

function setup() {
  createCanvas(800,400);
 shiva = createSprite(400, 200, 50, 50);
 shiva.addImage("shiva",shivaImg);
}

function draw() {
  background(backGround);  
 
  drawSprites();
}

function keyPressed(){
  if(keyPressed("UP_ARROW")){
    shiva.velocityX = shiva.velocityX+10
  }
}