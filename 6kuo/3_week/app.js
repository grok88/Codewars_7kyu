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

console.log(vowelIndices("supercalifragilisticexpialidocious"));