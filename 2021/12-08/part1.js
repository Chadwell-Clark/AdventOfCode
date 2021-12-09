const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .toString()
  .split("\n")
  .filter((x) => Boolean(x));
//   .map((x) => parseInt(x));
displays = [];

x = [];
input.forEach((line) => {
  x = line.trim().split("|");
  displays.push([x[0].trim().split(" "), x[1].trim().split(" ")]);
});

count = 0;

displays.forEach((outputLine) => {
  outputLine[1].forEach((output) => {
    if (
      output.length == 2 ||
      output.length == 3 ||
      output.length == 4 ||
      output.length == 7
    )
      count++;
    // console.log(output.length);
  });
});

console.log(count);
