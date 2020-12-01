const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree;
var ground;
var boy;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var rope
var gameState = "onHand";

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
    Engine.run(engine);
	tree = new Tree(1100,600);
	
	ground = new Ground(500,600,width,20);

	boy = new Boy(200,650);

	stone = new Stone(120,480,50);

	mango1 = new Mango(1000,200,70)
	mango2 = new Mango(1200,200,80)
	mango3 = new Mango(1200,50,90)
	mango4 = new Mango(1200,130,70)
	mango5 = new Mango(1100,190,70)
	mango6 = new Mango(1100,250,70)
	mango7 = new Mango(1300,200,80)
	mango8 = new Mango(1100,100,70)
	mango9 = new Mango(900,250,90)
	mango10 = new Mango(1000,100,80)

	rope = new Rope(stone.body,{x:120,y:480})
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
 
  tree.display();

  ground.display();
  
  boy.display();

  stone.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  rope.display();

  drawSprites();
 
}

function mouseDragged(){
	if(gameState!=="launched"){

		Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
		
	}

}

function mouseReleased(){
    stone.fly();
    gameState = "launched";
}

function detectCollision(stone,mango){
mangoBodyPosition = mango.body.position
stoneBodyPosition = stone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=mango.r + stone.r){
	 Matter.Body.setStatic(mango.body,false)
 }
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body,{x:235,y:420})
        rope.attach(stone.body)
    }
}
