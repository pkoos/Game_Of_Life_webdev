class Shape {
    constructor(name, height, width, pattern = []) {
        this.name = name;
        this.height = height;
        this.width = width;
        this.pattern = pattern;
    }

    // TODO: Make this less naive somehow.
    draw(canvasContext, starting_y = 0, starting_x = 0) {
        this.pattern.forEach((cell) => {
            cell.toggle(canvasContext);
        })
    }
}

export {Shape};