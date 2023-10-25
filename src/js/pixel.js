class Pixel {
    constructor(context, height, width, isAlive = false) {
        this.context = context;
        this.height = height * PIXEL_SIZE;
        this.width = width * PIXEL_SIZE;
        this.isAlive = isAlive;
    }

    drawPixel() {
        this.context.fillRect(this.width, this.height, PIXEL_SIZE, PIXEL_SIZE);
    }

    clearPixel() {
        this.context.clearRect(this.width, this.height, PIXEL_SIZE, PIXEL_SIZE);
    }

    togglePixel() {
        if(this.isAlive) {
            this.drawPixel();
        }
        else {
            this.clearPixel();
            this.context.strokeRect(this.width, this.height, PIXEL_SIZE, PIXEL_SIZE);
        }
    }

    bothAreEven() {
        return this.height % 2 == 0 && this.width % 2 == 0;
    }
    
    bothAreOdd() {
        return this.height % 2 == 1 && this.width % 2 == 1;
    }

    onlyHeightEven() {
        return this.height % 2 == 0 && this.width % 2 == 1;
    }

    onlyWidthEven() {
        return this.height % 2 == 1 && this.width % 2 == 0;
    }
}