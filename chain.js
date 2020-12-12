class chain{
constructor(bodyA,bodyB){
    var coptions ={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length: 10
    }
    this.chain = Constraint.create(coptions);
    World.add(world,this.chain);
}
display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    stroke("blue")
    strokeWeight(5);

    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}