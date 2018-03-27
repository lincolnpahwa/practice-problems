// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function swap(str, i1, i2) {
	let c1 = str[i1];
	let c2 = str[i2];
	let t = c1;
	str[i1] = c2;
	str[i2] = t;
	return str;
}

function reverse(str) {
	let length = str.length;

	if (length <= 1) {
		return str;
	}
	let strArr = str.split('');
	for (let i = 0; i < (length/2); i++) {
		strArr = swap(strArr, i, (length - 1 - i));
	};

	return strArr.join('');
}

module.exports = reverse;
