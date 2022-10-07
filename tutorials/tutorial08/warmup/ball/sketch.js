const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;
let width = 50;
let color = 'black';

// anytime to want to animate you put code in draw function
function draw() {
    // frameRate(4);
    clear();
    
    if (x >= 500 - width/2) {
        speed = speed * -1; //speed *= -1;
    } else if (x <= 150 + width/2) {
        speed = speed * -1;
        //speed *= -1;
    }

    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight); //left wall
    rect(500, 0, 50, canvasHeight); //right wall

    // draw circle:
    fill(color);
    circle(x, canvasHeight/2, width);
    x += speed;
    console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}

const changeBallColor = ev => {
    console.log(ev.code);
    if (ev.code == 'KeyR') {
        color = 'red';
    } else if (ev.code == 'KeyP'){
        color = 'purple';
    } else if (ev.code == 'KeyB'){
        color = 'black';
    } 
}

// Add event listener on keydown
document.addEventListener ('keydown', changeBallColor);