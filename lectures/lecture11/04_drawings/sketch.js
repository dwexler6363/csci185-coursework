function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("lightblue");


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/circle
    // fill('pink');
    // circle(800, 350, 600);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('teal');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    // Rectangle: https://p5js.org/reference/#/p5/rect
    // Curve: https://p5js.org/reference/#/p5/curve

    drawSmiley(500); //invoke draw smiley
    drawSmiley(300, 70, 300);
    drawSmiley(500, 500, 40)

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function drawSmiley(x, y, diameter) {
    fill('yellow');
    circle(x, y, diameter); // x, y, diameter
}

function mouseClicked() {
    drawSmiley(mouseX, mouseY, MAth.random() * 300);
}

