class Bob {
    constructor(x,y){

        var options ={
            isStatic : true,
            friction : 0.5,
            density : 1.0
        }
        this.x = x;
        this.y = y;
        this.r = 70;
        this.Body =Bodies.circle(this.x ,this.y, this.r , options);
        World.add(world,this.Body);
    }
    display(){
        var pos = this.Body.position;
        push()
        translate(pos.x , pos.y);
        ellipseMode(CENTER);
         strokeWeight(1);
         fill("purple");
         ellipse(pos.x ,pos.y ,this.r);
         pop ()
    }
}