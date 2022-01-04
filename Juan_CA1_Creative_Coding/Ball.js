class Ball{ //create the ball object
    constructor(){

        this.pos = createVector(
            Math.round(Math.random()*500), //positioning of the balls
            Math.round(Math.random()*500)
            )
            
        this.speed = createVector(
            Math.random()*4 - 2, //speed and direction of the balls
            Math.random()*4 - 2
            )    
        
        
        this.radius = 50; //radius / size of the balls
        this.isIntersecting = false; //statment to make the intersection function works
    }

render(){ //render function
    push ()
    translate (this.pos.x, this.pos.y); //to translate the positioning of the balls and canvas into the same spot
    this.isIntersecting ? //"if else" function shorted to change parameters of the balls such as color, stroke, etc... 
        (fill(r, g, b, a), strokeWeight(1), stroke(255,255,0), this.speed.x *= -1, this.speed.y *= -1, this.speed.x *= 1, this.speed.y *= 1) : 
        (fill(255,0,0) );

    ellipse(0,0, this.radius*2) //the balls properties
    pop ()
}

move(){
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;

    if(this.pos.x > 500){
        this.speed.x = -1
    }
    if(this.pos.x < 0){
        this.speed.x = 1                //function to move the balls, "if else" statment to make the balls bounce on the walls
    }
    if(this.pos.y > 500){
        this.speed.y = -1
    }
    if(this.pos.y < 0){
        this.speed.y = 1
    }
}

checkIntersactions(){
    balls.forEach(ball => {
        let distance = p5.Vector.sub(this.pos,ball.pos).mag();
        let limit = this.radius + ball.radius;
        (distance < limit && distance > 0) ? this.isIntersecting=true : null;  //for each loop into the interaction function to make the collision possible
    });
}

reset(){
    this.isIntersecting = false; //reset function to make the ball being normal after collision
}

}