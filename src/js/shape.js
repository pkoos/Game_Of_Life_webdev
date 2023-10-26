class Shape {
    constructor(name, height, width, pattern = []) {
        console.log("Shape constructor!");
        this.name = name;
        this.height = height;
        this.width = width;
        this.pattern = pattern;
    }
    // going VERY naive to start, all shapes are drawn at 0, 0
    draw(canvasContext, starting_y = 0, starting_x = 0) {
        this.pattern.forEach((pixel) => {
            pixel.toggle(canvasContext);
        })
    }
}

export {Shape};