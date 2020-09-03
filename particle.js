class particle{
    constructor(x, y, radius ) {
        var options = {
            isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius,options);
        this.radius = radius;
        this.x=x;
        this.y=y;
        this.colour= color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius,this.radius);
       pop();
      }
}