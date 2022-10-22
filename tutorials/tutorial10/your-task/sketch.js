const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


let size = 250;
let x = canvasWidth / 2;
let y = canvasHeight / 2 - 50;
//////////////////////////////////////////////////////////////////
let doJump = false;
let counter = 0;
let initialY = y;

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawCreature(x, y, size, 'white', '#abb880', 'red');
}

// MOVE AROUND
function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        y -= 4;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 4;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 4;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 4;
    } else if (ev.code == 'KeyG') {
        size += 3;
    } else if (ev.code == 'KeyS') {
        size -= 3;
    }

    clear();
    noFill();
    drawCreature(x, y, size, 'white', '#abb880', 'red');
}

document.addEventListener('keydown', moveController)
/////////////////////////////////////////////////////////////////////////////////

// JUMP
function draw() {
    clear();
    
    if (doJump) {
        // animate for one Math.sin cycle, then 
        // turn doJump variable to false
        const jumpHeight = -10;
        const jumpSpeed = 6;
        y += jumpHeight * Math.sin(counter / jumpSpeed); 
        counter++;
        if (y < initialY) {
            doJump = false;
        }
    }

    drawCreature(x, y, size, 'white', '#abb880', 'red');

}

function jump(ev) {
    console.log(ev.code);
    if (ev.code == 'Space') {
        doJump = true;
    }
}

document.addEventListener('keydown', jump);
///////////////////////////////////////////////////////////////////////////





//function displayMessage() {
    //fill('black');
     //textAlign(CENTER);
     //textSize(40);
    //text("Hold the spacebar to jump.", canvasWidth/2, canvasHeight/1.2);
    // text("Press S key to shrink cow and G key to grow cow.", canvasWidth/2, canvasHeight/1.3);
    // text("Pess arrow keys to move up, down, and side to side.", canvasWidth/2, canvasHeight/1.4);


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