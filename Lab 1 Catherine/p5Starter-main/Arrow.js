class Arrow {
	constructor(x, y, angle) {
		
		this.x = x;
		this.y = y;
		
		this.angle = angle;
	}	
	
	follow(){
		this.dx = mouseX-this.x;
		this.dy= mouseY-this.y;
		this.angle= atan2(this.dy, this.dx);
	}

	
	drawArrow() {
		
		translate(this.x, this.y);
		
		rotate(this.angle);
		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);
		
	}
}