class Tree {
    constructor(x,y) {
    var options = {
        isStatic:true
    }
    this.width=600;
    this.height=600;
    this.image = loadImage("Plucking mangoes/tree.png");
    this.body=Bodies.rectangle(x,y,this.width,this.height,options);
    
    World.add(world,this.body);
    
  }
  display(){
    push()
    var pos = this.body.position 
    translate(pos.x,pos.y+10)
    rectMode(CENTER)
    fill(255);
    imageMode(CENTER);
    image(this.image,0,-this.height/2,this.width,this.height);
    pop();
  }
}