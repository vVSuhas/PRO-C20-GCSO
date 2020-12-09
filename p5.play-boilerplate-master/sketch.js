var car1,car2,car3,car4,wall1,wall2,wall3,wall4;
var speed, weight;
var line1,line2,line3

function setup() {
  createCanvas(1600,400);
  car1=createSprite(50, 60, 30, 20);
  car1.shapeColor = "white";
  car2=createSprite(50, 150, 30, 20);
  car2.shapeColor = "yellow";
  car3=createSprite(50, 250, 30, 20);
  car3.shapeColor = "red";
  car4=createSprite(50, 350, 30, 20);
  car4.shapeColor = "lime";

  wall1=createSprite(1500,60,20,50)
  wall1.shapeColor = "brown";
  wall2=createSprite(1500,150,20,50)
  wall2.shapeColor = "brown";
  wall3=createSprite(1500,250,20,50)
  wall3.shapeColor = "brown";
  wall4=createSprite(1500,350,20,50)
  wall4.shapeColor = "brown";
 
  line1=createSprite(200,100,5000,10)
  line1.shapeColor = "white"
  line2=createSprite(200,200,5000,10)
  line2.shapeColor = "white"
  line3=createSprite(200,300,5000,10)
  line3.shapeColor = "white"

  speed=random(55,90);
  weight=random(400,1500);
  car1.velocityX = speed;
}

function draw() {
  background("black");  
  if(wall1.x-car1.x < (car1.width+wall1.width)/2){
    car1.velocityX=0;
    var deformation1=0.5 * weight * speed* speed/22509;
    if(deformation>180){
      car1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car1.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car1.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}