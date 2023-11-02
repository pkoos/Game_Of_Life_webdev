import { Canvas } from "./js/canvas.js";

function loadJavaScript() {
    
    let canvas = new Canvas(
        document.getElementById("CGoL_Board"), 
        document.getElementById("CGoL_Board").getContext("2d"),
        document.getElementById("generationCounter"));
    
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

    let savedLiveCellsButton = document.getElementById("savedLiveCells");
    savedLiveCellsButton.addEventListener("click", () => {
        console.log(canvas.liveCells(true));
    });

    let currentLiveCellsButton = document.getElementById("currentLiveCells");
    currentLiveCellsButton.addEventListener("click", () => {
        console.log(canvas.liveCells());
    });

    canvas.defaultShapesHandlers();
}

document.addEventListener("DOMContentLoaded", loadJavaScript);
