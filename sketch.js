const Engine =   Matter.Engine
const World  =    Matter.World
const Bodies  =    Matter.Bodies
const Constraint  =    Matter.Constraint
var ball,rope;

function preload(){

}
function setup(){
    createCanvas(2000,600);
    engine= Engine.create();
    world = engine.world;
    

    //Create Engine,World and Bodies

        ball = new Ball(300,150,50);
        ground = new Ground(100,590,4000,20);
        box1 = new Box(700,540,150,79);
        box2 = new Box(850,460,150,79);
        box3 = new Box(700,460,150,79);
        box4 = new Box(850,380,150,79);
        box5 = new Box(700,380,150,79);
        box6 = new Box(850,300,150,79);
        box7 = new Box(700,300,150,79);
        box8 = new Box(850,540,150,79);

        rope = new Rope(ball.body,{x:100, y:40});

        Engine.run(engine);

}
function draw(){
    background("lightblue");
    Engine.update(engine);
    ball.display();
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    rope.display()
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});  
}


function mouseReleased(){
    slingshot.fly();
}