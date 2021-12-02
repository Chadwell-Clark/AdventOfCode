// --- Part Two ---
// Considering every single measurement isn't as useful as you expected: there's just too much noise in the data.

// Instead, consider sums of a three-measurement sliding window. Again considering the above example:

// 199  A
// 200  A B
// 208  A B C
// 210    B C D
// 200  E   C D
// 207  E F   D
// 240  E F G
// 269    F G H
// 260      G H
// 263        H
// Start by comparing the first and second three-measurement windows. The measurements in the first window are marked A (199, 200, 208); their sum is 199 + 200 + 208 = 607. The second window is marked B (200, 208, 210); its sum is 618. The sum of measurements in the second window is larger than the sum of the first, so this first comparison increased.

// Your goal now is to count the number of times the sum of measurements in this sliding window increases from the previous sum. So, compare A with B, then compare B with C, then C with D, and so on. Stop when there aren't enough measurements left to create a new three-measurement sum.

// In the above example, the sum of each three-measurement window is as follows:

// A: 607 (N/A - no previous sum)
// B: 618 (increased)
// C: 618 (no change)
// D: 617 (decreased)
// E: 647 (increased)
// F: 716 (increased)
// G: 769 (increased)
// H: 792 (increased)
// In this example, there are 5 sums that are larger than the previous sum.

// Consider sums of a three-measurement sliding window. How many sums are larger than the previous sum?

("use strict");
const { Console } = require("console");
const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");
let increased = 0;
let currSum = 0;
let swapSum = 0;
let nextSum = 0;
// let previous = input[0];
const slicingWindowsComparator = (arr, size) => {
  for (let i = 0; i < arr.length; i++) {
    // console.log(increased);
    currSum += Number.parseInt(arr[i]);
    // console.log(`Number: ${arr[i]}`);
    if (i >= size - 1) {
      swapSum = currSum;
      //   console.log(`CurrSum: ${swapSum}`);
      currSum -= Number.parseInt(arr[i - (size - 1)]);
      if (i <= arr.length - 2) {
        nextSum = currSum + Number.parseInt(arr[i + 1]);
        // console.log(`NextSum: ${nextSum}`);
        if (nextSum > swapSum) {
          increased++;
        }
      }
    }
  }
  return increased;
};

console.log(slicingWindowsComparator(input, 3));

// Another solution:
let counter = 0;
for (let i = 3; i < input.length; i++) {
  counter =
    Number(input[i - 3]) + Number(input[i - 2]) + Number(input[i - 1]) <
    Number(input[i - 2]) + Number(input[i - 1]) + Number(input[i])
      ? counter + 1
      : counter;
}

console.log(counter);
