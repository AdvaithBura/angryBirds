//blueprint
class piggy{
    //constructor is a function
    //it is invoked whenever a new object of this class is made  
      constructor(x,y){
          var options = {
              restitution : 0.7
          }
          this.pig = Bodies.rectangle(x,y, 50, 50, options);
          this.width = 50;
          this.height = 50;
          World.add(world, this.pig);
      }
  
      display(){
          var pos = this.pig.position;
          var angle = this.pig.angle;
          push();    
          translate(pos.x, pos.y);
          rotate(angle)
          rectMode(CENTER);
          fill("pink");
          rect(0,0, this.width, this.height);
          pop();
      }
  
  }