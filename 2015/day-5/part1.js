// --- Day 5: Doesn't He Have Intern-Elves For This? ---
// Santa needs help figuring out which strings in his text file are naughty or nice.

// A nice string is one with all of the following properties:

// It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
// It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
// It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
// For example:

// ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
// aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
// jchzalrnumimnmhp is naughty because it has no double letter.
// haegwjzuvuyypxyu is naughty because it contains the string xy.
// dvszwmarrgswjxmb is naughty because it contains only one vowel.
// How many strings are nice?

"use strict";

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

let nice = 0;
const vowels = ["a", "e", "i", "o", "u"];
const DoubleLetters = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((letter) => letter + letter);
const naughty = ["ab", "cd", "pq", "xy"];

//   ***Working
const DoesNotContain = (line) => {
  if (!naughty.some((i) => line.includes(i))) {
    return true;
  } else {
    return false;
  }
};

//    ***Working
const ContainsThreeVowels = (line) => {
  let vowelCount = 0;
  line.split("").reduce((vowelcount, letter) => {
    if (vowels.indexOf(letter) === -1) {
      vowelcount;
    } else {
      ++vowelcount;
      ++vowelCount;
    }
  }, 0);
  if (vowelCount >= 3) {
    return true;
  } else {
    return false;
  }
};

//   *** Working
const DuplicateLetter = (line) => {
  if (DoubleLetters.some((i) => line.includes(i))) {
    return true;
  } else {
    return false;
  }
};

input.forEach((line) => {
  let arr = line.trim();
  // if (DoesNotContain(arr) && ContainsThreeVowels(arr) && DuplicateLetter(arr)) {
  if (DoesNotContain(arr) && DuplicateLetter(arr) && ContainsThreeVowels(arr)) {
    nice++;
  }
});

console.log(nice);

// nice = each string has three vowels(aeiou), one letter that appears twice in a row, does not contain strings (ab, cd, pq or xy)
