const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const player = { x: canvasWidth/2, y: canvasHeight/2, d: 200, color: 'hotpink', originalColor: 'hotpink' };

const circleData = [
    {x: 600, y: 60, d: 15, speedX: 2, speedY: 2, color: 'white'},
    {x: 500, y: 50, d: 15, speedX: 2, speedY: 2, color: 'white'},
    {x: 300, y: 150, d: 15, speedX: 2, speedY: 0, color: 'white'},
    {x: 400, y: 400, d: 20, speedX: 3, speedY: 1, color: 'white'},
    {x: 40, y: 520, d: 20, speedX: 2, speedY: 0, color: 'white'},
    {x: 140, y: 120, d: 15, speedX: 3, speedY: -0.5, color: 'white'},
    {x: 350, y: 350, d: 20, speedX: 1, speedY: 1, color: 'white'},
    {x: 340, y: 60, d: 15, speedX: 3, speedY: 3, color: 'white'},
    {x: 550, y: 50, d: 20, speedX: 2, speedY: 2, color: 'white'},
    {x: 330, y: 150, d: 15, speedX: 2, speedY: 0, color: 'white'},
    {x: 460, y: 400, d: 20, speedX: 3, speedY: 1, color: 'white'},
    {x: 80, y: 550, d: 15, speedX: 2, speedY: 0, color: 'white'},
    {x: 140, y: 100, d: 15, speedX: 3, speedY: -0.5, color: 'white'},
    {x: 450, y: 250, d: 20, speedX: 1, speedY: 1, color: 'white'}
];
/////////////////////////////////////////
const stars = []; 
const bubbles = [];

let size = 240;
let x = canvasWidth / 2;
let y = canvasHeight / 2 -50;

let doJump = false;
let counter = 0;
let initialY = y;

const earth = [
    {x: 400, y: 280, d: 80, speed: 15 },
    { x: 100, y: 95, d: 80, speed: 15 },
]

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawCreature(x, y, size, 'white', '#abb880', 'red');

/// STARS FUNCTION ????
let i = 0;
while (i < 1000) {
    const data = {
        x:Math.random()*canvasWidth, 
        y:Math.random()*canvasHeight,
        w:Math.random()*6, 
        color: 'white'
    };
    
    stars.push(data);
   i++;
    }
}

function drawstars1() { 
    strokeWeight(0);
    let i = 0;
    while (i < 900) {
        const data = stars[i];
        fill (data.color)
       circle(data.x, data.y, data.w);
       i++;
    }

    i = 0;
   while (i < 300) {
        const data = stars[i];
        if (data.color == 'purple'){
            data.color = 'white';
        } // else {
            data.color = 'purple';
       // }
        fill (data.color)
       circle(data.x, data.y, data.w);
       i++;
    }
}

function drawStars() {
    strokeWeight(0);
    fill('white');
for (let i = 0; i < 1000; i++) {
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;
    const width = Math.random() * 2 + .5;
    circle(x, y, width);
    }
}

/////////////////////////////////////////////////////////////////////////////////
// MOVE AROUND
function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'KeyG') {
        size += 5;
    } else if (ev.code == 'KeyS') {
        size -= 5;
    } else if (ev.code == 'KeyM') {
        shoot();
    } 

    noFill();
   // drawCreature(x, y, size, 'white', '#abb880', 'red');
}

document.addEventListener('keydown', moveController)
//////////////////////////////////////////////////////////////////////////////////
//Balls interaction

function drawballs() {
    // frameRate(10);

    for (let i = 0; i < circleData.length; i++) {
        let ball = circleData[i];

        // 1. check intersection 
        bounceIfIntersects(ball, player);

        // 2. modify the x and y coordinates of the current ball:
        move(ball);

        // 3. draw ball: 
        fill('white');
        strokeWeight(0);
        blur(20);
       circle(ball.x, ball.y, ball.d);
    }

    // after drawing all the balls, draw the player.
    fill(player.color);
    //white cow

}

function bounceIfIntersects(ball1, ball2) {
    let spring = 1;
    let minDist = ball1.d/2 + ball2.d/2;
    let dx = ball2.x - ball1.x;
    let dy = ball2.y - ball1.y;
    const distance = dist(ball1.x, ball1.y, ball2.x, ball2.y);
    if (distance <= minDist) {
        let angle = atan2(dy, dx);
        let targetX = ball1.x + cos(angle) * minDist;
        let targetY = ball1.y + sin(angle) * minDist;
        let ax = (targetX - ball2.x) * spring;
        let ay = (targetY - ball2.y) * spring;
        ball1.speedX -= ax;
        ball1.speedY -= ay;
        ball1.speedX /= 2;
        ball1.speedY /= 2;
    } 
}

function move(ball) {
    ball.y += ball.speedY;
    ball.x += ball.speedX;
    if ((ball.x - ball.d / 2)<= 0) {
        ball.speedX *= -1;
        ball.x += ball.speedX;
    } else if ((ball.x + ball.d / 2) >= canvasWidth) {
        ball.speedX *= -1;
        ball.x += ball.speedX;
    } else if ((ball.y - ball.d / 2) <= 0) {
        ball.speedY *= -1;
        ball.y += ball.speedY;
    } else if (ball.y + ball.d / 2 >= canvasHeight) {
        ball.speedY *= -1;
        ball.y += ball.speedY;
    }
}

