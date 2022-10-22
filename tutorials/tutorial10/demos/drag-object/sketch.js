const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const data = {x: 100, y: 100, d: 100, color: 'white'}
const data1 = {x: 200, y: 200, d: 100, color: 'white'}

let activeShape = data;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

    // function mouseClicked() {
        //how do i move the first circle (data) to where
        // I just clicked the mouse?
       // data.x = mouseX;
       // data.y = mouseY;

// always rnning:
function draw() {
    clear();
    fill(data.color);
    circle(data.x, data.y, data.d);
    // circle(data1.x, data1.y, data1.d);
}

function mouseDragged() {
        //detecting which shape to move
        let distance = dist(data.x, data.y, mouseX, mouseY);
        console.log (distance, data.x, data.y, mouseX, mouseY);
        if (distance < data.d/2) { 
            console.log("first circle"); 
            activeShape = data; 
        } //else {
          //  console.log("second circle");
           // activeShape = data1;
        }

    // moving thecorrect shape:
    activeShape.x = mouseX;
    activeShape.y = mouseY;
    // let d = dist(data.x, data.y, mouseX, mouseY);
    //if (d < data.d/2 || data.color == 'teal') {
    // data.color = 'teal';  

function mouseReleased() {
    data.color = 'white';
}

