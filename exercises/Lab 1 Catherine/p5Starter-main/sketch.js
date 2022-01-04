let dx, dy, arrow;

function setup(){
    createCanvas(300, 300);
    background(255, 255, 255);
    arrow= new Arrow(width/2, height/2, 0);
    console.log(arrow);
}

function draw(){
    background(255, 255, 255);
    arrow.drawArrow();
    arrow.follow();
}