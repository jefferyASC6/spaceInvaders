function setup(){
    createCanvas (400, 700);
}

let width = 400
let height = 700
let speedX = 1;
let negSpeedX = -1;
let circleLocationX = width/2;
let circleLocationY = height/4;
let y1 = 600;

// Player1 Ship X-Coordinate Variables
let x1 = 200;
let x2 = 225;
let x3 = 175;

//Movement Function
function triMovement(){ 
    if(keyIsDown(LEFT_ARROW)){
        x1-=2;
        x2-=2;
        x3-=2;
    }
    else if(keyIsDown(RIGHT_ARROW)){
        x1+=2;
        x2+=2;
        x3+=2;
    }
 }

 // Movement Borders
function pac(){
    if(x3<0){
        x3 = 0;
        x2 = 50;
        x1 = 25;
        triMovement();
    }
    else if (x2>400){
        x2 = 400;
        x1 = 375;
        x3 = 350;
        triMovement();
    }
    else if (circleLocationY >= 575){
        x1 = 200;
        x2 = 225;
        x3 = 175;
    }
    else {
        triMovement();}
}

// Enemy Movement Function
function enemyMovement(){
circleLocationX += speedX;
if (circleLocationX >= 375){
    speedX *= -1;
    circleLocationY+=40;
    } else if (circleLocationX <= 25){
    speedX *= negSpeedX;
    circleLocationY+=40;
    }
    else if (circleLocationY > 575){
        textSize(50);
        fill(255,0,0);
        textAlign(CENTER);
        text('GAME OVER', 200, 300);
    }
}


function draw(){
    background(50);
    noStroke();
    ellipse (circleLocationX, circleLocationY, 50, 50);
    triangle(x1, y1, x2, 650, x3, 650);
    pac();
    enemyMovement();
    loop();
}


// function mouseClicked(){
//     ellipse(x1, y1, 5, 5)
//     translate(0,100);
//     loop();
// }

// function shoot(){
// if (mouseClicked()){
//     loop();
// }
// }








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EXTRA CODE!!!!
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function pac(){
//     if(x3>=400){
//         x2 = 50;
//         x3 = 0;
//         x1 = 25;
//         triMovement();
//     }
//     else if (x2<=0){
//         x2 = 400;
//         x1 = 375;
//         x3 = 350;
//         triMovement();
//     }
//     else {
//         triMovement();
//     }
// }
