class Boy {
    constructor(x,y) {
    var options = {
        isStatic:true
    }
    this.width=250;
    this.height=250;
    this.image = loadImage("Plucking mangoes/boy.png");
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