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

    toggle() {
        if(this.isAlive) {
            this.context.fillRect(this.canvas_x, this.canvas_y, PIXEL_SIZE, PIXEL_SIZE);
        }
        else {
            this.context.clearRect(this.canvas_x, this.canvas_y, PIXEL_SIZE, PIXEL_SIZE);
            this.context.strokeRect(this.canvas_x, this.canvas_y, PIXEL_SIZE, PIXEL_SIZE);
        }
    }

    bothSame() {
        return this.canvas_x % 2 === this.canvas_y % 2;
    }

    bothDifferent() {
        return this.canvas_x % 2 !== this.canvas_y % 2;
    }


}

export { Pixel };
