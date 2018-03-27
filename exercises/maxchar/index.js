// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

	let charOccurenceMap = {};

	for (let character of str) {
		if (!charOccurenceMap[character]) {
			charOccurenceMap[character] = {
				c: character,
				n: 0
			}
		}

		charOccurenceMap[character].n += 1;
	}

	return Object.values(charOccurenceMap).sort(function(a, b) {
		return b.n - a.n;
	})[0].c;

}

module.exports = maxChar;
