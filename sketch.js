var ball;
var ground;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(800, 700);
  
  engine = Engine.create();
	world = engine.world;

  ball = new Ball(100,640);
  ground = new Ground(400,650,800,20);

  box1 = new Dustbin(600,570,10,150);
  box2 = new Dustbin(750,570,10,150);
  box3 = new Dustbin(675,650,150,10);

    Engine.run(engine);

    
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ball.display();
  ground.display(); 
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(ball.body,ball.body.position,{x:110,y:-110});
    }
}
