import { WIDTH_PIXELS, PIXEL_SIZE, MAX_WIDTH, MAX_HEIGHT, HEIGHT_PIXELS } from "./constants.js";
import {Pixel} from "./pixel.js";

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
    /*
        Second row of buttons: Save Starting Position, Restore Starting Position, Next Generation
    */
    
    var saveStartingButton = document.getElementById("saveStarting");
    saveStartingButton.addEventListener("click", (event) => {
        console.log("Save Starting Position clicked");
        startingPixels = JSON.parse(JSON.stringify(pixels));
        console.log(startingPixels);
        getLivePixels(startingPixels);
    });

    var restoreStartingPositionButton = document.getElementById("restoreStarting");
    restoreStartingPositionButton.addEventListener("click", (event) => {
        console.log("restore starting position clicked");
        console.log("starting Pixels: ")
        getLivePixels(startingPixels);
        drawLivePixels(startingPixels);
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

function clearPixels() {
    pixels.forEach((pixel) => {
        pixel.isAlive = false;
        pixel.togglePixel();
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

function drawLivePixels(pixelsToDraw) {
    pixelsToDraw.forEach((pixel) => {
        pixel.drawPixel();
    });
}

var pixels = [];

var startingPixels = [];

// var grid = document.getElementById("CGoL_Grid");
// var g_ctx = grid.getContext("2d");
var c = document.getElementById("CGoL_Board");
var ctx = c.getContext("2d");


eventHandlers();

console.log(`canvas pixel width x height: ${MAX_WIDTH / PIXEL_SIZE} x ${MAX_HEIGHT / PIXEL_SIZE}`);