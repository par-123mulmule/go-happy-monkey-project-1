//declaring the sprite objects and      
          var monkey,monkeyRunning;
          var banana,bananaImage;
          var obstacle,obstacleImage,obstacleGroup;
          var ground,groundImage,invsibleGround;
          var foodGroup;
          var survivalTime=0;
          var score=0;

function preload(){
                 monkeyRunning=loadAnimation("sprite_0.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
          bananaImage=loadImage("banana.png");
          obstacleImage=loadImage("obstacle.png"); 
  
}

function setup(){
//creating monkey.
          monkey=createSprite(80,315,20,20);                
        monkey.addAnimation("moving",monkeyRunning);
          monkey.scale=0.1;
          ground=createSprite(400,350,900,10);
          ground.velocityX=-4;
          ground.x=ground.width/2;
          console.log(ground.x);   
         
          foodGroup=new Group();
          obstacleGroup=new Group();
  
          
survivalTime=0;  
}

function draw(){
          background("skyBlue");  
          ground.shapeColor="red";
  
         
            spawnFood();
            spawnObstacles();
            if(ground.x<0){
             ground.x=ground.width/2;
             ground.velocityX=-8;
            
          }  
  
          if(keyDown("space")){
             monkey.velocityY=-12; 
          }  
          monkey.velocityY=monkey.velocityY+0.8;
          monkey.collide(ground);
           
           stroke("white");
           textSize(20);
           fill("white");
           text("score"+score,500,50);
  
            stroke("black");
            textSize(20);
            fill("black");
            survivalTime=Math.ceil(frameCount/frameRate());
            text("survival Time:" + survivalTime,100,50);
          
          
  
drawSprites(); 
  
}

function spawnFood(){
          if(frameCount%80===0){
            var banana=createSprite(width+20,height-300,40,10);
            banana.y = Math.round(random(120,200));
            banana.addImage(bananaImage);
            banana.scale=0.1;
            banana.velocityX=-5;
            foodGroup.add(banana);
          }  
}

function spawnObstacles(){ 
            if(frameCount%300===0){ 
               var obstacle=createSprite(400,320,20,20);
               obstacle.addImage(obstacleImage);
               obstacle.scale=0.2;
               obstacle.velocityX=-4;
               obstacleGroup.add(obstacle);
  }
           
  
  
}








