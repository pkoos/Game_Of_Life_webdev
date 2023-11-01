import { SLEEP_DELAY } from "./js/constants.js";
import { Canvas } from "./js/canvas.js";

/*
    Button Handlers
*/

function loadJavaScript() {
    
    let canvas = new Canvas(
        document.getElementById("CGoL_Board"), 
        document.getElementById("CGoL_Board").getContext("2d"),
        document.getElementById("generationCounter"));

    canvas.grid();
    
    document.getElementById("CGoL_Board").addEventListener("click", (event) => {
        canvas.toggle(event);
    });

    let canvasTest = document.getElementById("canvasTest");
    canvasTest.addEventListener("click", () => {
        canvas.test();
    });

    let clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", () => {
        canvas.clear(true);
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
        canvas.next();
    });

    let playAndStopButton = document.getElementById("playAndStop");
    playAndStopButton.addEventListener("click", (event) => {
        canvas.play(playAndStopButton);
    })

    let savedLivePixelsButton = document.getElementById("savedLivePixels");
    savedLivePixelsButton.addEventListener("click", () => {
        console.log(canvas.liveCells(true));
    });

    let currentLivePixelsButton = document.getElementById("currentLivePixels");
    currentLivePixelsButton.addEventListener("click", () => {
        console.log(canvas.liveCells());
    });

    canvas.defaultShapesHandlers();
}

// TODO: Find a better home for this function other than here.
export async function sleep(ms = SLEEP_DELAY) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

document.addEventListener("DOMContentLoaded", loadJavaScript);
