function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    // drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    // drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    //drawCreature(454, 423, 141, '#aebb83', '#227876');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');

drawCreature(200, 400, 200,);  
drawCreature(500, 200, 300, 'purple', 'teal'); 
drawCreature(1150, 250, 400, 'green', 'orange');
drawCreature(800, 400, 150, 'yellow', 'grey');
drawCreature(500, 550, 230, 'red', 'lime')


drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:
function drawCreature(centerX, centerY, size, fillColor1='brown', fillColor2='navy'){

    beginShape(); //right horn *****
    fill(fillColor1);
    strokeWeight (5)
    stroke('black');
    vertex(centerX + size * .37, centerY - size/1.9); // top corner
    vertex(centerX - size * .35, centerY - size * .25); // left corner
    vertex(centerX + size/2, centerY); // right corner
    endShape(CLOSE);

    beginShape(); //left horn *****
    fill(fillColor1);
    strokeWeight (5)
    stroke('black');
    vertex(centerX - size * .37, centerY - size/1.9); // top corner
    vertex(centerX + size * .35, centerY - size * .25); // left corner
    vertex(centerX - size/2, centerY); // right corner
    endShape(CLOSE);

    let sf = size / 6; 

    strokeWeight(5); // left ear *****
    fill('white')
    stroke('black');
    curve(
        centerX + size * .6, centerY + size * 3.5,   // control point
        centerX, centerY + size/3,   //right point //
        centerX + size * .75, centerY - size * .05,  //left point
        centerY - size * 1.4, centerY + size * 3  // control point
    );

    strokeWeight(5); // right ear ******
    fill('white')
    stroke('black');
    curve(
        centerX - size * .6, centerY + size * 3.2,    // control point
        centerX, centerY + size/3,   //right point //
        centerX - size * .75, centerY - size * .05,    //left point 
        centerY - size * 1, centerY + size * 3  // control point
    );

    stroke('black'); // bottom of ears ******
    strokeWeight(5);
    line(
        centerX + size * .75, centerY - size *.04, //50, 390 
        centerX - size * .75, centerY - size * .04 //350, 390
        );

    strokeWeight(1.5);
    stroke('black');
    fill ('black');
    circle (centerX + sf *3, centerY - sf *1.1, sf + size * .02); // right ear spot *****

    strokeWeight(5);
    stroke('black');
    fill ('white')
   circle (centerX , centerY, size - sf/5) // main head *****

    strokeWeight(1.5);
    stroke('black');
    fill ('black');
    circle (centerX - sf*1.1, centerY - sf*1.7, sf*1.7); // left top spot *****
    circle (centerX - sf*2, centerY - sf, sf); // top lower spot *****
   circle (centerX + sf*1.6, centerY + sf/2, sf*2.5); // bottom rightspot *****
    
    strokeWeight(2.5);
    stroke('black');
    fill (fillColor2);
   circle(centerX - sf*1.8, centerY + sf/2, sf*1.1); // left eye *****
    strokeWeight(2.5);
    stroke('white');
  circle(centerX + sf*1.8, centerY + sf/2, sf*1.1); // right eye *****

    strokeWeight(1);
    stroke('black');
    fill ('white');
    circle(centerX - sf*1.6, centerY + sf/3, sf/4); // left eye glow *****
    circle(centerX + sf*1.6, centerY + sf/3, sf/4); // right eye glow *****

    /***************/
    strokeWeight(4); // nose *****
    stroke('black');
    fill('pink');
   ellipse(centerX, centerY + sf*2, sf*4.4, sf*1.8); // nose // x, y, sizex, sizey
    strokeWeight(2);
    stroke('red');
    fill ('purple');
    circle(centerX - sf*.9, centerY + 2*sf, sf/2.2); // left nostril *****
    circle(centerX + sf*.9, centerY + 2*sf, sf/2.2); // right nostril ******
}


