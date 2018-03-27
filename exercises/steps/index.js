// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function stepsHelper(steps, spaces) {
	console.log('#'.repeat(steps) + ' '.repeat(spaces));

	if (spaces === 0) {

		return;
	}

	return stepsHelper(steps + 1, spaces - 1);
}

function steps(n) {

	stepsHelper(1, n - 1);

}

module.exports = steps;


// function printStep(n, stepNumber) {
// 	let stepString = '';
// 	for (let i = 1; i <= n; i++) {
// 		if (i <= stepNumber) {
// 			stepString += '#';
// 		} else {
// 			stepString += ' ';
// 		}
// 	}

// 	console.log(stepString);
// }

// function steps(n) {

// 	for (let i = 1; i <= n; i++) {
// 		printStep(n, i);
// 	}

// }