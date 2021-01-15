class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            density : 10,
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
        this.width = width;
        this.height = height;
      
    }
display(){
    var angle = this.body.angle;

    fill("purple");
    rotate (angle);
    stroke ("black")
    strokeWeight(3)
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
    
     


 
}