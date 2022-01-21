class Extraterrestial{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.velocity = extraterrestialVelocity;
}

render(){
    push()
    translate(this.pos.x, this.pos.y);
    image(extraterrestialImg,0,0, extraterrestialWidth, extraterrestialHeight);
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