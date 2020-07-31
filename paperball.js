class Ball {

    constructor (x,y){

        var options = {
            isStatic = true,
            restitution = 0.3,
            friction = 0.5,
            densitity = 1.2
        }

        this.body = Bodies.ellipse(x, y, 10, options);
        this.radius = 10;

        World.add(world, this.body);
    }

    display() {

        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10);


    }
}