// moving around
function mouseDragged() {
  player.x = mouseX;
  player.y = mouseY
}
///////////////////////////////////////////////////////////////////////////////////////////
function jump(ev) {
    if (ev.code == 'Space') {
        doJump = true;
    }
    
}
document.addEventListener('keydown', jump);
///////////////////////////////////////////////////////////////////////////////////
//shoot
function shoot() {
    const bubble = {
        x: player.x,
        y: player.y - 25,
        d: 20,
        speed: 15
    }

    bubbles.push(bubble)
}

function drawbb() {
    strokeWeight(0);
    fill ('hotpink');
    strokeWeight(2);
        stroke('pink');
    // 2. loop through the bubbles list and draw / animate each bubble:
    for (const bubble of bubbles) {
        square(bubble.x, bubble.y, bubble.d);
        bubble.y -= bubble.speed;
    }

}

document.addEventListener('keydown', moveController);

//////////////////////////////////////////////////////////////////////  
    // mini white space cows: 
function drawcows() {
    drawCreature(earth[1].x, earth[1].y, earth[1].d);
    earth[1].y += 4 * Math.cos(counter / 10);
    earth[1].x += 4;

    // loop cow back to the beginning if it gets to the end:
    if (earth[1].x > canvasWidth + 80) {
       earth[1].x = -100;
    }
    counter++;
}

////////////////////////////////////////////////////////////////////////////////////
function draw() {
    clear();
    drawballs();
    drawstars1();
    drawbb();
    drawcows();

    if (doJump) {
        const jumpHeight = -10;
        const jumpSpeed = 20;
        player.y += jumpHeight * Math.sin(counter / jumpSpeed); 
        counter++;
        if (player.y < initialY) {
            doJump = false;
        }
    } 

    // red cow
    //drawCreature(x, y, size, 'white', '#abb880', 'red');
    drawCreature(player.x, player.y, size, 'white', '#abb880', 'red');

}

///////////////////////////////////////////////////////////////////////////////////////////
// replace this function with YOUR creature!
function drawCreature(centerX, centerY, size, fillColor1='brown', fillColor2='navy', fillColor3='white'){

    beginShape(); //right horn *****
    fill(fillColor1);
    strokeWeight (5)
    stroke('black');
    vertex(centerX + size * .39, centerY - size/1.8); // top corner
    vertex(centerX - size * .35, centerY - size * .25); // left corner
    vertex(centerX + size/2.1, centerY); // right corner
    endShape(CLOSE);

    beginShape(); //left horn *****
    fill(fillColor1);
    strokeWeight (5)
    stroke('black');
    vertex(centerX - size * .39, centerY - size/1.8); // top corner
    vertex(centerX + size * .35, centerY - size * .25); // left corner
    vertex(centerX - size/2.1, centerY); // right corner
    endShape(CLOSE);

    let sf = size / 6; 

    strokeWeight(5); // left ear *****
    fill(fillColor3)
    stroke('black');
    curve(
        centerX, centerY + size * 1.2,   // control point
        centerX, centerY - size * .06,   //right point //
        centerX+ size * .71, centerY - size * .05,  //left point
        centerX - size * 1.2, centerY + size * 2.1 // control point
    );

    strokeWeight(5); // right ear ******
    fill(fillColor3)
    stroke('black');
    curve(
        centerX, centerY + size * 1.2,    // control point
        centerX, centerY - size * .06,   //right point //
        centerX - size * .71, centerY - size * .05,    //left point 
        centerX + size * 1.2, centerY + size * 2.1  // control point
    )

    stroke('black'); // bottom of ears ******
    strokeWeight(5);
    line(
        centerX + size * .71, centerY - size *.05, //50, 390 
        centerX - size * .71, centerY - size * .05 //350, 390
        );

    strokeWeight(1.5);
    stroke('black');
    fill ('black');
    circle (centerX + sf *2.8, centerY - sf *1.05, sf + size * .02); // right ear spot *****

    strokeWeight(5);
    stroke('black');
    fill (fillColor3)
    circle (centerX , centerY, size - sf/5) // main head *****

    strokeWeight(1.5);
    stroke('black');
    fill ('black');
    circle (centerX - sf*1.1, centerY - sf*1.7, sf*1.7); // left top spot *****
    circle (centerX - sf*2, centerY - sf, sf); // top lower spot *****
    circle (centerX + sf*1.6, centerY + sf/2, sf*2.5); // bottom rightspot *****
    
    strokeWeight(3);
    stroke('black');
    fill (fillColor2);
    circle(centerX - sf*1.8, centerY + sf/2, sf*1.1); // left eye *****
    strokeWeight(3);
    stroke('white');
    circle(centerX + sf*1.8, centerY + sf/2, sf*1.1); // right eye *****

    strokeWeight(2);
    stroke('black');
    fill ('white');
    circle(centerX - sf*1.6, centerY + sf/3, sf/5); // left eye glow *****
    circle(centerX + sf*1.6, centerY + sf/3, sf/5); // right eye glow *****

    /***************/
    strokeWeight(4); // nose *****
    stroke('black');
    fill('pink');
    ellipse(centerX, centerY + sf*2, sf*4.4, sf*1.8); // nose // x, y, sizex, sizey
    strokeWeight(4);
    stroke('purple');
    fill ('hotpink');
    circle(centerX - sf*.9, centerY + 2*sf, sf/2.2); // left nostril *****
    circle(centerX + sf*.9, centerY + 2*sf, sf/2.2); // right nostril ******
}

