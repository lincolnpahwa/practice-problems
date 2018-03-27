const modifiedsort = require('./index');

test('modifiedsort function exists', () => {
  expect(modifiedsort).toBeDefined();
});

test('modifiedsort modifiedsorts a string', () => {
  expect(modifiedsort('Google', 'dog')).toEqual('ooggle');
});

test('modifiedsort modifiedsorts a string', () => {
  expect(modifiedsort('abcd', 'abcd')).toEqual('abcd');
});

test('modifiedsort modifiedsorts a string', () => {
  expect(modifiedsort('abcdedadf', 'cae')).toEqual('caaebdddf');
});
