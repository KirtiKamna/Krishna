//nameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var box;
var ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


box =  Bodies.rectangle(400,100,50,50);
World.add(world, box)


var GroundOptions ={

  isStatic : true

}
ground = Bodies.rectangle(400,350,800,50,GroundOptions);
World.add(world,ground);
 
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
rectMode(CENTER);
  rect(400,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,800,50);
  drawSprites();
}