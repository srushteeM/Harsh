const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendullum;
var handle;
var sling;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    handle = new Ground(200,50,200,20);
    pendullum=new Pendullum(200,300);
    sling = new Slingshot(handle.body,pendullum.body);
}

function draw(){
    background(0);
    Engine.update(engine);
   pendullum.display();
   handle.display();
   sling.display();
}
function keyPressed(){
    if(keyCode===32){
Matter.Body.setPosition(pendullum.body,{x:mouseX,y:mouseY});
    }
     if(keyCode===13){
Matter.Body.setPosition(pendullum.body,{x:200,y:300});
    }
}
