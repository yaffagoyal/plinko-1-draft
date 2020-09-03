class plinko{
    constructor(x, y, radius ) {
        var options = {
            isStatic:true,
            
        }
        this.body = Bodies.circle(x, y, radius,options);
        this.radius = 10;
        this.x=x;
        this.y=y;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("purple")
        ellipse(0,0, this.radius,this.radius);
       pop();
      }
}