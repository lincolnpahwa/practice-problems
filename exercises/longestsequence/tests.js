const longestSubsequence = require('./index');

test('longestSubsequence is a function', () => {
  expect(typeof longestSubsequence).toEqual('function');
});

test('longestSubsequence is returned', () => {
  const m = matrix(1);
  expect(m.length).toEqual(1);
  expect(m[0]).toEqual([1]);

  const sequence = longestSubsequence('abppplee', ["able", "ale", "apple", "bale", "kangaroo"]);

  expect(sequence).toEqual('apple');
});