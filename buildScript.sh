#!/bin/sh

cd src/ts

tsc -t esnext -m ESNext --outDir build/src/js --strict true canvas.ts cell.ts constants.ts rules.ts shape.ts main.ts

cd build/src/js
mv main.js ../