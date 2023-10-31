import { HEIGHT_PIXELS, WIDTH_PIXELS, PIXEL_SIZE } from "./constants.js";
import { Pixel } from "./pixel.js";

class Canvas {
    constructor(height, width, context) {
        this.height = height;
        this.width = width;
        this.context = context;
        this.pixels = [];
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

    initializePixels() {
        for (let height = 0; height < HEIGHT_PIXELS; height++) {
            for(let width = 0; width < WIDTH_PIXELS; width++) {
                var pixel = new Pixel(height, width);
                this.pixels.push(pixel);
            }
        }
    }
}

export { Canvas };