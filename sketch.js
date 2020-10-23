
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling,ground1,ground2,bullet,gameState,score;
gameState="0"
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    
    score =0;

	ground1= new Ground(600,300,300,20);
	ground2= new Ground(300,600,300,20);

	bullet = new Bullet(200,200,50,50);

	block2 = new Block(600,200,50,100);
	block3 = new Block(650,200,50,100);
	block4 = new Block(550,200,50,100);
	block5 = new Block(575,100,50,100);
	block6 = new Block(625,100,50,100);
	block7 = new Block(600,0,50,100);

	block8 = new Block(300,500,50,100);
	block9 = new Block(350,500,50,100);
	block10 = new Block(250,500,50,100);
	block11 = new Block(275,400,50,100);
	block12 = new Block(325,400,50,100);
	block13 = new Block(300,300,50,100);
	
	sling = new SlingShot(bullet.body,{x:200,y:200});
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);
   
  noStroke();
  textSize(35);
  fill("white");
  text("Score  " + score, width-300, 50);
  ground1.display();
  ground2.display();

  bullet.display();

block2.display();
block2.score();

block3.display();
block3.score();

block4.display();
block4.score();

block5.display();
block5.score();

block6.display();
block6.score();

block7.display();
block7.score();


block8.display();
block8.score();

block9.display();
block9.score();

block10.display();
block10.score();

block11.display();
block11.score();

block12.display();
block12.score();

block13.display();
block13.score();
 

  

  
  drawSprites();
 
}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bullet.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    sling.fly();
    gameState = "1";
}


function keyPressed(){
    if(keyCode === 32){
        sling.attach(bullet.body);
        gameState =" "; 
        Matter.Body.setPosition(bullet.body, {x: 200 , y: 200});
       // Matter.Body.setVelocity(bullet.Body,{x:0, y:0})
    }
}
    


