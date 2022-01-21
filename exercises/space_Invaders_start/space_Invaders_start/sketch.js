let paramtrs={
    numCols: 12,
    numRows: 7
}

let windowWidth = 500;
let windowHeight= 500;
let extraterrestials=[];
let extraterrestialWidth = 20;
let extraterrestialHeight = 20;
let extraterrestialVelocity = 1;
let hUniverse = 30;
let vUniverse = 30;
let xOffset = (windowWidth - (paramtrs.numCols-1)*hUniverse) / 2;
let yOffset = 20;
let shiftDown = 40;
let extraterrestialImg;

let weaponWidth = 100;
let weaponHeight = 20;
let weapon;
let projectiles = [];
let projectileWidth = 10;
let projectileHeight = 10;
let projectileVelocity = 5;

let emitters = [];

var gui;

function preload(){
    extraterrestialImg = loadImage('assets/spaceInvaders.png');
}

function setup() {
    populateExtraterrestials();

    gui=QuickSettings.create(550,25, "My Game Controls")
    .addRange("Number of Columns",5,20,paramtrs.numCols,1,
    function(value){
        paramtrs.numCols = value
        extraterrestials=[];
        xOffset = (windowWidth - (paramtrs.numCols-1)*hUniverse) / 2;
        populateExtraterrestials();
    })
    .addRange("Number of Rows",3,10,paramtrs.numRows,1,
    function(value){
        paramtrs.numRows = value
        extraterrestials=[];
        populateExtraterrestials();
    })

    weapon = new Weapon(windowWidth/2, windowHeight - weaponHeight/ 2);
    createCanvas(windowWidth, windowHeight);
    background(255);
    
}

function draw() {
    background(0);
    emitters.forEach(emitter =>{
        emitter.createParticles();
        emitter.update();
        emitter.show();
    })
    

    weapon.render();
    weapon.move();
    let shift = false;

    extraterrestials.forEach(extraterrestial => {
        extraterrestial.move();
        extraterrestial.render();
        extraterrestial.pos.x >= windowWidth ? shift = true : null;
        extraterrestial.pos.x <= 0 ? shift = true : null;
    });

    if (shift) {
        extraterrestials.forEach(extraterrestial => {
            extraterrestial.shift();
        })
    } 
    for (let i = projectiles.length - 1; i >=0; i--){
        projectiles[i].move();
        projectiles[i].render();
        for (let j = extraterrestials.length - 1; j >= 0; j--){
            if(projectiles[i].hits(extraterrestials[j])){
                emitters.push(new Emitter(extraterrestials[j].pos.x, extraterrestials[j].pos.y))
                extraterrestials.splice(j,1);
                projectiles.splice(i,1);
                break;
            }
        }
    }

        checkGameStatus()

}

function checkGameStatus(){
    let gameOver=false;
    extraterrestials.forEach(extraterrestial => {
        if(extraterrestial.pos.y>400){
            gameOver=true;
        }
    });

    if (gameOver) {
        noLoop();
        textSize(120);
        textLeading(110);
        fill(255,0,0);
        textAlign(CENTER, CENTER);
        text("Game\nOver", 250,230);
    }

}

function keyPressed(){
 if (keyCode === 32) {
     projectiles.push(new Projectile(
         weapon.pos.x,
          windowHeight - weaponHeight,
          weapon.barrelAngle
          ))
 }

 if (keyCode === RIGHT_ARROW) {
     weapon.barrelAngle += 0.2;
 }else if (keyCode === LEFT_ARROW) {
     weapon.barrelAngle -= 0.2;
 }
}

function populateExtraterrestials(){
    for (let row = 0; row < paramtrs.numRows; row++){
        for(let col =0; col < paramtrs.numCols; col++){
            extraterrestials.push(new Extraterrestial(col * hUniverse + xOffset, row * vUniverse + yOffset))
    }
    }
}

