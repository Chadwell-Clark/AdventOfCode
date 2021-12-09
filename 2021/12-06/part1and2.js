const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .toString()
  .split(",")
  .filter((x) => Boolean(x))
  .map(Number);

let population = input;

//Below blows up on part 2
// for (let i = 0; i < 256; i++) {
//   population.forEach((fish, index) => {
//     if (fish === 0) {
//       population.push(8);

//       population[index] = 6;
//     } else {
//       population[index]--;
//     }
//   });
// }

//using queue below
const fishes = Array(9).fill(0);
for (fish of input) {
  //fill fishes array with number of fish corresponding to the spawning cycle of the input array of lantern fish
  fishes[fish]++;
}
console.log("FishesPreSpawn", fishes);
for (let i = 0; i < 256; i++) {
  const population = fishes.shift();

  fishes.push(population);
  fishes[6] += population;
  console.log(`Fishes day ${i + 1} ${fishes}`);
}

const schoolOfLanternfish = fishes.reduce((a, b) => a + b, 0);
console.log(schoolOfLanternfish);
