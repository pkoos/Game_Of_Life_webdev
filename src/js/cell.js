import { PIXEL_SIZE } from "./constants.js";


class Cell {
    constructor(y, x, isAlive = false) {
        this.y = y;
        this.x = x;
        this.isAlive = isAlive;
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
}

export { Cell };
