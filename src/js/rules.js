import { WIDTH_CELLS, HEIGHT_CELLS } from "./constants.js";

class LifeRules {
    constructor(current, next = []) {
        this.current = current;
        this.next = next;
    }

    generate() {
        this.current.forEach((cell, index) => {
            cell.live = this.#getLiveNeighborsAmount(cell);

            this.next[index].isAlive = this.#determineState(cell);
        });
    }

    /*
        Cells are alive in 2 situations:
            1. If the number of live neighbors is 3.
            2. If the cell is alive, and has 2 live neighbors.
    */
    #determineState(cell) {
        return ((cell.isAlive && cell.live === 2) || cell.live === 3);
    }

    #invalidNeighbor(x, y, cell) {
        return this.#invalidRow(y) || this.#invalidColumn(x) || this.#isStartingCell(x, y, cell);
    }

    #invalidRow(y) {
        return this.#isTopRow(y) || this.#isBottomRow(y);
    }

    #isTopRow(y) {
        return y < 0;
    }

    #isBottomRow(y) {
        return y === HEIGHT_CELLS;
    }

    #invalidColumn(x) {
        return this.#isLeftColumn(x) || this.#isRightcolumn(x);
    }

    #isLeftColumn(x) {
        return x < 0;
    }

    #isRightcolumn(x) {
        return x === WIDTH_CELLS;
    }

    #isStartingCell(x, y, cell) {
        return cell.x === x && cell.y === y;
    }

    // TODO: I don't like #getNeighbors, can it be combined with the function below?
    #getNeighbors(cell) {
        var neighbors = [];
        const MAX_NEIGHBORS = 8;
        for(var i = 0; i <= MAX_NEIGHBORS; i++) {
            let currY = (Math.floor(i / 3) - 1) + cell.y
            let currX = ((i % 3) - 1) + cell.x
            
            if(this.#invalidNeighbor(currX, currY, cell)) {
                continue;
            }
            let neighborIndex = currY * WIDTH_CELLS + currX;

            neighbors.push(this.current[neighborIndex]);
        }
        return neighbors;
    }

    // TODO: I don't like getLiveNeighborsAmount, can it be combined with the function above?
    #getLiveNeighborsAmount(cell) {
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
