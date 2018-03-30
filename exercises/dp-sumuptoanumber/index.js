/*
Let us say that you are given a number N, you've to find the number of different ways to write it as the sum of 1, 3 and 4.

For example, if N = 5, the answer would be 6.

1 + 1 + 1 + 1 + 1
1 + 4
4 + 1
1 + 1 + 3
1 + 3 + 1
3 + 1 + 1
*/


function numPossibleWays(number, listOfOptions) {
	if (number < 0) return 0;
	const DP = [];
	DP[0] = DP[1] = DP[2] = 1;
	DP[3] = 2;
	for (let i = 4; i <= number; i++) {
		DP[i] = listOfOptions.reduce((acc, option) => {
			return acc + numPossibleWays((i - option), listOfOptions)
		}, 0);
	}
	return DP[number];
}

module.exports = numPossibleWays;