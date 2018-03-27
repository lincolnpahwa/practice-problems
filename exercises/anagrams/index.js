// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {

	return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;


// function buildCharMap(str) {
// 	let charMap = {};

// 	for (let char of str) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}

// 	return charMap;
// }

// function compareValues(mapA, mapB) {
// 	for (let key in mapA) {
// 		if (!mapB[key]) {
// 			return false;
// 		}

// 		if (mapA[key] !== mapB[key]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// function anagrams(stringA, stringB) {
// 	let testA = stringA.replace(/[^\w]/g, '').toLowerCase();
// 	let testB = stringB.replace(/[^\w]/g, '').toLowerCase();

// 	if (testA.length !== testB.length) {
// 		return false;
// 	}

// 	let charMapA = buildCharMap(testA);
// 	let charMapB = buildCharMap(testB);

// 	if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
// 		return false;
// 	}

// 	return compareValues(charMapA, charMapB);
// }