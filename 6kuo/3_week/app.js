//--------------------DAY 1--------------------------

//Find the vowels

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// *NOTE: Vowels in this context refers to English Language Vowels - a e i o u y *

// NOTE: this is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
	word = word.toLowerCase();
	let find = word.match(/[a e i o u y]/g);
	if(!find) return [];
	let rez = [];
	find.forEach((el,i) => {
		rez.push(word.indexOf(el) + 1);
		let regExp = new RegExp(`${el}`);
		word = word.replace(regExp,'*');
	});
	return rez;
}

// console.log(vowelIndices("supercalifragilisticexpialidocious"));


// ..----DAY2 ------------------------


// Count the smiley faces!

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {
	if(arr.length === 0 ) return 0;
	let rez = [];
	arr.forEach(el => {
		if(el.match(/^[: ;][- ~]?[) D]$/)){
			rez.push(el.match(/^[: ;][- ~]?[) D]$/)[0])
		}
	})
	return rez.length;
}

console.log(countSmileys([':D',':~)',';~D',':)']));


// ..-----------------------------
// Does my number look big in this?
// ..A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits):

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):

//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

function narcissistic(value) {
	// Code me to return true or false
	let str = String(value);
	let pow = str.length;
	let res = str.split('').map(( el) => {
		return el**pow;
	}).reduce((acc,el) => acc + el);
	return value === res;
}

console.log(narcissistic( 371 ));