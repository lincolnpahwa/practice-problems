// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function printStep(n, stepNumber) {
	let stepString = '';
	let mid = Math.floor((2*n - 1)/2) + 1;
	let start = mid - (stepNumber - 1);
	let end = mid + (stepNumber - 1);

	for (let i = 1; i <= ((2 * n) - 1); i++) {
		if (i >= start && i <= end) {
			stepString += '#';
		} else {
			stepString += ' ';
		}
	}
	console.log(stepString);
}

function pyramid(n) {
	for (let i = 1; i <= n; i++) {
		printStep(n, i);
	}
}


module.exports = pyramid;
