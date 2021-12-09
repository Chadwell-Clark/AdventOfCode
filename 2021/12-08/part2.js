const fs = require("fs");
const input = fs
  .readFileSync("./input3.txt", { encoding: "utf-8" })
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

// 0 = 6 segments
// 1 = 2 segments
// 2 = 5 segments
// 3 = 5 segments
// 4 = 4 segments
// 5 = 5 segments
// 6 = 6 segments
// 7 = 3 segments
// 8 = 7 segments
// 9 = 5 segments

// a common with 0,2,3,5,6,7,8,9        8
// b common with 0,4,5,6,8,9            6
// c common with 0,1,2,3,4,7,8,9        8
// d common with 2,3,4,5,6,8,9          7
// e common with 0,2,6,8                4
// f common with 0,1,3,4,5,6,7,8,9      9
// g common with 0,2,3,5,6,8,9          7

// 0:      1:      2:      3:      4:
//  aaaa    ....    aaaa    aaaa    ....
// b    c  .    c  .    c  .    c  b    c
// b    c  .    c  .    c  .    c  b    c
//  ....    ....    dddd    dddd    dddd
// e    f  .    f  e    .  .    f  .    f
// e    f  .    f  e    .  .    f  .    f
//  gggg    ....    gggg    gggg    ....

//  5:      6:      7:      8:      9:
//  aaaa    aaaa    aaaa    aaaa    aaaa
// b    .  b    .  .    c  b    c  b    c
// b    .  b    .  .    c  b    c  b    c
//  dddd    dddd    ....    dddd    dddd
// .    f  e    f  .    f  e    f  .    f
// .    f  e    f  .    f  e    f  .    f
//  gggg    gggg    ....    gggg    gggg

//   acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab
// diff between 7 seg - 1 seg reveals location of  a
//
// 2 commonality with 7 and 1 reveals location of c
//
console.log(displays);
