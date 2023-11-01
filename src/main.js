import { MAX_WIDTH, MAX_HEIGHT } from "./js/constants.js";
import { Canvas } from "./js/canvas.js";

/*
    Button Handlers
*/

function loadJavaScript() {
    
    let canvas = new Canvas(
        MAX_HEIGHT, MAX_WIDTH, 
        document.getElementById("CGoL_Board"), 
        document.getElementById("CGoL_Board").getContext("2d"));

    canvas.grid();
    canvas.initializePixels();
    
    document.getElementById("CGoL_Board").addEventListener("click", (event) => {
        canvas.toggle(event);
    });

    let canvasTest = document.getElementById("canvasTest");
    canvasTest.addEventListener("click", () => {
        canvas.test();
    });

    let clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", () => {
        canvas.clear();
    });

    let savePositionButton = document.getElementById("savePosition");
    savePositionButton.addEventListener("click", () => {
        canvas.save();
    });

    let restorePositionButton = document.getElementById("restorePosition");
    restorePositionButton.addEventListener("click", () => {
        canvas.restore();
    });

    let nextGenerationButton = document.getElementById("nextGeneration");
    nextGenerationButton.addEventListener("click", (event) => {
        // let rules = new LifeRules(canvas.pixels);
        // let nextBoard = rules.testGenerate();

        // nextBoard.forEach((pixel) => {
        //     pixel.toggle(canvas.context);
        // })
        canvas.next();
    });

    let savedLivePixelsButton = document.getElementById("savedLivePixels");
    savedLivePixelsButton.addEventListener("click", () => {
        console.log(canvas.livePixels(true));
    });

    let currentLivePixelsButton = document.getElementById("currentLivePixels");
    currentLivePixelsButton.addEventListener("click", () => {
        console.log(canvas.livePixels());
    });

    canvas.defaultShapesHandlers();
}

document.addEventListener("DOMContentLoaded", loadJavaScript);
