class LifeRules {
    constructor(board) {
        this.board = board;
    }

    getNeighbors(x, y) {
        var neighbors = [];

        var starting_x = x === 0 ? 0 : x - 1;
        var starting_y = y === 0 ? 0 : y - 1;

        // neighbors order: start at top left and work down to bottom right
        // there will be either 3, 5, or 8 neighbors, depending on if x/y is zero.
    }

    underpopulation() {
        // a live cell with less than 2 live neighbors dies.
    }

    neutralpopulation() {
        // a live cell with 2 - 3 live neighbors lives.
    }

    overpopulation() {
        // a live cell with 3 or more neighbors dies.
    }

    reproduction() {
        // a dead cell with 3 live neighbors lives.
    }
}
