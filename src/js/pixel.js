import { PIXEL_SIZE } from "./constants.js";


class Pixel {
    constructor(context, y, x, isAlive = false) {
        this.context = context;
        this.y = y;
        this.x = x;
        this.isAlive = isAlive;
    }

    toggle() {
        if(this.isAlive) {
            this.context.fillRect(this.x * PIXEL_SIZE, this.y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
        }
        else {
            this.context.clearRect(this.x * PIXEL_SIZE, this.y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
            this.context.strokeRect(this.x * PIXEL_SIZE, this.y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
        }
    }

    bothSame() {
        return (this.x * PIXEL_SIZE) % 2 === (this.y * PIXEL_SIZE) % 2;
    }

    bothDifferent() {
        return (this.x * PIXEL_SIZE) % 2 !== (this.y * PIXEL_SIZE) % 2;
    }
}

export { Pixel };
