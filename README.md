# Conway's Game of Life

This is written in very basic html5 and Javascript. The purpose
of this project was mainly for me to do a little bit of webdev
practice, as well as play around with the game of life. This is
written using the html5 canvas, as well as vanilla Javascript.
There are no JS libraries at all, and everything is in one file.
Once I get the thing working, I might try to convert the code to
TypeScript, but we'll see.

The way I run this program is using the basic Python http server.
With Python installed, you can run the following command:

```
python3 -m http.server
```

In some cases, you do not need the '3' above, and would run this command:

```
python -m http.server
```

This is a first pass, with mostly naive implementations, so there are many areas to improve upon.

Possible improvements:

1. Unglobal a lot of things, like arrays, contexts, etc.
2. Add persistence. Currently when you refresh the page, you lose everything.
3. Write in something other than Javascript. If I can figure this out, I might try to do this in `wasm` or another language.
4. Use some type of restful functions.
5. Add a web framework to make the website better.
6. Figure out how to separate the monolith JS file into separate files.

### Basic Shapes

- [Shapes Wiki](https://conwaylife.com/wiki/) - This seems to have everything and is a good general reference.

#### Still lifes
- [Block](https://conwaylife.com/wiki/Block)
- [Beehive](https://conwaylife.com/wiki/Beehive)
- [Loaf](https://conwaylife.com/wiki/Loaf)
- [Boat](https://conwaylife.com/wiki/Boat)
- [Tub](https://conwaylife.com/wiki/Tub)

#### Oscillators
- [Blinker](https://conwaylife.com/wiki/Blinker)
- [Toad](https://conwaylife.com/wiki/Toad)
- [Beacon](https://conwaylife.com/wiki/Beacon)
- [Pulsar](https://conwaylife.com/wiki/Pulsar)
- [Pentadecathlon](https://conwaylife.com/wiki/Pentadecathlon)

#### Spaceships
- [Glider](https://conwaylife.com/wiki/Glider)
- [Light-weight spaceship](https://conwaylife.com/wiki/Lightweight_spaceship)
- [Middle-weight spaceship](https://conwaylife.com/wiki/Middleweight_spaceship)
- [Heavy-weight spaceship](https://conwaylife.com/wiki/Heavyweight_spaceship)


### Helpful Links
- [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) - Good general overview
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/) - I can never remember this, so it's in the readme :)
- [Cool Color Picker](https://htmlcolors.com/hex/3d605f) - This is especially awesome for shades and tints.