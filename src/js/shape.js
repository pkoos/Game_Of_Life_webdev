class Shape {
    constructor(name, height, width, pattern = []) {
        console.log("Shape constructor!");
        this.name = name;
        this.height = height;
        this.width = width;
        this.pattern = pattern;
    }
}

export {Shape};