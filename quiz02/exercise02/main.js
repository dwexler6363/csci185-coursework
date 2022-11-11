const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
  

function setup() {
    createCanvas(canvasWidth, canvasHeight);

drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn

    // function invocations goes here:
    function drawElmo(centerX, centerY, size, fillColor, hasNose) {
        let sf = size / 6; 

        fill(fillColor);
        circle(centerX, centerY, size);

        fill('white');
        circle(centerX - size / 9, centerY - size / 8, size/5);
        fill('white');
        circle(centerX + size /9, centerY - size / 8, size/5);
        fill('black');
        circle(centerX - size / 9, centerY - size / 8, size/18);
        fill('black');
        circle(centerX + size / 9, centerY - size / 8, size/18);

        fill('#db5461');
        ellipse(centerX, centerY, sf*1.1, sf*1.6);
        //ellipse(650, 250, 60, 90);  // x, y, width, height (but yours needs to scale)
    
    }

    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:
