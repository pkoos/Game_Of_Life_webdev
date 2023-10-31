class Neighbor {
    constructor(neighbors) {
        // console.log("Neighbors information constructor");
        this.neighbors = neighbors;
        this.live = this.liveNeighbors();

        console.log(`Live neighbors: ${this.live}`);
    }

    liveNeighbors() {
        let numLive = 0;
        this.neighbors.forEach(neighbor => {
            if(neighbor.isAlive)
                numLive++;
        });

        return numLive;
    }
}

export { Neighbor };
