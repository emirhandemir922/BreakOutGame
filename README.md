# BreakOutGame

BreakOutGame is a clone of classic atari game that I build using canvas.js to learn javascript in a higher level

Game is simple you can use your arrow keys to play

To change the level just assign bricklvl variable to bricklvl1 or bricklvl2

If you want to create your own level just declare an object with keys;

id: to track bricks easily - only int values

visibility: if the brick should be visible value must be true if not false - only bool values

x: starting pixel of the brick on horizontal line

y: starting pixel of the brick on the vertical line

type: type of the brick - only values that are acceptable are "metal"( bricks that require two hits to destroy ), "speed"( bricks that speeds up the ball ) or null( default bricks )

width: width of the bricks - only int values

height: height of the bricks - only int values

Keep that in mind width and height values can be assigned the default values that are brick_width and brick_height - these are also adjustable at the top of the file
