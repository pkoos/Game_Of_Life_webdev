import { CELL_SIZE } from "./constants.js";
export class Cell {
    constructor(y, x, isAlive = false, live = 0) {
        this.y = y;
        this.x = x;
        this.isAlive = isAlive;
        this.live = live;
    }
    toggle(context) {
        if (this.isAlive) {
            context.fillRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
        else {
            context.clearRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            context.strokeRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
    }
    bothSame() {
        return this.x % 2 === this.y % 2;
    }
    bothDifferent() {
        return !this.bothSame();
    }
    toString() {
        return `\n(${this.x}, ${this.y}) live: ${this.live} isAlive: ${this.isAlive}`;
    }
}
