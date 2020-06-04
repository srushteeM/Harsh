class Pendullum{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 30, options);
        
       
        World.add(world, this.body);
      }
      display(){
       var pos=this.body.position;
        push();
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,30,30);
        pop();
      }
}