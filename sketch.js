
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ball1,ball2,ball3,ball4,ball5;
var ground1,chain1,chain2,chain3,chain4,chain5;
var ballDiameter;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(width/2,height/4,width/7,20);
	ballDiameter=40;
	startBallPosX=width/2;
	startBallPosY=height/4+500;

	ball1=new Ball(startBallPosX-ballDiameter*2,startBallPosY,ballDiameter);
	
	ball2=new Ball(startBallPosX-ballDiameter,startBallPosY,ballDiameter);

	ball3=new Ball(startBallPosX,startBallPosY,ballDiameter);

	ball4=new Ball(startBallPosX+ballDiameter,startBallPosY,ballDiameter);

	ball5=new Ball(startBallPosX+ballDiameter*2,startBallPosY,ballDiameter);
    
	var render = Render.create(
		{element:document.body,
			engine:engine,
			options:
			{width:1200,
			height:700,
			wireframes:false
		}})


	
	chain1 = new Chain(ball1.body,ground1.body,-ballDiameter*2,0);
    chain2 = new Chain(ball2.body,ground1.body,-ballDiameter*1,0);
	chain3 = new Chain(ball3.body,ground1.body,0,0);
	chain4 = new Chain(ball4.body,ground1.body,ballDiameter*1,0);
	chain5 = new Chain(ball5.body,ground1.body,ballDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  ground1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45})
	}
}



