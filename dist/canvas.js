var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Canvas_instances, _Canvas_draw, _Canvas_drawingTest, _Canvas_emptyCells, _Canvas_generationString, _Canvas_grid, _Canvas_shapeHandler, _Canvas_switchTest;
import { DEFAULT_SHAPE_OBJECTS, HEIGHT_CELLS, CELL_SIZE, WIDTH_CELLS, FALLBACK_LIMIT, MAX_HEIGHT, MAX_WIDTH, SLEEP_DELAY } from "./constants.js";
import { Cell } from "./cell.js";
import { Shape } from "./shape.js";
import { LifeRules } from "./rules.js";
class Canvas {
    constructor(canvas, context, genCounter) {
        _Canvas_instances.add(this);
        this.canvas = canvas;
        this.context = context;
        this.genCounter = genCounter;
        this.numGens = 0;
        this.cells = __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_emptyCells).call(this);
        this.savedCells = __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_emptyCells).call(this);
        __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_grid).call(this);
    }
    /*
        Public functions - most of these are for click handlers
    */
    clear(resetGens = false) {
        this.cells.forEach((cell) => {
            cell.isAlive = false;
            cell.toggle(this.context);
        });
        if (resetGens) {
            this.numGens = 0;
        }
        this.genCounter.innerHTML = __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_generationString).call(this);
    }
    defaultShapesHandlers() {
        DEFAULT_SHAPE_OBJECTS.forEach((shape) => {
            let button = document.getElementById(`shape${shape.name}`);
            button.addEventListener("click", () => {
                this.clear();
                __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_shapeHandler).call(this, shape);
                __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_draw).call(this);
            });
        });
    }
    liveCells(saved = false) {
        let liveCells = [];
        let cells = saved ? this.savedCells : this.cells;
        cells.forEach((cell) => {
            if (cell.isAlive) {
                liveCells.push(cell);
            }
        });
        return liveCells;
    }
    next() {
        let rules = new LifeRules(this.cells, __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_emptyCells).call(this));
        rules.generate();
        this.numGens++;
        this.genCounter.innerHTML = __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_generationString).call(this);
        this.clear();
        // this.#grid();
        this.cells = rules.next;
        __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_draw).call(this);
    }
    // TODO: This function is so damned clunky, I hate it and I want to refactor it. - Problem for Future Paul, not Present Paul.
    play(playButton) {
        return __awaiter(this, void 0, void 0, function* () {
            let buttonTag = playButton.innerHTML;
            // If the button starts off saying Play, you click to "Play".
            let keepPlaying = buttonTag === "Play" ? true : false;
            playButton.innerHTML = keepPlaying ? "Stop" : "Play";
            let fallbackCounter = 0;
            while (keepPlaying) {
                fallbackCounter++;
                if (fallbackCounter > FALLBACK_LIMIT || playButton.innerHTML === "Play") {
                    keepPlaying = false;
                    continue;
                }
                this.next();
                yield sleep();
            }
            playButton.innerHTML = "Play";
        });
    }
    restore() {
        this.cells = [];
        this.savedCells.forEach((cell) => {
            let savedCell = new Cell(cell.y, cell.x, cell.isAlive);
            this.cells.push(savedCell);
        });
        __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_draw).call(this);
    }
    save() {
        this.cells.forEach((cell) => {
            let savedCell = new Cell(cell.y, cell.x, cell.isAlive);
            this.savedCells.push(savedCell);
        });
    }
    test() {
        if (this.cells[0].isAlive) {
            __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_drawingTest).call(this);
        }
        else {
            __classPrivateFieldGet(this, _Canvas_instances, "m", _Canvas_switchTest).call(this);
        }
        this.cells[0].isAlive = !this.cells[0].isAlive;
    }
    toggle(event) {
        const canvasX = event.pageX - this.canvas.offsetLeft;
        const canvasY = event.pageY - this.canvas.offsetTop;
        const xElement = Math.floor(canvasX / CELL_SIZE);
        const yElement = Math.floor(canvasY / CELL_SIZE);
        const cellIndex = yElement * WIDTH_CELLS + xElement;
        const cell = this.cells[cellIndex];
        cell.isAlive = !cell.isAlive;
        cell.toggle(this.context);
    }
}
_Canvas_instances = new WeakSet(), _Canvas_draw = function _Canvas_draw() {
    this.cells.forEach((cell) => {
        cell.toggle(this.context);
    });
}, _Canvas_drawingTest = function _Canvas_drawingTest() {
    this.clear();
    // this.#grid();
    this.cells.forEach((cell) => {
        if (cell.bothSame()) {
            cell.isAlive = true;
            cell.toggle(this.context);
        }
    });
}, _Canvas_emptyCells = function _Canvas_emptyCells() {
    let emptyCells = [];
    for (let height = 0; height < HEIGHT_CELLS; height++) {
        for (let width = 0; width < WIDTH_CELLS; width++) {
            var cell = new Cell(height, width);
            emptyCells.push(cell);
        }
    }
    return emptyCells;
}, _Canvas_generationString = function _Canvas_generationString() {
    return `Generation: ${this.numGens}`;
}, _Canvas_grid = function _Canvas_grid() {
    let counter = 0;
    while (counter < MAX_WIDTH) {
        counter += CELL_SIZE;
        this.context.moveTo(counter, 0);
        this.context.lineTo(counter, MAX_HEIGHT);
        this.context.stroke();
    }
    counter = 0;
    while (counter < MAX_HEIGHT) {
        counter += CELL_SIZE;
        this.context.moveTo(0, counter);
        this.context.lineTo(MAX_WIDTH, counter);
        this.context.stroke();
    }
}, _Canvas_shapeHandler = function _Canvas_shapeHandler(shape) {
    shape.pattern.forEach((shapeCell) => {
        const index = shapeCell.y * WIDTH_CELLS + shapeCell.x;
        let cell = this.cells[index];
        cell.isAlive = shapeCell.isAlive;
    });
}, _Canvas_switchTest = function _Canvas_switchTest() {
    this.clear();
    // this.#grid();
    this.cells.forEach((cell) => {
        if (cell.bothDifferent()) {
            cell.isAlive = true;
            cell.toggle(this.context);
        }
    });
};
function sleep(ms = SLEEP_DELAY) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    });
}
export { Canvas };
