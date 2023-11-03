import { WIDTH_CELLS, HEIGHT_CELLS } from "./constants.js";
import { Cell } from "./cell.js";

class LifeRules {
    current: Cell[];
    next: Cell[];

    constructor(current: Cell[], next: Cell[] = []) {
        this.current = current;
        this.next = next;
    }

    generate() {
        this.current.forEach((cell, index) => {
            cell.live = this.#getLiveNeighborsAmount(cell);

            this.next[index]!.isAlive = this.#determineState(cell);
        });
    }

    /*
        Cells are alive in 2 situations:
            1. If the number of live neighbors is 3.
            2. If the cell is alive, and has 2 live neighbors.
    */
    #determineState(cell: Cell) {
        return ((cell.isAlive && cell.live === 2) || cell.live === 3);
    }

    #invalidNeighbor(x: number, y: number, cell: Cell) {
        return this.#invalidRow(y) || this.#invalidColumn(x) || this.#isStartingCell(x, y, cell);
    }

    #invalidRow(y: number) {
        return this.#isTopRow(y) || this.#isBottomRow(y);
    }

    #isTopRow(y: number) {
        return y < 0;
    }

    #isBottomRow(y: number) {
        return y === HEIGHT_CELLS;
    }

    #invalidColumn(x: number) {
        return this.#isLeftColumn(x) || this.#isRightcolumn(x);
    }

    #isLeftColumn(x: number) {
        return x < 0;
    }

    #isRightcolumn(x: number) {
        return x === WIDTH_CELLS;
    }

    #isStartingCell(x: number, y: number, cell: Cell) {
        return cell.x === x && cell.y === y;
    }

    // TODO: I don't like #getNeighbors, can it be combined with the function below?
    #getNeighbors(cell: Cell) {
        var neighbors: Cell[] = [];
        const MAX_NEIGHBORS = 8;
        for(var i = 0; i <= MAX_NEIGHBORS; i++) {
            let currY = (Math.floor(i / 3) - 1) + cell.y
            let currX = ((i % 3) - 1) + cell.x
            
            if(this.#invalidNeighbor(currX, currY, cell)) {
                continue;
            }
            let neighborIndex = currY * WIDTH_CELLS + currX;

            neighbors.push(this.current[neighborIndex]!);
        }
        return neighbors;
    }

    // TODO: I don't like getLiveNeighborsAmount, can it be combined with the function above?
    #getLiveNeighborsAmount(cell: Cell) {
        let neighbors = this.#getNeighbors(cell);
        let live = 0;
        neighbors.forEach((cell) => {
            if(cell.isAlive) {
                live++;
            }
        });
        return live;
    }
}

export { LifeRules };
