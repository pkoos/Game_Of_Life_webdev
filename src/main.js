import { MAX_WIDTH, MAX_HEIGHT, PIXEL_SIZE, WIDTH_PIXELS, HEIGHT_PIXELS, DEFAULT_SHAPE_OBJECTS } from "./js/constants.js";
import { Pixel} from "./js/pixel.js";
import { Canvas } from "./js/canvas.js";

/*
    Button Handlers
*/

function loadJavaScript() {
    
    let pixels = [];
    let savedPixels = [];
    let canvas = document.getElementById("CGoL_Board");
    let canvasContext = canvas.getContext("2d");
    let jsCanvas = new Canvas(MAX_HEIGHT, MAX_WIDTH, canvasContext);

    jsCanvas.grid();
    jsCanvas.initializePixels();
    console.log(jsCanvas.pixels);
    
    pixels = jsCanvas.pixels;
    console.log(pixels);


    canvas.addEventListener("click", (event) => {
        toggleCanvasPixel(event, canvas, pixels);
    });

    let canvasTest = document.getElementById("canvasTest");
    canvasTest.addEventListener("click", () => {
        console.log("Canvas Test Clicked");
        jsCanvas.test();
        // canvasDrawingTest(canvasContext, pixels);
    });

    let clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", () => {
        jsCanvas.clearPixels(canvasContext, pixels);
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

    shapesClickHandlers(canvasContext, pixels);
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

function shapesClickHandlers(context, pixels) {
    DEFAULT_SHAPE_OBJECTS.forEach((shape) => {
        let button = document.getElementById(`shape${shape.name}`);
        button.addEventListener("click", () => {
            console.log(`${shape.name} clicked`);
            jsCanvas.clearPixels(context, pixels);
            shape.draw(context);
        });
    });
}

document.addEventListener("DOMContentLoaded", loadJavaScript);
