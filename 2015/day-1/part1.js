"use strict"
const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString();
const result = input.split('').reduce((floor, direction) => direction === '(' ? ++floor : --floor, 0);
console.log(result);