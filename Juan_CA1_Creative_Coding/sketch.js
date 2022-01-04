let balls=[]; //the array of balls
let numOfBalls = 5; //amount of balls I want to create


let populateArray = () => {
    for(i= 0; i < numOfBalls; i++){ //to create the balls
        balls.push(new Ball);
}
}


function setup(){
    populateArray(); //to "call" the function to create the balls
createCanvas(500,500); //the canvas
    background(0); //the background color
}

function draw(){
    background(0); //to make the background dont get bugged

    r = random(255); 
    g = random(100,200);  //random colors to make the lightening effect
    b = random(100); 
    a = random(200,255); 

     balls.forEach(ball => {
         ball.move(); //to move the balls
         ball.reset(); //to reset every time the ball is not in contact with something
         ball.checkIntersactions(); //to check the interaction(collision)
         ball.render(); //to "draw" the balls
     })
}
