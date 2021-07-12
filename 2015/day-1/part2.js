"use strict"
const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString();
const floors = input.split('')
let floor = 0
// let count = 0
// floors.forEach(element => {
//     count++
//     element === "(" ? ++floor : --floor
//     if (floor === -1) { console.log(count) }
// });

let result = input.split('').map(direction => direction === '(' ? ++floor : --floor).indexOf(-1) + 1;

console.log(result);
