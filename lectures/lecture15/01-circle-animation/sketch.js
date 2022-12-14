const circleData = [
  {x: 500, y: 50, d: 100, speedX: 3, speedY: 3, color: 'green'},
  {x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: 'teal'},
  {x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: 'yellow'},
  {x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: 'brown'},
  {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, color: 'purple'},
  {x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: 'blue'}
];
// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// initialize variables outside of the function:
// let x = 0;
// let y = 500;
// let d = 50;
// let speedX = 3;
// let speedY = 2;
 
const ball = { //dont need
    x: 0,
    y: 500,
    d: 50,
    speedX: 3,
    speedY: -2
};

const ball2 = { //dont need
    x: 0,
    y: 200,
    d: 80,
    speedX: 2,
    speedY: 3
};

function draw() {
    clear();

    // new:
    let i = 0
    while (i < circleData.length) {
    //new:
        const ball = circleData[i]; // {x: 500, y: 0, d: 100, speedx: 3, speedy: 3},
    
    //same:
    fill(ball.color);
    circle(ball.x, ball.y, ball.d);
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    //new
    i++;
 }

    drawGrid(canvasWidth, canvasHeight);
}

