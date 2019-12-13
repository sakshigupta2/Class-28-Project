class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 0.6,
      "restitution" : 2.8,
      "frictionAir":0.06
    }
    this.width = 53;
    this.height = 53;
    this.body = Bodies.rectangle(x,y,this.width,this.height,options)

    this.ballImage = loadImage('assets/canonBall.png');
    World.add(world, this.body);
  };

  display(){
    if(flag === "launch"){
      var pos = this.body.position;
      var angle = this.body.angle

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.ballImage,0, 0, this.width, this.height);
      pop();
    }
  };
};
