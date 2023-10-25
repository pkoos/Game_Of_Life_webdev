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
    constructor(board) {
        this.board = board;
    }

    getNeighbors(x, y) {
        var neighbors = [];

        var starting_x = x === 0 ? 0 : x - 1;
        var starting_y = y === 0 ? 0 : y - 1;

        // neighbors order: start at top left and work down to bottom right
        // there will be either 3, 5, or 8 neighbors, depending on if x/y is zero.
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

function eventHandlers() {
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
    
        var rect = c.getBoundingClientRect();
    
        var canvas_x = event.pageX - c.offsetLeft;
        var canvas_y = event.pageY - c.offsetTop;
    
        var x_element = Math.floor(canvas_x / PIXEL_SIZE);
        var y_element = Math.floor(canvas_y / PIXEL_SIZE);
    
        var pixelIndex = y_element * WIDTH_PIXELS + x_element;
    
        var pixel = pixels[pixelIndex];
        
        pixel.isAlive = !pixel.isAlive;
        pixel.togglePixel();
    });
    
    var saveStartingButton = document.getElementById("saveStarting");
    saveStartingButton.addEventListener("click", (event) => {
        console.log("Save Starting Position clicked");
        startingPixels = JSON.parse(JSON.stringify(pixels));
        console.log(startingPixels);
        getLivePixels(startingPixels);
    });
    
    var startingLivePixelsButton = document.getElementById("startingLivePixels");
    startingLivePixelsButton.addEventListener("click", (event) => {
        console.log("starting live pixels clicked");
        getLivePixels(startingPixels, true);   
    });
    
    var currentLivePixelsButton = document.getElementById("currentLivePixels");
    currentLivePixelsButton.addEventListener("click", (event) => {
        console.log("current live pixels clicked");
        getLivePixels(pixels);   
    });
    
    var nextGenerationButton = document.getElementById("nextGeneration");
    nextGenerationButton.addEventListener("click", (event) => {
        console.log("Next Generation Button clicked");
        
    });
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

function getLivePixels(pixels, isStarting = false) {
    var livePixels = [];
    pixels.forEach((pixel) => {
        if(pixel.isAlive) {
            livePixels.push(pixel);
        }
    });
    console.log(`${isStarting ? "starting " : ""}live pixels:`);
    console.log(livePixels)
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

var startingPixels = [];

// var grid = document.getElementById("CGoL_Grid");
// var g_ctx = grid.getContext("2d");
var c = document.getElementById("CGoL_Board");
var ctx = c.getContext("2d");

initPixels(ctx);
drawGrid(ctx);
eventHandlers();

