// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

let reverse = require('../reversestring/index');

function reverseInt(n) {
	let str = Math.abs(n) + '';

	let reversed = reverse(str);

	let reversedN = parseInt(reversed);

	return reversedN * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
// 	let tensPlaces = [];
// 	let number = Math.abs(n);
// 	let maxDivider = 1;
// 	let modulo = 1;

// 	while (true) {
// 		number = Math.floor(number / 10);
// 		if (number > 0) {
// 			maxDivider *= 10;
// 		} else {
// 			break;
// 		}
// 	}

// 	let u = Math.abs(n);

// 	while (u > 0) {
// 		tensPlaces.push(Math.floor(u / maxDivider));
// 		u = u % maxDivider;
// 		maxDivider /= 10;
// 	}

// 	let output = 0;

// 	while (tensPlaces.length > 0) {
// 		let tenthPlace = tensPlaces.pop();
// 		output += tenthPlace * ( Math.pow(10, tensPlaces.length));
// 	}

// 	if (n < 0) {
// 		output *= -1;
// 	}

// 	return output;
// }
