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
            new Pixel(null, 0, 0, true), new Pixel(null, 0, 1, true), 
            new Pixel(null, 1, 0, true), new Pixel(null, 1, 1, true)
        ]
    ),
    new Shape(
        "Beehive", 3, 4, 
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, true), new Pixel(null, 0, 2, true), new Pixel(null, 0, 3, false),
            new Pixel(null, 1, 0, true), new Pixel(null, 1, 1, false), new Pixel(null, 1, 2, false), new Pixel(null, 1, 3, true),
            new Pixel(null, 2, 0, false), new Pixel(null, 2, 1, true), new Pixel(null, 2, 2, true), new Pixel(null, 2, 3, false)
        ]
    ),
    new Shape(
        "Loaf", 4, 4,
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, true), new Pixel(null, 0, 2, true), new Pixel(null, 0, 3, false),
            new Pixel(null, 1, 0, true), new Pixel(null, 1, 1, false), new Pixel(null, 1, 2, false), new Pixel(null, 1, 3, true),
            new Pixel(null, 2, 0, false), new Pixel(null, 2, 1, true), new Pixel(null, 2, 2, false), new Pixel(null, 2, 3, true),
            new Pixel(null, 3, 0, false), new Pixel(null, 3, 1, false), new Pixel(null, 3, 2, true), new Pixel(null, 3, 3, false)
            
        ]
    ),
    new Shape(
        "Boat", 3, 3,
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, true), new Pixel(null, 0, 2, false),
            new Pixel(null, 1, 0, true), new Pixel(null, 1, 1, false), new Pixel(null, 1, 2, true),
            new Pixel(null, 2, 0, true), new Pixel(null, 2, 1, true), new Pixel(null, 2, 2, false)
        ]
    ),
    new Shape(
        "Tub", 3, 3,
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, true), new Pixel(null, 0, 2, false),
            new Pixel(null, 1, 0, true), new Pixel(null, 1, 1, false), new Pixel(null, 1, 2, true),
            new Pixel(null, 2, 0, false), new Pixel(null, 2, 1, true), new Pixel(null, 2, 2, false)
        ]
    ),
    new Shape(
        "Blinker", 3, 3, 
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, true), new Pixel(null, 0, 2, false),
            new Pixel(null, 0, 1, false), new Pixel(null, 1, 1, true), new Pixel(null, 1, 2, false),
            new Pixel(null, 0, 2, false), new Pixel(null, 2, 1, true), new Pixel(null, 2, 2, false),
        ]
    ),
    new Shape(
        "Toad", 4, 4, 
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, false), new Pixel(null, 0, 2, false), new Pixel(null, 0, 3, false),
            new Pixel(null, 1, 0, false), new Pixel(null, 1, 1, true), new Pixel(null, 1, 2, true), new Pixel(null, 1, 3, true),
            new Pixel(null, 2, 0, true), new Pixel(null, 2, 1, true), new Pixel(null, 2, 2, true), new Pixel(null, 2, 3, false),
            new Pixel(null, 3, 0, false), new Pixel(null, 3, 1, false), new Pixel(null, 3, 2, false), new Pixel(null, 3, 3, false)
        ]
    ),
    new Shape(
        "Pulsar", 15, 15, 
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, false), new Pixel(null, 0, 2, false), new Pixel(null, 0, 3, false), new Pixel(null, 0, 4, false), new Pixel(null, 0, 5, false), new Pixel(null, 0, 6, false), new Pixel(null, 0, 7, false), new Pixel(null, 0, 8, false), new Pixel(null, 0, 9, false), new Pixel(null, 0, 10, false), new Pixel(null, 0, 11, false), new Pixel(null, 0, 12, false), new Pixel(null, 0, 13, false), new Pixel(null, 0, 14, false),
            new Pixel(null, 1, 0, false), new Pixel(null, 1, 1, false), new Pixel(null, 1, 2, false), new Pixel(null, 1, 3, true), new Pixel(null, 1, 4, true), new Pixel(null, 1, 5, true), new Pixel(null, 1, 6, false), new Pixel(null, 1, 7, false), new Pixel(null, 1, 8, false), new Pixel(null, 1, 9, true), new Pixel(null, 1, 10, true), new Pixel(null, 1, 11, true), new Pixel(null, 1, 12, false), new Pixel(null, 1, 13, false), new Pixel(null, 1, 14, false),
            new Pixel(null, 2, 0, false), new Pixel(null, 2, 1, false), new Pixel(null, 2, 2, false), new Pixel(null, 2, 3, false), new Pixel(null, 2, 4, false), new Pixel(null, 2, 5, false), new Pixel(null, 2, 6, false), new Pixel(null, 2, 7, false), new Pixel(null, 2, 8, false), new Pixel(null, 2, 9, false), new Pixel(null, 2, 10, false), new Pixel(null, 2, 11, false), new Pixel(null, 2, 12, false), new Pixel(null, 2, 13, false), new Pixel(null, 2, 14, false),
            new Pixel(null, 3, 0, false), new Pixel(null, 3, 1, true), new Pixel(null, 3, 2, false), new Pixel(null, 3, 3, false), new Pixel(null, 3, 4, false), new Pixel(null, 3, 5, false), new Pixel(null, 3, 6, true), new Pixel(null, 3, 7, false), new Pixel(null, 3, 8, true), new Pixel(null, 3, 9, false), new Pixel(null, 3, 10, false), new Pixel(null, 3, 11, false), new Pixel(null, 3, 12, false), new Pixel(null, 3, 13, true), new Pixel(null, 3, 14, false),
            new Pixel(null, 4, 0, false), new Pixel(null, 4, 1, true), new Pixel(null, 4, 2, false), new Pixel(null, 4, 3, false), new Pixel(null, 4, 4, false), new Pixel(null, 4, 5, false), new Pixel(null, 4, 6, true), new Pixel(null, 4, 7, false), new Pixel(null, 4, 8, true), new Pixel(null, 4, 9, false), new Pixel(null, 4, 10, false), new Pixel(null, 4, 11, false), new Pixel(null, 4, 12, false), new Pixel(null, 4, 13, true), new Pixel(null, 4, 14, false),
            new Pixel(null, 5, 0, false), new Pixel(null, 5, 1, true), new Pixel(null, 5, 2, false), new Pixel(null, 5, 3, false), new Pixel(null, 5, 4, false), new Pixel(null, 5, 5, false), new Pixel(null, 5, 6, true), new Pixel(null, 5, 7, false), new Pixel(null, 5, 8, true), new Pixel(null, 5, 9, false), new Pixel(null, 5, 10, false), new Pixel(null, 5, 11, false), new Pixel(null, 5, 12, false), new Pixel(null, 5, 13, true), new Pixel(null, 5, 14, false),
            new Pixel(null, 6, 0, false), new Pixel(null, 6, 1, false), new Pixel(null, 6, 2, false), new Pixel(null, 6, 3, true), new Pixel(null, 6, 4, true), new Pixel(null, 6, 5, true), new Pixel(null, 6, 6, false), new Pixel(null, 6, 7, false), new Pixel(null, 6, 8, false), new Pixel(null, 6, 9, true), new Pixel(null, 6, 10, true), new Pixel(null, 6, 11, true), new Pixel(null, 6, 12, false), new Pixel(null, 6, 13, false), new Pixel(null, 6, 14, false),
            new Pixel(null, 7, 0, false), new Pixel(null, 7, 1, false), new Pixel(null, 7, 2, false), new Pixel(null, 7, 3, false), new Pixel(null, 7, 4, false), new Pixel(null, 7, 5, false), new Pixel(null, 7, 6, false), new Pixel(null, 7, 7, false), new Pixel(null, 7, 8, false), new Pixel(null, 7, 9, false), new Pixel(null, 7, 10, false), new Pixel(null, 7, 11, false), new Pixel(null, 7, 12, false), new Pixel(null, 7, 13, false), new Pixel(null, 7, 14, false),
            new Pixel(null, 8, 0, false), new Pixel(null, 8, 1, false), new Pixel(null, 8, 2, false), new Pixel(null, 8, 3, true), new Pixel(null, 8, 4, true), new Pixel(null, 8, 5, true), new Pixel(null, 8, 6, false), new Pixel(null, 8, 7, false), new Pixel(null, 8, 8, false), new Pixel(null, 8, 9, true), new Pixel(null, 8, 10, true), new Pixel(null, 8, 11, true), new Pixel(null, 8, 12, false), new Pixel(null, 8, 13, false), new Pixel(null, 8, 14, false),
            new Pixel(null, 9, 0, false), new Pixel(null, 9, 1, true), new Pixel(null, 9, 2, false), new Pixel(null, 9, 3, false), new Pixel(null, 9, 4, false), new Pixel(null, 9, 5, false), new Pixel(null, 9, 6, true), new Pixel(null, 9, 7, false), new Pixel(null, 9, 8, true), new Pixel(null, 9, 9, false), new Pixel(null, 9, 10, false), new Pixel(null, 9, 11, false), new Pixel(null, 9, 12, false), new Pixel(null, 9, 13, true), new Pixel(null, 9, 14, false),
            new Pixel(null, 10, 0, false), new Pixel(null, 10, 1, true), new Pixel(null, 10, 2, false), new Pixel(null, 10, 3, false), new Pixel(null, 10, 4, false), new Pixel(null, 10, 5, false), new Pixel(null, 10, 6, true), new Pixel(null, 10, 7, false), new Pixel(null, 10, 8, true), new Pixel(null, 10, 9, false), new Pixel(null, 10, 10, false), new Pixel(null, 10, 11, false), new Pixel(null, 10, 12, false), new Pixel(null, 10, 13, true), new Pixel(null, 10, 14, false),
            new Pixel(null, 11, 0, false), new Pixel(null, 11, 1, true), new Pixel(null, 11, 2, false), new Pixel(null, 11, 3, false), new Pixel(null, 11, 4, false), new Pixel(null, 11, 5, false), new Pixel(null, 11, 6, true), new Pixel(null, 11, 7, false), new Pixel(null, 11, 8, true), new Pixel(null, 11, 9, false), new Pixel(null, 11, 10, false), new Pixel(null, 11, 11, false), new Pixel(null, 11, 12, false), new Pixel(null, 11, 13, true), new Pixel(null, 11, 14, false),
            new Pixel(null, 12, 0, false), new Pixel(null, 12, 1, false), new Pixel(null, 12, 2, false), new Pixel(null, 12, 3, false), new Pixel(null, 12, 4, false), new Pixel(null, 12, 5, false), new Pixel(null, 12, 6, false), new Pixel(null, 12, 7, false), new Pixel(null, 12, 8, false), new Pixel(null, 12, 9, false), new Pixel(null, 12, 10, false), new Pixel(null, 12, 11, false), new Pixel(null, 12, 12, false), new Pixel(null, 12, 13, false), new Pixel(null, 12, 14, false),
            new Pixel(null, 13, 0, false), new Pixel(null, 13, 1, false), new Pixel(null, 13, 2, false), new Pixel(null, 13, 3, true), new Pixel(null, 13, 4, true), new Pixel(null, 13, 5, true), new Pixel(null, 13, 6, false), new Pixel(null, 13, 7, false), new Pixel(null, 13, 8, false), new Pixel(null, 13, 9, true), new Pixel(null, 13, 10, true), new Pixel(null, 13, 11, true), new Pixel(null, 13, 12, false), new Pixel(null, 13, 13, false), new Pixel(null, 13, 14, false),
            new Pixel(null, 14, 0, false), new Pixel(null, 14, 1, false), new Pixel(null, 14, 2, false), new Pixel(null, 14, 3, false), new Pixel(null, 14, 4, false), new Pixel(null, 14, 5, false), new Pixel(null, 14, 6, false), new Pixel(null, 14, 7, false), new Pixel(null, 14, 8, false), new Pixel(null, 14, 9, false), new Pixel(null, 14, 10, false), new Pixel(null, 14, 11, false), new Pixel(null, 14, 12, false), new Pixel(null, 14, 13, false), new Pixel(null, 14, 14, false),
        ]
    ),
    new Shape(
        "Penta-decathlon", 9, 16, 
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, false), new Pixel(null, 0, 2, false), new Pixel(null, 0, 3, false), new Pixel(null, 0, 4, false), new Pixel(null, 0, 5, false), new Pixel(null, 0, 6, false), new Pixel(null, 0, 7, false), new Pixel(null, 0, 8, false), new Pixel(null, 0, 9, false), new Pixel(null, 0, 10, false), new Pixel(null, 0, 11, false), new Pixel(null, 0, 12, false), new Pixel(null, 0, 13, false), new Pixel(null, 0, 14, false), new Pixel(null, 0, 15, false),
            new Pixel(null, 1, 0, false), new Pixel(null, 1, 1, false), new Pixel(null, 1, 2, false), new Pixel(null, 1, 3, false), new Pixel(null, 1, 4, false), new Pixel(null, 1, 5, false), new Pixel(null, 1, 6, false), new Pixel(null, 1, 7, false), new Pixel(null, 1, 8, false), new Pixel(null, 1, 9, false), new Pixel(null, 1, 10, false), new Pixel(null, 1, 11, false), new Pixel(null, 1, 12, false), new Pixel(null, 1, 13, false), new Pixel(null, 1, 14, false), new Pixel(null, 0, 15, false),
            new Pixel(null, 2, 0, false), new Pixel(null, 2, 1, false), new Pixel(null, 2, 2, false), new Pixel(null, 2, 3, false), new Pixel(null, 2, 4, false), new Pixel(null, 2, 5, false), new Pixel(null, 2, 6, false), new Pixel(null, 2, 7, false), new Pixel(null, 2, 8, false), new Pixel(null, 2, 9, false), new Pixel(null, 2, 10, false), new Pixel(null, 2, 11, false), new Pixel(null, 2, 12, false), new Pixel(null, 2, 13, false), new Pixel(null, 2, 14, false), new Pixel(null, 0, 15, false),

            new Pixel(null, 3, 0, false), new Pixel(null, 3, 1, false), new Pixel(null, 3, 2, false), new Pixel(null, 3, 3, false), new Pixel(null, 3, 4, false), new Pixel(null, 3, 5, true), new Pixel(null, 3, 6, false), new Pixel(null, 3, 7, false), new Pixel(null, 3, 8, false), new Pixel(null, 3, 9, false), new Pixel(null, 3, 10, true), new Pixel(null, 3, 11, false), new Pixel(null, 3, 12, false), new Pixel(null, 3, 13, false), new Pixel(null, 3, 14, false), new Pixel(null, 0, 15, false),
            new Pixel(null, 4, 0, false), new Pixel(null, 4, 1, false), new Pixel(null, 4, 2, false), new Pixel(null, 4, 3, true), new Pixel(null, 4, 4, true), new Pixel(null, 4, 5, false), new Pixel(null, 4, 6, true), new Pixel(null, 4, 7, true), new Pixel(null, 4, 8, true), new Pixel(null, 4, 9, true), new Pixel(null, 4, 10, false), new Pixel(null, 4, 11, true), new Pixel(null, 4, 12, true), new Pixel(null, 4, 13, false), new Pixel(null, 4, 14, false), new Pixel(null, 0, 15, false),
            new Pixel(null, 5, 0, false), new Pixel(null, 5, 1, false), new Pixel(null, 5, 2, false), new Pixel(null, 5, 3, false), new Pixel(null, 5, 4, false), new Pixel(null, 5, 5, true), new Pixel(null, 5, 6, false), new Pixel(null, 5, 7, false), new Pixel(null, 5, 8, false), new Pixel(null, 5, 9, false), new Pixel(null, 5, 10, true), new Pixel(null, 5, 11, false), new Pixel(null, 5, 12, false), new Pixel(null, 5, 13, false), new Pixel(null, 5, 14, false), new Pixel(null, 0, 15, false),

            new Pixel(null, 6, 0, false), new Pixel(null, 6, 1, false), new Pixel(null, 6, 2, false), new Pixel(null, 6, 3, false), new Pixel(null, 6, 4, false), new Pixel(null, 6, 5, false), new Pixel(null, 6, 6, false), new Pixel(null, 6, 7, false), new Pixel(null, 6, 8, false), new Pixel(null, 6, 9, false), new Pixel(null, 6, 10, false), new Pixel(null, 6, 11, false), new Pixel(null, 6, 12, false), new Pixel(null, 6, 13, false), new Pixel(null, 6, 14, false), new Pixel(null, 0, 15, false),
            new Pixel(null, 7, 0, false), new Pixel(null, 7, 1, false), new Pixel(null, 7, 2, false), new Pixel(null, 7, 3, false), new Pixel(null, 7, 4, false), new Pixel(null, 7, 5, false), new Pixel(null, 7, 6, false), new Pixel(null, 7, 7, false), new Pixel(null, 7, 8, false), new Pixel(null, 7, 9, false), new Pixel(null, 7, 10, false), new Pixel(null, 7, 11, false), new Pixel(null, 7, 12, false), new Pixel(null, 7, 13, false), new Pixel(null, 7, 14, false), new Pixel(null, 0, 15, false),
            new Pixel(null, 8, 0, false), new Pixel(null, 8, 1, false), new Pixel(null, 8, 2, false), new Pixel(null, 8, 3, false), new Pixel(null, 8, 4, false), new Pixel(null, 8, 5, false), new Pixel(null, 8, 6, false), new Pixel(null, 8, 7, false), new Pixel(null, 8, 8, false), new Pixel(null, 8, 9, false), new Pixel(null, 8, 10, false), new Pixel(null, 8, 11, false), new Pixel(null, 8, 12, false), new Pixel(null, 8, 13, false), new Pixel(null, 8, 14, false), new Pixel(null, 0, 15, false)
        ]
    ),
    new Shape(
        "Glider", 3, 3, 
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, false), new Pixel(null, 0, 2, true),
            new Pixel(null, 1, 0, true), new Pixel(null, 1, 1, false), new Pixel(null, 1, 2, true),
            new Pixel(null, 2, 0, false), new Pixel(null, 2, 1, true), new Pixel(null, 2, 2, true)

        ]
    ),
    new Shape(
        "LWSS", 4, 5, 
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, true), new Pixel(null, 0, 2, false), new Pixel(null, 0, 3, false), new Pixel(null, 0, 4, true),
            new Pixel(null, 1, 0, true), new Pixel(null, 1, 1, false), new Pixel(null, 1, 2, false), new Pixel(null, 1, 3, false), new Pixel(null, 1, 4, false),
            new Pixel(null, 2, 0, true), new Pixel(null, 2, 1, false), new Pixel(null, 2, 2, false), new Pixel(null, 2, 3, false), new Pixel(null, 2, 4, true),
            new Pixel(null, 3, 0, true), new Pixel(null, 3, 1, true), new Pixel(null, 3, 2, true), new Pixel(null, 3, 3, true), new Pixel(null, 3, 4, false)
        ]
    ),
    new Shape(
        "MWSS", 5, 6, 
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, false), new Pixel(null, 0, 2, false), new Pixel(null, 0, 3, true), new Pixel(null, 0, 4, false), new Pixel(null, 0, 5, false),
            new Pixel(null, 1, 0, false), new Pixel(null, 1, 1, true), new Pixel(null, 1, 2, false), new Pixel(null, 1, 3, false), new Pixel(null, 1, 4, false), new Pixel(null, 1, 5, true),
            new Pixel(null, 2, 0, true), new Pixel(null, 2, 1, false), new Pixel(null, 2, 2, false), new Pixel(null, 2, 3, false), new Pixel(null, 2, 4, false), new Pixel(null, 2, 5, false),
            new Pixel(null, 3, 0, true), new Pixel(null, 3, 1, false), new Pixel(null, 3, 2, false), new Pixel(null, 3, 3, false), new Pixel(null, 3, 4, false), new Pixel(null, 3, 5, true),
            new Pixel(null, 4, 0, true), new Pixel(null, 4, 1, true), new Pixel(null, 4, 2, true), new Pixel(null, 4, 3, true), new Pixel(null, 4, 4, true), new Pixel(null, 4, 5, false)
        ]
    ),
    new Shape(
        "HWSS", 5, 7, 
        [
            new Pixel(null, 0, 0, false), new Pixel(null, 0, 1, false), new Pixel(null, 0, 2, false), new Pixel(null, 0, 3, true), new Pixel(null, 0, 4, true), new Pixel(null, 0, 5, false), new Pixel(null, 0, 6, false),
            new Pixel(null, 1, 0, false), new Pixel(null, 1, 1, true), new Pixel(null, 1, 2, false), new Pixel(null, 1, 3, false), new Pixel(null, 1, 4, false), new Pixel(null, 1, 5, false), new Pixel(null, 1, 6, true),
            new Pixel(null, 2, 0, true), new Pixel(null, 2, 1, false), new Pixel(null, 2, 2, false), new Pixel(null, 2, 3, false), new Pixel(null, 2, 4, false), new Pixel(null, 2, 5, false), new Pixel(null, 2, 6, false),
            new Pixel(null, 3, 0, true), new Pixel(null, 3, 1, false), new Pixel(null, 3, 2, false), new Pixel(null, 3, 3, false), new Pixel(null, 3, 4, false), new Pixel(null, 3, 5, false), new Pixel(null, 3, 6, true),
            new Pixel(null, 4, 0, true), new Pixel(null, 4, 1, true), new Pixel(null, 4, 2, true), new Pixel(null, 4, 3, true), new Pixel(null, 4, 4, true), new Pixel(null, 4, 5, true), new Pixel(null, 4, 6, false)
        ]
    )
];

export {MAX_WIDTH, MAX_HEIGHT, PIXEL_SIZE, WIDTH_PIXELS, HEIGHT_PIXELS, TOTAL_PIXELS, DEFAULT_SHAPE_NAMES, DEFAULT_SHAPE_OBJECTS };
