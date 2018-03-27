// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	const matches = str.match(/[aeiou]/gi);

	return matches ? matches.length : 0;

}

module.exports = vowels;


// const VOWEL_MAP = {
// 	a: 1,
// 	e: 1,
// 	i: 1,
// 	o: 1,
// 	u: 1
// };

// function vowels(str) {
// 	let numVowels = 0;
// 	str = str.toLowerCase();
// 	for (let character of str) {
// 		if (VOWEL_MAP[character]) {
// 			numVowels++;
// 		}
// 	}

// 	return numVowels;

// }