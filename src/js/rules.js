import { WIDTH_PIXELS, HEIGHT_PIXELS } from "./constants.js";
import { Neighbor } from "./neighbors.js";
import { Pixel } from "./pixel.js";

class LifeRules {
    constructor(current, next = []) {
        this.current = current;
        this.next = next;
    }

    testGenerate() {
        let nextGeneration = [];
        this.current.forEach((pixel) => {
            let savedPixel = new Pixel(pixel.y, pixel.x, false);
            nextGeneration.push(savedPixel);
        });
        // this.pixels.forEach((pixel) => {
            // let neighbors = this.#getNeighbors(pixel);
        nextGeneration.forEach((pixel) => {
            let neighbor = new Neighbor(this.#getNeighbors(pixel));
            this.determineState(pixel, neighbor);
        })
        // let neighbor1 = new Neighbor(this.#getNeighbors(nextGeneration[0]));
        // this.determineState(nextGeneration[0], neighbor1);
        // let neighbor2 = new Neighbor(this.#getNeighbors(nextGeneration[46]));
        // this.determineState(nextGeneration[46], neighbor2);
        // let neighbor3 = new Neighbor(this.#getNeighbors(nextGeneration[47]));
        // this.determineState(nextGeneration[47], neighbor3);
        // let neighbor4 = new Neighbor(this.#getNeighbors(nextGeneration[48]));
        // this.determineState(nextGeneration[48], neighbor4);
        // let neighbor5 = new Neighbor(this.#getNeighbors(nextGeneration[49]));
        // this.determineState(nextGeneration[49], neighbor5);
        // });
        console.log(nextGeneration);
        return nextGeneration;
    }

    testGenerate2() {
        let neighbors = this.#getNeighbors()
    }

    invalidNeighbor(x, y, pixel) {
        return this.invalidRow(y) || this.invalidColumn(x) || this.isStartingPixel(x, y, pixel);
    }

    invalidRow(y) {
        return this.isTopRow(y) || this.isBottomRow(y);
    }

    isTopRow(y) {
        return y < 0;
    }

    isBottomRow(y) {
        return y === HEIGHT_PIXELS;
    }

    invalidColumn(x) {
        return this.isLeftColumn(x) || this.isRightcolumn(x);
    }

    isLeftColumn(x) {
        return x < 0;
    }

    isRightcolumn(x) {
        return x === WIDTH_PIXELS;
    }

    isStartingPixel(x, y, pixel) {
        return pixel.x === x && pixel.y === y;
    }

    #getNeighbors(pixel) {
        var neighbors = [];
        const MAX_NEIGHBORS = 8;
        for(var i = 0; i <= MAX_NEIGHBORS; i++) {
            let currY = (Math.floor(i / 3) - 1) + pixel.y
            let currX = ((i % 3) - 1) + pixel.x
            
            if(this.invalidNeighbor(currX, currY, pixel)) {
                continue;
            }
            let neighborIndex = currY * WIDTH_PIXELS + currX;

            neighbors.push(this.current[neighborIndex]);
        }
        // console.log(neighbors);
        return neighbors;
    }

    determineState(pixel, neighbor) {
        if(pixel.isAlive) {
            // too many or too few neighbors, this cell dies.
            if(neighbor.live < 2 || neighbor.live > 3) { 
                console.log("Pixel had too many or few neighbors, and dies");
                pixel.isAlive = false;
            }
            console.log("Pixel Survived");
        }
        else {
            if(neighbor.live == 3) {
                console.log("Pixel reproduces");
                pixel.isAlive = true;
            }
        }
    }
}

export { LifeRules };
