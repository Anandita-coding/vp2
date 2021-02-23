var dog , happyDog
var foodS,foodStock
var foodImage,food
var feed, addfood;

function preload()
{
  //load images here
  
  dogI = loadImage("images/dogImg.png")
  dogH = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(900, 500);
  database = firebase.database();

   food = new Food(200,200)


  foodStock = database.ref('food')
  foodStock.on("value",readStock)
   dog = createSprite(650,250,10,10)
  dog.addImage(dogI)
  dog.scale =0.3
  
  
}


function draw() {  
background(47,80,139)
  drawSprites();
  //add styles here
  
  textSize(20)
  
  text("Food Remaining:"+ foodS ,100,100)


 
  if(keyWentDown(UP_ARROW)){

    writeStock(foodS)
    dog.addImage(dogH)
     
    
    }else{
      dog.addImage(dogI)
    }
food.display();
}
function readStock(data){
   foodS = data.val();
}
function writeStock(x){

if(x<=0){
  x=0 
}else{
  x=x-1
}


  database.ref('/').update({
    food:x
  })
}

