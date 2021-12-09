const fs = require("fs");
const heightMap = fs
  .readFileSync("./input2.txt", { encoding: "utf-8" })
  .toString()
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => x.trim().split(""));

console.log(heightMap);
