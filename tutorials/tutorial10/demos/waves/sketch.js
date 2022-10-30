const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const earth = [
    { x: 500, y: 250, d: 50, speed: 4 },
    { x: 200, y: 200, d: 80, speed: 2 },
]

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

counter = 0;
function draw() {
    clear();
    
    // ball 1:
    fill('hotpink');
    circle(earth[0].x, earth[0].y, earth[0].d);
    // uses the counter and the sin function to update the position 
    earth[0].y += 5 * Math.sin(counter / 50); 

    // ball 2: 
    fill('teal');
    circle(earth[1].x, earth[1].y, earth[1].d);
    earth[1].y += 5 * Math.cos(counter / 30);
    earth[1].x += 3;

    // loop ball 2 back to the beginning if it gets to the end:
    if (earth[1].x > canvasWidth + 100) {
       earth[1].x = -100;
    }

    counter++; // don't forget to increment the counter

    displayMessage();
}

function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Uses the Math.sin() function with a counter to control movement.", canvasWidth/2, canvasHeight/2);
}