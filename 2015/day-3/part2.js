// The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.

// Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), 
// then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.

// This year, how many houses receive at least one present?

// For example:

// ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
// ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
// ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.

"use strict"

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split('')

let santa = new Set().add(`0x0`);
let roboSanta = new Set().add(`0x0`);
// user reduce to iterate through INPUT starting with initial value 0x0 and starting from index zero in the array
let santaInput =[];
let roboInput = []
for (let i = 0; i < input.length; i++)
{
    if(i%2 == 0)
    
    {santaInput.push(input[i])}
    else
    {roboInput.push(input[i])}
    
    
}


santaInput.reduce((curCoords, direction) => {
  let newCoords = {}; // Create empty object for each new coordinate
    
  if (direction === '^') newCoords = {x: curCoords.x, y: curCoords.y + 1};
  if (direction === 'v') newCoords = {x: curCoords.x, y: curCoords.y - 1};
  if (direction === '>') newCoords = {x: curCoords.x + 1, y: curCoords.y};
  if (direction === '<') newCoords = {x: curCoords.x - 1, y: curCoords.y};

  santa.add(`${newCoords.x}x${newCoords.y}`);
//   newCoords are returned as the accumulator curCoords
  return newCoords;
//   initial curCoords(accumulator) x:0 y:0
}, {x: 0, y: 0});
//return size(length or count ) of coordinate set



roboInput.reduce((curCoords, direction) => {
    let newCoords = {}; // Create empty object for each new coordinate
      
    if (direction === '^') newCoords = {x: curCoords.x, y: curCoords.y + 1};
    if (direction === 'v') newCoords = {x: curCoords.x, y: curCoords.y - 1};
    if (direction === '>') newCoords = {x: curCoords.x + 1, y: curCoords.y};
    if (direction === '<') newCoords = {x: curCoords.x - 1, y: curCoords.y};
  
    roboSanta.add(`${newCoords.x}x${newCoords.y}`);
  //   newCoords are returned as the accumulator curCoords
    return newCoords;
  //   initial curCoords(accumulator) x:0 y:0
  }, {x: 0, y: 0});
  //return size(length or count ) of coordinate set
  console.log("***********************************************************************santa",santa)
  console.log("*********************************************************************robo",roboSanta)
  const union = new Set([...santa,...roboSanta])
  console.log(union.size)

 // Soution by  Eugene Obrezkov ghaiklor below
//   "use strict";

// const fs = require('fs');
// const INPUT = fs.readFileSync('./input.txt').toString().split('');
// const santaDirections = INPUT.filter((item, index) => index % 2 === 0);
// const roboSantaDirections = INPUT.filter((item, index) => index % 2 === 1);

// const traverse = directions => {
//   let visitedCoordinates = ['0x0'];
//   let currentPosition = {x: 0, y: 0};

//   directions.forEach(direction => {
//     if (direction === '^') currentPosition.y++;
//     if (direction === 'v') currentPosition.y--;
//     if (direction === '>') currentPosition.x++;
//     if (direction === '<') currentPosition.x--;

//     visitedCoordinates.push(`${currentPosition.x}x${currentPosition.y}`);
//   });

//   return visitedCoordinates;
// };

// const result = new Set(traverse(santaDirections).concat(traverse(roboSantaDirections))).size;

// console.log(result);