
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var engine,world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function preload()
{
	
}

function setup() {
	 createCanvas(1000,1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bobs(200,500,5)
	bobObject2= new Bobs(300,500,5)
	bobObject3= new Bobs(400,500,5)
	bobObject4= new Bobs(500,500,5)
	bobObject5= new Bobs(600,500,5)
	
    roof= new Roof(390,60,500,40)

	rope = new Chain(bobObject1.body,roof.body,-190,0)
  rope1= new Chain(bobObject2.body,roof.body,-90,0)
	rope2= new Chain(bobObject3.body,roof.body,10,0)
  rope3= new Chain(bobObject4.body,roof.body,110,0)
	rope4= new Chain(bobObject5.body,roof.body,210,0)

	Engine.run(engine);
  
}


function draw() {
  background(200);
  Engine.update(engine);
  rectMode(CENTER);
  rope.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  roof.display()

 
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    Matter.Body.setPosition(bobObject5.body,{x:700,y:100})
     Matter.Body.gravity.y=0
  }
}


