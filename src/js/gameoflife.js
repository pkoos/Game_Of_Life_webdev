class Pixel {
    constructor(context, height, width, isAlive = false) {
        this.context = context;
        this.height = height * PIXEL_SIZE;
        this.width = width * PIXEL_SIZE;
        this.isAlive = isAlive;
    }

    drawPixel() {
        this.context.fillRect(this.width, this.height, PIXEL_SIZE, PIXEL_SIZE);
    }

    clearPixel() {
        this.context.clearRect(this.width, this.height, PIXEL_SIZE, PIXEL_SIZE);
    }

    togglePixel() {
        if(this.isAlive) {
            this.drawPixel();
        }
        else {
            this.clearPixel();
            this.context.strokeRect(this.width, this.height, PIXEL_SIZE, PIXEL_SIZE);
        }
    }

    bothAreEven() {
        return this.height % 2 == 0 && this.width % 2 == 0;
    }
    
    bothAreOdd() {
        return this.height % 2 == 1 && this.width % 2 == 1;
    }

    onlyHeightEven() {
        return this.height % 2 == 0 && this.width % 2 == 1;
    }

    onlyWidthEven() {
        return this.height % 2 == 1 && this.width % 2 == 0;
    }
}

class LifeRules {
    constructor(pixel) {
        this.pixel = pixel;
    }

    underpopulation() {
        // a live cell with less than 2 live neighbors dies.
    }

    neutralpopulation() {
        // a live cell with 2 - 3 live neighbors lives.
    }

    overpopulation() {
        // a live cell with 3 or more neighbors dies.
    }

    reproduction() {
        // a dead cell with 3 live neighbors lives.
    }
}

function drawGrid(context) {
    var vert_lines_counter = 0;

    while (vert_lines_counter < MAX_WIDTH) {
        vert_lines_counter += PIXEL_SIZE;
        context.moveTo(vert_lines_counter, 0);
        context.lineTo(vert_lines_counter, MAX_HEIGHT);
        context.stroke();
    }
    
    var horiz_lines_counter = 0;
    
    while (horiz_lines_counter < MAX_HEIGHT) {
        horiz_lines_counter += PIXEL_SIZE;
        context.moveTo(0, horiz_lines_counter);
        context.lineTo(MAX_WIDTH, horiz_lines_counter);
        context.stroke();
    }
}

function getNeighborPixels() {
    console.log("getNeighborPixels");
}

function initPixels(context) {
    for(var h = 0;h < HEIGHT_PIXELS; h++) {
        for(var w = 0; w < WIDTH_PIXELS; w++) {
            var pixel = new Pixel(context, h, w);
            pixels.push(pixel);
        }
    }
}

function clearPixels() {
    pixels.forEach((pixel) => {
        pixel.isAlive = false;
        pixel.togglePixel();
    });
}

function drawSquares() {
    pixels.forEach((pixel) => {
        if (pixel.bothAreEven() || pixel.bothAreOdd()) {
            pixel.isAlive = true;
            pixel.togglePixel();
        }
    });
}

function switchSquares() {
    pixels.forEach((pixel) => {
        if(pixel.onlyWidthEven() || pixel.onlyHeightEven()) {
            pixel.isAlive = true;
            pixel.togglePixel();
        }
    });
}
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// The code that we run is below this line, above this line are all the functions needed.
var MAX_WIDTH = 1200;
var MAX_HEIGHT = 800;
var PIXEL_SIZE = 25;
var WIDTH_PIXELS = MAX_WIDTH / PIXEL_SIZE;
var HEIGHT_PIXELS = MAX_HEIGHT / PIXEL_SIZE;

var TOTAL_PIXELS = (MAX_WIDTH/PIXEL_SIZE) * (MAX_HEIGHT/PIXEL_SIZE)

var pixels = [];

// var grid = document.getElementById("CGoL_Grid");
// var g_ctx = grid.getContext("2d");
var c = document.getElementById("CGoL_Board");
var ctx = c.getContext("2d");

initPixels(ctx);
drawGrid(ctx);

var drawButton = document.getElementById("drawButton");
drawButton.addEventListener("click", (event) => {
    console.log("Draw button was clicked");
    clearPixels();
    drawGrid(ctx);
    drawSquares();
});

var switchButton = document.getElementById("switchButton");
switchButton.addEventListener("click", (event) => {
    console.log("Switch button was clicked");
    clearPixels(ctx);
    drawGrid(ctx);
    switchSquares(ctx);
});

var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", (event) => {
    clearPixels(ctx);
    drawGrid(ctx);
});

c.addEventListener("click", (event) => {

    var canvas_x = event.clientX - c.offsetLeft;
    var canvas_y = event.clientY - c.offsetTop;
    
    console.log(`normalized coordinates: x: ${canvas_x}, y: ${canvas_y}`);


    var x_element = Math.floor(canvas_x / PIXEL_SIZE);
    var y_element = Math.floor(canvas_y / PIXEL_SIZE);

    console.log(`x pixel: ${x_element}, y pixel: ${y_element}`);

    var pixelIndex = y_element * WIDTH_PIXELS + x_element;
    var pixel = pixels[pixelIndex];

    console.log(pixel);
    
    pixel.isAlive = !pixel.isAlive;
    console.log(`is pixel alive? ${pixel.isAlive}`);
    pixel.togglePixel();
});

var nextGenerationButton = document.getElementById("nextGeneration");
nextGenerationButton.addEventListener("click", (event) => {
    console.log("Next Generation Button clicked");
});

console.log(`Total Pixels: ${TOTAL_PIXELS}, Height: ${HEIGHT_PIXELS}, Width: ${WIDTH_PIXELS}`);
console.log("pixels:");
console.log(pixels);
