/** 
* 
* Google Telephonic Round 1 
* 
* Given two strings - S1 and S2. 
* Arrange the characters of S1 in same alphabetical order as the characters of S2. 
* If a character of S1 is not present in S2 - such characters should come at the end of 
* the result string, but make sure to retain the order of such characters 
* Case sensitivity is irrelevant 
* e.g. S1 = "Google", S2 = "dog" 
* Output = "ooggle" 
* 
* e.g. S1 = "abcdedadf", S2 = "cae" 
* Output = "caaebdddf" 
* 
*/

function modifiedsort(s1, s2) {
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();
	let s2Map = {};

	for (let i = 0; i < s2.length; i++) {
		if (!s2Map[s2[i]]) {
			s2Map[s2[i]] = i;
		}
	}
	s1 = s1.split('').sort(function(c1, c2) {
		let _r;
		let c1I = s2Map[c1];
		let c2I = s2Map[c2];
		if (c1I === c2I) return 0;
		else if (c1I === undefined) return 1;
		else if (c2I === undefined) return -1;
		else return c1I - c2I;
	}).join('')
	return s1;
}

module.exports = modifiedsort;
