class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 190
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        
        
    }

    fly(){
        this.rope.bodyA = true;
    }

    display(){
        
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(5);
            if(pointA.x < 220){
            strokeWeight(4);
            line(pointA.x-1, pointA.y, pointB.x-10, pointB.y);
            
            }
            else {
                strokeWeight(5);
                line(pointA.x-1, pointA.y, pointB.x-10, pointB.y);

                

            }
            pop();
          
            
            
        }
    }
    
}
