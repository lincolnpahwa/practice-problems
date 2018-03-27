// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function buildEmptyMatrix(n) {
	let results = [];
	for (let i = 0; i < n; i++) {
		results.push(new Array(n));
	}

	return results;
}

function matrix(n) {

	let startRow = 0;
	let startCol = 0;
	let endRow = n - 1;
	let endCol = n - 1;

	let results = buildEmptyMatrix(n);

	let currentIndex = 1;

	while (startCol <= endCol && startRow <= endRow) {

		for (let i = startCol; i <= endCol; i++) {
			results[startRow][i] = currentIndex;
			currentIndex++;
		}

		startRow++;

		for (let i = startRow; i <= endRow; i++) {
			results[i][endCol] = currentIndex;
			currentIndex++;
		}

		endCol--;


		for (let i = endCol; i >= startCol; i--) {
			results[endRow][i] = currentIndex;
			currentIndex++;
		}

		endRow--;

		for (let i = endRow; i >= startRow; i--) {
			results[i][startCol] = currentIndex;
			currentIndex++;
		}

		startCol++;

	}

	return results;

}

module.exports = matrix;