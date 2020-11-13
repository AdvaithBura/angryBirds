const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
//OOPS = creating blueprints
//blueprints = plan that defines the propertiers/characteristics and functions of something
//create class (blueprint) => with class we create multiple objcts of the class
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //bounciness == restitution

    //create objects of box class
    bird1 = new Bird(300,200);
    box1 = new Box(700,320,70, 70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700, 230, 70, 70);
    box4 = new Box(920,230,70,70);
    box5 = new Box(810,100, 70,70);
    ground1 = new Ground(600,390,1200,20);
    pinkPig1 = new piggy(800,200);
    pinkPig2 = new piggy(800,300);
    log1 = new logs(810,260,300,PI/2);
    log2 = new logs(810,150,300,PI/2);
    log3 = new logs(750,120,150,PI/7);
    log4 = new logs(870,120,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode("center");

    //call display function of box class to display box1(object of box class)
    bird1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground1.Display();
    pinkPig1.display();
    pinkPig2.display();
    log4.display();
    log3.display();``
    log2.display();
    log1.display();
}