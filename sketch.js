
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1;

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(400,200,400,20);


bob1 = new Bob(128,260,70);
bob2 = new Bob(164,260,70);
bob3 = new Bob(200,260,70);
bob4 = new Bob(236,260,70);
bob5 = new Bob(272,260,70);

rope1 = new Rope(bob1.Body,roof.Body,-5*2,0);

Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

rope1.display();

}
