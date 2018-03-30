const numPossibleWays = require('./index');

test('Function exists', () => {
	expect(typeof numPossibleWays).toEqual('function');
})

test('Number of possible ways base case 1', () => {
	expect(numPossibleWays(1, [1])).toEqual(1)
})

// test('Number of possible ways to case options greater than number', () => {
// 	expect(numPossibleWays(1, [2])).toEqual(0)
// })

test('Number of possible ways: 5, [1,3,4]', () => {
	expect(numPossibleWays(5, [1, 3, 4])).toEqual(6)
})