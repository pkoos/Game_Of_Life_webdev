import { MAX_WIDTH, MAX_HEIGHT } from "./js/constants.js";
import { Canvas } from "./js/canvas.js";
import { LifeRules } from "./js/rules.js";

/*
    Button Handlers
*/

function loadJavaScript() {
    
    let jsCanvas = new Canvas(
        MAX_HEIGHT, MAX_WIDTH, 
        document.getElementById("CGoL_Board"), 
        document.getElementById("CGoL_Board").getContext("2d"));

    jsCanvas.grid();
    jsCanvas.initializePixels();
    
    document.getElementById("CGoL_Board").addEventListener("click", (event) => {
        jsCanvas.toggle(event);
    });

    let canvasTest = document.getElementById("canvasTest");
    canvasTest.addEventListener("click", () => {
        jsCanvas.test();
    });

    let clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", () => {
        jsCanvas.clear();
    });

    let savePositionButton = document.getElementById("savePosition");
    savePositionButton.addEventListener("click", () => {
        jsCanvas.save();
    });

    let restorePositionButton = document.getElementById("restorePosition");
    restorePositionButton.addEventListener("click", () => {
        jsCanvas.restore();
    });

    let nextGenerationButton = document.getElementById("nextGeneration");
    nextGenerationButton.addEventListener("click", (event) => {
        let rules = new LifeRules(jsCanvas.pixels);
        let nextBoard = rules.testGenerate();

        nextBoard.forEach((pixel) => {
            pixel.toggle(jsCanvas.context);
        })
    });

    let savedLivePixelsButton = document.getElementById("savedLivePixels");
    savedLivePixelsButton.addEventListener("click", () => {
        console.log(jsCanvas.livePixels(true));
    });

    let currentLivePixelsButton = document.getElementById("currentLivePixels");
    currentLivePixelsButton.addEventListener("click", () => {
        console.log(jsCanvas.livePixels());
    });

    jsCanvas.defaultShapesHandlers();
}

document.addEventListener("DOMContentLoaded", loadJavaScript);
