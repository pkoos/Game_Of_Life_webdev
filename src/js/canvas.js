import { PIXEL_SIZE } from "./constants.js";

class Canvas {
    constructor(height, width, context) {
        this.height = height;
        this.width = width;
        this.context = context;
    }

    grid() {
        let counter = 0;
        while(counter < this.width) {
            counter += PIXEL_SIZE;
            this.context.moveTo(counter, 0);
            this.context.lineTo(counter, this.height);
            this.context.stroke();
        }

        counter = 0;

        while(counter < this.height) {
            counter += PIXEL_SIZE;
            this.context.moveTo(0, counter);
            this.context.lineTo(this.width, counter);
            this.context.stroke();
        }
    }
}

export { Canvas };