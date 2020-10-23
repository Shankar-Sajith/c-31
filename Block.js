class Block{
    
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity=255; 
        World.add(world, this.body);
    }
    display(){
     
          var pos =this.body.position;
   if(this.body.speed < 5){
         
        rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    } 
  
    else{
    
      push();
     this.Visiblity = this.Visiblity - 5;
     console.log(this.Visiblity )
     fill(0,255,0,this.Visiblity )
     rect(pos.x, pos.y, 0,0);
     if (this.Visiblity < 0 && this.Visiblity > -555){
      score++;
    }
     pop();
     World.remove(world, this.body);
     
   }
   
  }
  score(){}
}