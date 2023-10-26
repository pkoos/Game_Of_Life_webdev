import { MAX_WIDTH, MAX_HEIGHT, PIXEL_SIZE, WIDTH_PIXELS, HEIGHT_PIXELS, DEFAULT_SHAPE_NAMES } from "./js/constants.js";
import { Pixel} from "./js/pixel.js";

/*
    Button Handlers
*/

function loadJavaScript(event) {
    let pixels = [];
    let savedPixels = [];
    let canvas = document.getElementById("CGoL_Board");
    let canvasContext = canvas.getContext("2d");

    initializePixels(pixels);
    initializeGrid(canvasContext);

    canvas.addEventListener("click", (event) => {
        toggleCanvasPixel(event, canvas, pixels);
    });

    let canvasTest = document.getElementById("canvasTest");
    canvasTest.addEventListener("click", () => {
        canvasDrawingTest(canvasContext, pixels);
    });

    let clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", () => {
        clearPixels(canvasContext, pixels);
    });

    let savePositionButton = document.getElementById("savePosition");
    savePositionButton.addEventListener("click", () => {
        savedPixels = savePosition(pixels);
    });

    let restorePositionButton = document.getElementById("restorePosition");
    restorePositionButton.addEventListener("click", () => {
        restorePosition(canvasContext, savedPixels);
    });

    let savedLivePixelsButton = document.getElementById("savedLivePixels");
    savedLivePixelsButton.addEventListener("click", () => {
        console.log(getLivePixels(savedPixels, false));
    });

    let currentLivePixelsButton = document.getElementById("currentLivePixels");
    currentLivePixelsButton.addEventListener("click", () => {
        console.log(getLivePixels(pixels, true));
    });

    shapesClickHandlers();
}

function toggleCanvasPixel(event, canvas, pixels) {
    let canvas_x = event.pageX - canvas.offsetLeft;
    let canvas_y = event.pageY - canvas.offsetTop;

    let x_element = Math.floor(canvas_x / PIXEL_SIZE);
    let y_element = Math.floor(canvas_y / PIXEL_SIZE);

    let pixel_index = y_element * WIDTH_PIXELS + x_element;
    let pixel = pixels[pixel_index];
    pixel.isAlive = !pixel.isAlive;
    pixel.toggle(canvas.getContext("2d")); // this is sloppy and I hate it.
}

function canvasDrawingTest(canvasContext, pixels) {
    if(pixels[0].isAlive) {
        drawingTest(canvasContext, pixels);
    }
    else {
        switchTest(canvasContext, pixels);
    }
    pixels[0].isAlive = ! pixels[0].isAlive;
}

function drawingTest(canvasContext, pixels) {
    clearPixels(canvasContext, pixels);
    initializeGrid(canvasContext);
    pixels.forEach((pixel) => {
        if(pixel.bothSame()) {
            pixel.isAlive = true;
            pixel.toggle(canvasContext);
        }
    });
}

function switchTest(canvasContext, pixels) {
    clearPixels(canvasContext, pixels);
    initializeGrid(canvasContext);
    pixels.forEach((pixel) => {
        if(pixel.bothDifferent()) {
            pixel.isAlive = true;
            pixel.toggle(canvasContext);
        }
    });
}

function initializeGrid(canvasContext) {
    let counter = 0;
    while (counter < MAX_WIDTH) {
        counter += PIXEL_SIZE;
        canvasContext.moveTo(counter, 0);
        canvasContext.lineTo(counter, MAX_HEIGHT);
        canvasContext.stroke();
    }

    counter = 0;

    while (counter < MAX_HEIGHT) {
        counter += PIXEL_SIZE;
        canvasContext.moveTo(0, counter);
        canvasContext.lineTo(MAX_WIDTH, counter);
        canvasContext.stroke();
    }
}

function initializePixels(pixels) {
    for (let height = 0; height < HEIGHT_PIXELS; height++) {
        for(let width = 0; width < WIDTH_PIXELS; width++) {
            var pixel = new Pixel(height, width);
            pixels.push(pixel);
        }
    }
}

function clearPixels(context, pixels) {
    pixels.forEach((pixel) => {
        pixel.isAlive = false;
        pixel.toggle(context);
    });
}

function savePosition(currentPixels) {
    let savedPixels = [];
    currentPixels.forEach((pixel) => {
        let newPixel = new Pixel(pixel.y, pixel.x, pixel.isAlive);
        savedPixels.push(newPixel);
    });

    return savedPixels;
}

function getLivePixels(pixels, isStarting = false) {
    var livePixels = [];
    pixels.forEach((pixel) => {
        if(pixel.isAlive) {
            livePixels.push(pixel);
        }
    });

    return livePixels;
}

function restorePosition(context, savedPixels) {
    savedPixels.forEach((pixel) => {
        pixel.toggle(context);
    });
}

function shapesClickHandlers() {
    DEFAULT_SHAPE_NAMES.forEach((shape) => {
        let button = document.getElementById(`shape${shape}`);
        button.addEventListener("click", (event) => {
            console.log(`${shape} clicked`);
        });
    });
}

document.addEventListener("DOMContentLoaded", loadJavaScript);
