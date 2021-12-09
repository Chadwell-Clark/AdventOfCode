("use strict");
const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .toString()
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => x.trim().split(""))
  .map((x) => parseInt(x));

function chunkArray(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
}
const lines = chunkArray(input, 2);
