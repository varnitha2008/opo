class Ball{ 
    constructor(x,y,radius){
        var options = {
            restitution : 2.0,
            density : 3.0
        }
        this.body = Bodies.circle(x,y,radius, options);
        World.add(world,this.body);
        this.r = radius;
    }
    display(){
         
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;


        fill("yellow")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
        
    }
         
    
    
}