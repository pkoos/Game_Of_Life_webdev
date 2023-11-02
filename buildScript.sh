#!/bin/sh

cd src/ts

tsc -t esnext -m ESNext --outDir build/src/js --strict true src/ts/canvas.ts src/ts/cell.ts src/ts/constants.ts src/ts/rules.ts src/ts/shape.ts src/ts/main.ts