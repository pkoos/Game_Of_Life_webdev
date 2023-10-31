import { DEFAULT_SHAPE_OBJECTS, HEIGHT_PIXELS, PIXEL_SIZE, WIDTH_PIXELS  } from "./constants.js";
import { Pixel } from "./pixel.js";

class Canvas {

    constructor(height, width, canvas, context) {
        this.height = height;
        this.width = width;
        this.canvas = canvas;
        this.context = context;
        this.pixels = [];
        this.savedPixels = [];
    }

    /*
        Public functions - most of these are for click handlers
    */

    clear() {
        this.pixels.forEach((pixel) => {
            pixel.isAlive = false;
            pixel.toggle(this.context);
        });
    }

    defaultShapesHandlers() {
        DEFAULT_SHAPE_OBJECTS.forEach((shape) => {
            let button = document.getElementById(`shape${shape.name}`);
            button.addEventListener("click", () => {
                console.log(`${shape.name} clicked`);
                this.clear();
                this.#shapeHandler(shape);
                this.draw();
            });
        });
    }

    draw() {
        this.pixels.forEach((pixel) => {
            pixel.toggle(this.context);
        })
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
    
    livePixels(saved = false) {
        let livePixels = [];
        let pixels = saved ? this.savedPixels : this.pixels;
        pixels.forEach((pixel) => {
                if(pixel.isAlive) {
                    livePixels.push(pixel);
                }
            });
        return livePixels;
    }

    restore() {
        this.pixels = [];
        this.savedPixels.forEach((pixel) => {
            let savedPixel = new Pixel(pixel.y, pixel.x, pixel.isAlive);
            this.pixels.push(savedPixel);
        });
        this.draw();
    }

    save() {
        this.pixels.forEach((pixel) => {
            let savedPixel = new Pixel(pixel.y, pixel.x, pixel.isAlive);
            this.savedPixels.push(savedPixel);
        });
    }

    test() {
        if(this.pixels[0].isAlive) {
            this.#drawingTest();
        }
        else {
            this.#switchTest();
        }
        this.pixels[0].isAlive = !this.pixels[0].isAlive;
    }

    toggle(event) {
        const canvasX = event.pageX - this.canvas.offsetLeft;
        const canvasY = event.pageY - this.canvas.offsetTop;

        const xElement = Math.floor(canvasX / PIXEL_SIZE);
        const yElement = Math.floor(canvasY / PIXEL_SIZE);

        const pixelIndex = yElement * WIDTH_PIXELS + xElement;
        const pixel = this.pixels[pixelIndex];

        pixel.isAlive = !pixel.isAlive;
        pixel.toggle(this.context);
    }

    /*
        Private Functions - for use only in other functions
    */
    #drawingTest() {
        this.clear();
        this.grid();
        this.pixels.forEach((pixel) => {
            if(pixel.bothSame()) {
                pixel.isAlive = true;
                pixel.toggle(this.context);    
            }
        });
    }
    
    #shapeHandler(shape) {
        shape.pattern.forEach((shapePixel) => {
            const index = shapePixel.y * WIDTH_PIXELS + shapePixel.x;
            let pixel = this.pixels[index];
            pixel.isAlive = shapePixel.isAlive;
        });
    }

    #switchTest() {
        this.clear();
        this.grid();
        this.pixels.forEach((pixel) => {
            if(pixel.bothDifferent()) {
                pixel.isAlive = true;
                pixel.toggle(this.context);
            }
        });
    }
}

export { Canvas };
