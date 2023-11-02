import { CELL_SIZE } from "./constants.js";

export class Cell {
    y: number;
    x: number;
    isAlive: boolean;
    live: number;
    public constructor(y: number, x: number, isAlive: boolean = false, live: number = 0) {
        this.y = y;
        this.x = x;
        this.isAlive = isAlive;
        this.live = live;
    }

    toggle(context: CanvasRenderingContext2D) {
        if(this.isAlive) {
            context.fillRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
        else {
            context.clearRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            context.strokeRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
    }

    bothSame(): boolean {
        return this.x % 2 === this.y % 2;
    }

    bothDifferent(): boolean {
        return !this.bothSame();
    }

    toString(): string {
        return `\n(${this.x}, ${this.y}) live: ${this.live} isAlive: ${this.isAlive}`;
    }
}