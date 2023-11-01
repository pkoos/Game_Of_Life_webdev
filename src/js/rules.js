import { WIDTH_PIXELS, HEIGHT_PIXELS } from "./constants.js";
import { Neighbor } from "./neighbors.js";
import { Cell } from "./cell.js";

class LifeRules {
    constructor(current, next = []) {
        this.current = current;
        this.next = next;
    }

    generate() {
        this.current.forEach((cell, index) => {
            cell.live = this.getLiveNeighborsAmount(cell);

            this.next[index].isAlive = this.determineState(cell);
        });
    }

    //TODO: This function feels super clunky, see if you can make it better.
    determineState(cell) {
        let willLive;

        if(cell.isAlive) {
            if(cell.live < 2 || cell.live > 3) { 
                willLive = false;
            } else {
                willLive = true;    
            }
        }
        else {
            if(cell.live == 3) {
                willLive = true;
            }
            else {
                willLive = false;
            }
            
        }

        return willLive;
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

    // I don't like #getNeighbors, can it be combined with the function below?
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

    // TODO: I don't like getLiveNeighborsAmount, can it be combined with the function above?
    getLiveNeighborsAmount(cell) {
        let neighbors = this.#getNeighbors(cell);
        let live = 0;
        neighbors.forEach((cell) => {
            if(cell.isAlive) {
                live++;
            }
        });

        return live;
    }
}

export { LifeRules };
