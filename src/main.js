import { MAX_WIDTH, MAX_HEIGHT, PIXEL_SIZE, WIDTH_PIXELS, HEIGHT_PIXELS, DEFAULT_SHAPE_NAMES } from "./js/constants.js";
import { Pixel} from "./js/pixel.js";

/*
    Button Handlers
*/

function loadJavaScript(event) {
    let pixels = [];
    let savedPixels = [];
    let canvas = document.getElementById("CGoL_Board");
    let canvas_context = canvas.getContext("2d");

    initializePixels(canvas_context, pixels);
    initializeGrid(canvas_context);

    canvas.addEventListener("click", (event) => {
        toggleCanvasPixel(event, canvas, pixels);
    });

    let canvasTest = document.getElementById("canvasTest");
    canvasTest.addEventListener("click", () => {
        canvasDrawingTest(canvas_context, pixels);
    });

    let clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", () => {
        clearPixels(pixels);
    });

    let savePositionButton = document.getElementById("savePosition");
    savePositionButton.addEventListener("click", () => {
        savedPixels = savePosition(pixels);
    });

    let restorePositionButton = document.getElementById("restorePosition");
    restorePositionButton.addEventListener("click", () => {
        restorePosition(savedPixels);
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
    pixel.toggle();
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

function drawingTest(canvas_context, pixels) {
    clearPixels(pixels);
    initializeGrid(canvas_context);
    pixels.forEach((pixel) => {
        if(pixel.bothSame()) {
            pixel.isAlive = true;
            pixel.toggle();
        }
    });
}

function switchTest(canvas_context, pixels) {
    clearPixels(pixels);
    initializeGrid(canvas_context);
    pixels.forEach((pixel) => {
        if(pixel.bothDifferent()) {
            pixel.isAlive = true;
            pixel.toggle();
        }
    });
}

function initializeGrid(canvas_context) {
    let counter = 0;
    while (counter < MAX_WIDTH) {
        counter += PIXEL_SIZE;
        canvas_context.moveTo(counter, 0);
        canvas_context.lineTo(counter, MAX_HEIGHT);
        canvas_context.stroke();
    }

    counter = 0;

    while (counter < MAX_HEIGHT) {
        counter += PIXEL_SIZE;
        canvas_context.moveTo(0, counter);
        canvas_context.lineTo(MAX_WIDTH, counter);
        canvas_context.stroke();
    }
}

function initializePixels(canvas_context, pixels) {
    for (let height = 0; height < HEIGHT_PIXELS; height++) {
        for(let width = 0; width < WIDTH_PIXELS; width++) {
            var pixel = new Pixel(canvas_context, height, width);
            pixels.push(pixel);
        }
    }
}

function clearPixels(pixels) {
    pixels.forEach((pixel) => {
        pixel.isAlive = false;
        pixel.toggle();
    });
}

function savePosition(currentPixels) {
    let savedPixels = [];
    currentPixels.forEach((pixel) => {
        let newPixel = new Pixel(pixel.context, pixel.y, pixel.x, pixel.isAlive);
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

function restorePosition(savedPixels) {
    savedPixels.forEach((pixel) => {
        pixel.toggle();
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
