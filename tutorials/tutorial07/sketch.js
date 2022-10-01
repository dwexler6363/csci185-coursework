function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 80, 'hotpink'); // x, y, diameter, color
    drawCircle(200, 100, 40, 'navy');
    drawCircle(300, 100, 80, 'teal');
    drawCircle(400, 100, 40, 'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 62.5,100, 'teal');
    drawOval(200, 200, 100, 62.5, 'hotpink');
    drawOval(300, 200, 62.5, 100, 'navy');
    drawOval(400, 200, 100, 62.5, 'teal');

    // Exercise 3:
    drawBullseye(100, 300, 100, 'purple', 'green');
    drawBullseye(200, 300, 50, 'purple', 'yellow');
    drawBullseye(300, 300, 100, 'purple', 'green');
    drawBullseye(400, 300, 50, 'purple', 'yellow');

    // Exercise 4:
    drawFace();
    drawFace(100, 400, 50, 'pink');
    drawFace(200, 400, 100);
    drawFace(300, 400, 50, 'pink');
    drawFace(400, 400, 100);

    drawGrid(canvasWidth, canvasHeight);
}



// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, fillColor1='teal', fillColor2='navy') {
    fill(fillColor1);
    circle(centerX, centerY, size);
    fill(fillColor2);
    circle(centerX, centerY, size * .75);
    fill(fillColor1);
    circle(centerX, centerY, size * .5);
    fill(fillColor2);
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, faceColor='yellow') {
    fill(faceColor);
    circle(centerX, centerY, size); //100,400,50
    fill('black');
    let sf = size / 6;
    circle(centerX - sf, centerY - sf, sf); // left eye
    circle(centerX + sf, centerY - sf, sf); // right eye

    //make a mouth:
    strokeWeight(size / 25);
    // line(
    //      centerX - sf*2, // x1
    //      centerY + sf, // v1
    //      centerX + sf*2, // x2
    //      cebterY + sf // y2
    // ) //x1 y1 x2 y2

    noFill()
    stroke ('black');
    curve(
        centerX + sf*2, centerY - 1.5*size, // control point
        centerX + sf*2, centerY + .3*sf, // start point
        centerX - sf*2, centerY + .3*sf, // end point
        centerX - sf*2, centerY - 1.5*size // control point
    )
    strokeWeight(1)    

   // arc(100, 100, 100, 200, -1, -.5, OPEN)   
   // x, y, wodth, height, start, OPEN      
}
