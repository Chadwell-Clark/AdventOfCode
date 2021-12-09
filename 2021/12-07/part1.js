// --- Day 7: The Treachery of Whales ---
// A giant whale has decided your submarine is its next meal, and it's much faster than you are. There's nowhere to run!

// Suddenly, a swarm of crabs (each in its own tiny submarine - it's too deep for them otherwise) zooms in to rescue you! They seem to be preparing to blast a hole in the ocean floor; sensors indicate a massive underground cave system just beyond where they're aiming!

// The crab submarines all need to be aligned before they'll have enough power to blast a large enough hole for your submarine to get through. However, it doesn't look like they'll be aligned before the whale catches you! Maybe you can help?

// There's one major catch - crab submarines can only move horizontally.

// You quickly make a list of the horizontal position of each crab (your puzzle input). Crab submarines have limited fuel, so you need to find a way to make all of their horizontal positions match while requiring them to spend as little fuel as possible.

// For example, consider the following horizontal positions:

// 16,1,2,0,4,2,7,1,2,14
// This means there's a crab with horizontal position 16, a crab with horizontal position 1, and so on.

// Each change of 1 step in horizontal position of a single crab costs 1 fuel. You could choose any horizontal position to align them all on, but the one that costs the least fuel is horizontal position 2:

// Move from 16 to 2: 14 fuel
// Move from 1 to 2: 1 fuel
// Move from 2 to 2: 0 fuel
// Move from 0 to 2: 2 fuel
// Move from 4 to 2: 2 fuel
// Move from 2 to 2: 0 fuel
// Move from 7 to 2: 5 fuel
// Move from 1 to 2: 1 fuel
// Move from 2 to 2: 0 fuel
// Move from 14 to 2: 12 fuel
// This costs a total of 37 fuel. This is the cheapest possible outcome; more expensive outcomes include aligning at position 1 (41 fuel), position 3 (39 fuel), or position 10 (71 fuel).

// Determine the horizontal position that the crabs can align to using the least fuel possible. How much fuel must they spend to align to that position?

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .toString()
  .split(",")
  .filter((x) => Boolean(x))
  .map(Number);

// var setCrabSubs = new Set(input);
// var uniqueCrabSubs = Array.from(setCrabSubs);
// var crabSubs = [];

// input.forEach((sub, index) => {
//   let FuelSum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (sub > input[i]) {
//       FuelSum += sub - input[i];
//     } else {
//       FuelSum += input[i] - sub;
//     }
//     // console.log(`crabPosition ${sub}   ${FuelSum}`);
//   }
//   crab = { currentPosition: sub, fuelCost: FuelSum };
//   crabSubs.push(crab);
// });
// var setCrabSubs = new Set(input);
// var uniqueCrabSubs = Array.from(setCrabSubs);
// console.log(uniqueCrabSubs);
// const avg = input.reduce((a, b) => a + b, 0) / input.length + 1;
// console.log(crabSubs);
//////////////////////////////////////////////////////////////////
// const fuelCalculations = [];

// for (let i = 0; i <= maxMoves; i++) {
//   const fuelUsed = data
//     .map((d) => {
//       const distance = Math.abs(d - i);
//       return (distance * (distance + 1)) / 2;
//     })
//     .reduce((a, b) => a + b, 0);

//   fuelCalculations.push(fuelUsed);
// }

// console.log(Math.min(...fuelCalculations));
///////////////////////////////////////////////////////////////////////////////////
const median = findMedian(input);

let fuel = 0;
for (let i = 0; i < input.length; i++) {
  fuel += Math.abs(input[i] - median);
}

console.log(fuel);

// Part 2

// let fuel = [];
// for (let i = Math.min(...input); i <= Math.max(...input); i++) {
//   fuel[i] = 0;
//   for (let j = 0; j < input.length; j++) {
//     const positionDiff = Math.abs(input[j] - i);
//     fuel[i] += positionDiff * ((positionDiff + 1) / 2);
//   }
// }

// console.log(Math.min(...fuel));
