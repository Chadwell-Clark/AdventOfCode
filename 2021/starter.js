("use strict");
const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", { encoding: "utf-8" }) // read input file or change to input2.txt for test input
  .replace(/\r/g, "") // regex to remove all \r characters to avoid issues on Windows
  .toString() // if needed to parse to string
  .split("\n") // split on newline or whatever you want to split on into lines
  .filter((x) => Boolean(x)) // remove empty lines... not usually an issue but just in case
  .map((x) => x.trim().split("")) // split again into individual items in arrays
  .map((x) => parseInt(x)); // parse to int

function chunkArray(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
}
const lines = chunkArray(input, 2);

const fs = require("fs");

const lines = fs
  .readFileSync("./input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .split("\n") // Split on newline
  .filter(Boolean) // Remove empty lines
  .map(Number); // Parse each line into a number
