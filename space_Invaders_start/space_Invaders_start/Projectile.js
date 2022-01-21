class Projectile {
    constructor(x, y, a){
        this.pos = createVector(x, y);
        this.angle = a;
}

render(){
    push()
    translate(this.pos.x, this.pos.y);
    fill(0, 255, 0);
    ellipse(0, 0, projectileWidth, projectileHeight)
    pop()
}
    
move(){
    this.pos.x += Math.cos(this.angle)*projectileVelocity;
    this.pos.y += Math.sin(this.angle)*projectileVelocity;
}

hits(extraterrestial){
    let distance = (p5.Vector.sub(this.pos, extraterrestial.pos)).mag();
    if(distance < projectileHeight/2 + extraterrestialHeight/2){
        return true;
    } else {
        return false;
    }
}

}