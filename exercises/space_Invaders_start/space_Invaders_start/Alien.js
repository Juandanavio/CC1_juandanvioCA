class Alien{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.velocity = alienVelocity;
}

render(){
    push()
    translate(this.pos.x, this.pos.y);
    image(alienImg,0,0, alienWidth, alienHeight);
    // fill(255, 0, 0);
    // ellipse(0, 0, alienWidth, alienHeight)
    pop()
}
    
move(){
    this.pos.x += this.velocity;

}

shift(){
    this.pos.y += shiftDown;
    this.velocity *= -1;
}
}