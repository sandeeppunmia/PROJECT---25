class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true                                        
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        this.image = loadImage("dustbingreen.png");                              

        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      image(this.image,600,490,150,150)
      rect(pos.x, pos.y, this.width, this.height);
      fill("white")
    }
}