


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box,box2,box3,box1,Box2,Box3

function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,670,800,20)
paperball = new paperBall(30,350,25);


box1 = Bodies.rectangle(650 , 650 , 200 ,20, {isStatic:true});
	World.add(world,box1);
   // world.add(world,ground);
	//world.add(world,paperball);

	Box2 = Bodies.rectangle(750,600,15 ,100, {isStatic:true});
	World.add(world,Box2);

	Box3 = Bodies.rectangle(550,600,15,100, {isStatic:true});
	World.add(world,Box3);

	

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);



  ground.display();

paperball.display();

}

function keyPresed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});

}
}






