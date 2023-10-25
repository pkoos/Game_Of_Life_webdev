import {WIDTH_PIXELS, PIXEL_SIZE, } from "./constants.js";


class Pixel {
    constructor(context, y, x, isAlive = false) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.index = y * WIDTH_PIXELS + x;
        this.canvas_y = y * PIXEL_SIZE;
        this.canvas_x = x * PIXEL_SIZE;
        this.isAlive = isAlive;
    }

    draw() {
        this.context.fillRect(this.canvas_x, this.canvas_y, PIXEL_SIZE, PIXEL_SIZE);
    }

    clear() {
        this.context.clearRect(this.canvas_x, this.canvas_y, PIXEL_SIZE, PIXEL_SIZE);
    }

    toggle() {
        if(this.isAlive) {
            this.draw();
        }
        else {
            this.clear();
            this.context.strokeRect(this.canvas_x, this.canvas_y, PIXEL_SIZE, PIXEL_SIZE);
        }
    }

    bothAreEven() {
        return this.canvas_x % 2 == 0 && this.canvas_y % 2 == 0;
    }
    
    bothAreOdd() {
        return this.canvas_x % 2 == 1 && this.canvas_y % 2 == 1;
    }

    onlyHeightEven() {
        return this.canvas_x % 2 == 0 && this.canvas_y % 2 == 1;
    }

    onlyWidthEven() {
        return this.canvas_x % 2 == 1 && this.canvas_y % 2 == 0;
    }
}

export { Pixel };
