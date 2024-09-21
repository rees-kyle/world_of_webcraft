// canvas api:
// - dynamic, scriptable rendering of 2D shapes and bitmap images
// - part of the html5 specification, designed for drawing graphics via javascript
// - draw simple shapes, apply styles and colors, create transformations and animations


// firstly, add a '<canvas>' element to the html file


// then access the canvas with javascript:

// get canvas element using its id
const canvas = document.getElementById('myCanvas');

// get the 2d rendering context for canvas; to draw 2d shapes
const ctx = canvas.getContext('2d');


// draw shapes:
// rectangle:

// set fill color dor drawing operations to blue
ctx.fillStyle = 'blue';

// draw a solid rectangle 
ctx.fillRect(10, 10, 150, 100); // x pos, y pos, width, height


// line:
ctx.beginPath(); // start a new path
ctx.moveTo(180, 60); // move pen to (x pos, y pos)
ctx.lineTo(350, 60); // draw a line to (x pos, y pos)
ctx.strokeStyle = 'red'; // set stroke (outline) color to 'red'
ctx.stroke(); // render path


// circle:
ctx.beginPath(); // begin new path or reset current path

// draw a circle using the arc method
ctx.arc(85, 175, 50, 0, 2 * Math.PI); // x pos, y pos, start angle, end angle (in radians)

ctx.fillStyle = 'green';
ctx.fill(); // fill path with current 'fillStyle'


// applying styles and colors:

ctx.lineWidth = 8; 
ctx.strokeStyle = '#ff0000'; // red line

// choose style for the ending of lines
ctx.lineCap = 'round';
ctx.stroke(); // apply stroke to current path with previously set styles