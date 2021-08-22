class Sling{
  constructor(bodyA,bodyB){
      var options = {
          bodyA: bodyA,
          bodyB: bodyB,
          stiffness: 0.04,
          lenght: 10
          
      }
      this.pointB = pointB
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
    }

     attach(body){
         this.sling.bodyA = body;
     }

     fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            pop();
        }
    }
}