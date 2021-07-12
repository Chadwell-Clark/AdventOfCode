// Santa needs help mining some AdventCoins (very similar to bitcoins) 
// to use as gifts for all the economically forward-thinking little girls and boys.

// To do this, he needs to find MD5 hashes which, in hexadecimal, 
// start with at least five zeroes. The input to the MD5 hash is some secret key 
// (your puzzle input, given below) followed by a number in decimal. 
// To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...) that produces such a hash.

// For example:

// If your secret key is abcdef, the answer is 609043, 
// because the MD5 hash of abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest such number to do so.
// If your secret key is pqrstuv, the lowest number it combines with to make an MD5 
// hash starting with five zeroes is 1048970; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef....
// Your puzzle input is bgvyzdsv.


"use strict";
//Node.js crypto library
let crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('crypto support is disabled!');
}
// const crypto = require('crypto');
const INPUT = 'bgvyzdsv';
// function takes in a string (input + counter) creating an md5 hash from the data(update(data)) and outputs(digest('hex')) it as hex
// const md5 = (data) => {
//     crypto.createHash('md5')
//     .update(data)
//     .digest('hex')};
    
// // function checks to see if the hex md5 hash starts with five zeroes    
// const isStartsWithFiveZeros = (data) => {
//     data.slice(0, 5) === '00000'
// };
let counter = 0;
// console.log(crypto.createHash('md5').update(`${INPUT}${counter}`).digest('hex'))
// console.log(crypto.createHash('md5')
// .update(`${INPUT}${counter}`)
// .digest('hex'))
// find the lowest counter # that starts with five zeroes
// while (!isStartsWithFiveZeros(md5(`${INPUT}${counter}`)))
while (!((crypto.createHash('md5').update(`${INPUT}${counter}`).digest('hex').slice(0,5)) === '00000'))
{
    // console.log(crypto.createHash('md5').update(`${INPUT}${counter}`).digest('hex'))
 counter++;
}
    

console.log(counter);