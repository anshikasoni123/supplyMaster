var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 100 , 5 , {isStatic : true});
	World.add(world, packageBody);

	packageSprite=createSprite(400, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(400, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground = Bodies.rectangle(400, 680, 800, 20 , {isStatic:true} );
 	World.add(world, ground);

	groundSprite=createSprite(400, 680, 800,20);
	groundSprite.shapeColor=color("green");


  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("skyblue");

  keyPressed();

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  groundSprite.x = ground.position.x
  groundSprite.y = ground.position.y


  drawSprites();
 
}

function keyPressed() {
 if (keyDown("down")) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    packageBody = Bodies.circle(400 , 100 , 5 , {restitution:0.5});
	World.add(world, packageBody);
	
  }
}



