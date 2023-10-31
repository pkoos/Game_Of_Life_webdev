import { MAX_WIDTH, MAX_HEIGHT, PIXEL_SIZE, WIDTH_PIXELS, DEFAULT_SHAPE_OBJECTS } from "./js/constants.js";
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
    
    pixels = jsCanvas.pixels;


    canvas.addEventListener("click", (event) => {
        toggleCanvasPixel(event, canvas, pixels);
    });

    let canvasTest = document.getElementById("canvasTest");
    canvasTest.addEventListener("click", () => {
        jsCanvas.test();
    });

    let clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", () => {
        jsCanvas.clearPixels(canvasContext, pixels);
    });

    let savePositionButton = document.getElementById("savePosition");
    savePositionButton.addEventListener("click", () => {
        savedPixels = jsCanvas.save();
    });

    let restorePositionButton = document.getElementById("restorePosition");
    restorePositionButton.addEventListener("click", () => {
        jsCanvas.restore();
    });

    let savedLivePixelsButton = document.getElementById("savedLivePixels");
    savedLivePixelsButton.addEventListener("click", () => {
        console.log(jsCanvas.livePixels(true));

    });

    let currentLivePixelsButton = document.getElementById("currentLivePixels");
    currentLivePixelsButton.addEventListener("click", () => {
        console.log(jsCanvas.livePixels());
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
