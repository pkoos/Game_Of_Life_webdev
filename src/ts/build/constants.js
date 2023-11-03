import { Shape } from "./shape.js";
import { Cell } from "./cell.js";
export const MAX_WIDTH = 1200;
export const MAX_HEIGHT = 800;
export const CELL_SIZE = 25;
// export const MAX_WIDTH: number = 600;
// export const MAX_HEIGHT: number = 400;
// export const CELL_SIZE: number = 100;
export const WIDTH_CELLS = Math.floor(MAX_WIDTH / CELL_SIZE);
export const HEIGHT_CELLS = Math.floor(MAX_HEIGHT / CELL_SIZE);
export const TOTAL_CELLS = 0;
export const FALLBACK_LIMIT = 50;
export const SLEEP_DELAY = 50;
export const DEFAULT_SHAPE_OBJECTS = [
    new Shape("Block", [
        new Cell(0, 0, true), new Cell(0, 1, true),
        new Cell(1, 0, true), new Cell(1, 1, true)
    ]),
    new Shape("Beehive", [
        new Cell(0, 0, false), new Cell(0, 1, true), new Cell(0, 2, true), new Cell(0, 3, false),
        new Cell(1, 0, true), new Cell(1, 1, false), new Cell(1, 2, false), new Cell(1, 3, true),
        new Cell(2, 0, false), new Cell(2, 1, true), new Cell(2, 2, true), new Cell(2, 3, false)
    ]),
    new Shape("Loaf", [
        new Cell(0, 0, false), new Cell(0, 1, true), new Cell(0, 2, true), new Cell(0, 3, false),
        new Cell(1, 0, true), new Cell(1, 1, false), new Cell(1, 2, false), new Cell(1, 3, true),
        new Cell(2, 0, false), new Cell(2, 1, true), new Cell(2, 2, false), new Cell(2, 3, true),
        new Cell(3, 0, false), new Cell(3, 1, false), new Cell(3, 2, true), new Cell(3, 3, false)
    ]),
    new Shape("Boat", [
        new Cell(0, 0, false), new Cell(0, 1, true), new Cell(0, 2, false),
        new Cell(1, 0, true), new Cell(1, 1, false), new Cell(1, 2, true),
        new Cell(2, 0, true), new Cell(2, 1, true), new Cell(2, 2, false)
    ]),
    new Shape("Tub", [
        new Cell(0, 0, false), new Cell(0, 1, true), new Cell(0, 2, false),
        new Cell(1, 0, true), new Cell(1, 1, false), new Cell(1, 2, true),
        new Cell(2, 0, false), new Cell(2, 1, true), new Cell(2, 2, false)
    ]),
    new Shape("Blinker", [
        new Cell(0, 0, false), new Cell(0, 1, false), new Cell(0, 2, false),
        new Cell(1, 0, true), new Cell(1, 1, true), new Cell(1, 2, true),
        new Cell(2, 0, false), new Cell(2, 1, false), new Cell(2, 2, false),
    ]),
    new Shape("Toad", [
        new Cell(0, 0, false), new Cell(0, 1, false), new Cell(0, 2, false), new Cell(0, 3, false),
        new Cell(1, 0, false), new Cell(1, 1, true), new Cell(1, 2, true), new Cell(1, 3, true),
        new Cell(2, 0, true), new Cell(2, 1, true), new Cell(2, 2, true), new Cell(2, 3, false),
        new Cell(3, 0, false), new Cell(3, 1, false), new Cell(3, 2, false), new Cell(3, 3, false)
    ]),
    new Shape("Beacon", [
        new Cell(0, 0, false), new Cell(0, 1, false), new Cell(0, 2, true), new Cell(0, 3, true),
        new Cell(1, 0, false), new Cell(1, 1, false), new Cell(1, 2, false), new Cell(1, 3, true),
        new Cell(2, 0, true), new Cell(2, 1, false), new Cell(2, 2, false), new Cell(2, 3, false),
        new Cell(3, 0, true), new Cell(3, 1, true), new Cell(3, 2, false), new Cell(3, 3, false)
    ]),
    new Shape("Pulsar", [
        new Cell(0, 0, false), new Cell(0, 1, false), new Cell(0, 2, false), new Cell(0, 3, false), new Cell(0, 4, false), new Cell(0, 5, false), new Cell(0, 6, false), new Cell(0, 7, false), new Cell(0, 8, false), new Cell(0, 9, false), new Cell(0, 10, false), new Cell(0, 11, false), new Cell(0, 12, false), new Cell(0, 13, false), new Cell(0, 14, false),
        new Cell(1, 0, false), new Cell(1, 1, false), new Cell(1, 2, false), new Cell(1, 3, true), new Cell(1, 4, true), new Cell(1, 5, true), new Cell(1, 6, false), new Cell(1, 7, false), new Cell(1, 8, false), new Cell(1, 9, true), new Cell(1, 10, true), new Cell(1, 11, true), new Cell(1, 12, false), new Cell(1, 13, false), new Cell(1, 14, false),
        new Cell(2, 0, false), new Cell(2, 1, false), new Cell(2, 2, false), new Cell(2, 3, false), new Cell(2, 4, false), new Cell(2, 5, false), new Cell(2, 6, false), new Cell(2, 7, false), new Cell(2, 8, false), new Cell(2, 9, false), new Cell(2, 10, false), new Cell(2, 11, false), new Cell(2, 12, false), new Cell(2, 13, false), new Cell(2, 14, false),
        new Cell(3, 0, false), new Cell(3, 1, true), new Cell(3, 2, false), new Cell(3, 3, false), new Cell(3, 4, false), new Cell(3, 5, false), new Cell(3, 6, true), new Cell(3, 7, false), new Cell(3, 8, true), new Cell(3, 9, false), new Cell(3, 10, false), new Cell(3, 11, false), new Cell(3, 12, false), new Cell(3, 13, true), new Cell(3, 14, false),
        new Cell(4, 0, false), new Cell(4, 1, true), new Cell(4, 2, false), new Cell(4, 3, false), new Cell(4, 4, false), new Cell(4, 5, false), new Cell(4, 6, true), new Cell(4, 7, false), new Cell(4, 8, true), new Cell(4, 9, false), new Cell(4, 10, false), new Cell(4, 11, false), new Cell(4, 12, false), new Cell(4, 13, true), new Cell(4, 14, false),
        new Cell(5, 0, false), new Cell(5, 1, true), new Cell(5, 2, false), new Cell(5, 3, false), new Cell(5, 4, false), new Cell(5, 5, false), new Cell(5, 6, true), new Cell(5, 7, false), new Cell(5, 8, true), new Cell(5, 9, false), new Cell(5, 10, false), new Cell(5, 11, false), new Cell(5, 12, false), new Cell(5, 13, true), new Cell(5, 14, false),
        new Cell(6, 0, false), new Cell(6, 1, false), new Cell(6, 2, false), new Cell(6, 3, true), new Cell(6, 4, true), new Cell(6, 5, true), new Cell(6, 6, false), new Cell(6, 7, false), new Cell(6, 8, false), new Cell(6, 9, true), new Cell(6, 10, true), new Cell(6, 11, true), new Cell(6, 12, false), new Cell(6, 13, false), new Cell(6, 14, false),
        new Cell(7, 0, false), new Cell(7, 1, false), new Cell(7, 2, false), new Cell(7, 3, false), new Cell(7, 4, false), new Cell(7, 5, false), new Cell(7, 6, false), new Cell(7, 7, false), new Cell(7, 8, false), new Cell(7, 9, false), new Cell(7, 10, false), new Cell(7, 11, false), new Cell(7, 12, false), new Cell(7, 13, false), new Cell(7, 14, false),
        new Cell(8, 0, false), new Cell(8, 1, false), new Cell(8, 2, false), new Cell(8, 3, true), new Cell(8, 4, true), new Cell(8, 5, true), new Cell(8, 6, false), new Cell(8, 7, false), new Cell(8, 8, false), new Cell(8, 9, true), new Cell(8, 10, true), new Cell(8, 11, true), new Cell(8, 12, false), new Cell(8, 13, false), new Cell(8, 14, false),
        new Cell(9, 0, false), new Cell(9, 1, true), new Cell(9, 2, false), new Cell(9, 3, false), new Cell(9, 4, false), new Cell(9, 5, false), new Cell(9, 6, true), new Cell(9, 7, false), new Cell(9, 8, true), new Cell(9, 9, false), new Cell(9, 10, false), new Cell(9, 11, false), new Cell(9, 12, false), new Cell(9, 13, true), new Cell(9, 14, false),
        new Cell(10, 0, false), new Cell(10, 1, true), new Cell(10, 2, false), new Cell(10, 3, false), new Cell(10, 4, false), new Cell(10, 5, false), new Cell(10, 6, true), new Cell(10, 7, false), new Cell(10, 8, true), new Cell(10, 9, false), new Cell(10, 10, false), new Cell(10, 11, false), new Cell(10, 12, false), new Cell(10, 13, true), new Cell(10, 14, false),
        new Cell(11, 0, false), new Cell(11, 1, true), new Cell(11, 2, false), new Cell(11, 3, false), new Cell(11, 4, false), new Cell(11, 5, false), new Cell(11, 6, true), new Cell(11, 7, false), new Cell(11, 8, true), new Cell(11, 9, false), new Cell(11, 10, false), new Cell(11, 11, false), new Cell(11, 12, false), new Cell(11, 13, true), new Cell(11, 14, false),
        new Cell(12, 0, false), new Cell(12, 1, false), new Cell(12, 2, false), new Cell(12, 3, false), new Cell(12, 4, false), new Cell(12, 5, false), new Cell(12, 6, false), new Cell(12, 7, false), new Cell(12, 8, false), new Cell(12, 9, false), new Cell(12, 10, false), new Cell(12, 11, false), new Cell(12, 12, false), new Cell(12, 13, false), new Cell(12, 14, false),
        new Cell(13, 0, false), new Cell(13, 1, false), new Cell(13, 2, false), new Cell(13, 3, true), new Cell(13, 4, true), new Cell(13, 5, true), new Cell(13, 6, false), new Cell(13, 7, false), new Cell(13, 8, false), new Cell(13, 9, true), new Cell(13, 10, true), new Cell(13, 11, true), new Cell(13, 12, false), new Cell(13, 13, false), new Cell(13, 14, false),
        new Cell(14, 0, false), new Cell(14, 1, false), new Cell(14, 2, false), new Cell(14, 3, false), new Cell(14, 4, false), new Cell(14, 5, false), new Cell(14, 6, false), new Cell(14, 7, false), new Cell(14, 8, false), new Cell(14, 9, false), new Cell(14, 10, false), new Cell(14, 11, false), new Cell(14, 12, false), new Cell(14, 13, false), new Cell(14, 14, false),
    ]),
    new Shape("Penta-decathlon", [
        new Cell(0, 0, false), new Cell(0, 1, false), new Cell(0, 2, false), new Cell(0, 3, false), new Cell(0, 4, false), new Cell(0, 5, false), new Cell(0, 6, false), new Cell(0, 7, false), new Cell(0, 8, false), new Cell(0, 9, false), new Cell(0, 10, false), new Cell(0, 11, false), new Cell(0, 12, false), new Cell(0, 13, false), new Cell(0, 14, false), new Cell(0, 15, false),
        new Cell(1, 0, false), new Cell(1, 1, false), new Cell(1, 2, false), new Cell(1, 3, false), new Cell(1, 4, false), new Cell(1, 5, false), new Cell(1, 6, false), new Cell(1, 7, false), new Cell(1, 8, false), new Cell(1, 9, false), new Cell(1, 10, false), new Cell(1, 11, false), new Cell(1, 12, false), new Cell(1, 13, false), new Cell(1, 14, false), new Cell(0, 15, false),
        new Cell(2, 0, false), new Cell(2, 1, false), new Cell(2, 2, false), new Cell(2, 3, false), new Cell(2, 4, false), new Cell(2, 5, false), new Cell(2, 6, false), new Cell(2, 7, false), new Cell(2, 8, false), new Cell(2, 9, false), new Cell(2, 10, false), new Cell(2, 11, false), new Cell(2, 12, false), new Cell(2, 13, false), new Cell(2, 14, false), new Cell(0, 15, false),
        new Cell(3, 0, false), new Cell(3, 1, false), new Cell(3, 2, false), new Cell(3, 3, false), new Cell(3, 4, false), new Cell(3, 5, true), new Cell(3, 6, false), new Cell(3, 7, false), new Cell(3, 8, false), new Cell(3, 9, false), new Cell(3, 10, true), new Cell(3, 11, false), new Cell(3, 12, false), new Cell(3, 13, false), new Cell(3, 14, false), new Cell(0, 15, false),
        new Cell(4, 0, false), new Cell(4, 1, false), new Cell(4, 2, false), new Cell(4, 3, true), new Cell(4, 4, true), new Cell(4, 5, false), new Cell(4, 6, true), new Cell(4, 7, true), new Cell(4, 8, true), new Cell(4, 9, true), new Cell(4, 10, false), new Cell(4, 11, true), new Cell(4, 12, true), new Cell(4, 13, false), new Cell(4, 14, false), new Cell(0, 15, false),
        new Cell(5, 0, false), new Cell(5, 1, false), new Cell(5, 2, false), new Cell(5, 3, false), new Cell(5, 4, false), new Cell(5, 5, true), new Cell(5, 6, false), new Cell(5, 7, false), new Cell(5, 8, false), new Cell(5, 9, false), new Cell(5, 10, true), new Cell(5, 11, false), new Cell(5, 12, false), new Cell(5, 13, false), new Cell(5, 14, false), new Cell(0, 15, false),
        new Cell(6, 0, false), new Cell(6, 1, false), new Cell(6, 2, false), new Cell(6, 3, false), new Cell(6, 4, false), new Cell(6, 5, false), new Cell(6, 6, false), new Cell(6, 7, false), new Cell(6, 8, false), new Cell(6, 9, false), new Cell(6, 10, false), new Cell(6, 11, false), new Cell(6, 12, false), new Cell(6, 13, false), new Cell(6, 14, false), new Cell(0, 15, false),
        new Cell(7, 0, false), new Cell(7, 1, false), new Cell(7, 2, false), new Cell(7, 3, false), new Cell(7, 4, false), new Cell(7, 5, false), new Cell(7, 6, false), new Cell(7, 7, false), new Cell(7, 8, false), new Cell(7, 9, false), new Cell(7, 10, false), new Cell(7, 11, false), new Cell(7, 12, false), new Cell(7, 13, false), new Cell(7, 14, false), new Cell(0, 15, false),
        new Cell(8, 0, false), new Cell(8, 1, false), new Cell(8, 2, false), new Cell(8, 3, false), new Cell(8, 4, false), new Cell(8, 5, false), new Cell(8, 6, false), new Cell(8, 7, false), new Cell(8, 8, false), new Cell(8, 9, false), new Cell(8, 10, false), new Cell(8, 11, false), new Cell(8, 12, false), new Cell(8, 13, false), new Cell(8, 14, false), new Cell(0, 15, false)
    ]),
    new Shape("Glider", [
        new Cell(0, 0, false), new Cell(0, 1, false), new Cell(0, 2, true),
        new Cell(1, 0, true), new Cell(1, 1, false), new Cell(1, 2, true),
        new Cell(2, 0, false), new Cell(2, 1, true), new Cell(2, 2, true)
    ]),
    new Shape("LWSS", [
        new Cell(0, 0, false), new Cell(0, 1, true), new Cell(0, 2, false), new Cell(0, 3, false), new Cell(0, 4, true),
        new Cell(1, 0, true), new Cell(1, 1, false), new Cell(1, 2, false), new Cell(1, 3, false), new Cell(1, 4, false),
        new Cell(2, 0, true), new Cell(2, 1, false), new Cell(2, 2, false), new Cell(2, 3, false), new Cell(2, 4, true),
        new Cell(3, 0, true), new Cell(3, 1, true), new Cell(3, 2, true), new Cell(3, 3, true), new Cell(3, 4, false)
    ]),
    new Shape("MWSS", [
        new Cell(0, 0, false), new Cell(0, 1, false), new Cell(0, 2, false), new Cell(0, 3, true), new Cell(0, 4, false), new Cell(0, 5, false),
        new Cell(1, 0, false), new Cell(1, 1, true), new Cell(1, 2, false), new Cell(1, 3, false), new Cell(1, 4, false), new Cell(1, 5, true),
        new Cell(2, 0, true), new Cell(2, 1, false), new Cell(2, 2, false), new Cell(2, 3, false), new Cell(2, 4, false), new Cell(2, 5, false),
        new Cell(3, 0, true), new Cell(3, 1, false), new Cell(3, 2, false), new Cell(3, 3, false), new Cell(3, 4, false), new Cell(3, 5, true),
        new Cell(4, 0, true), new Cell(4, 1, true), new Cell(4, 2, true), new Cell(4, 3, true), new Cell(4, 4, true), new Cell(4, 5, false)
    ]),
    new Shape("HWSS", [
        new Cell(0, 0, false), new Cell(0, 1, false), new Cell(0, 2, false), new Cell(0, 3, true), new Cell(0, 4, true), new Cell(0, 5, false), new Cell(0, 6, false),
        new Cell(1, 0, false), new Cell(1, 1, true), new Cell(1, 2, false), new Cell(1, 3, false), new Cell(1, 4, false), new Cell(1, 5, false), new Cell(1, 6, true),
        new Cell(2, 0, true), new Cell(2, 1, false), new Cell(2, 2, false), new Cell(2, 3, false), new Cell(2, 4, false), new Cell(2, 5, false), new Cell(2, 6, false),
        new Cell(3, 0, true), new Cell(3, 1, false), new Cell(3, 2, false), new Cell(3, 3, false), new Cell(3, 4, false), new Cell(3, 5, false), new Cell(3, 6, true),
        new Cell(4, 0, true), new Cell(4, 1, true), new Cell(4, 2, true), new Cell(4, 3, true), new Cell(4, 4, true), new Cell(4, 5, true), new Cell(4, 6, false)
    ]),
    /*
        This is a test shape, so that I don't have to click the shape every damned time.
    */
    new Shape("CustomTest", [
        new Cell(0, 0, false), new Cell(0, 1, true), new Cell(0, 2, false), new Cell(0, 3, false), new Cell(0, 4, true), new Cell(0, 5, true),
        new Cell(1, 0, false), new Cell(1, 1, true), new Cell(1, 2, false), new Cell(1, 3, false), new Cell(1, 4, true), new Cell(1, 5, true),
        new Cell(2, 0, false), new Cell(2, 1, true), new Cell(2, 2, false), new Cell(2, 3, false), new Cell(2, 4, false), new Cell(2, 5, false),
        new Cell(3, 0, false), new Cell(3, 1, false), new Cell(3, 2, false), new Cell(3, 3, false), new Cell(3, 4, false), new Cell(3, 5, false)
    ])
];
