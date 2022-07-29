var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeLImg,redLImg,appleImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLImg = loadImage("orangeLeaf.png");
  redLImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);


// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);

  var rand = Math.round(random(10, 400))

  console.log(rand);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   spawnOrangeLeaf();
   spawnApples();
   drawSprites();
   
  
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

 

  

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }



}

function spawnApples(){
  
  if (frameCount % 250 === 10) {
    

    

    // write your code here 
    apple = createSprite(170, 1, 40, 10);
    apple.addImage(appleImg);
    apple.scale = 0.070;
    apple.velocityY = 3;

    apple.x = Math.round(random(25, 380));

    console.log(apple.x);

  }
}

function spawnOrangeLeaf(){
  
  if (frameCount % 280 === 100) {
    if (orangeL == 10);{
       
    }

    

    // write your code here 
    orangeL = createSprite(170, 1, 40, 10);
    orangeL.addImage(orangeLImg);
    orangeL.scale = 0.070;
    orangeL.velocityY = 3;

    orangeL.x = Math.round(random(25, 360));

    console.log(orangeL.x);

  }
}
