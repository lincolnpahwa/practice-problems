/* 
Given a string S and a set of words D, find the longest word in D that is a subsequence of S.

Word W is a subsequence of S if some number of characters, possibly zero, can be deleted from S to form W, without reordering the remaining characters.

Note: D can appear in any format (list, hash table, prefix tree, etc.

For example, given the input of S = "abppplee" and D = {"able", "ale", "apple", "bale", "kangaroo"} the correct output would be "apple"

The words "able" and "ale" are both subsequences of S, but they are shorter than "apple".
The word "bale" is not a subsequence of S because even though S has all the right letters, they are not in the right order.
The word "kangaroo" is the longest word in D, but it isn't a subsequence of S.
*/

function toCharMap(str) {
  let map = {};

  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }

  return map;
}

function isSubsequenceOf(sMap, word) {
  
  let wMap = toCharMap(word);

  for (let char in wMap) {

    if (!sMap[char]) {
      return false;
    }

    if (wMap[char] > sMap[char]) {
      return false;
    }

  }

  return true;
}

function sortDictionaryByLength(D) {
	return D.sort((a, b) => {
		return b.length - a.length;
	})
}


function longestSubsequence(S, D) {
	// D = sortDictionaryByLength(D);	
	let sMap = toCharMap(S);
  let wordList = [];
  for (let word of D) {
		if (isSubsequenceOf(sMap, word)) {
			wordList.push(word);
		}

	}

  return wordList;

}

const sequence = longestSubsequence('bapplee', ["able", "ale", "apple", "bale", "kangaroo"]);

console.log(sequence)

module.exports = longestSubsequence;