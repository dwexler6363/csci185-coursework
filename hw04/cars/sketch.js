const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 6,
    color: 'hotpink'
};
const c2 = {
    x: 1500,
    y: 200,
    width: 200,
    speed: 2,
    color: 'teal'
};const c3 = {
    x: 100,
    y: 300,
    width: 200,
    speed: 3,
    color: 'red'
};
const c4 = {
    x: 1500,
    y: 400,
    width: 200,
    speed: 5,
    color: 'green'
};
const c5 = {
    x: 100,
    y: 600,
    width: 200,
    speed: 4,
    color: 'yellow'
};


// required to set up the canvas:
async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {  
     // clear the canvas:
    clear();

    // move the car: //??????????
   c1.x += c1.speed;
   if (c1.x < 10) {
    c1.x = 0;
   }
    c2.x -= c2.speed;
    c3.x += c3.speed;
    c4.x -= c4.speed;
    c5.x += c5.speed;

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width * .8, c1.color);
    drawCar(c2.x, c2.y, c2.width * 1.4 , c2.color);
    drawCar(c3.x, c3.y, c3.width * .5, c3.color);
    drawCar(c4.x, c4.y, c4.width, c4.color);
    drawCar(c5.x, c5.y, c5.width * 2, c5.color);

    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);
}


function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
    
}

