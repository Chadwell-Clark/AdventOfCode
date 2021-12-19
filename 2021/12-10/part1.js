const fs = require("fs");
const input = fs
  .readFileSync("./input2.txt", { encoding: "utf-8" })
  //   .toString()
  .trim()
  .split("\n")
  .filter(Boolean);
//   .map((x) => x.trim().split(""));
//   .map((x) => parseInt(x));

const isChunk = (line) => {
  let stack = [];

  console.log(line);

  for (const char of line) {
    if (char === "(" || char === "[" || char === "{" || char === "<") {
      open++;
    } else {
      close++;
    }
    console.log(char, ":", open, close);
    if (open > 0 && open === close) {
      return true;
    }
  }
  //   if (open > 0 && open === close) {
  //     return true;
  //   } else {
  //     return false;
  //   }
};
totalSyntaxErrorScore = 0;
input.forEach((line) => {
  if (isChunk(line.trim())) {
    // for (let i = 0; i < line.length; i++) {
    //   const element = array[i];
    // }
    console.log(line, "is chunk", "\n");
  }
});

console.log(input);
