import { 
    DEFAULT_SHAPE_OBJECTS, HEIGHT_CELLS, CELL_SIZE, WIDTH_CELLS, 
    FALLBACK_LIMIT, MAX_HEIGHT, MAX_WIDTH } from "./constants.js";
import { Cell } from "./cell.js";
import { LifeRules } from "./rules.js";

class Canvas {

    #numGens;
    #cells;
    #savedCells;

    constructor(
            canvas, context, genCounter, 
            numGens = 0, height = MAX_HEIGHT, width = MAX_WIDTH, 
    ) {
        
        this.canvas = canvas;
        this.context = context;
        this.genCounter = genCounter
        this.#numGens = numGens;
        this.height = height;
        this.width = width;
        
        this.#cells = this.#emptyCells();
        this.#savedCells = this.#emptyCells();
        this.#grid();
    }

    toString() {
        return `${this.canvas} context: ${this.context} genCounter: ${this.genCounter}\n#numGens: ${this.#numGens} height: ${this.height} width: ${this.width}`;
    }

    /*
        Public functions - most of these are for click handlers
    */

    clear(resetGens = false) {
        this.#cells.forEach((cell) => {
            cell.isAlive = false;
            cell.toggle(this.context);
        });

        if(resetGens) {
            this.#numGens = 0;
        }
        this.genCounter.innerHTML = this.#generationString();
        
    }

    defaultShapesHandlers() {
        DEFAULT_SHAPE_OBJECTS.forEach((shape) => {
            let button = document.getElementById(`shape${shape.name}`);
            button.addEventListener("click", () => {
                this.clear();
                this.#shapeHandler(shape);
                this.draw();
            });
        });
    }

    draw() {
        this.#cells.forEach((cell) => {
            cell.toggle(this.context);
        })
    }

    #grid() {
        let counter = 0;
        while(counter < this.width) {
            counter += CELL_SIZE;
            this.context.moveTo(counter, 0);
            this.context.lineTo(counter, this.height);
            this.context.stroke();
        }

        counter = 0;

        while(counter < this.height) {
            counter += CELL_SIZE;
            this.context.moveTo(0, counter);
            this.context.lineTo(this.width, counter);
            this.context.stroke();
        }
    }

    #emptyCells() {
        let emptyCells = [];
        for (let height = 0; height < HEIGHT_CELLS; height++) {
            for(let width = 0; width < WIDTH_CELLS; width++) {
                var cell = new Cell(height, width);
                emptyCells.push(cell);
            }
        }
        return emptyCells;
    }
    
    liveCells(saved = false) {
        let liveCells = [];
        let cells = saved ? this.#savedCells : this.#cells;
        cells.forEach((cell) => {
                if(cell.isAlive) {
                    liveCells.push(cell);
                }
            });
        return liveCells;
    }

    next() {
        let rules = new LifeRules(this.#cells, this.#emptyCells());
        rules.generate();

        this.#numGens++;
        this.genCounter.innerHTML = this.#generationString();

        this.clear();
        this.#grid();
        this.#cells = rules.next;
        this.draw();
    }

    // TODO: This function is so damned clunky, I hate it and I want to refactor it.
    async play(playButton) {
        let buttonTag = playButton.innerHTML;
        // If the button starts off saying Play, you click to "Play".
        let keepPlaying = buttonTag === "Play" ? true : false;
        playButton.innerHTML = keepPlaying ? "Stop": "Play";
        let fallbackCounter = 0;

        while(keepPlaying) {
            
            fallbackCounter++;
            if(fallbackCounter > FALLBACK_LIMIT || playButton.innerHTML === "Play") {
                keepPlaying = false;
                continue;
            }
            this.next();
            await sleep();

        }
        playButton.innerHTML = "Play";
    }

    restore() {
        this.#cells = [];
        this.#savedCells.forEach((cell) => {
            let savedCell = new Cell(cell.y, cell.x, cell.isAlive);
            this.#cells.push(savedCell);
        });
        this.draw();
    }

    #generationString() {
        return `Generation: ${this.#numGens}`;
    }

    save() {
        this.#cells.forEach((cell) => {
            let savedCell = new Cell(cell.y, cell.x, cell.isAlive);
            this.#savedCells.push(savedCell);
        });
    }

    test() {
        if(this.#cells[0].isAlive) {
            this.#drawingTest();
        }
        else {
            this.#switchTest();
        }
        this.#cells[0].isAlive = !this.#cells[0].isAlive;
    }

    toggle(event) {
        const canvasX = event.pageX - this.canvas.offsetLeft;
        const canvasY = event.pageY - this.canvas.offsetTop;

        const xElement = Math.floor(canvasX / CELL_SIZE);
        const yElement = Math.floor(canvasY / CELL_SIZE);

        const cellIndex = yElement * WIDTH_CELLS + xElement;
        const cell = this.#cells[cellIndex];

        cell.isAlive = !cell.isAlive;
        cell.toggle(this.context);
    }

    /*
        Private Functions - for use only in other functions
    */
    #drawingTest() {
        this.clear();
        this.#grid();
        this.#cells.forEach((cell) => {
            if(cell.bothSame()) {
                cell.isAlive = true;
                cell.toggle(this.context);    
            }
        });
    }
    
    #shapeHandler(shape) {
        shape.pattern.forEach((shapeCell) => {
            const index = shapeCell.y * WIDTH_CELLS + shapeCell.x;
            let cell = this.#cells[index];
            cell.isAlive = shapeCell.isAlive;
        });
    }

    #switchTest() {
        this.clear();
        this.#grid();
        this.#cells.forEach((cell) => {
            if(cell.bothDifferent()) {
                cell.isAlive = true;
                cell.toggle(this.context);
            }
        });
    }
}

async function sleep(ms = SLEEP_DELAY) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

export { Canvas };
