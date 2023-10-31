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
    let jsCanvas = new Canvas(MAX_HEIGHT, MAX_WIDTH, canvas, canvasContext);

    jsCanvas.grid();
    jsCanvas.initializePixels();
    
    pixels = jsCanvas.pixels;


    canvas.addEventListener("click", (event) => {
        jsCanvas.toggle(event);
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

document.addEventListener("DOMContentLoaded", loadJavaScript);
