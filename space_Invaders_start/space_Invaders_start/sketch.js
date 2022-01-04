let params={
    numCols: 12,
    numRows: 7
}

let screenWidth = 500;
let screenHeight= 500;
let aliens=[];
let alienWidth = 20;
let alienHeight = 20;
let alienVelocity = 1;
let hSpace = 30;
let vSpace = 30;
let xOffset = (screenWidth - (params.numCols-1)*hSpace) / 2;
let yOffset = 20;
let shiftDown = 40;
let alienImg;

let shooterWidth = 100;
let shooterHeight = 20;
let shooter;
let bullets = [];
let bulletWidth = 10;
let bulletHeight = 10;
let bulletVelocity = 5;

let emitters = [];

var gui;

function preload(){
    alienImg = loadImage('assets/spaceInvaders.png');
}

function setup() {
    populateAliens();

    gui=QuickSettings.create(550,25, "My Game Controls")
    .addRange("Number of Columns",5,20,params.numCols,1,
    function(value){
        params.numCols = value
        aliens=[];
        xOffset = (screenWidth - (params.numCols-1)*hSpace) / 2;
        populateAliens();
    })
    .addRange("Number of Rows",3,10,params.numRows,1,
    function(value){
        params.numRows = value
        aliens=[];
        populateAliens();
    })

    shooter = new Shooter(screenWidth/2, screenHeight - shooterHeight/ 2);
    createCanvas(screenWidth, screenHeight);
    background(255);
}

function draw() {
    background(0);
    shooter.render();
    shooter.move();
    let shift = false;

    aliens.forEach(alien => {
        alien.move();
        alien.render();
        alien.pos.x >= screenWidth ? shift = true : null;
        alien.pos.x <= 0 ? shift = true : null;
    });

    if (shift) {
        aliens.forEach(alien => {
            alien.shift();
        })
    } 
    for (let i = bullets.length - 1; i >=0; i--){
        bullets[i].move();
        bullets[i].render();
        for (let j = aliens.length - 1; j >= 0; j--){
            if(bullets[i].hits(aliens[j])){
                aliens.splice(j,1);
                bullets.splice(i,1);
                break;
            }
        }
    }
}

function keyPressed(){
 if (keyCode === 32) {
     bullets.push(new Bullet(
         shooter.pos.x,
          screenHeight - shooterHeight,
          shooter.barrelAngle
          ))
 }

 if (keyCode === RIGHT_ARROW) {
     shooter.barrelAngle += 0.2;
 }else if (keyCode === LEFT_ARROW) {
     shooter.barrelAngle -= 0.2;
 }
}

function populateAliens(){
    for (let row = 0; row < params.numRows; row++){
        for(let col =0; col < params.numCols; col++){
            aliens.push(new Alien(col * hSpace + xOffset, row * vSpace + yOffset))
    }
    }
}

