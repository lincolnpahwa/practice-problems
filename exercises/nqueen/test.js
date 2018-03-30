const NQueen = require('./index');

test('Function exists', () => {
	expect(typeof NQueen).toEqual('function');
})

test('For 1', () => {
	expect(NQueen(1)).toEqual(true)
})

test('For 2', () => {
	expect(NQueen(2)).toEqual(false)
})

// test('Number of possible ways to case options greater than number', () => {
// 	expect(NQueen(1, [2])).toEqual(0)
// })

test('For 3', () => {
	expect(NQueen(3)).toEqual(false)
})


test('For 10', () => {
	expect(NQueen(10)).toEqual(true)
})