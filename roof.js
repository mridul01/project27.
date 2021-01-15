class Roof {
    constructor(x,y,width,height){ 
        this.x =400;
        this.y = 200;
        this.width = 400;
        this.height = 20;

        this.Body = Bodies.rectangle(400,200,400,20,{isStatic : true});
        World.add(world,this.Body);
    }
    display(){
        var pos = this.Body.position;
       // fill ("black");
        rectMode(CENTER);
        rect(pos.x ,pos.y, this.width , this.height);
    }
}