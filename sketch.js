
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tableImg
var ground, wallRight,wallLeft
var velocity
var blocks = []

function preload() {
  tableImg = loadImage("./assets/tab.jpg")
}


function setup() {
  createCanvas(1000,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,600,width,1);

  wallRight = new Ground(2,height/2,20,800);
  wallLeft = new Ground(998,height/2,20,800);
  
  block = new Box(200,200,"red")
  blocks.push(block);

  imageMode(CENTER)
  
}


function draw() 
{
  background(51);

  image(tableImg,500,400,1000,800);
  Engine.update(engine);

  wallRight.display()
  wallLeft.display()

  for(var i = 0; i < blocks.length ; i++ ){
    blocks[i].display()
  }

}


function keyPressed(){
  if (keyCode == 32){

    Matter.Body.setStatic(blocks[blocks.length-1].body, false)
    blocks[blocks.length - 1].isFall = true;

    color = ["red","orange","pink","blue","purple","black"]
    var colour = random(color)

    var block = new Box(200,200,colour)
    blocks.push(block)
    

  }
}

