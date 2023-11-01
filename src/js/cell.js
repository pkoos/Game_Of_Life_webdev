import { PIXEL_SIZE } from "./constants.js";


class Cell {
    constructor(y, x, isAlive = false, live = 0) {
        this.y = y;
        this.x = x;
        this.isAlive = isAlive;
        this.live = live;
    }

    toggle(context) {
        if(this.isAlive) {
            context.fillRect(this.x * PIXEL_SIZE, this.y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
        }
        else {
            context.clearRect(this.x * PIXEL_SIZE, this.y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
            context.strokeRect(this.x * PIXEL_SIZE, this.y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
        }
    }

    bothSame() {
        return (this.x) % 2 === (this.y) % 2;
    }

    bothDifferent() {
        return (this.x) % 2 !== (this.y) % 2;
    }

    toString() {
        return `\n(${this.x}, ${this.y}) live: ${this.live} isAlive: ${this.isAlive}`;
    }
}

export { Cell };
