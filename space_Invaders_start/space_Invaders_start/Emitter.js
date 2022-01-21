class Emitter{
    constructor(x, y){
        this.position = createVector(x, y);
        this.particles = []
        this.counter = 0;
    }

    createParticles() {
        if (this.counter < 20) {
            for (let i = 0; i <1; i++) {
                this. particles.push(new Particle(this. position.x, this.position.y))
                this.counter++;
            }
        }
    }

    update(){
        this.particles.forEach(particle => {
            let gravity = createVector(0, 0.2);
            particle.applyForce(gravity);
            particle.update();
        });

        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].finished()){
                this.particles.splice(i, 1);
            }
        }
    }

    show(){
        this.particles.forEach(particle => {
            particle.render();
        })
    }
}