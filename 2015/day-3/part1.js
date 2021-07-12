// --- Day 3: Perfectly Spherical Houses in a Vacuum ---
// Santa is delivering presents to an infinite two-dimensional grid of houses.

// He begins by delivering a present to the house at his starting location, 
// and then an elf at the North Pole calls him via radio and tells him where to move next. 
// Moves are always exactly one house to the north (^), south (v), east (>), or west (<).
// After each move, he delivers another present to the house at his new location.

// However, the elf back at the north pole has had a little too much eggnog, 
// and so his directions are a little off, and Santa ends up visiting some houses more than once. 
// How many houses receive at least one present?

// For example:

// > delivers presents to 2 houses: one at the starting location, and one to the east.
// ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
// ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.

"use strict"

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split('')
// Starting location of the Santa
// Set will hold unique values needs starting point added
let coordinates = new Set().add(`0x0`);
// user reduce to iterate through INPUT starting with initial value 0x0 and starting from index zero in the array

input.reduce((curCoords, direction) => {
  let newCoords = {}; // Create empty object for each new coordinate
    
  if (direction === '^') newCoords = {x: curCoords.x, y: curCoords.y + 1};
  if (direction === 'v') newCoords = {x: curCoords.x, y: curCoords.y - 1};
  if (direction === '>') newCoords = {x: curCoords.x + 1, y: curCoords.y};
  if (direction === '<') newCoords = {x: curCoords.x - 1, y: curCoords.y};

  coordinates.add(`${newCoords.x}x${newCoords.y}`);
//   newCoords are returned as the accumulator curCoords
  return newCoords;
//   initial curCoords(accumulator) x:0 y:0
}, {x: 0, y: 0});
//return size(length or count ) of coordinate set
console.log(coordinates)
console.log(coordinates.size);