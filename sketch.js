var player , playerimg;
var obstacles , obstacleimg;
var bg,bgimg ;


function setup() {
  createCanvas(800,400);
  bg = createSprite(350,400,50,400)
  bg.addImage(bgimg);
 bg.velocityY = 4;


}
function preload(){
playerimg = loadImage("1.png");
obstacleimg = loadImage("2].png");
bgimg = loadImage("4.jpg");

}

function draw() {
  background(0);
  console.log(bg.y)
  if (bg.y>400){
 bg.y =350

  } 

  drawSprites();

}