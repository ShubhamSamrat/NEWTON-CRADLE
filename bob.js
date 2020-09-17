class Bob {

    constructor(x,y,r){
       var options = {
        isStatic:false,
        restitution:1,
        friction:0,
        density:0.8,
        length:50
       }

        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);

        World.add(world,this.body);
       //this.image = loadImage("bob.png");
    }

    display(){
        var position = this.body.position;
        var angle = this.body.angle;

        
        push();
        ellipseMode(CENTER);
        translate(position.x,position.y);
        angleMode(RADIANS);
        rotate(angle);
        fill("blue");
        ellipse(0,0,this.r,this.r);

        pop();




    }
    


}