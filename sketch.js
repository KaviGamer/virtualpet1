//Create variables here
var dog;
var dogIMG
var happyDog;
var happyDogIMG
var database;
var foodS;
var foodStock;
function preload()
{
  //load images here
  dogIMG = loadImage("images/dogImg.png");
  happyDogIMG = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage("irdk1",dogIMG);
  dog.scale = 0.2;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
 writeStock(foodS);
 dog.addImage("irdk1",happyDogIMG);
}
fill("black");
textSize(50);
text("Milk Left:"+foodS,125,50);
  drawSprites();
  //add styles here

}

function readStock(data){
foodS = data.val();
}

function writeStock(value){
  if(value<=0){
    value = 0;
  }else{
    value=value-1;
  }
  database.ref('/').update({Food:value})
  }