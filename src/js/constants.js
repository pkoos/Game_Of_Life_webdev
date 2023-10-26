import { Shape } from "./shape.js";
import { Pixel } from "./pixel.js";

const MAX_WIDTH = 1200;
const MAX_HEIGHT = 800;
const PIXEL_SIZE = 25;
const WIDTH_PIXELS = MAX_WIDTH / PIXEL_SIZE;
const HEIGHT_PIXELS = MAX_HEIGHT / PIXEL_SIZE;

const TOTAL_PIXELS = (MAX_WIDTH/PIXEL_SIZE) * (MAX_HEIGHT/PIXEL_SIZE)
const DEFAULT_SHAPE_NAMES = [
    "Block", "Beehive", "Loaf", "Boat", "Tub", 
    "Blinker", "Toad", "Pulsar", "Penta-decathlon", 
    "Glider", "LWSS", "MWSS", "HWSS"
];

const DEFAULT_SHAPE_OBJECTS = [
    new Shape(
        "Block", 2, 2, 
        [
            new Pixel(0, 0, true), new Pixel(0, 1, true), 
            new Pixel(1, 0, true), new Pixel(1, 1, true)
        ]
    ),
    new Shape(
        "Beehive", 3, 4, 
        [
            new Pixel(0, 0, false), new Pixel(0, 1, true), new Pixel(0, 2, true), new Pixel(0, 3, false),
            new Pixel(1, 0, true), new Pixel(1, 1, false), new Pixel(1, 2, false), new Pixel(1, 3, true),
            new Pixel(2, 0, false), new Pixel(2, 1, true), new Pixel(2, 2, true), new Pixel(2, 3, false)
        ]
    ),
    new Shape(
        "Loaf", 4, 4,
        [
            new Pixel(0, 0, false), new Pixel(0, 1, true), new Pixel(0, 2, true), new Pixel(0, 3, false),
            new Pixel(1, 0, true), new Pixel(1, 1, false), new Pixel(1, 2, false), new Pixel(1, 3, true),
            new Pixel(2, 0, false), new Pixel(2, 1, true), new Pixel(2, 2, false), new Pixel(2, 3, true),
            new Pixel(3, 0, false), new Pixel(3, 1, false), new Pixel(3, 2, true), new Pixel(3, 3, false)
            
        ]
    ),
    new Shape(
        "Boat", 3, 3,
        [
            new Pixel(0, 0, false), new Pixel(0, 1, true), new Pixel(0, 2, false),
            new Pixel(1, 0, true), new Pixel(1, 1, false), new Pixel(1, 2, true),
            new Pixel(2, 0, true), new Pixel(2, 1, true), new Pixel(2, 2, false)
        ]
    ),
    new Shape(
        "Tub", 3, 3,
        [
            new Pixel(0, 0, false), new Pixel(0, 1, true), new Pixel(0, 2, false),
            new Pixel(1, 0, true), new Pixel(1, 1, false), new Pixel(1, 2, true),
            new Pixel(2, 0, false), new Pixel(2, 1, true), new Pixel(2, 2, false)
        ]
    ),
    new Shape(
        "Blinker", 3, 3, 
        [
            new Pixel(0, 0, false), new Pixel(0, 1, true), new Pixel(0, 2, false),
            new Pixel(0, 1, false), new Pixel(1, 1, true), new Pixel(1, 2, false),
            new Pixel(0, 2, false), new Pixel(2, 1, true), new Pixel(2, 2, false),
        ]
    ),
    new Shape(
        "Toad", 4, 4, 
        [
            new Pixel(0, 0, false), new Pixel(0, 1, false), new Pixel(0, 2, false), new Pixel(0, 3, false),
            new Pixel(1, 0, false), new Pixel(1, 1, true), new Pixel(1, 2, true), new Pixel(1, 3, true),
            new Pixel(2, 0, true), new Pixel(2, 1, true), new Pixel(2, 2, true), new Pixel(2, 3, false),
            new Pixel(3, 0, false), new Pixel(3, 1, false), new Pixel(3, 2, false), new Pixel(3, 3, false)
        ]
    ),
    new Shape(
        "Pulsar", 15, 15, 
        [
            new Pixel(0, 0, false), new Pixel(0, 1, false), new Pixel(0, 2, false), new Pixel(0, 3, false), new Pixel(0, 4, false), new Pixel(0, 5, false), new Pixel(0, 6, false), new Pixel(0, 7, false), new Pixel(0, 8, false), new Pixel(0, 9, false), new Pixel(0, 10, false), new Pixel(0, 11, false), new Pixel(0, 12, false), new Pixel(0, 13, false), new Pixel(0, 14, false),
            new Pixel(1, 0, false), new Pixel(1, 1, false), new Pixel(1, 2, false), new Pixel(1, 3, true), new Pixel(1, 4, true), new Pixel(1, 5, true), new Pixel(1, 6, false), new Pixel(1, 7, false), new Pixel(1, 8, false), new Pixel(1, 9, true), new Pixel(1, 10, true), new Pixel(1, 11, true), new Pixel(1, 12, false), new Pixel(1, 13, false), new Pixel(1, 14, false),
            new Pixel(2, 0, false), new Pixel(2, 1, false), new Pixel(2, 2, false), new Pixel(2, 3, false), new Pixel(2, 4, false), new Pixel(2, 5, false), new Pixel(2, 6, false), new Pixel(2, 7, false), new Pixel(2, 8, false), new Pixel(2, 9, false), new Pixel(2, 10, false), new Pixel(2, 11, false), new Pixel(2, 12, false), new Pixel(2, 13, false), new Pixel(2, 14, false),
            new Pixel(3, 0, false), new Pixel(3, 1, true), new Pixel(3, 2, false), new Pixel(3, 3, false), new Pixel(3, 4, false), new Pixel(3, 5, false), new Pixel(3, 6, true), new Pixel(3, 7, false), new Pixel(3, 8, true), new Pixel(3, 9, false), new Pixel(3, 10, false), new Pixel(3, 11, false), new Pixel(3, 12, false), new Pixel(3, 13, true), new Pixel(3, 14, false),
            new Pixel(4, 0, false), new Pixel(4, 1, true), new Pixel(4, 2, false), new Pixel(4, 3, false), new Pixel(4, 4, false), new Pixel(4, 5, false), new Pixel(4, 6, true), new Pixel(4, 7, false), new Pixel(4, 8, true), new Pixel(4, 9, false), new Pixel(4, 10, false), new Pixel(4, 11, false), new Pixel(4, 12, false), new Pixel(4, 13, true), new Pixel(4, 14, false),
            new Pixel(5, 0, false), new Pixel(5, 1, true), new Pixel(5, 2, false), new Pixel(5, 3, false), new Pixel(5, 4, false), new Pixel(5, 5, false), new Pixel(5, 6, true), new Pixel(5, 7, false), new Pixel(5, 8, true), new Pixel(5, 9, false), new Pixel(5, 10, false), new Pixel(5, 11, false), new Pixel(5, 12, false), new Pixel(5, 13, true), new Pixel(5, 14, false),
            new Pixel(6, 0, false), new Pixel(6, 1, false), new Pixel(6, 2, false), new Pixel(6, 3, true), new Pixel(6, 4, true), new Pixel(6, 5, true), new Pixel(6, 6, false), new Pixel(6, 7, false), new Pixel(6, 8, false), new Pixel(6, 9, true), new Pixel(6, 10, true), new Pixel(6, 11, true), new Pixel(6, 12, false), new Pixel(6, 13, false), new Pixel(6, 14, false),
            new Pixel(7, 0, false), new Pixel(7, 1, false), new Pixel(7, 2, false), new Pixel(7, 3, false), new Pixel(7, 4, false), new Pixel(7, 5, false), new Pixel(7, 6, false), new Pixel(7, 7, false), new Pixel(7, 8, false), new Pixel(7, 9, false), new Pixel(7, 10, false), new Pixel(7, 11, false), new Pixel(7, 12, false), new Pixel(7, 13, false), new Pixel(7, 14, false),
            new Pixel(8, 0, false), new Pixel(8, 1, false), new Pixel(8, 2, false), new Pixel(8, 3, true), new Pixel(8, 4, true), new Pixel(8, 5, true), new Pixel(8, 6, false), new Pixel(8, 7, false), new Pixel(8, 8, false), new Pixel(8, 9, true), new Pixel(8, 10, true), new Pixel(8, 11, true), new Pixel(8, 12, false), new Pixel(8, 13, false), new Pixel(8, 14, false),
            new Pixel(9, 0, false), new Pixel(9, 1, true), new Pixel(9, 2, false), new Pixel(9, 3, false), new Pixel(9, 4, false), new Pixel(9, 5, false), new Pixel(9, 6, true), new Pixel(9, 7, false), new Pixel(9, 8, true), new Pixel(9, 9, false), new Pixel(9, 10, false), new Pixel(9, 11, false), new Pixel(9, 12, false), new Pixel(9, 13, true), new Pixel(9, 14, false),
            new Pixel(10, 0, false), new Pixel(10, 1, true), new Pixel(10, 2, false), new Pixel(10, 3, false), new Pixel(10, 4, false), new Pixel(10, 5, false), new Pixel(10, 6, true), new Pixel(10, 7, false), new Pixel(10, 8, true), new Pixel(10, 9, false), new Pixel(10, 10, false), new Pixel(10, 11, false), new Pixel(10, 12, false), new Pixel(10, 13, true), new Pixel(10, 14, false),
            new Pixel(11, 0, false), new Pixel(11, 1, true), new Pixel(11, 2, false), new Pixel(11, 3, false), new Pixel(11, 4, false), new Pixel(11, 5, false), new Pixel(11, 6, true), new Pixel(11, 7, false), new Pixel(11, 8, true), new Pixel(11, 9, false), new Pixel(11, 10, false), new Pixel(11, 11, false), new Pixel(11, 12, false), new Pixel(11, 13, true), new Pixel(11, 14, false),
            new Pixel(12, 0, false), new Pixel(12, 1, false), new Pixel(12, 2, false), new Pixel(12, 3, false), new Pixel(12, 4, false), new Pixel(12, 5, false), new Pixel(12, 6, false), new Pixel(12, 7, false), new Pixel(12, 8, false), new Pixel(12, 9, false), new Pixel(12, 10, false), new Pixel(12, 11, false), new Pixel(12, 12, false), new Pixel(12, 13, false), new Pixel(12, 14, false),
            new Pixel(13, 0, false), new Pixel(13, 1, false), new Pixel(13, 2, false), new Pixel(13, 3, true), new Pixel(13, 4, true), new Pixel(13, 5, true), new Pixel(13, 6, false), new Pixel(13, 7, false), new Pixel(13, 8, false), new Pixel(13, 9, true), new Pixel(13, 10, true), new Pixel(13, 11, true), new Pixel(13, 12, false), new Pixel(13, 13, false), new Pixel(13, 14, false),
            new Pixel(14, 0, false), new Pixel(14, 1, false), new Pixel(14, 2, false), new Pixel(14, 3, false), new Pixel(14, 4, false), new Pixel(14, 5, false), new Pixel(14, 6, false), new Pixel(14, 7, false), new Pixel(14, 8, false), new Pixel(14, 9, false), new Pixel(14, 10, false), new Pixel(14, 11, false), new Pixel(14, 12, false), new Pixel(14, 13, false), new Pixel(14, 14, false),
        ]
    ),
    new Shape(
        "Penta-decathlon", 9, 16, 
        [
            new Pixel(0, 0, false), new Pixel(0, 1, false), new Pixel(0, 2, false), new Pixel(0, 3, false), new Pixel(0, 4, false), new Pixel(0, 5, false), new Pixel(0, 6, false), new Pixel(0, 7, false), new Pixel(0, 8, false), new Pixel(0, 9, false), new Pixel(0, 10, false), new Pixel(0, 11, false), new Pixel(0, 12, false), new Pixel(0, 13, false), new Pixel(0, 14, false), new Pixel(0, 15, false),
            new Pixel(1, 0, false), new Pixel(1, 1, false), new Pixel(1, 2, false), new Pixel(1, 3, false), new Pixel(1, 4, false), new Pixel(1, 5, false), new Pixel(1, 6, false), new Pixel(1, 7, false), new Pixel(1, 8, false), new Pixel(1, 9, false), new Pixel(1, 10, false), new Pixel(1, 11, false), new Pixel(1, 12, false), new Pixel(1, 13, false), new Pixel(1, 14, false), new Pixel(0, 15, false),
            new Pixel(2, 0, false), new Pixel(2, 1, false), new Pixel(2, 2, false), new Pixel(2, 3, false), new Pixel(2, 4, false), new Pixel(2, 5, false), new Pixel(2, 6, false), new Pixel(2, 7, false), new Pixel(2, 8, false), new Pixel(2, 9, false), new Pixel(2, 10, false), new Pixel(2, 11, false), new Pixel(2, 12, false), new Pixel(2, 13, false), new Pixel(2, 14, false), new Pixel(0, 15, false),

            new Pixel(3, 0, false), new Pixel(3, 1, false), new Pixel(3, 2, false), new Pixel(3, 3, false), new Pixel(3, 4, false), new Pixel(3, 5, true), new Pixel(3, 6, false), new Pixel(3, 7, false), new Pixel(3, 8, false), new Pixel(3, 9, false), new Pixel(3, 10, true), new Pixel(3, 11, false), new Pixel(3, 12, false), new Pixel(3, 13, false), new Pixel(3, 14, false), new Pixel(0, 15, false),
            new Pixel(4, 0, false), new Pixel(4, 1, false), new Pixel(4, 2, false), new Pixel(4, 3, true), new Pixel(4, 4, true), new Pixel(4, 5, false), new Pixel(4, 6, true), new Pixel(4, 7, true), new Pixel(4, 8, true), new Pixel(4, 9, true), new Pixel(4, 10, false), new Pixel(4, 11, true), new Pixel(4, 12, true), new Pixel(4, 13, false), new Pixel(4, 14, false), new Pixel(0, 15, false),
            new Pixel(5, 0, false), new Pixel(5, 1, false), new Pixel(5, 2, false), new Pixel(5, 3, false), new Pixel(5, 4, false), new Pixel(5, 5, true), new Pixel(5, 6, false), new Pixel(5, 7, false), new Pixel(5, 8, false), new Pixel(5, 9, false), new Pixel(5, 10, true), new Pixel(5, 11, false), new Pixel(5, 12, false), new Pixel(5, 13, false), new Pixel(5, 14, false), new Pixel(0, 15, false),

            new Pixel(6, 0, false), new Pixel(6, 1, false), new Pixel(6, 2, false), new Pixel(6, 3, false), new Pixel(6, 4, false), new Pixel(6, 5, false), new Pixel(6, 6, false), new Pixel(6, 7, false), new Pixel(6, 8, false), new Pixel(6, 9, false), new Pixel(6, 10, false), new Pixel(6, 11, false), new Pixel(6, 12, false), new Pixel(6, 13, false), new Pixel(6, 14, false), new Pixel(0, 15, false),
            new Pixel(7, 0, false), new Pixel(7, 1, false), new Pixel(7, 2, false), new Pixel(7, 3, false), new Pixel(7, 4, false), new Pixel(7, 5, false), new Pixel(7, 6, false), new Pixel(7, 7, false), new Pixel(7, 8, false), new Pixel(7, 9, false), new Pixel(7, 10, false), new Pixel(7, 11, false), new Pixel(7, 12, false), new Pixel(7, 13, false), new Pixel(7, 14, false), new Pixel(0, 15, false),
            new Pixel(8, 0, false), new Pixel(8, 1, false), new Pixel(8, 2, false), new Pixel(8, 3, false), new Pixel(8, 4, false), new Pixel(8, 5, false), new Pixel(8, 6, false), new Pixel(8, 7, false), new Pixel(8, 8, false), new Pixel(8, 9, false), new Pixel(8, 10, false), new Pixel(8, 11, false), new Pixel(8, 12, false), new Pixel(8, 13, false), new Pixel(8, 14, false), new Pixel(0, 15, false)
        ]
    ),
    new Shape(
        "Glider", 3, 3, 
        [
            new Pixel(0, 0, false), new Pixel(0, 1, false), new Pixel(0, 2, true),
            new Pixel(1, 0, true), new Pixel(1, 1, false), new Pixel(1, 2, true),
            new Pixel(2, 0, false), new Pixel(2, 1, true), new Pixel(2, 2, true)

        ]
    ),
    new Shape(
        "LWSS", 4, 5, 
        [
            new Pixel(0, 0, false), new Pixel(0, 1, true), new Pixel(0, 2, false), new Pixel(0, 3, false), new Pixel(0, 4, true),
            new Pixel(1, 0, true), new Pixel(1, 1, false), new Pixel(1, 2, false), new Pixel(1, 3, false), new Pixel(1, 4, false),
            new Pixel(2, 0, true), new Pixel(2, 1, false), new Pixel(2, 2, false), new Pixel(2, 3, false), new Pixel(2, 4, true),
            new Pixel(3, 0, true), new Pixel(3, 1, true), new Pixel(3, 2, true), new Pixel(3, 3, true), new Pixel(3, 4, false)
        ]
    ),
    new Shape(
        "MWSS", 5, 6, 
        [
            new Pixel(0, 0, false), new Pixel(0, 1, false), new Pixel(0, 2, false), new Pixel(0, 3, true), new Pixel(0, 4, false), new Pixel(0, 5, false),
            new Pixel(1, 0, false), new Pixel(1, 1, true), new Pixel(1, 2, false), new Pixel(1, 3, false), new Pixel(1, 4, false), new Pixel(1, 5, true),
            new Pixel(2, 0, true), new Pixel(2, 1, false), new Pixel(2, 2, false), new Pixel(2, 3, false), new Pixel(2, 4, false), new Pixel(2, 5, false),
            new Pixel(3, 0, true), new Pixel(3, 1, false), new Pixel(3, 2, false), new Pixel(3, 3, false), new Pixel(3, 4, false), new Pixel(3, 5, true),
            new Pixel(4, 0, true), new Pixel(4, 1, true), new Pixel(4, 2, true), new Pixel(4, 3, true), new Pixel(4, 4, true), new Pixel(4, 5, false)
        ]
    ),
    new Shape(
        "HWSS", 5, 7, 
        [
            new Pixel(0, 0, false), new Pixel(0, 1, false), new Pixel(0, 2, false), new Pixel(0, 3, true), new Pixel(0, 4, true), new Pixel(0, 5, false), new Pixel(0, 6, false),
            new Pixel(1, 0, false), new Pixel(1, 1, true), new Pixel(1, 2, false), new Pixel(1, 3, false), new Pixel(1, 4, false), new Pixel(1, 5, false), new Pixel(1, 6, true),
            new Pixel(2, 0, true), new Pixel(2, 1, false), new Pixel(2, 2, false), new Pixel(2, 3, false), new Pixel(2, 4, false), new Pixel(2, 5, false), new Pixel(2, 6, false),
            new Pixel(3, 0, true), new Pixel(3, 1, false), new Pixel(3, 2, false), new Pixel(3, 3, false), new Pixel(3, 4, false), new Pixel(3, 5, false), new Pixel(3, 6, true),
            new Pixel(4, 0, true), new Pixel(4, 1, true), new Pixel(4, 2, true), new Pixel(4, 3, true), new Pixel(4, 4, true), new Pixel(4, 5, true), new Pixel(4, 6, false)
        ]
    )
];

export {MAX_WIDTH, MAX_HEIGHT, PIXEL_SIZE, WIDTH_PIXELS, HEIGHT_PIXELS, TOTAL_PIXELS, DEFAULT_SHAPE_NAMES, DEFAULT_SHAPE_OBJECTS };
