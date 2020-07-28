var paperz;
var germs;
var drop_zone
var drop_zone_wall1
var drop_zone_wall2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
paperz= new Paper(10,650,15);
germs= new Ground(400,690,800,10);
drop_zone=createSprite(400,675,200,20)
	drop_zone_wall1=createSprite(300,635,20,100)
	drop_zone_wall2=createSprite(500,635,20,100)
	drop_zone=Bodies.rectangle(400,675,200,20,{isStatic:true})
	World.add(world, drop_zone)
	drop_zone_wall1=Bodies.rectangle(300,635,20,100,{isStatic:true})
	World.add(world, drop_zone_wall1)
	drop_zone_wall2=Bodies.rectangle(500,635,20,100,{isStatic:true})
	World.add(world, drop_zone_wall2)
	//Create the Bodies Here.
	Engine.run(engine); 
}
function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  paperz.display();
  germs.display();
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperz.body,paperz.body.position,{x:25,y:-35});
    }
}