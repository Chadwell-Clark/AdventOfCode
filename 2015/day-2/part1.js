// --- Day 2: I Was Told There Would Be No Math ---
// The elves are running low on wrapping paper, and so they need to submit an order for more.
// They have a list of the dimensions (length l, width w, and height h) of each present,
// and only want to order exactly as much as they need.

// Fortunately, every present is a box (a perfect right rectangular prism), 
// which makes calculating the required wrapping paper for each gift a little easier: 
// find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. 
// The elves also need a little extra paper for each present: the area of the smallest side.

// For example:

// A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper 
// plus 6 square feet of slack, for a total of 58 square feet.
// A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper 
// plus 1 square foot of slack, for a total of 43 square feet.
// All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?

"use strict"

const fs = require('fs')
// Read file int array of strings
const input = fs.readFileSync('./input.txt').toString().split('\n')
// take each set of dimensions and split on x then create three variables for 2*l*w + 2*w*h + 2*h*l  keeping a total then find smallest and divide by two and then 
let squarefeet = 0;
input.map(item => {
   const x= item.trim().split('x')
   const lw = x[0] * x[1]
   const wh = x[1] * x[2]
   const hl = x[2] * x[0]
   const areaplus = 2*lw + 2*wh + 2*hl +Math.min(lw,wh,hl)

    squarefeet += areaplus
})
console.log(squarefeet)