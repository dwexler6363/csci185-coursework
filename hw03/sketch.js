function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    // drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    // drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    // drawCreature(454, 423, 141, '#aebb83', '#227876');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');

drawCreature(200, 400, 200);   
drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:
function drawCreature (centerX, centerY, size, faceColor='white'){

    beginShape(); //right horn *****
    fill('brown');
    strokeWeight (5)
    stroke('black');
    vertex(275, 295); // top corner
    vertex(150, 350); // left corner
    vertex(300, 400); // right corner
    endShape(CLOSE);

    beginShape(); //left horn *****
    fill('brown');
    strokeWeight (5)
    stroke('black');
    vertex(125, 295); // top corner
    vertex(100, 400); // left corner
    vertex(260, 350); // right corner
    endShape(CLOSE);

    strokeWeight(5); // left ear *****
    fill('white')
    stroke('black');
    curve(
        300, 900,   // control point
        200, 450,   //right point
        350, 390,   //left point
        200, 1000   // control point
    );

    strokeWeight(5); // right ear ******
    fill('white')
    stroke('black');
    curve(
        50, 900,    // control point
        200, 450,   //right point
        50, 390,    //left point
        200, 1000   // control point
    );

    stroke('black'); // bottom of ears ******
    strokeWeight(5);
    line(50, 390, 350, 390);

    let sf = size / 6;
    strokeWeight(1.5);
    stroke('black');
    fill ('black');
    circle (centerX - sf+135, centerY - sf-3, sf+2); // right ear spot *****

    strokeWeight(5);
    stroke('black');
    fill (faceColor)
    circle (centerX, centerY, size-6) // main head *****

    strokeWeight(1.5);
    stroke('black');
    fill ('black');
    circle (centerX - sf*1.1, centerY - sf-23, sf+26); // left top spot *****
    circle (centerX - sf*2, centerY - sf, sf); // top lower spot *****
    circle (centerX - sf+90, centerY - sf+50, sf+45); // bottom rightspot *****
    
    strokeWeight(2.5);
    stroke('black');
    fill ('navy');
    circle(centerX - sf*1.8, centerY - sf+49, sf+2); // left eye *****
    strokeWeight(2.5);
    stroke('white');
    circle(centerX + sf*1.8, centerY - sf+49, sf+2); // right eye *****

    strokeWeight(1);
    stroke('black');
    fill ('white');
    circle(centerX - sf*1.6, centerY - sf+45, sf/3.2); // left eye glow *****
    circle(centerX + sf*1.6, centerY - sf+45, sf/3.2); // right eye glow *****

    strokeWeight(4); // nose *****
    stroke('black');
    fill('pink');
    ellipse(200, 466, 145, 61); // nose // x, y, sizex, sizey

    strokeWeight(2);
    stroke('red');
    fill ('purple');
    circle(centerX - sf*.9, centerY - sf+100, sf/2.2); // left nostril *****
    circle(centerX + sf*.9, centerY - sf+100, sf/2.2); // right nostril ******



}


